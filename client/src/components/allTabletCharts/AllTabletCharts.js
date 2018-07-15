import React from 'react';
import TabletPieCost from '../tabletCharts/TabletPieChartClick';
import TabletPieSearch from '../tabletCharts/TabletPieChartSearch';
import PropTypes from 'prop-types';

const AllTabletCharts = ({ data, cost, search }) => {
  return (
    <div>
      <h1 className='event-desc tablet-view'>Tablet Charts</h1>
      <h3 className='event-desc'>Day: {data[0].dayOfWeek}</h3>
      <h3 className='event-desc'>Event: {data[0].campaignName}</h3>
      <h3 className='event-desc'>Device: {data[0].device}</h3>
      <TabletPieCost cost={cost} />
      <TabletPieSearch search={search} />
    </div>
  );
};

export default AllTabletCharts;

AllTabletCharts.propTypes = {
  data: PropTypes.array,
  cost: PropTypes.array,
  hours: PropTypes.array,
  search: PropTypes.array
};
