/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { retrieveItems } from '../actions/actions';

const initialState = {
  status: 'idle',
  clothes: [
    {
      name: 'Stylish Coats and Jackets',
      category: 'Coats and Jackets',
      price: 100,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      image: ['Coats and Jackets', 1],
      id: 0,
    },
    {
      name: 'Cozy Pow Protection',
      category: 'Pow Protection',
      price: 100,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      image: ['Pow Protection', 1],
      id: 1,
    },
    {
      name: 'Beautiful Sweaters and Hoodies',
      category: 'Sweaters and Hoodies',
      price: 100,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      image: ['Sweaters and Hoodies', 1],
      id: 2,
    },
    {
      name: 'Wonderful Cold Weather Gear',
      category: 'Cold Weather Gear',
      price: 100,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      image: ['Cold Weather Gear', 1],
      id: 3,
    },
    {
      name: 'Amazing Jerseys',
      category: 'Jerseys',
      price: 100,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      image: ['Jerseys', 1],
      id: 4,
    },
    {
      name: 'Nice Pajamas',
      category: 'Pajamas',
      price: 100,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      image: ['Pajamas', 1],
      id: 5,
    },
  ],
  error: '',
};

const items = createSlice({
  name: 'items',
  initialState,
  reducers: {
    removeError: state => { state.error = ''; },
  },
  extraReducers: {
    [retrieveItems.pending]: state => { state.status = 'loading'; },
    [retrieveItems.fulfilled]: (state, action) => {
      if (Array.isArray(action.payload)) {
        state.clothes = action.payload;
        state.status = 'Completed';
        state.error = '';
      } else {
        state.clothes = initialState.clothes;
        state.status = 'Error Loading from API';
        state.error = 'Error Loading resources, try later!';
      }
    },
    [retrieveItems.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

const { removeError } = items.actions;

export default items.reducer;

export { removeError };
