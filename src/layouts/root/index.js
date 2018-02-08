import React, { Component } from 'react';
// import logo from 'assets/images/logo.svg';
import Greetings from 'greetings';
import './Root.css';

console.log(Greetings);

class Root extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img  className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ISA homepage</h1>
        </header>
      </div>
    );
  }
}

export default Root;
