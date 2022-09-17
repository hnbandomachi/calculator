import './App.css';
import React, { Component } from 'react';
import Display from './components/display';
import ButtonPanel from './components/buttonPanel'
import calculate from './logic/calculate';

class App extends Component {
  state = {
    preValue: 0, 
    value: 100,
    operator: null
   }; 

  handleClick = (btnName) => {
        this.setState(calculate(this.state, btnName));
        console.log('this.state = ', this.state);
  };

  render() { 
    return (
      <div>
        <Display value={this.state.value}/>
        <ButtonPanel clickHandler={this.handleClick}/>
      </div>
    );
  };
}
 
export default App;
