import React from 'react';
import MobileLineChartCPC from '../mobileCharts/MobileLineChartCPC';
import MobileBarChartMax from '../mobileCharts/MobileLineChartMax';
import './chart-area.css';


const ChartArea = ({data}) => {

 let mobileData = data.filter(mobile => mobile.device === 'Mobile devices with full browsers')
let hour = mobileData.map(hour => hour.hourOfDay).reverse()
let maxImpressions = mobileData.map(mobile => mobile.maxImpressions).reverse()

  if(!data.length) {
    return <div>loading</div>
  }
  return (
    <div className='chart-area'>
      <h3>Day: {data[0].dayOfWeek}</h3>
      <h3>Event: {data[0].campaignName}</h3>
      <h3>Device: {data[18].device}</h3>
      <MobileLineChartCPC data={data} />
      <MobileBarChartMax hours={hour} max={maxImpressions} />
    </div>
  );
};

export default ChartArea;

