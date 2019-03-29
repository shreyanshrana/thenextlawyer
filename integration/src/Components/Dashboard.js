// Basic Functionality
import React, { Component } from 'react'

// Material UI
import TextField from '@material-ui/core';

// Context
import AuthContext from './context/AuthContext'

export default class Dashboard extends Component {

    state = {
        isLoggedIn: null,
    }

    render() {
        return (
            <div className='dashboard'>
                DASHING
            </div>
        )
    }
}
