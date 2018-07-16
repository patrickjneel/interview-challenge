import React from 'react';
import './mobile-table.css';
import PropTypes from 'prop-types';

const MobileTable = ({ mobileData }) => {
  const elements = mobileData.reverse().map(heading => {
    return (
      <tr>
        <td>{heading.hourOfDay}</td>
        <td>{heading.cost}</td>
        <td>{heading.avgCpc}</td>
        <td>{heading.avgPosition}</td>
        <td>{heading.impressions}</td>
        <td>{heading.maxImpressions}</td>
        <td>{heading.searchImpressionShare}</td>
        <td>{heading.ctr}</td>
        <td>{heading.clicks}</td>
      </tr>
    );
  });

  return (
    <div className='chart'>
      <h1 className='event-desc'>Mobile Data For Tampa Boat Show</h1>
      <table>
        <tbody>
          <tr>
            <th>Hour of Day</th>
            <th>Cost</th>
            <th>Click Per Cost</th>
            <th>Average Position</th>
            <th>Impressions</th>
            <th>Max Impressions</th>
            <th>Search Impressions</th>
            <th>Click Through Rate</th>
            <th>Clicks</th>
          </tr>
          {elements}
        </tbody>
      </table>
    </div>
  );
};

export default MobileTable;

MobileTable.propTypes = {
  mobileData: PropTypes.array
};
