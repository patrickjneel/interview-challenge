import React from 'react';
import MobileLineChartCPC from '../mobileCharts/MobileLineChartCPC';
import MobileBarChartMax from '../mobileCharts/MobileBarChartMax';
import './chart-area.css';
import moment from 'moment'

const ChartArea = ({data}) => {

  let mobileData = data.filter(mobile => mobile.device === 'Mobile devices with full browsers')
  let hours = mobileData.map(hour => hour.hourOfDay).reverse()
  let maxImpressions = mobileData.map(mobile => mobile.maxImpressions).reverse()
    
    // let hoursFormat = hours.map(hour => {
    //   return hour > 12 ? moment(hour).format('h A') : moment(hour).format('h A')
    // })
    // console.log(hoursFormat)
    
  if(!data.length) {
    return <div>loading</div>
  }
  return (
    <div className='chart-area'>
      <h3 className='event-desc'>Day: {data[0].dayOfWeek}</h3>
      <h3 className='event-desc'>Event: {data[0].campaignName}</h3>
      <h3 className='event-desc'>Device: {data[18].device}</h3>
      <MobileLineChartCPC data={data} hours={hours} />
      <MobileBarChartMax hours={hours} max={maxImpressions} />
      <h3 className='event-desc'>Day: {data[0].dayOfWeek}</h3>
      <h3 className='event-desc'>Event: {data[0].campaignName}</h3>
      <h3 className='event-desc'>Device: {data[0].device}</h3>
    </div>
  );
};

export default ChartArea;

