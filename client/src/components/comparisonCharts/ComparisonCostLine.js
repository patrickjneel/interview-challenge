import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ComparisonCostLine = ({ data }) => {

let hours = data.map(hours => hours.hourOfDay).reverse()

let mobileCost = data.filter(mobile => mobile.device === 'Mobile devices with full browsers').map(cost => cost.cost).reverse()

let tabletCost = data.filter(tablet => tablet.device === 'Tablets with full browsers').map(cost => cost.cost).reverse()

  let options = {
    chart: {
        type: 'line',
    },
    title: {
        text: 'Cost between Mobile Devices and Tablets'
    },
    
    xAxis: {
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
  }

  return (
    <div className='chart-container'>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  )
};

export default ComparisonCostLine

