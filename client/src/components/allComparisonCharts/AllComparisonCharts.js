import React from 'react';
import ComparisonCostLine from '../comparisonCharts/ComparisonCostLine';
import ComparisonAvgPosBar from '../comparisonCharts/ComparisonAvgPosBar';

const AllComparisonCharts = ({ data }) => {
  return (
    <div>
      <h1 className='event-desc comparison-view'>Mobile and Tablet Comparisons</h1>
      <h3 className='event-desc' >Day: {data[0].dayOfWeek}</h3>
      <h3 className='event-desc'>Event: {data[0].campaignName}</h3>
      <h3 className='event-desc'>Comparion Between Mobile & Tablets</h3>
      <ComparisonCostLine data={data} />
      <ComparisonAvgPosBar data={data} />
    </div>
  )
};

export default AllComparisonCharts;
