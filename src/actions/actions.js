import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  TOKEN,
  URL,
  SYMBOL_COMPANIES,
  FILTER,
} from '../constants/constants';
import initCreator from '../helpers/helpers';

const retrieveItems = createAsyncThunk(
  'items/fetchItems',
  async () => {
    const init = initCreator();
    const response = await fetch(`${URL}${SYMBOL_COMPANIES}?apikey=${TOKEN}`, init)
      .then(data => {
        console.log(data);
        return data.json().then(data => data);
      })
      .catch(err => {
        console.log(err);
        return err;
      });

    return response;
  },
);

const changeCategory = category => ({
  type: FILTER,
  payload: category,
});

export {
  retrieveItems,
  changeCategory,
};
