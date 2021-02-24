import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import retrieveItems from '../actions/actions';

const App = () => {
  const clothes = useSelector(state => state.items.clothes);
  const statusItems = useSelector(state => state.items.status);
  const [hideLoading, setHideLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    if (statusItems === 'pending') {
      setHideLoading(false);
    }
    console.log(clothes);
  }, [statusItems, setHideLoading, clothes, dispatch]);
  if (statusItems === 'idle') {
    dispatch(retrieveItems());
    console.log(clothes);
  }
  // let str = '';
  // clothes.forEach(clothe => { str += clothe.price; });

  return (
    <div>
      <div className={hideLoading ? 'hide' : ''}>
        Loading...
      </div>
      The prices are:
    </div>
  );
};

export default App;
