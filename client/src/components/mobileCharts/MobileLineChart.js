import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const MobileLineChart = ({data}) => {

let mobileData = data.filter(mobile => mobile.device === 'Mobile devices with full browsers')
let hour = mobileData.map(hour => hour.hourOfDay).reverse()
let cpc = mobileData.map(mobile => mobile.avgCpc).reverse()

let options = {
  chart: {
    width: '800',
    height: '450'
  },

  title: {
    text: 'Average Click Per Cost Throughout Day'
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
      text: 'Hour of Day'
    },
    categories: hour
  },

  plotOptions: {
    series: {
      allowPointSelect: true
    }
  },

  series: [
    {
      name: 'CPC Throughout Day',
      data: [cpc[0], cpc[1], cpc[2], cpc[3], cpc[4], cpc[5], cpc[6], cpc[7], cpc[8]]
    },
  ],
};
  return (
   <div>
     <HighchartsReact 
       highcharts={Highcharts}
       options={options}
     />
   </div> 
  )
};

export default MobileLineChart;
