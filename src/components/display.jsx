import React, { Component } from 'react';
import "./display.css";

class Display extends Component {
    state = {  } 
    render() { 
        return (
            <div className="component-display">
                <div>
                    {this.props.expression}
                </div>
            </div>
        );
    }
}
 
export default Display;