import coat1 from '../assets/images/coats/coat1.jpeg';
import coat2 from '../assets/images/coats/coat2.jpeg';
import coat3 from '../assets/images/coats/coat3.jpeg';
import pow1 from '../assets/images/pows/pow1.jpeg';
import pow2 from '../assets/images/pows/pow2.jpeg';
import pow3 from '../assets/images/pows/pow3.jpeg';
import sweater1 from '../assets/images/sweaters/sw1.jpeg';
import sweater2 from '../assets/images/sweaters/sw2.jpeg';
import sweater3 from '../assets/images/sweaters/sw3.jpeg';
import cold1 from '../assets/images/cold/cold1.jpeg';
import cold2 from '../assets/images/cold/cold2.jpeg';
import cold3 from '../assets/images/cold/cold3.jpeg';
import jersey1 from '../assets/images/jerseys/jersey1.jpeg';
import jersey2 from '../assets/images/jerseys/jersey2.jpeg';
import jersey3 from '../assets/images/jerseys/jersey3.jpeg';
import pajama1 from '../assets/images/pajamas/pajamas1.jpeg';
import pajama2 from '../assets/images/pajamas/pajamas2.jpeg';
import pajama3 from '../assets/images/pajamas/pajamas3.jpeg';

const FILTER = 'filter/statusFilter';
const TOKEN = process.env.REACT_APP_TOKEN_FMP;
const URL = 'https://financialmodelingprep.com/api/v3/quote/';
const SYMBOL_COMPANIES = 'AAPL,MSFT,AMZN,GOOG,FB,TSLA,BABA,TSM,JPM,V,JNJ,WMT,DIS,NVDA,PG,BAC,PYPL,HD,INTC,NFLX';
const CATEGORIES = ['All', 'Coats and Jackets', 'Pow Protection', 'Sweaters and Hoodies', 'Cold Weather Gear', 'Jerseys', 'Pajamas'];
const ADJECTIVES = ['playful', 'soft', 'energetic', 'loving', 'fluffy'];
const COATS_PICTURES = [coat1, coat2, coat3];
const POW_PICTURES = [pow1, pow2, pow3];
const SWEATER_PICTURES = [sweater1, sweater2, sweater3];
const COLD_PICTURES = [cold1, cold2, cold3];
const JERSEY_PICTURES = [jersey1, jersey2, jersey3];
const PAJAMA_PICTURES = [pajama1, pajama2, pajama3];
const PICTURES_DIRECTORY = {
  'Coats and Jackets': COATS_PICTURES,
  'Pow Protection': POW_PICTURES,
  'Sweaters and Hoodies': SWEATER_PICTURES,
  'Cold Weather Gear': COLD_PICTURES,
  Jerseys: JERSEY_PICTURES,
  Pajamas: PAJAMA_PICTURES,
};

export {
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
};
