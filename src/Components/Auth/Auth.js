// Basic Functionality
import React, { Component } from 'react'

// Auth Functionality
import Login from './Login';
import Register from './Register';

// Material-UI
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

export default class Auth extends Component {
    
    state = {
        isLoogedIn: null,
        isVisible: false,
        mode: '',
        value: null //takes the value 'Login' | 'Register
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };
    
    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    componentWillMount = () => {
        // Must set state only once in the componentWillMount Function
        console.log('Mode (Props): ', this.props.mode);
        var mode = this.props.mode;
        var value;

        if(mode == 'Login') value = 0;
        else if(mode == 'Register') value = 1;

        this.setState({
            mode,
            value
        })
    }

    componentDidMount = () => {
        console.log('State: ', this.state);
    }

    render() {
        return (
            <div className='auth'>
                <div className='authbox'>
                    <AppBar position="static" color="default">
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                        >
                            <Tab label="Login" />
                            <Tab label="SignUp" />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={'x'}
                        index={this.state.value}
                        onChangeIndex={this.handleChangeIndex}>
                        <Login />
                        <Register />
                    </SwipeableViews>
                    {/* <div className='authbox-options authbox-options-upper display8'>
                        <i className="fas fa-times" onClick={this.props.toggleAuthDisplay}></i>
                    </div>
                    <div className='authbox-login'>
                        <Login />
                    </div>
                    <div className='authbox-register'>
                        <Register />
                    </div>
                    <div className='authbox-options authbox-options-lower'>
                        
                    </div> */}
                </div>
            </div>
        )
    }
}
