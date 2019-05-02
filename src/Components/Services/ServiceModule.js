// Basic Functionality
import React, { Component } from 'react'

// To Communicate with the docassemble API
import Axios from 'axios'

// Material-UI Forms
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControlLabel from '@material-ui/core/FormControlLabel'

// Auth Context

// Import the loader
import Container from '../Utilities/Loader'

export default class ServiceModule extends Component {
    
    state = {
        steps: null,
        progress: 0,
        active: null,   
        questions: [],
        question: null,
        sessionId: null,
        secret: null,
        service: null,
        isValid: null,
        questionPayload: {},
        file: {},
        iterator: null,
        end: false,
        loading: true
    }

    componentWillMount = () => {
        console.log('Props before the state set.....', this.props.location.state.service)
        this.setState({
            service: this.props.location.state.service,
        })
        console.log('state set as', this.state)
    }

    componentDidMount = () => {
        this.getForm()
    }



    // Start an interview
    // Set Class Nomenclature henceforth //ALPHA

    getForm = () => {
        // Get all the form fields for the particular form
        console.log('State before the call: ', this.state)
        Axios.get('https://cors-anywhere.herokuapp.com/https://legalzoom.docassemble.community.lawyer/api/session/new', { 
            params: {
                'key': 'V9P61G3EGKFI11LOG4G25F6UQZHSFR0B',
                'i': 'docassemble.playground1:' + this.state.service + '.yml'
            }
        }).then((res) => {
            console.log('Recieved response: ', res)
            this.setState({
                sessionId: res.data.session
            })
            // Rogue Form
            if(!this.state.secret) {
                this.setState({
                    secret: res.data.secret
                })
            }
            this.getQuestions()
        }).catch((err) => {
            console.log('Error getting the Service from the Server', err)
            throw new Error('Error getting the Service from the Server', err)
        })
    }


