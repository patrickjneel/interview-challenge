import React from 'react';
import { shallow } from 'enzyme';
import WelcomePage from './WelcomePage';

describe('Welcome Page Tests', () => {

  it('should match snapshot', () => {
    const mockFunc = jest.fn();
    const renderedWelcomePage = shallow(<WelcomePage scroll={mockFunc}/>);

    expect(renderedWelcomePage).toMatchSnapshot();
  });
});
