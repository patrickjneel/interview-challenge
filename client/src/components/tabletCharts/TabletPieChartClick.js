import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import PropTypes from 'prop-types';

const TabletPieCost = ({ hours, cost }) => {

  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      width: '800',
      height: '450'
    },
    title: {
      text: 'Cost Throughout Day'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [{
      name: 'Time of Day',
      colorByPoint: true,
      data: [{
        name: '12am',
        y: cost[0],
      }, 
      {
        name: '10am',
        y: cost[1]
      }, 
      {
        name: '11am',
        y: cost[2]
      }, 
      {
        name: '1pm',
        y:cost[3]
      }, 
      {
        name: '2pm',
        y: cost[4]
      },
      {
        name: '4pm',
        y: cost[5]
      }, 
      {
        name: '5pm',
        y: cost[6]
      }, 
      {
        name: '6pm',
        y: cost[7]
      },
      {
        name: '7pm',
        y: cost[8]
      },
      {
        name: '8pm',
        y: cost[9]
      },   
      {
        name: '11pm',
        y: cost[10]
      }]
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

export default TabletPieCost;

TabletPieCost.propTypes = {
  hours: PropTypes.array,
  cost: PropTypes.array
};