    // Get the Active form questions
    getQuestions = () => {
        if (this.state.sessionId) {
            console.log('Questions vaali state: ', this.state)
            Axios.get(
                'https://cors-anywhere.herokuapp.com/https://legalzoom.docassemble.community.lawyer/api/session/question', {
                    params: {
                        'key': 'V9P61G3EGKFI11LOG4G25F6UQZHSFR0B',
                        'i': 'docassemble.playground1:' + this.state.service + '.yml',
                        // 'i': 'docassemble.playground1:' + this.state.service + '.yml',
                        'session': this.state.sessionId,
                        'secret': this.state.secret
                    },
            }).then(res => {
                // If last question asked last was the last question of the interview
                console.log('Questions: ', res)
                if(this.state.question && this.state.question.mode == 'boolean' && res.data.fields[0].datatype == 'boolean') {
                    // Iterate
                }
                var question = new QuestionModule()
                question.qtHead = res.data.questionText
                var questions = []
                var vars = []
                var types = []
                var options = []
                var careHandle = null
                question.setvars = {} // initialise setvars to be an array for later
                if((res.data.fields[0].choices != undefined) && res.data.fields[0].choices[0].label === 'Restart') {
                    // Interview has ended
                    this.displayEndFile(res.data)
                }
                else if (res.data.fields[0].datatype == 'boolean') {
                    question.mode = 'Iterative'
                    var variable = res.data.fields[0].variable_name
                    vars.push(variable)
                    var opta = []
                    opta.push('yes')
                    opta.push('no')
                    options.push(opta)
                    types.push('choice')
                    question.questions = questions
                    question.vars = vars
                    question.types = types
                    question.options = options
                    if(!this.state.iterator) this.setState({question, iterator: 0})
                    else this.setState({question})
                }
                else{
                    if(res.data.subquestionText) {
                        var locs = []
                        res.data.fields.map( (field, index) => {
                            if(field.datatype == 'integer') careHandle = 'int'
                            if(field.choices == undefined) {
                                // Text Question
                                var loc = {}
                                loc.index = res.data.subquestionText.indexOf('' + field.variable_name)
                                loc.name = field.variable_name
                                locs.push(loc)
                            }
                            else if (field.choices || field.datatype == 'boolean') {
                                // Multiple Choice Question
                                var loc = {}
                                loc.index = res.data.subquestionText.indexOf('' + field.variable_name)
                                loc.name = field.variable_name
                                locs.push(loc)
                            }
                        })
                        locs.sort((a, b) => (a.index - b.index))
                        res.data.fields.map( field => {
                            if(field.datatype == 'integer') careHandle = 'int'
                            if(field.choices == undefined) {
                                // Text Question
                                var index
                                locs.map((loc, i) => {
                                    if (loc.name == field.variable_name) {
                                        index = i
                                    }
                                })
                                if (field.label == 'no label') questions[index] = res.data.questionText
                                else questions[index] = field.label
                                vars[index] = field.variable_name
                                types[index] = 'textfield'
                            }
                            else if (field.choices || field.datatype == 'boolean') {
                                // Multiple Choice Question
                                var index
                                locs.map((loc, i) => {
                                    if (loc.name == field.variable_name) {
                                        index = i
                                    }
                                })
                                var opta = []
                                field.choices.map( (choice) => {
                                    opta.push(choice.value)
                                })
                                options[index] = opta
                                questions[index] = field.label
                                vars[index] = field.variable_name
                                types[index] = 'choice'
                            }
                        })
                    }
                    else {
                        res.data.fields.map( (field, index) => {
                            if(this.state.question && this.state.question.mode == 'Iterative') {
                                console.log('Absolute')
                            }
                            if(field.datatype == 'integer') careHandle = 'int'
                            if(field.choices == undefined) {
                                // Text Question
                                if (field.label == 'no label') questions[index] = res.data.questionText
                                else questions[index] = field.label
                                console.log('This is here: ', this.state.question)
                                if(this.state.question && this.state.question.mode == 'Iterative') {
                                    var count = this.state.iterator
                                    console.log('Control')
                                    vars[index] = field.variable_name.split('[')[0] + '[' + this.state.iterator + ']'
                                    count++
                                    this.setState({
                                        iterator: count
                                    })
                                }
                                else vars[index] = field.variable_name
                                types[index] = 'textfield'
                            }
                            else if (field.choices || field.datatype == 'boolean') {
                                // Multiple Choice Question
                                var opta = []
                                field.choices.map( (choice) => {
                                    opta.push(choice.value)
                                })
                                options[index] = opta
                                questions[index] = field.label
                                console.log('This is here: ', this.state.question)
                                if(this.state.question && this.state.question.mode == 'Iterative') {
                                    var count = this.state.iterator
                                    console.log('Control')
                                    vars[index] = field.variable_name.split('[')[0] + '[' + this.state.iterator + ']'
                                    count++
                                    this.setState({
                                        iterator: count
                                    })
                                }
                                else vars[index] = field.variable_name
                                types[index] = 'choice'
                            }
                        })
                    }
                    question.questions = questions
                    question.vars = vars
                    question.types = types
                    question.options = options
                    if(this.state.question && this.state.question.mode == 'Iterative') {
                        question.mode = 'Iterative'
                    }
                    else question.mode = 'normal'
                    question.careHandle = careHandle
                    this.setState({question})
                }
            }).catch(err => {
                console.log('Error getting the questions: ', err)
                throw new Error('Error getting the questions: ', err)
            })
        }
        else {
            console.log('No Session ID found....')
            throw new Error('No Session ID found....')
        }
    }

    // To set the variables at the docassembke end
    setQuestion = (variablePayload) => {
        var bodyFormData = new FormData()
        if(this.state.question.mode && this.state.question.mode == 'Iterative') {
            if(this.state.question.setvars[ this.state.question.vars[0] ] == 'no') {
                console.log('Opted Out')
                var question = this.state.question
                var setvars = {}
                setvars[this.state.question.vars[0].split('.')[0]] = 'no'
                question.setvars = setvars
                question.mode = 'normal'
                this.setState({
                    question,
                    iterator: null
                })
                variablePayload = JSON.stringify(setvars)
            }
        }
        bodyFormData.set('key', 'V9P61G3EGKFI11LOG4G25F6UQZHSFR0B')
        bodyFormData.set('i', 'docassemble.playground1:' + this.state.service + '.yml')
        // bodyFormData.set('i', 'docassemble.playground1:' + this.state.service + '.yml')
        bodyFormData.set('session', this.state.sessionId)
        bodyFormData.set('secret', this.state.secret)
        bodyFormData.set('variables', variablePayload)
        console.log('Sending: ', variablePayload)
        Axios.post(
            'https://cors-anywhere.herokuapp.com/https://legalzoom.docassemble.community.lawyer/api/session', bodyFormData
        ).then( res => {
            console.log('Successfully updated the variables: ', res)
            const modeForward = this.state.question.mode
            var question = new QuestionModule()
            question.mode = modeForward
            this.setState({question})
            // Get the Next Question
            this.getQuestions()
            // Handle Response to set furthur variables
            // this.continues()
        }).catch( err => {
            console.log('Error submitting the payload: ', variablePayload, ' Error: ', err)
        })
    }

