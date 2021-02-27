import React from 'react';
import PropTypes from 'prop-types';

const Banner = props => {
  const { clothes, picturesDirectory } = props;
  const item = clothes[Math.floor(Math.random() * clothes.length)];
  const style = {
    backgroundImage: `url(${picturesDirectory[item.image[0]][item.image[1]]})`,
  };
  return (
    <div key={item.id}>
      <div style={style} className="picture-banner" />
      <span>{item.price}</span>
      <span>{item.name}</span>
    </div>
  );
};

Banner.propTypes = {
  clothes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired,
    ])).isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
  picturesDirectory: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default Banner;
