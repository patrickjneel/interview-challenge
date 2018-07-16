import React from 'react';
import { shallow } from 'enzyme';
import AllComparisonCharts from './AllComparisonCharts';


describe('All Comparison Charts Tests', () => {

  it('should match snapshot', () => {
    const mockData = [0];
    const renderedAllComparisonCharts = shallow(
      <AllComparisonCharts 
          data={mockData}
      />
    );

    expect(renderedAllComparisonCharts).toMatchSnapshot();
  });
});
