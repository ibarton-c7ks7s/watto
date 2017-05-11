import React, { Component } from 'react';
import logo from './logo.svg';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-header-inner">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Watto's Space Emporium</h2>
          </div>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/Main.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Main;
