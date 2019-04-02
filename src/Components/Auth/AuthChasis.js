// Basic Functionality
import React, { Component } from 'react'

// Psudo Functionality

// Auth Functionality
import Auth from './Auth';

// Auth Context
import AuthContext from '../context/AuthContext';

export default class AuthChasis extends Component {

    state = {
        isLoggedIn: null,
        username: null,
        email: null,
        token: null,
        isAuthOnDisplay: false,
        authDefaultMode: null,
    }

    // Auth Context Instance
    static contextType = AuthContext

    displayAuth = (mode) => {
        this.setState({
            isAuthOnDisplay: true,
            authDefaultMode: mode,
        })
    }

    toggleAuthDisplay =() => {
        this.setState({
            isAuthOnDisplay: false,
            authDefaultMode: null,
        })
    }

    render() {
        
        const auth = (
            this.state.isAuthOnDisplay ? (
                <React.Fragment>
                    <Auth mode = {this.state.authDefaultMode} toggleAuthDisplay ={this.toggleAuthDisplay}/>
                </React.Fragment>
            ) : null
        );

        return (
            <div className='authchasis'>
                {
                    this.state.isLoggedIn ? (
                        <div className='authchasis-return'>

                        </div>
                    ) : (
                        <div className='authchasis-options'>
                            <div className='authchasis-options-btn-arr'>
                                <button className='authchasis-options-btn authchasis-options-btn-login display10' onClick={() => this.displayAuth('Login')}>
                                    Login
                                </button>
                                <button className='authchasis-options-btn authchasis-options-btn-register display10'>
                                    Register
                                </button>
                            </div>
                        </div>
                    )
                }
                {auth}
            </div>
        )
    }
}