    // transit onChange form accordingle into the state
    formChange = (event) => {
        // get the intital QuestionModule
        var question = this.state.question
        if(question.careHandle && question.careHandle == 'int') question.setvars[event.target.name] = parseInt(event.target.value)
        else question.setvars[event.target.name] = event.target.value
        // set the Value in the QuestionModule
        this.setState({question})
    }

    radioChange = (event) => {
        console.log('Radio change: ', event.target.value)
        var iteration = parseInt(event.target.value.split(' ')[1])
        var value = event.target.value.split(' ')[0]
        // Get the current QuestionModule
        var question = this.state.question
        question.setvars[question.vars[iteration]] = value
        // Set the new QuestionModule
        this.setState({question})
    }

    seekFormFrontStroke = () => {
        this.setQuestion(JSON.stringify(this.state.question.setvars))
    }

    seekFormBackStroke = () => {
        var bodyFormData = new FormData()
        bodyFormData.set('key', 'V9P61G3EGKFI11LOG4G25F6UQZHSFR0B')
        bodyFormData.set('i', 'docassemble.playground1:' + this.state.service + '.yml')
        // bodyFormData.set('i', 'docassemble.playground1:' + this.state.service + '.yml')
        bodyFormData.set('session', this.state.sessionId)
        bodyFormData.set('secret', this.state.secret)

        Axios.post(
            'https://cors-anywhere.herokuapp.com/https://legalzoom.docassemble.community.lawyer/api/session/back', bodyFormData
        ).then(res => {
            console.log('Succes going back: ', res)
            this.getQuestions()
        }).catch(err => {
            console.log('Error going back one step: ', err);
            return err
        })
    }

    displayEndFile = (file) => {
        // Axios.get('https://cors-anywhere/https://legalzoom.docassemble.community.lawyer/user/file' ,{
        //     params: {
        //         key: ''
        //     }
        // })
        var container = {

        }

        container.pdf = file.attachments[0].number.pdf
        container.docx = file.attachments[0].number.docx

        this.setState({
            file: container,
            end: true
        })
    }

    rentAgreement = () => {
        const fillers = [
            {

            },{

            },{

            }
        ]
        // Basics of the form 
        // List of all variables
        
        /***** Enter details of the landlord *****/
        // name_of_landlord
        // father_name_of_landlord
        // address_of_landlord
        
        /***** Enter details of the tenant *****/
        // name_of_tenant
        // father_name_of_tenant
        // address_of_tenant
        
        /***** Address of property to be Rentout *****/
        // address_of_property_to_rentout

        /***** Particulars of property to be Rentout *****/
        // particulars_of_property

        /***** Rent of the property *****/
        // rent

        /***** Type of property [CHOICE] *****/ 
        // type_property -- values [Residential] [Commercial]
        
        /***** Place of the property *****/
        // place

        // [Resdential] && [Commercial] FORM ENDS

    }

    // <BUILD> <REM>
    componentDidUpdate = () => {
        console.log('State of the service module has been changed: ', this.state)
    }
    
