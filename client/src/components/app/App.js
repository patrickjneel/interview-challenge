import React, { Component } from 'react';
import fetchData from '../api/API';
import ChartArea from '../chartArea/ChartArea';
import './app.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data })
  }

  scroll = (event) => {
    const chart = document.querySelector('.charts')
    // const welcome = document.querySelector('.welcome-screen')
    chart.scrollIntoView({ behavior: "smooth", block: 'start' })
    // welcome.scrollIntoView({ behavior: "smooth" })
  }

  render() {
    return (
      <div className='app'>
        <div className='welcome-screen'>
          <div className='top-app'>
            <h1 className='title'>ADCELLERANT</h1>
            <h2 className='desc'>Digital Advertising & Technology Company</h2>
          </div>
          <div className='bottom-app'>
            <h3 className='data-desc' onClick={this.scroll}>View Mobile Data</h3>
            <img className='logo' src={require('../../assets/creative.svg')} />
            <h3 className='data-desc' onClick={this.scroll}>View Tablet Data</h3>
          </div>
          <h3 className='data-desc' onClick={this.scroll}>View Comparison Data</h3>
        </div>
        <div className='charts'>
          <ChartArea data={this.state.data} />
        </div>
      </div>
    );
  };
};

export default App;
