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
  return (
    <div className="page clothe">
      <div className="info-dog">
        <h2>{clothe.name}</h2>
        <h5>{clothe.category}</h5>
        <div>
          <img src={picturesDirectory[clothe.image[0]][clothe.image[1]]} alt={clothe.name} className="picture-clothe" />
          <span>{clothe.price}</span>
        </div>
        <div className="description">
          {clothe.description}
        </div>
        <a className="more-info" href="/">Buy</a>
      </div>
      <div className="divider">
        <div>
          <div>
            FREE SHIPPING
          </div>
          <div>
            When your order cover $50.00
          </div>
        </div>
        <img src={dog} alt="dog" />
      </div>
      <div className="banner-item-page">
        <h3>This product other dogs find useful too</h3>
        <Banner clothes={clothes} picturesDirectory={picturesDirectory} />
        <a className="more-info" href="/">Go</a>
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
