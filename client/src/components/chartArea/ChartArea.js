import React from 'react';
import MobileLineChart from '../mobileCharts/MobileLineChart';
import './chart-area.css';


const ChartArea = ({data}) => {
  console.log(data)
  if(!data.length) {
    return <div>loading</div>
  }
  return (
    <div className='chart-area'>
      <h3>Day: {data[0].dayOfWeek}</h3>
      <h3>Event: {data[0].campaignName}</h3>
      <h3>Device: {data[18].device}</h3>
      <MobileLineChart data={data} />
    </div>
  );
};

export default ChartArea;

