import filter from '../reducers/filter';
import * as deps from './test-util/test-util';

describe('Test filter reducer', () => {
  it('Check correct initial state', () => {
    const result = filter(undefined, '');
    expect(result).toBe('All');
  });
  it('Check change of initial state for New', () => {
    const result = filter('All', { type: deps.FILTER, payload: 'New' });
    expect(result).toBe('New');
  });
});
