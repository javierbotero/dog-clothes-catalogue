import React from 'react';
import '@testing-library/jest-dom';
import {
  render as rtlRender, fireEvent, screen,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import { createAsyncThunk, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Provider, useSelector } from 'react-redux';
import items from '../../reducers/items';
import filter from '../../reducers/filter';

const FILTER = 'filter/statusFilter';
const TOKEN = process.env.REACT_APP_TOKEN_FMP;
const URL = 'https://financialmodelingprep.com/api/v3/quote/';
const SYMBOL_COMPANIES = 'AAPL,MSFT,AMZN,GOOG,FB,TSLA,BABA,TSM,JPM,V,JNJ,WMT,DIS,NVDA,PG,BAC,PYPL,HD,INTC,NFLX';
const CATEGORIES = ['All', 'Coats and Jackets', 'Pow Protection', 'Sweaters and Hoodies', 'Cold Weather Gear', 'Jerseys', 'Pajamas'];
const ADJECTIVES = ['playful', 'soft', 'energetic', 'loving', 'fluffy'];
const COATS_PICTURES = ['coat1', 'coat1'];
const POW_PICTURES = ['pow1', 'pow2', 'pow3'];
const SWEATER_PICTURES = ['sweater1', 'sweater2', 'sweater3'];
const COLD_PICTURES = ['cold1', 'cold2', 'cold3'];
const JERSEY_PICTURES = ['jersey1', 'jersey2', 'jersey3'];
const PAJAMA_PICTURES = ['pajama1', 'pajama2', 'pajama3'];
const PICTURES_DIRECTORY = {
  'Coats and Jackets': COATS_PICTURES,
  'Pow Protection': POW_PICTURES,
  'Sweaters and Hoodies': SWEATER_PICTURES,
  'Cold Weather Gear': COLD_PICTURES,
  Jerseys: JERSEY_PICTURES,
  Pajamas: PAJAMA_PICTURES,
};
const clothes = [
  {
    name: 'product1',
    category: 'Coats and Jackets',
    price: 100,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    image: ['Coats and Jackets', 0],
    id: 2,
  },
];
const match = { params: { id: 0 } };

const render = (
  ui,
  {
    initialState,
    store = configureStore({
      reducer: {
        items,
        filter,
      },
    }),
    ...renderOptions
  } = {},
) => {
  // eslint-disable-next-line react/prop-types
  const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

const mockStore = configureMockStore([thunk]);

export * from '@testing-library/jest-dom';
export * from '@testing-library/react';

export {
  clothes,
  rest,
  setupServer,
  FILTER,
  TOKEN,
  URL,
  SYMBOL_COMPANIES,
  CATEGORIES,
  COATS_PICTURES,
  POW_PICTURES,
  SWEATER_PICTURES,
  COLD_PICTURES,
  JERSEY_PICTURES,
  PAJAMA_PICTURES,
  PICTURES_DIRECTORY,
  ADJECTIVES,
  render,
  fireEvent,
  screen,
  createAsyncThunk,
  ShallowRenderer,
  thunk,
  configureMockStore,
  fetchMock,
  mockStore,
  match,
  useSelector,
  renderer,
};

test('sample', () => {
  expect(1).toBe(1);
});
