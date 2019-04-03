// Basic Functionality
import React, { Component } from 'react'

// Material UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Login Request
import Axios from 'axios';

// Setup the Context Accordingly

// APIKey
import Key from '../config/config';

export default class Login extends Component {

    state = {
        isLoggedIn: null,
        email: null,
        password: null,
        name: null
    }

    // Traditional Custom Frontend code for docassemble
    login = () => {
        console.log('Logging In with: ', this.state);
        Axios.get('https://cors-anywhere.herokuapp.com/https://legalzoom.docassemble.community.lawyer/api/secret', 
        {
            params: {
                key: 'V9P61G3EGKFI11LOG4G25F6UQZHSFR0B',
                username: this.state.email,
                password: this.state.password
            }
        }).then( res => {
            console.log('Logged In As: ', res);
            // Get Name of the user
            var name;
            Axios.get('https://cors-anywhere.herokuapp.com/https://legalzoom.docassemble.community.lawyer/api/user_info', 
            {
                params: {
                    key: 'V9P61G3EGKFI11LOG4G25F6UQZHSFR0B',
                    username: this.state.email
                }
            }).then( response => {
                console.log('User info: ', response);
                name = response.data.first_name + ' ' + response.data.last_name;
                this.setState({
                    name: name
                })
                // this.context.login(this.state.email, response.data.id, this.state.name, this.state.password, res.data)
            }).catch( err=> {
                console.log('Unable to get the info and hence the name of the User', err);
            })
            // var form = new FormData();
            // form.append('next', 'https://cors-anywhere.herokuapp.com/https://legalzoom.docassemble.community.lawyer/interviews?json=1');
            // form.append('csrf_token', res.csrf_token);
            // form.append('email', this.state.email);
            // form.append('password', this.state.password);
            // Axios.get('', { } ).then( response => {} ).catch( error => {} )
        } ).catch( err => {
            console.log('Error Login: ', err);
        } )
        // var myHeaders = new Headers();

        // var myInit = { method: 'GET',
        //             headers: myHeaders,
        //             cache: 'default',
        //             redirect: 'follow' };

        // var myRequest = new Request('https://cors-anywhere.herokuapp.com/https://legalzoom.docassemble.community.lawyer/user/sign-in', myInit);

        // fetch(myRequest).then(function(response) {
        // var contentType = response.headers.get("content-type");
        // if(contentType && contentType.includes("application/json")) {
        //     return response.json();
        // }
        // throw new TypeError("Error: JSON not returned from sign-in site");
        // }).then(function(json) {
        //     var form = new FormData();
        //     form.append('next', 'https://cors-anywhere.herokuapp.com/https://legalzoom.docassemble.community.lawyer/interviews?json=1');
        //     form.append('csrf_token', json.csrf_token);
        //     form.append('email', this.state.email);
        //     form.append('password', this.state.password);
        //     var loginInit = { method: 'POST',
        //                         headers: myHeaders,
        //                         cache: 'default',
        //                         credentials: 'include',
        //                         redirect: 'follow',
        //                         body: form };
        //     var loginRequest = new Request('https://docassemble.example.com/user/sign-in?json=1', loginInit);
        //     fetch(loginRequest).then(function(response) {
        //         var contentType = response.headers.get("content-type");
        //         if(contentType && contentType.includes("application/json")) {
        //         return response.json();
        //         }
        //         throw new TypeError("Error: JSON not returned after signing in");
        //     }).then(function(json) {
        //         console.log('Succesfully loggin in with: ', json)
        //     });
        // });
    }

    handleFormChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render() {
        return (
            <div className='authbox-login'>
                <TextField
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
                <Button variant="contained" color="secondary" className='auth-btn'>
                    Login
                </Button>
                {/* <button className='auth-login-btn' onClick={this.login}>
                    Login
                </button> */}
            </div>
        )
    }
}
