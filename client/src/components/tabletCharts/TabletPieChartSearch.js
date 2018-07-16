import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import PropTypes from 'prop-types';

const TabletPieSearch = ({ search }) => {
  
  const options = {
    chart: {
      type: 'pie',
      width: '800',
      height: '450'
    },
    title: {
      text: 'Search Impressions'
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
      name: 'Percentage',
      colorByPoint: true,
      data: [{
        name: '12am',
        y: search[0]
      }, 
      {
        name: '10am',
        y: search[1]
      }, 
      {
        name: '11am',
        y: search[2]
      }, 
      {
        name: '1pm',
        y: search[3]
      }, 
      {
        name: '2pm',
        y: search[4]
      },
      {
        name: '4pm',
        y: search[5]
      }, 
      {
        name: '5pm',
        y: search[6]
      }, 
      {
        name: '6pm',
        y: search[7]
      },
      {
        name: '7pm',
        y: search[8]
      },
      {
        name: '8pm',
        y: search[9]
      },   
      {
        name: '11pm',
        y: search[10]
      }],
    }],
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

export default TabletPieSearch;

TabletPieSearch.propTypes = {
  search: PropTypes.array
};
