import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const MobileChartMax = ({ hours, max }) => {

  let options = {

    chart: {
     width: '800',
     height: '450',
     type: 'column',
    },

    title: {
      text: 'Max Impressions Throughout Day'
    },

    yAxis: {
      title: {
      text: 'Number of Max Impressions'
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
      name: 'Max Impressions Throughout Day',
      data: [max[0], max[1], max[2], max[3], max[4], max[5], max[6], max[7], max[8]]
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
  );
};

export default MobileChartMax;
