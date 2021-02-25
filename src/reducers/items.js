/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { retrieveItems } from '../actions/actions';

const initialState = {
  status: 'idle',
  clothes: [
    {
      name: '',
      category: '',
      price: 100,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      image: ['Coats and Jackets', 1],
    },
    {
      name: '',
      category: '',
      price: 100,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      image: ['Coats and Jackets', 1],
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
      state.clothes = action.payload;
      state.status = 'Completed';
      state.error = '';
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
