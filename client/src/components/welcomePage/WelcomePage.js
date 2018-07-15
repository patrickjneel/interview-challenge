import React from 'react';
import './welcome-page.css';
import PropTypes from 'prop-types';

const WelcomePage = ({ scroll }) => {
  return (
    <div className='welcome-screen'>
      <div className='top-app'>
        <h1 className='title'>ADCELLERANT</h1>
        <h2 className='desc'>Digital Advertising & Technology Company</h2>
      </div>
      <div className='bottom-app'>
        <h3 className='data-desc' onClick={scroll}>View Mobile Data</h3>
        <img className='logo' src={require('../../assets/creative.svg')} />
        <h3 className='data-desc' onClick={scroll}>View Tablet Data</h3>
      </div>
      <h3 className='data-desc' onClick={scroll}>View Comparison Data</h3>
    </div>
  );
};

export default WelcomePage;

WelcomePage.propTypes = {
  scroll: PropTypes.func
};
