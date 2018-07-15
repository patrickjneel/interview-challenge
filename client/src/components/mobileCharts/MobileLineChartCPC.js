import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const MobileLineChart = ({ data, hours }) => {
  
const mobileData = data.filter(mobile => mobile.device === 'Mobile devices with full browsers')
const cpc = mobileData.map(mobile => mobile.avgCpc).reverse()

const options = {
  chart: {
    width: '800',
    height: '450'
  },

  title: {
    text: 'Average Click Per Cost'
  },

  yAxis: {
    title: {
      text: 'Average Click Per Cost'
    }
  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  xAxis: {
    title: {
      text: 'Hour of Day',
    },
    categories: hours
  },

  plotOptions: {
    series: {
      allowPointSelect: true
    }
  },

  series: [
    {
      name: 'CPC Throughout Day',
      data: cpc
    },
  ],
};
  return (
   <div className='chart-container'>
     <HighchartsReact 
       highcharts={Highcharts}
       options={options}
     />
   </div> 
  )
};

export default MobileLineChart;
