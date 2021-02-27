import React, { useEffect } from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import Banner from './Banner';

const Filter = props => {
  const {
    selectFilter,
    category,
    clothes,
    categories,
    picturesDirectory,
    setHome,
  } = props;
  useEffect(() => {
    setHome(true);
  }, [setHome]);
  const filterClothes = (clothes, category) => {
    let filteredObjects;
    if (category === 'All') {
      filteredObjects = clothes;
    } else {
      filteredObjects = clothes.filter(element => element.category === category);
    }
    const result = filteredObjects.map(obj => {
      const style = {
        backgroundImage: `url(${picturesDirectory[obj.image[0]][obj.image[1]]})`,
      };
      return (
        <div key={obj.id} className="container-product">
          <h5>{obj.name}</h5>
          <span>{obj.category}</span>
          <span>{obj.price}</span>
          <div style={style} className="pictures-filter" />
          <a href={`/${obj.id}`}>{obj.name}</a>
        </div>
      );
    });
    return result;
  };
  return (
    <div className="page filter">
      <main>
        <select value={category} onChange={selectFilter}>
          {categories.map(ctg => <option key={ctg} value={ctg}>{ctg}</option>)}
        </select>
        <div className="products">{filterClothes(clothes, category)}</div>
      </main>
      <aside>
        <div>
          <Banner clothes={clothes} picturesDirectory={picturesDirectory} />
          <Banner clothes={clothes} picturesDirectory={picturesDirectory} />
        </div>
      </aside>
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
    ])).isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  picturesDirectory: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  setHome: PropTypes.func.isRequired,
};

export default Filter;
