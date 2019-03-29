// Basic Functionality
import React, { Component } from 'react';

// Material UI
import TextField from '@material-ui/core/TextField';

// Axios for calling the API
import Axios from 'axios';

export default class Register extends Component {
    
    state = {
        email: null,
        password: null
    }

    // Custom API Approach
    register = () => {
        Axios.post('', {}, {}).then( res => {} ).catch( res => {} )
    }

    handleFormChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (            
            <div className='auth-register'>
                <TextField
                    id="outlined-name"
                    label="Username"
                    name='email'
                    onChange={this.handleFormChange}
                    // className={classes.textField}
                    // value={this.state.name}
                    // onChange={this.handleChange('name')}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-name"
                    label="Password"
                    name='password'
                    // className={classes.textField}
                    // value={this.state.name}
                    onChange={this.handleFormChange}
                    margin="normal"
                    variant="outlined"
                />
                <button className='auth-register-btn' onClick={this.login}>
                    Register
                </button>
            </div>
        )
    }
}