    render() {

        const { step, question, set, lengths, progress, active, formSum, service, file, loading } = this.state

        const formSegment = (
            <div className = 'services-module-questions'>
                { question ? (<span className = 'services-module-questions-heading'>{question.qtHead}</span>) : (null)}
                {console.log(question)}
                {
                    /* Check if the question exists and if it exists map and draw a UI  */
                    // A library for these checks?
                    (question && question.types && question.types.length && question.vars.length) ? question.types.map( (type, index) => {
                        if( type == 'textfield' ) {
                            return (
                                <div key = {index} className='services-module-questions-element'>
                                    <TextField
                                        id = "standard-with-placeholder"
                                        label = {question.questions[index]}
                                        placeholder = {question.questions[index]}
                                        // name = {question}
                                        name = {question.vars[index]}
                                        // className={classes.textField}
                                        onChange = {this.formChange}
                                        margin = "normal"
                                        className = 'test-text'
                                        variant="filled"
                                        key={index}
                                    />
                                </div>
                            )
                        }
                        else if ( type == 'choice' ) {
                            return (
                                <div key={index} className='services-module-questions-element-radiogroup'>
                                    {/* <div className='services-module-questions-element-radiogroup-container'> */}
                                        <RadioGroup
                                            row
                                            aria-label="Gender"
                                            name="gender1"
                                            // className={classes.group}
                                            // value={this.state.value}
                                            onChange={this.radioChange}
                                            key={index}
                                        >
                                            {
                                                question.options[index].map( option => {
                                                    return (
                                                        <FormControlLabel className='services-module-questions-element-radio' value={option + ' ' + index} control={<Radio />} label={option} />
                                                    )
                                                })
                                            }
                                        </RadioGroup>
                                    {/* </div> */}
                                </div>
                            )
                        }
                    }) : null
                }
                {/* We reach here if there are not just only Textfields in this particular section of the interview */}
            </div>
        )

        const seekControls = (
            <div className = 'services-module-seekcontrols'>
                <div className = 'services-module-seekcontrols-btn-arr'>
                    <button className = 'services-module-seekcontrols-btn services-module-seekcontrols-btn-back display8' onClick={this.seekFormBackStroke}>
                        Back
                    </button>    
                    <button className = 'services-module-seekcontrols-btn services-module-seekcontrols-btn-next display8' onClick={this.seekFormFrontStroke}>
                        Next
                    </button>
                </div>
            </div>
        )

        const endFile = (
            this.state.end ? (
                <div className='interview-overlay-end'>
                    <div className='interview-overlay-end-content'>
                        <div className='interview-overlay-end-content-title display8'>
                            Your interview is now complete
                        </div>
                        <div className='interview-overlay-end-content-files'>
                            <div className='interview-overlay-end-content-files-pdf'>
                                <div>
                                    <img className='interview-overlay-end-content-files-icon' src='/src/res/img/pdf-logo.png'></img>
                                </div>
                                <div className='interview-overlay-end-content-files-link'>
                                    <a className='interview-overlay-end-content-files-link display9' href={'https://legalzoom.docassemble.community.lawyer/api/file/' + file.pdf + '?key=V9P61G3EGKFI11LOG4G25F6UQZHSFR0B'} target='_blank'>DOWNLOAD</a>
                                </div>
                                <div className='interview-overlay-end-content-files-text display9'>
                                    Download in PDF format
                                </div>
                            </div>
                            <div className='interview-overlay-end-content-files-docx'>
                                <div>
                                    <img className='interview-overlay-end-content-files-icon' src='/src/res/img/docx-logo.png'></img>
                                </div>
                                <div className='interview-overlay-end-content-files-link'>
                                    <a className='interview-overlay-end-content-files-link display9' href={'https://legalzoom.docassemble.community.lawyer/api/file/' + file.docx + '?key=V9P61G3EGKFI11LOG4G25F6UQZHSFR0B'} target='_blank'>DOWNLOAD</a>
                                </div>
                                <div className='interview-overlay-end-content-files-text display9'>
                                    Download in DOCX format
                                </div>
                            </div>
                        </div>
                        <div className='interview-overlay-end-content-restart display7'>
                            Restart interview ? <span className='interview-overlay-end-content-restart-specific display7'>Click here</span> .
                        </div>
                    </div>    
                </div>
            ) : null
        )

        return (
            <div className='services'>
                <div className = 'services-module' >
                    {formSegment}
                    {seekControls}
                    {endFile}
                </div>
            </div>
        )
    }
}

class QuestionModule {
    qtHead
    questions
    types
    vars
    setvars
    mode
    options
    careHandle
}

