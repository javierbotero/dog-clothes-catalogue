import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import ShallowRenderer from 'react-test-renderer/shallow';
import {
  CATEGORIES,
  PICTURES_DIRECTORY,
} from './test-util/test-util';
import App from '../containers/App';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Tests for App', () => {
  const retrieveItems = jest.fn(() => ({ type: 'someType', payload: [] }));
  const changeCategory = jest.fn();
  it('Checks that API is called with array response', () => {
    const store = mockStore();
    console.log(store);
    const renderer = new ShallowRenderer();
    renderer.render(
      <Provider store={store}>
        <App
          categories={CATEGORIES}
          picturesDirectory={PICTURES_DIRECTORY}
          retrieveItems={retrieveItems}
          changeCategory={changeCategory}
        />
      </Provider>,
    );
    expect(retrieveItems.mockReset.call.length).toBe(1);
  });
});
