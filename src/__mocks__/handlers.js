import { rest } from 'msw';
import {
  URL,
  SYMBOL_COMPANIES,
  TOKEN,
} from '../constants/constants';

const handlers = [
  rest.get(`/${SYMBOL_COMPANIES}?apykeys=${TOKEN}`, (req, res, ctx) => res(
    ctx([
      { price: 100 },
      { price: 200 },
      { price: 300 },
    ]),
  )),
];

export default handlers;
