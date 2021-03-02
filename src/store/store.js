import { configureStore } from '@reduxjs/toolkit';
import items from '../reducers/items';
import filter from '../reducers/filter';

const store = configureStore({
  reducer: {
    items,
    filter,
  },
});

export default store;
