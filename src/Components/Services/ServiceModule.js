// Basic Functionality
import React, { Component } from 'react'

// To Communicate with the docassemble API
import Axios from 'axios';

// Material-UI Forms
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// Auth Context
import AuthContext from '../context/AuthContext'

// Import the loader
import Container from '../Utilities/Loader';

export default class ServiceModule extends Component {
    
    state = {
        view: null,
        steps: null,
        progress: 0,
        active: null,
        formSum: [],
        questions: [],
        setvars: {},
        vars: [],
        types: [],
        options: [],
        currentForm: [],
        sessionId: null,
        secret: null,
        service: null,
        category: null,
        isValid: null,
        questionPayload: {},
        file: {},
        end: false,
        loading: true
    }

    static contextType = AuthContext;

    componentWillMount = () => {
        console.log('Props before the state set.....', this.props.service);
        this.setState({
            view: this.props.service,
            service: this.props.service,
            category: this.props.category,
            secret: this.context.secret
        });
        console.log('state set as', this.state);
        if(this.context.isLoggedIn) this.getSessionID();
        else this.getForm();
    }

    // Start an interview
    // Set Class Nomenclature henceforth //ALPHA
    getSessionID = () => {
        var prevSess = [];
        // Get all the previous Sessions
        Axios.get(
            'https://cors-anywhere.herokuapp.com/https://legalzoom.docassemble.community.lawyer/api/user/' + this.context.id + '/interviews?key=V9P61G3EGKFI11LOG4G25F6UQZHSFR0B'
        ).then(res_one => {
            console.log('Recieved the previous sessions as: ', res_one);
            res_one.data.map( sess => {
                prevSess.push(sess.session);
            });
            // Perform this request
            var bodyFormData = new FormData();
            bodyFormData.set('key', 'V9P61G3EGKFI11LOG4G25F6UQZHSFR0B');
            bodyFormData.set('i', 'docassemble.playground1:salepurch.yml');
            bodyFormData.set('username', this.context.email);
            bodyFormData.set('password', this.context.password);
            Axios.post(
                'https://cors-anywhere.herokuapp.com/https://legalzoom.docassemble.community.lawyer/api/login_url', bodyFormData    
            ).then( res_two => {
                console.log(res_two.data);
                // window.open(res_two.data);
                fetch(
                    res_two.data
                ).then( resp_json => {
                    console.log('JSON', resp_json)
                    console.log('Success creating a new session for this user....', res_two);
                    Axios.get(
                        'https://cors-anywhere.herokuapp.com/https://legalzoom.docassemble.community.lawyer/api/user/' + this.context.id + '/interviews?key=V9P61G3EGKFI11LOG4G25F6UQZHSFR0B'
                    ).then(res_three => {
                        console.log('Recieved the previous sessions as: ', res_three);
                        res_three.data.map( sess => {
                            var flag = false;
                            prevSess.map( pSess => {
                                if ( sess == pSess ){
                                    console.log('MUST');
                                }
                            });
                            if(!flag) {
                                console.log('Success estabilishing the session', sess);
                                this.setState({
                                    sessionId: sess,
                                    // Settle the secret here itself too
                                    secret: this.context.secret
                                });
                            }
                        });
                        this.getQuestions();
                    }).catch(err => {
                        console.log('Error getting the previous sessions: ', err);
                    });
                }).catch((err) => {
                    console.log('Error: ', err);
                });
            }).catch( err => {
                console.log('Error creating a new session for this user....', err);
            });
        }).catch(err => {
            console.log('Error getting the previous sessions: ', err);
        })
    }

    getForm = () => {
        // Get all the form fields for the particular form
        console.log('State before the call: ', this.state);
        Axios.get('https://cors-anywhere.herokuapp.com/https://legalzoom.docassemble.community.lawyer/api/session/new', { 
            params: {
                'key': 'V9P61G3EGKFI11LOG4G25F6UQZHSFR0B',
                'i': 'docassemble.playground1:' + this.props.service + '.yml'
            }
        }).then((res) => {
            console.log('Recieved response: ', res);
            this.setState({
                sessionId: res.data.session,
            })
            // Rogue Form
            if(!this.state.secret) {
                this.setState({
                    secret: res.data.secret,
                })
            }
            this.getQuestions();
        }).catch((err) => {
            console.log('Error getting the Service from the Server', err);
            throw new Error('Error getting the Service from the Server', err);
        });
    }


