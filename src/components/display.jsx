import React, { Component } from 'react';

class Display extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                {this.props.value}
            </div>
        );
    }
}
 
export default Display;