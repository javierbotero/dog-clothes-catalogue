import React from 'react';
// import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { useSelector } from 'react-redux';

const Clothe = ({ match }) => {
  const clothes = useSelector(state => state.items.clothes);
  console.log(typeof match.params.id, clothes);
  const clothe = clothes.find(item => item.id === parseInt(match.params.id, 10));
  return (
    <div>
      <h3>{clothe.name}</h3>
      <h5>{clothe.category}</h5>
      <div>
        <img src={clothe.image} alt={clothe.name} />
        <span>{clothe.price}</span>
      </div>
      <div>
        {clothe.description}
      </div>
    </div>
  );
};

Clothe.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default Clothe;
