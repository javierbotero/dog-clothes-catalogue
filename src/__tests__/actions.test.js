import * as deps from './test-util/test-util';
import {
  changeCategory, retrieveItems,
} from '../actions/actions';
import { OBJECT_DATA } from '../constants/constants';

describe('Actions', () => {
  afterEach(() => {
    deps.fetchMock.restore();
  });

  it('Check the response is an array of objects with price property', async () => {
    const response = [
      {
        price: 100,
      },
      {
        price: 200,
      },
    ];
    deps.fetchMock.getOnce(`${deps.URL}${deps.SYMBOL_COMPANIES}?apikey=${deps.TOKEN}`, {
      body: response,
      headers: 'content-type: application/json',
    });
    const store = deps.mockStore({
      items: {
        status: 'idle',
        clothes: [],
        error: '',
      },
      filter: 'All',
    });
    store.dispatch(retrieveItems(OBJECT_DATA))
      .then(() => {
        expect(store.getActions().length).toBe(response.length);
      })
      .catch(err => err);
  });

  it('Checks that changeCategory creates the proper action object', () => {
    const result = {
      type: deps.FILTER,
      payload: 'My Custom Action',
    };
    expect(changeCategory('My Custom Action', deps.FILTER)).toStrictEqual(result);
  });
});
