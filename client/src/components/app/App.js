import React, { Component } from 'react';
import fetchData from '../api/API';
import WelcomePage from '../welcomePage/WelcomePage';
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
    console.log('click')
    const sectionTarget = event.target.innerText;

    const sections = {
      ['View Mobile Data']: document.querySelector('.charts'),
      ['View Tablet Data']: document.querySelector('.tablet-view'),
      ['View Comparison Data']: document.querySelector('.comparison-view')
    }
    sections[sectionTarget].scrollIntoView({ behavior: "smooth", block: 'start' })
  }

  render() {
    return (
      <div className='app'>
        <WelcomePage scroll={this.scroll} />
        <div className='charts'>
          <ChartArea data={this.state.data} />
        </div>
      </div>
    );
  };
};

export default App;
