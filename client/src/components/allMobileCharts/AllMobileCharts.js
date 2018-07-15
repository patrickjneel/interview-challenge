import React from 'react';
import MobileLineChartCPC from '../mobileCharts/MobileLineChartCPC';
import MobileBarChartMax from '../mobileCharts/MobileBarChartMax';

const AllMobileCharts = ({ data, hours, max }) => {
  
  return (
    <div>
      <h1 className='event-desc'>Mobile Charts</h1>
      <h3 className='event-desc'>Day: {data[0].dayOfWeek}</h3>
      <h3 className='event-desc'>Event: {data[0].campaignName}</h3>
      <h3 className='event-desc'>Device: {data[18].device}</h3>
      <MobileLineChartCPC className='mobile-view' data={data} hours={hours} />
      <MobileBarChartMax hours={hours} max={max} />
    </div>
  )
};

export default AllMobileCharts;
