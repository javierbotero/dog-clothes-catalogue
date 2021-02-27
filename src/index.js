import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import store from './store/store';
import {
  CATEGORIES,
  PICTURES_DIRECTORY,
} from './constants/constants';
import { retrieveItems, changeCategory } from './actions/actions';
import './assets/style/style.css';

ReactDOM.render(
  <Provider store={store}>
    <App
      categories={CATEGORIES}
      picturesDirectory={PICTURES_DIRECTORY}
      retrieveItems={retrieveItems}
      changeCategory={changeCategory}
    />
  </Provider>,
  document.getElementById('root'),
);
