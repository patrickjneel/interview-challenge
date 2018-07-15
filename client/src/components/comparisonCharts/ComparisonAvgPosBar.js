import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import PropTypes from 'prop-types';
import dataCleaner from './DataCleaner'

const ComparisonAvgPosBar = ({ data }) => {

  const mobileMaxData = dataCleaner(data, 'mobile', 'max');
  const tabletMaxData = dataCleaner(data, 'tablet', 'max');
  
  const options = {
    chart: {
      type: 'column',
      width: '800',
      height: '450'
    },
    title: {
      text: 'Avgerage Position'
    },
    xAxis: {
      min: 0,
      max: 23,
      tickInterval: 1,
      crosshair: true,
      title: {
        text: 'Hour of Day'
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Average Position'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} avg position</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: 'Mobile',
      data: mobileMaxData
    }, {
      name: 'Tablet',
      data: tabletMaxData
    }]
  };

  const responsive = Object.assign({}, options, 
    {
      chart: {
        width: '400',
        height: '450',
        type: 'column'
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

export default ComparisonAvgPosBar;

ComparisonAvgPosBar.propTypes = {
  data: PropTypes.array
};
