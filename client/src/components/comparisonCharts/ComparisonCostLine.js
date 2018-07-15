import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import PropTypes from 'prop-types';
import dataCleaner from './DataCleaner';

const ComparisonCostLine = ({ data }) => {
  const mobileCostData = dataCleaner(data, 'mobile', 'cost');
  const tabletCostData = dataCleaner(data, 'tablet', 'cost');
  
  
  const options = {
    chart: {
      type: 'line',
      width: '800',
      height: '450'
    },
    title: {
      text: 'Cost'
    },
    
    xAxis: {
      min: 0,
      max: 23,
      tickInterval: 1,
      title: {
        text: 'Hour of Day'
      },
    },
    yAxis: {
      title: {
        text: 'Cost'
      }
    },
    plotOptions: {
      series: {
        connectNulls: true,
      },
      line: {
        dataLabels: {
          enabled: true
        },
      }
    },
    series: [{
      name: 'Mobile',
      data: mobileCostData
    }, {
      name: 'Tablet',
      data: tabletCostData
    }]
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

export default ComparisonCostLine;

ComparisonCostLine.propTypes = {
  data: PropTypes.array
};

