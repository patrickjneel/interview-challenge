import React from 'react';
import './chart-area.css';
import AllMobileCharts from '../allMobileCharts/AllMobileCharts';
import AllTabletCharts from '../allTabletCharts/AllTabletCharts';
import AllComparisonCharts from '../allComparisonCharts/AllComparisonCharts';
import MobileTable from '../mobileTable/MobileTable';
import TabletTable from '../tabletTable/TabletTable';
import PropTypes from 'prop-types';

const ChartArea = ({ data }) => {

  const mobileData = data.filter(mobile => mobile.device === 'Mobile devices with full browsers');
  const mobileHours = mobileData.map(hour => hour.hourOfDay).reverse();
  const maxImpressions = mobileData.map(mobile => mobile.maxImpressions).reverse();
  const tabletData = data.filter(mobile => mobile.device === 'Tablets with full browsers');
  const tabletHours = tabletData.map(hour => hour.hourOfDay).reverse();
  const cost = tabletData.map(cost => cost.cost).reverse();
  const searchImpressions = tabletData.map(searchImp => searchImp.searchImpressionShare);

  if(!data.length) {
    return <div>loading</div>;
  }
  return (
    <div className='chart-area'>
      <div className='all-mobile'>
        <AllMobileCharts data={data} hours={mobileHours} max={maxImpressions} />
      </div>
      <div className='all-tablet'>
        <AllTabletCharts data={data} cost={cost} search={searchImpressions} hours={tabletHours} />
      </div>
      <div className='all-comparison'>
        <AllComparisonCharts data={data} />
      </div>
      <div className='mobile-table'>
        <MobileTable mobileData={mobileData} />
      </div>
      <div className='tablet-table'>
        <TabletTable tabletData={tabletData} />
      </div>
    </div>
  );
};

export default ChartArea;

ChartArea.propTypes = {
  data: PropTypes.array
};
