import * as deps from './test-util/test-util';
import {
  changeCategory,
} from '../actions/actions';

describe('Actions', () => {
  it('Checks that changeCategory creates the proper action object', () => {
    const result = {
      type: deps.FILTER,
      payload: 'My Custom Action',
    };
    expect(changeCategory('My Custom Action', deps.FILTER)).toStrictEqual(result);
  });
});
