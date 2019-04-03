// Basic Functionality
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

// Material UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Axios for calling the API
import Axios from 'axios';

// Utility
import { compose } from 'recompose';

// Firebase
import { withFirebase } from '../Firebase/index';

const INITIAL_STATE = {
    email: '',
    password: '',
    passwordTwo: '',
    error: null,
};

const Register = () => (
    <RegisterForm/>
)

const RegisterForm = compose( withRouter, withFirebase )(RegisterFormBase);

class RegisterFormBase extends Component {
    
    state = {
        ...INITIAL_STATE
    }

    onSubmit = (event) => {
        const { email, passwordOne } = this.state;
        this.props.firebase
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push('/dashboard');
        })
        .catch(error => {
            this.setState({ error });
        });

        event.preventDefault();
    }

    // Custom API Approach
    // register = () => {
    //     Axios.post('', {}, {}).then( res => {} ).catch( res => {} )
    // }

    handleFormChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {

        const { email, password, passwordTwo, error } = this.state;

        const isInvalid = password !== passwordTwo || password === '' || email === '';

        return (    
            <div className='authbox-register'>
                <TextField
                    id="outlined-name"
                    label="Email"
                    name='email'
                    value={email}
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
                    value={password}
                    // className={classes.textField}
                    // value={this.state.name}
                    onChange={this.handleFormChange}
                    margin="normal"
                    className='auth-form'
                />
                <TextField
                    id="outlined-name"
                    label="Confirm Password"
                    name='passwordTwo'
                    value={passwordTwo}
                    // className={classes.textField}
                    // value={this.state.name}
                    onChange={this.handleFormChange}
                    margin="normal"
                    className='auth-form'
                />
                <Button variant="contained" color="secondary" className='auth-btn' disabled={isInvalid}>
                    Register
                </Button>
                {error && <p>{error.message}</p>}
            </div>
        )
    }
}

export default Register;
export { RegisterFormBase };
