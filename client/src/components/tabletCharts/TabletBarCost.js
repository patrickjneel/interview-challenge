import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import PropTypes from 'prop-types';

const TabletBarCost = ({ cost, hours }) => {
  
  const options = {
    chart: {
      width: '800',
      height: '450',
      type: 'bar'
    },
    title: {
      text: 'Cost Throughout Day'
    },
    xAxis: {
      min: 0,
      max: 23,
      tickInterval: 1,
      categories: hours,
      title: {
        text: 'Hour of Day'
      },
    },
    yAxis: {
      title: {
        text: 'Cost in Dollars',
        align: 'center'
      },
    },
    series: [{
      name: 'Cost',
      colorByPoint: true,
      data: cost
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

export default TabletBarCost;

TabletBarCost.propTypes = {
  hours: PropTypes.array,
  cost: PropTypes.array
};
