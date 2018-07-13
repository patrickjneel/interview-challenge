import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    fetch('/data').then(data => data.json()).then(info => console.log(info.rows))
  }
  render() {
    return (
      <div className='app'>
        <div className='top-app'>
          <h1 className='title'>ADCELLERANT</h1>
          <h2 className='desc'>Digital Advertising & Technology Company</h2>
        </div>
      </div>
    );
  }
}

export default App;
