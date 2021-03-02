import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom';
import Banner from '../components/Banner';
import renderer from 'react-test-renderer';
import {
  render,
  PICTURES_DIRECTORY,
  clothes,
  screen,
} from './test-util/test-util';

describe('Tests banner', () => {
  it('Makes sure print the price of an item', () => {
    render(<Banner picturesDirectory={PICTURES_DIRECTORY} clothes={clothes} />);
    expect(screen.getAllByText(/\d*/i).length > 0).toBe(true);
  });
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Banner
          clothes={clothes}
          picturesDirectory={PICTURES_DIRECTORY}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
