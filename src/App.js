import './App.css';
import React, { Component } from 'react';
import Display from './components/display';
import ButtonPanel from './components/buttonPanel'
import calculate from './logic/calculate';

class App extends Component {
  state = {
    preValue: 0, 
    expression: '0',
    operator: null
   }; 

  handleClick = (btnName) => {
    console.log('Button = is clicked');
    this.setState(calculate(this.state, btnName))
  };

  render() { 
    return (
      <div>
        <Display expression={this.state.expression}/>
        <ButtonPanel clickHandler={this.handleClick}/>
      </div>
    );
  };
}
 
export default App;
