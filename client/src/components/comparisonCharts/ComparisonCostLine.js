import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import PropTypes from 'prop-types';

const ComparisonCostLine = ({ data }) => {

  const hours = data.map(hours => hours.hourOfDay).sort((a,b) => a - b);
  const mobileCost = data.filter(mobile => mobile.device === 'Mobile devices with full browsers').map(cost => cost.cost).reverse();
  const tabletCost = data.filter(tablet => tablet.device === 'Tablets with full browsers').map(cost => cost.cost).reverse();

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
      ordinal: false,
      tickInterval: 2,
      categories: hours,
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
      line: {
        dataLabels: {
          enabled: true
        },
      }
    },
    series: [{
      name: 'Mobile',
      data: mobileCost
    }, {
      name: 'Tablet',
      data: tabletCost
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

