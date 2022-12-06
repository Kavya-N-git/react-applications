import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';

//class component using states and props
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }

  }

  increment = () => {
    //setState() are used to update state value
    this.setState({ count: this.state.count + 1 });
  }

  decrement = () => {
    //setState() are used to update state value
    this.setState({ count: this.state.count - 1 });
  }
  //when we use class components we have to render using render()
  render() {
    return (
      <div className='App'>
        <h1>Simple Counter</h1>
        <button className='btn btn-outline-success' type="button" onClick={this.increment} id="addBtn">+ </button>&nbsp;&nbsp;
        <button className='btn btn-outline-danger' type="button" onClick={this.decrement} id="subBtn">-</button>
        <h2>{this.state.count}</h2>
      </div>
    );
  }

}



export default App;
