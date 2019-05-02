// Basic Functionality
import React, { Component } from 'react'

// Function Linking
import { withRouter } from 'react-router-dom'

// Material UI
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

// Login Request
import Axios from 'axios'

// Setup the Context Accordingly
import AuthContext from '../../Context/AuthContext';
  
class Register extends Component {

    state = {
        email: null,
        username: null
    }

    // Auth Context
    static contextType = AuthContext

    onSubmit = (e) => {
        e.preventDefault()
    }
    
    handleFormChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    signMeUp = () => {
        this.register()
    }

    register = () => {
        
        const createUserRequestBody = {
            query: `mutation {
                createUser(userInput: {email: "${this.state.email}", name: "${this.state.name}", password: "${this.state.password}", username: "${this.state.username}"}) {
                    name
                }
            }`
        }

        const loginUserRequestBody = {
            query: `{
                loginUser(method: "${this.state.username}", password: "${this.state.password}") {
                    userId
                    token
                }
            }`
        }
        
        console.log('Signing up with: ', this.state)
        Axios.post('https://thenextlawyer-backend.herokuapp.com/graphql', JSON.stringify(createUserRequestBody), {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then( res => {
            console.log('Signed Up As: ', res)
            Axios.post('https://thenextlawyer-backend.herokuapp.com/graphql', JSON.stringify(loginUserRequestBody), {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then( response => {
                console.log('Signed in as: AuthData: ', response)
                this.context.login(response.data.data.loginUser.token, response.data.data.loginUser.userId)
                this.props.history.push('/dashboard')
            }).catch( err => {
                console.log('Unable to get the info and hence the name of the User', err)
            })
        }).catch( err => {
            console.log('Error Login: ', err)
        })
    }

    showPassword = () => {
        var key_attr = $('#key').attr('type')
        if(key_attr != 'text') {
            $('.character-checkbox').addClass('show')
            $('#key').attr('type', 'text')
            $('#confirm-key').attr('type', 'text')
        } else {
            $('.character-checkbox').removeClass('show')
            $('#key').attr('type', 'password')
            $('#confirm-key').attr('type', 'password')
        }
    }
    
    render() {

        const { email, password, error } = this.state
        const isInvalid = password === '' || email === ''

        return (
            <div className='authbox-login'>
                <section id="login">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="form-wrap">
                                <h1>Sign up with your email account</h1>
                                    <form role="form" action="javascript:" method="post" id="login-form" autocomplete="off">
                                        <div class="form-group">
                                            <label for="name" class="sr-only">Name</label>
                                            <input type="text" name="name" id="name" class="form-control" placeholder="Your Name" onChange={this.handleFormChange} />
                                        </div>
                                        <div class="form-group">
                                            <label for="name" class="sr-only">Select a Username</label>
                                            <input type="text" name="username" id="username" class="form-control" placeholder="Your Username" onChange={this.handleFormChange} />
                                        </div>
                                        <div class="form-group">
                                            <label for="email" class="sr-only">Email</label>
                                            <input type="email" name="email" id="email" class="form-control" placeholder="somebody@example.com" onChange={this.handleFormChange} />
                                        </div>
                                        <div class="form-group">
                                            <label for="key" class="sr-only">Password</label>
                                            <input type="password" name="password" id="key" class="form-control" placeholder="Password" onChange={this.handleFormChange} />
                                        </div>
                                        <div class="form-group">
                                            <label for="key" class="sr-only">Confirm Password</label>
                                            <input type="password" name="confirm-password" id="confirm-key" class="form-control" placeholder="Confirm Password" onChange={this.handleFormChange} />
                                        </div>
                                        <div class="checkbox">
                                            <span class="character-checkbox" onClick={this.showPassword}></span>
                                            <span class="label">Show password</span>
                                        </div>
                                        <input type="submit" id="btn-login" class="btn btn-custom btn-lg btn-block" value="Sign up" onClick={this.signMeUp} />
                                    </form>
                                </div>
                            </div> 
                        </div>
                    </div>
                </section>

                <div class="modal fade forget-modal" tabindex="-1" role="dialog" aria-labelledby="myForgetModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-sm">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">
                                    <span aria-hidden="true">×</span>
                                    <span class="sr-only">Close</span>
                                </button>
                                <h4 class="modal-title">Recovery password</h4>
                            </div>
                            <div class="modal-body">
                                <p>Type your email account</p>
                                <input type="email" name="recovery-email" id="recovery-email" class="form-control" autocomplete="off"/>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                                <button type="button" class="btn btn-custom">Recovery</button>
                            </div>
                        </div>
                    </div>
                </div>

                <footer id="footer">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <p>Page © The Next Lawyer - 2019</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }

}

export default withRouter(Register)
