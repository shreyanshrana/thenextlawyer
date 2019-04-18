//  Basic Functionality
import React, { Component } from 'react';

class Controller extends Component {
    
    state = {
        isVisible: true,
        progress: null,
        steps: null,
        selected: null,
        isComplete: false,
    }

    showProgress = () => {
        // Overlays the progress onto the steps dynamically

    }

    showSteps = () => {
        // Static element that only depicts only the Steps

    }

    setStep = (step) => {
        // Takes input from an external sources and goes to the designated step

    }

    componentWillMount = () => {
        // Import props as a state beforehand only !

    }
    
    render () {
        return (
            <div className='step-controller'>

            </div>
        )
    }

}

export default Controller;
