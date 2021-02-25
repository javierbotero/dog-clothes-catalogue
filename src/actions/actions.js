import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  TOKEN,
  URL,
  SYMBOL_COMPANIES,
  FILTER,
  PICTURES_DIRECTORY,
  ADJECTIVES,
} from '../constants/constants';
import initCreator from '../helpers/helpers';

const retrieveItems = createAsyncThunk(
  'items/fetchItems',
  async () => {
    const init = initCreator();
    const categories = Object.keys(PICTURES_DIRECTORY);
    const response = await fetch(`${URL}${SYMBOL_COMPANIES}?apikey=${TOKEN}`, init)
      .then(data => data.json().then(items => {
        const result = [];
        let index = -1;
        for (let i = 0; i < items.length; i += 1) {
          index = index === categories.length - 1 ? 0 : index + 1;
          const name = `${ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)]} ${categories[index]}`;
          const category = categories[index];
          const image = [
            categories[index],
            Math.floor(Math.random() * PICTURES_DIRECTORY[categories[index]].length),
          ];
          const { price } = items[i];
          const itemClothe = {
            name,
            category,
            price,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
            image,
          };
          result.push(itemClothe);
        }
        return result;
      }))
      .catch(err => {
        console.log(err);
        return err;
      });

    return response;
  },
);

const changeCategory = category => ({
  type: FILTER,
  payload: category,
});

export {
  retrieveItems,
  changeCategory,
};
