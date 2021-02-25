import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Filter from '../components/Filter';

const App = props => {
  const clothes = useSelector(state => state.items.clothes);
  const statusItems = useSelector(state => state.items.status);
  const category = useSelector(state => state.filter);
  const [hideLoading, setHideLoading] = useState(true);
  const dispatch = useDispatch();
  const {
    retrieveItems,
    changeCategory,
    categories,
    picturesDirectory,
  } = props;
  useEffect(() => {
    if (statusItems === 'pending') {
      setHideLoading(false);
    }
  }, [statusItems, setHideLoading, clothes, dispatch]);
  if (statusItems === 'idle') {
    dispatch(retrieveItems());
  }
  const selectFilter = e => {
    dispatch(changeCategory(e.target.value));
  };

  return (
    <div>
      <div className={hideLoading ? 'hide' : ''}>
        Loading...
      </div>
      <Filter
        selectFilter={selectFilter}
        category={category}
        clothes={clothes}
        categories={categories}
        picturesDirectory={picturesDirectory}
      />
    </div>
  );
};

App.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  picturesDirectory: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  retrieveItems: PropTypes.func.isRequired,
  changeCategory: PropTypes.func.isRequired,
};

export default App;
