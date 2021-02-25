import React from 'react';
import PropTypes from 'prop-types';
import { CATEGORIES } from '../constants/constants';

const Filter = props => {
  const { selectFilter, category, clothes } = props;
  const filterClothes = (clothes, category) => {
    console.log(clothes, category);
    const filteredObjects = clothes.filter(element => element.category === category);
    const result = filteredObjects.map(obj => (
      <div key={obj.name}>
        {obj.name}
        {obj.category}
        {obj.price}
        {obj.description}
        {obj.image}
      </div>
    ));
    console.log(result);
    return result;
  };
  return (
    <div className="filter-component">
      <select value={category} onChange={selectFilter}>
        {CATEGORIES.map(ctg => <option key={ctg} value={ctg}>{ctg}</option>)}
      </select>
      <div className="products">{filterClothes(clothes, category)}</div>
    </div>
  );
};

Filter.propTypes = {
  selectFilter: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  clothes: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Filter;
