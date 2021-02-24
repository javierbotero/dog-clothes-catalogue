import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Filter from '../components/Filter';
import { retrieveItems, changeCategory } from '../actions/actions';

const App = () => {
  const clothes = useSelector(state => state.items.clothes);
  const statusItems = useSelector(state => state.items.status);
  const category = useSelector(state => state.filter);
  const [hideLoading, setHideLoading] = useState(true);
  const dispatch = useDispatch();
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
      <Filter selectFilter={selectFilter} category={category} />
    </div>
  );
};

export default App;
