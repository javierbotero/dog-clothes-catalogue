import { createAsyncThunk } from '@reduxjs/toolkit';
import initCreator from '../helpers/helpers';

const retrieveItems = createAsyncThunk(
  'items/fetchItems',
  async objectData => {
    const init = initCreator();
    const categories = Object.keys(objectData.picturesDirectory);
    const response = await fetch(`${objectData.url}${objectData.symbolCompanies}?apikey=${objectData.token}`, init)
      .then(data => data.json().then(items => {
        if (!Array.isArray(items)) {
          throw new Error();
        }
        const result = [];
        let index = -1;
        for (let i = 0; i < items.length; i += 1) {
          index = index === categories.length - 1 ? 0 : index + 1;
          const name = `${objectData.adjectives[Math.floor(Math.random() * objectData.adjectives.length)]} ${categories[index]}`;
          const category = categories[index];
          const image = [
            categories[index],
            Math.floor(Math.random() * objectData.picturesDirectory[categories[index]].length),
          ];
          const { price } = items[i];
          const id = i;
          const itemClothe = {
            name,
            category,
            price,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
            image,
            id,
          };
          result.push(itemClothe);
        }
        return result;
      }))
      .catch(err => err);

    return response;
  },
);

const changeCategory = (category, filter) => ({
  type: filter,
  payload: category,
});

export {
  retrieveItems,
  changeCategory,
};