    // Get the Active form questions
    getQuestions = () => {
        if (this.state.sessionId) {
            console.log('Questions vaali state: ', this.state);
            Axios.get(
                'https://cors-anywhere.herokuapp.com/https://legalzoom.docassemble.community.lawyer/api/session/question', {
                    params: {
                        "key": "V9P61G3EGKFI11LOG4G25F6UQZHSFR0B",
                        "i": "docassemble.playground1:" + this.state.service + ".yml",
                        "session": this.state.sessionId,
                        "secret": this.state.secret,
                    },
            }).then(res => {
                console.log('Questions: ', res);
                var questions = [];
                var vars = [];
                var types = [];
                var options = [];

                if((res.data.fields[0].choices != undefined) && res.data.fields[0].choices[0].label === 'Restart') {
                    // Interview has ended
                    this.displayEndFile(res.data)
                }
                else{
                    res.data.fields.map( (field, index) => {
                        if(field.choices == undefined) {
                            questions[index] = field.label
                            vars[index] = field.variable_name
                            types[index] = 'textfield'
                        }
                        else if (field.choices) {
                            var opta = []
                            field.choices.map( (choice) => {
                                opta.push(choice.value)
                            });
                            options[index] = opta
                            questions[index] = field.label
                            vars[index] = field.variable_name
                            types[index] = 'choice'
                        }
                    })
                    this.setState({
                        questions: questions,
                        vars: vars,
                        options: options,
                        types: types
                    })
                }
            }).catch(err => {
                console.log('Error getting the questions: ', err);
                throw new Error('Error getting the questions: ', err)
            })
        }
        else {
            console.log('No Session ID found....');
            throw new Error('No Session ID found....');
        }
    }

    // To set the variables at the docassembke end
    setQuestion = (variablePayload) => {
        var bodyFormData = new FormData();
        bodyFormData.set('key', 'V9P61G3EGKFI11LOG4G25F6UQZHSFR0B');
        bodyFormData.set('i', 'docassemble.playground1:' + this.state.service + '.yml');
        bodyFormData.set('session', this.state.sessionId);
        bodyFormData.set('secret', this.state.secret);
        bodyFormData.set('variables', variablePayload);
        console.log('Sending: ', variablePayload);
        Axios.post(
            'https://cors-anywhere.herokuapp.com/https://legalzoom.docassemble.community.lawyer/api/session', bodyFormData
        ).then( res => {
            console.log('Successfully updated the variables: ', res);
            this.setState({
                setvars: {},
                vars: [],
                types: [],
                options: [],
                questions: [],
            })
            this.getQuestions();
            // Handle Response to set furthur variables
            // this.continues();
        }).catch( err => {
            console.log('Error submitting the payload: ', variablePayload, ' Error: ', err);
        });
    }

    // 
    payloadMaker = () => {

    }

    // For use incase Controller changes the Step for the Active Form
    setForm = () => {

    }

    // Form Validation
    checkForm = () => {

    }

    // transit onChange form accordingle into the state
    formChange = (event) => {
        // console.log('Event target: ', event.target.name);
        console.log('PRE');
        var setvars = this.state.setvars
        if(event.target.name == 'rent') setvars[event.target.name] = parseInt(event.target.value)
        else setvars[event.target.name] = event.target.value

        this.setState({
            setvars
        })
    }

    radioChange = (event) => {
        console.log('Radio change: ', event.target.value);
        var iteration = parseInt(event.target.value.split(' ')[1]);
        var value = event.target.value.split(' ')[0];
        var setvars = this.state.setvars;
        // console.log();
        setvars[this.state.vars[iteration]] = value;
        console.log('The Choosy setvars: ', setvars);
        this.setState({
            setvars: setvars
        })
    }

    seekFormFrontStroke = () => {
        // var payload = {};
        // setvars.map( element => {
        //     payload[element] = 
        // });
        this.setQuestion(JSON.stringify(this.state.setvars));
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
        console.log('State of the service module has been changed: ', this.state);
    }
    
    render() {

        const { step, questions, set, lengths, progress, active, formSum, service, category, setvars, vars, types, options, file, loading } = this.state;

        const formSegment = (
            <div className = 'services-module-questions'>
                {
                    (types.length && vars.length) ? types.map( (type, index) => {
                        if( type == 'textfield' ) {
                            console.log('HERE');
                            return (
                                <div key = {index} className='services-module-questions-element col'>
                                    <TextField
                                        id = "standard-with-placeholder"
                                        label = {questions[index]}
                                        placeholder = {questions[index]}
                                        // name = {question}
                                        name = {vars[index]}
                                        // className={classes.textField}
                                        onChange = {this.formChange}
                                        margin = "normal"
                                        className = 'test-text'
                                        variant="outlined"
                                    />
                                </div>
                            )
                        }
                        else if ( type == 'choice' ) {
                            return (
                                <div key={index} className='service-module-questions-element-radiogroup col'>
                                    <RadioGroup
                                        aria-label="Gender"
                                        name="gender1"
                                        // className={classes.group}
                                        // value={this.state.value}
                                        onChange={this.radioChange}
                                    >
                                        {
                                            options[index].map( option => {
                                                return (
                                                    <FormControlLabel value={option + ' ' + index} control={<Radio />} label={option} />
                                                )
                                            })
                                        }
                                    </RadioGroup>
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
            <div className = {'services-module services-module-' + category} >
                {(formSegment)}
                {seekControls}
                {endFile}
            </div>
        )
    }
}

class QuestionModule {
        
}

