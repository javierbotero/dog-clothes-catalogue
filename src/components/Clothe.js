import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { useSelector } from 'react-redux';
import Banner from './Banner';
import dog from '../assets/images/cold/cold2.jpeg';

const Clothe = ({ match, picturesDirectory, setHome }) => {
  useEffect(() => {
    setHome(false);
  }, []);
  const clothes = useSelector(state => state.items.clothes);
  const clothe = clothes.find(item => item.id === parseInt(match.params.id, 10));
  const style = {
    backgroundImage: `url(${picturesDirectory[clothe.image[0]][clothe.image[1]]})`,
  };
  return (
    <div className="page clothe">
      <div className="info-dog">
        <h3>{clothe.name}</h3>
        <h5>{clothe.category}</h5>
        <div>
          <div style={style} className="picture-banner" />
          <span>{clothe.price}</span>
        </div>
        <div>
          {clothe.description}
        </div>
      </div>
      <div className="divider">
        <div>
          FREE SHIPPING
        </div>
        <div>
          When your order cover $50.00
        </div>
        <img src={dog} alt="dog" />
      </div>
      <div className="banner-item-page">
        <Banner clothes={clothes} picturesDirectory={picturesDirectory} />
      </div>
    </div>
  );
};

Clothe.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
  picturesDirectory: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  setHome: PropTypes.func.isRequired,
};

export default Clothe;
