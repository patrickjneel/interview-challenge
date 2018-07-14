import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Test', () => {

  it('should be defined', () => {
    const mockData = []
    const renderedApp = shallow(<App data={mockData}/>);

    expect(renderedApp).toBeDefined();
  });

  it('should match the snap shot', () => {
    const renderedApp = shallow(<App />);

    expect(renderedApp).toMatchSnapshot();
  });
})
