import React from 'react';
import { shallow } from 'enzyme';
import ChartArea from './ChartArea';

describe('Chart Area Test', () => {

  it('should match snap shot', () => {
    const mockData = [];
    const renderedChartArea = shallow(<ChartArea data={mockData}/>);
    
    expect(renderedChartArea).toMatchSnapshot();
  });
});
