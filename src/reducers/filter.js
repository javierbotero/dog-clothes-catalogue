import { FILTER } from '../constants/constants';

const filter = (state = 'All', action) => {
  if (action.type === FILTER) {
    return action.payload;
  }
  return state;
};

export default filter;
