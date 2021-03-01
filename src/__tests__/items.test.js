import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';
import items from '../reducers/items';

describe('Test items reducer', () => {
  it('Checks initial state', () => {
    const initialState = {
      status: 'idle',
      clothes: [
        {
          name: 'Stylish Coats and Jackets',
          category: 'Coats and Jackets',
          price: 100,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
          image: ['Coats and Jackets', 1],
          id: 0,
        },
        {
          name: 'Cozy Pow Protection',
          category: 'Pow Protection',
          price: 100,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
          image: ['Pow Protection', 1],
          id: 1,
        },
        {
          name: 'Beautiful Sweaters and Hoodies',
          category: 'Sweaters and Hoodies',
          price: 100,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
          image: ['Sweaters and Hoodies', 1],
          id: 2,
        },
        {
          name: 'Wonderful Cold Weather Gear',
          category: 'Cold Weather Gear',
          price: 100,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
          image: ['Cold Weather Gear', 1],
          id: 3,
        },
        {
          name: 'Amazing Jerseys',
          category: 'Jerseys',
          price: 100,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
          image: ['Jerseys', 1],
          id: 4,
        },
        {
          name: 'Nice Pajamas',
          category: 'Pajamas',
          price: 100,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
          image: ['Pajamas', 1],
          id: 5,
        },
      ],
      error: '',
    };
    const result = items(undefined, {});
    expect(result).toStrictEqual(initialState);
  });
  it('Checks change status when to pending when proper type is sent', () => {
    const result = items(
      { status: 'idle' },
      { type: 'items/fetchItems/pending' },
    );
    expect(result).toStrictEqual({ status: 'loading' });
  });
  it('Checks clothes are populated with proper action.type', () => {
    const result = items(
      {
        status: 'loading',
        clothes: [],
        error: 'An error',
      },
      {
        type: 'items/fetchItems/fulfilled',
        payload: [{ price: 100 }],
      },
    );
    expect(result).toStrictEqual({
      status: 'Completed',
      clothes: [{ price: 100 }],
      error: '',
    });
  });
  it('Checks the error item is filled when proper action.type is sent', () => {
    const result = items(
      {
        status: 'Completed',
        clothes: [{ price: 100 }],
        error: '',
      },
      {
        type: 'items/fetchItems/rejected',
        payload: 'Some error',
      },
    );
    expect(result).toStrictEqual({
      status: 'failed',
      clothes: [{ price: 100 }],
      error: 'Some error',
    });
  });
});
