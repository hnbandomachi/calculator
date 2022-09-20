import React, { Component } from 'react';

class Display extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                {this.props.expression}
            </div>
        );
    }
}
 
export default Display;