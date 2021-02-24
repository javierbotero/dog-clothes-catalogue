import { createAsyncThunk } from '@reduxjs/toolkit';
import { TOKEN, URL, SYMBOL_COMPANIES } from '../constants/constants';
import initCreator from '../helpers/helpers';

const retrieveItems = createAsyncThunk(
  'items/fetchItems',
  async () => {
    console.log('retrieveItems() Disptached');
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

export default retrieveItems;
