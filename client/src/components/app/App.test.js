import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Test', () => {

  it('should be defined', () => {
    const renderedApp = shallow(<App />);

    expect(renderedApp).toBeDefined();
  });

  it('should match the snap shot', () => {
    const renderedApp = shallow(<App />);

    expect(renderedApp).toMatchSnapshot();
  });

  it('should have a state of data set to an empty array', () => {
    const renderedApp = shallow(<App />);

    expect(renderedApp.state()).toEqual({ data: [] })
    expect(renderedApp.state().data).toEqual(expect.arrayContaining([]))
  })
})

//console.log( component.debug() );
