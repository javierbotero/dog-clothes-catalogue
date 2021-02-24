import React from 'react';
import PropTypes from 'prop-types';
import { CATEGORIES } from '../constants/constants';

const Filter = props => {
  const { selectFilter, category } = props;
  return (
    <div className="filter-component">
      <select value={category} onChange={selectFilter}>
        {CATEGORIES.map(ctg => <option key={ctg} value={ctg}>{ctg}</option>)}
      </select>
    </div>
  );
};

Filter.propTypes = {
  selectFilter: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

export default Filter;
