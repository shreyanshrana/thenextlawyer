// Basic Functionality
import React, { Component } from 'react'

// Auth Functionality
import Login from './Login';
import Register from './Register';

export default class Auth extends Component {
    
    state = {
        isLoogedIn: null,
        isVisible: false,
        mode: null //takes the value 'Login' | 'Register
    }

    componentWillMount = () => {
        this.setState({
            mode: this.props.mode
        })
    }

    render() {
        return (
            <div className='auth'>
                <div className='authbox'>
                    <div className='authbox-options authbox-options-upper display8'>
                        <i className="fas fa-times" onClick={this.props.toggleAuthDisplay}></i>
                    </div>
                    <div className='authbox-login'>
                        <Login />
                    </div>
                    <div className='authbox-register'>
                        <Register />
                    </div>
                    <div className='authbox-options authbox-options-lower'>
                        
                    </div>
                </div>
            </div>
        )
    }
}
