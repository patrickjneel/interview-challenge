import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ComparisonAvgPosBar = ({ data }) => {

  const hours = data.map(hours => hours.hourOfDay).reverse()
  const sortHours = data.map(hours => hours.hourOfDay).sort((a,b) => a - b)

const mobileAvgPos = data.filter(mobile => mobile.device === 'Mobile devices with full browsers').map(avg => avg.avgPosition).reverse()
const tabletAvgPos = data.filter(tablet => tablet.device === 'Tablets with full browsers').map(avg => avg.avgPosition).reverse()

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
        categories: sortHours,
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
        data: mobileAvgPos

    }, {
        name: 'Tablet',
        data: tabletAvgPos
    }

    ]
  }

  return (
    <div className='chart-container'>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  )
}

export default ComparisonAvgPosBar;
