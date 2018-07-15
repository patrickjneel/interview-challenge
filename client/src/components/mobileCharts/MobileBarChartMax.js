import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const MobileChartMax = ({ hours, max }) => {

  const options = {

    chart: {
     width: '800',
     height: '450',
     type: 'column',
    },

    title: {
      text: 'Max Impressions'
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
      data: max
    },
  ],

};

const responsive = Object.assign({}, options, 
              {
    chart: {
     width: '400',
     height: '450',
     type: 'column',
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

export default MobileChartMax;
