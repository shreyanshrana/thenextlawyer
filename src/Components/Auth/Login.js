// Basic Functionality
import React, { Component } from 'react'
// For history.push
import { withRouter } from 'react-router-dom'

// Material UI
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

// Login Request
import Axios from 'axios'
  
class Login extends Component {

    state = {
        email: null,
        password: null
    }

    onSubmit = (e) => {
        
        e.preventDefault()
    }
    
    handleFormChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    logMeIn = () =>{
        this.login()
    }

    // Traditional Custom Frontend code for docassemble
    login = () => {

        const loginUserRequestBody = {
            query: `{
                loginUser(method: "${this.state.username}", password: "${this.state.password}"){
                    token
                    userId
                }
            }`
        }

        const getUserInfoRequestBody = {
            query: `{
                user {
                    name
                    username
                }
            }`
        }
       
        console.log('Logging In with: ', this.state)
        Axios.post('https://thenextlawyer-backend.herokuapp.com/graphql', JSON.stringify(loginUserRequestBody), {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then( res => {
            console.log('Logged in the user with the properties: ', res)
            this.context.login(res.data.data.loginUser.token, res.data.data.loginUser.userId)
            Axios.post('https://thenextlawyer-backend.herokuapp.com/graphql', JSON.stringify(getUserInfoRequestBody), {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then( response => {
                console.log('User Info: ', response)
                this.props.history.push('/dashboard')
            }).catch( err => {
                console.log('Error getting the user info: ', err)
                return err
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
        } else {
            $('.character-checkbox').removeClass('show')
            $('#key').attr('type', 'password')
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
                                <h1>Log in with your email account</h1>
                                    <form role="form" action="javascript:" method="post" id="login-form" autocomplete="off">
                                        <div class="form-group">
                                            <label for="email" class="sr-only">Email</label>
                                            <input type="email" name="email" id="email" class="form-control" placeholder="somebody@example.com" onChange={this.handleFormChange} />
                                        </div>
                                        <div class="form-group">
                                            <label for="key" class="sr-only">Password</label>
                                            <input type="password" name="key" id="key" class="form-control" placeholder="Password" onChange={this.handleFormChange} />
                                        </div>
                                        <div class="checkbox">
                                            <span class="character-checkbox" onClick={this.showPassword}></span>
                                            <span class="label">Show password</span>
                                        </div>
                                        <input type="submit" id="btn-login" class="btn btn-custom btn-lg btn-block" value="Log in" onClick={this.logMeIn} />
                                    </form>
                                    <a href="javascript:" class="forget" data-toggle="modal" data-target=".forget-modal">Forgot your password?</a>
                                    <hr />
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
                {/* <TextField
                    id="outlined-name"
                    label="Email/Username"
                    name='email'
                    onChange={this.handleFormChange}
                    // className={classes.textField}
                    // value={this.state.name}
                    // onChange={this.handleChange('name')}
                    margin="normal"
                    className='auth-form'
                />
                <TextField
                    id="outlined-name"
                    label="Password"
                    name='password'
                    // className={classes.textField}
                    // value={this.state.name}
                    onChange={this.handleFormChange}
                    margin="normal"
                    className='auth-form'
                />
                <Button variant="contained" color="secondary" className='auth-btn' disabled={isInvalid} onClick={this.onSubmit}>
                    Log In
                </Button> */}
                {/* <button className='auth-login-btn' onClick={this.login}>
                    Login
                </button> */}
            </div>
        )
    }
}

export default withRouter(Login)
