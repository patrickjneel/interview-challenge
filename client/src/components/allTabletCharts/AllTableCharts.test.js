import React from 'react';
import { shallow } from 'enzyme';
import AllTabletCharts from './AllTabletCharts';

describe('All Tablet Charts Tests', () => {

  it('should match snapshot', () => {
    const mockData = [0];
    const mockCost = [];
    const mockSearch = [];
    const mockHours = [];
    const renderedAllTabletCharts = shallow(
      <AllTabletCharts 
        data={mockData}
        cost={mockCost}
        search={mockSearch}
        hours={mockHours}
      />
    );

    expect(renderedAllTabletCharts).toMatchSnapshot();
  });
});
