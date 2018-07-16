import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import dataCleaner from '../comparisonCharts/DataCleaner';
import PropTypes from 'prop-types';

const MobileLineChart = ({ data }) => {

  const mobileCpcData = dataCleaner(data, 'mobile', 'cpc');
  
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
      min: 0,
      max: 23,
      title: {
        text: 'Hour of Day',
      },
    },
    plotOptions: {
      series: {
        connectNulls: true,
      }
    },
    series: [
      {
        name: 'CPC Throughout Day',
        data: mobileCpcData
      },
    ],
  };

  const responsive = Object.assign({}, options, 
    {
      chart: {
        width: '400',
        height: '450',
      },
      legend: {
        align: 'center',
        verticalAlign: 'bottom',
        layout: 'horizontal'
      },
    }
  );

  if(window.innerWidth < 825) {
    return (
      <div className='chart-container'>
        <HighchartsReact
          highcharts={Highcharts}
          options={responsive}
        />
      </div>
    );
  }
  
  return (
    <div className='chart-container'>
      <HighchartsReact 
        highcharts={Highcharts}
        options={options}
      />
    </div> 
  );
};

export default MobileLineChart;

MobileLineChart.propTypes = {
  data: PropTypes.array
};
