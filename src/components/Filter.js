import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';

const Filter = props => {
  const {
    selectFilter,
    category,
    clothes,
    categories,
    picturesDirectory,
  } = props;
  const filterClothes = (clothes, category) => {
    let filteredObjects;
    if (category === 'All') {
      filteredObjects = clothes;
    } else {
      filteredObjects = clothes.filter(element => element.category === category);
    }
    const result = filteredObjects.map(obj => (
      <div key={obj.name}>
        {obj.name}
        {obj.category}
        {obj.price}
        {obj.description}
        {picturesDirectory[obj.image[0]][obj.image[1]]}
      </div>
    ));
    return result;
  };
  return (
    <div className="filter-component">
      <select value={category} onChange={selectFilter}>
        {categories.map(ctg => <option key={ctg} value={ctg}>{ctg}</option>)}
      </select>
      <div className="products">{filterClothes(clothes, category)}</div>
    </div>
  );
};

Filter.propTypes = {
  selectFilter: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  clothes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.arrayOf(oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired,
    ])),
  })).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  picturesDirectory: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default Filter;
