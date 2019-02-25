import React, { Component } from 'react';

import KeyPad from '../../Components/KeyPad/KeyPad';
import ViewPort from '../../Components/ViewPort/ViewPort';

class Calculator extends Component {
    state = {
        viewPortContent: ''
    }

    keyClickedHandler = (keyValue) => {
        if(keyValue === '=') {
            const answer = eval(this.state.viewPortContent);
            this.setState({viewPortContent: answer});
        } else {
            this.setState({viewPortContent: this.state.viewPortContent + keyValue});
        }
    }
    
    render () {
        return (
            <div>
                <ViewPort content={this.state.viewPortContent} />
                <KeyPad clicked={this.keyClickedHandler} />
            </div>
        )
    }
}

export default Calculator;