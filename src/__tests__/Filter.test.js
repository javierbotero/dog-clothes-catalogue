import React from 'react';
import {
  render,
  screen,
  clothes,
  CATEGORIES,
  PICTURES_DIRECTORY,
  renderer,
} from './test-util/test-util';
import Filter from '../components/Filter';

describe('Testing Filter', () => {
  it('Expects the text All in the screen', () => {
    const handler = jest.fn();
    const setHome = jest.fn();
    render(
      <Filter
        selectFilter={handler}
        category="All"
        clothes={clothes}
        categories={CATEGORIES}
        picturesDirectory={PICTURES_DIRECTORY}
        setHome={setHome}
      />,
    );
    expect(screen.getByDisplayValue('All')).toHaveValue('All');
  });

  it('Expects The text Coats and Jackets text to be on the screen when component has that category', () => {
    const handler = jest.fn();
    const setHome = jest.fn();
    render(
      <Filter
        selectFilter={handler}
        category="Coats and Jackets"
        clothes={clothes}
        categories={CATEGORIES}
        picturesDirectory={PICTURES_DIRECTORY}
        setHome={setHome}
      />,
    );
    const coats = screen.queryAllByText('Coats and Jackets');
    expect(coats.length).toBeGreaterThan(0);
  });
  it('Makes sure prints anchors with text More Info', () => {
    const handler = jest.fn();
    const setHome = jest.fn();
    render(
      <Filter
        selectFilter={handler}
        category="All"
        clothes={clothes}
        categories={CATEGORIES}
        picturesDirectory={PICTURES_DIRECTORY}
        setHome={setHome}
      />,
    );
    const anchor = screen.queryAllByText('More Info')[0];
    expect(anchor.innerHTML).toBe('More Info');
  });
  it('Checks div with class products has no elements when a category do not have any', () => {
    const handler = jest.fn();
    const setHome = jest.fn();
    render(
      <Filter
        selectFilter={handler}
        category="Unknown Category"
        clothes={clothes}
        categories={CATEGORIES}
        picturesDirectory={PICTURES_DIRECTORY}
        setHome={setHome}
      />,
    );
    const products = document.querySelector('.products');
    expect(products).toBeEmptyDOMElement();
  });
  it('Checks div with class products has elements when a category has any', () => {
    const handler = jest.fn();
    const setHome = jest.fn();
    render(
      <Filter
        selectFilter={handler}
        category="Coats and Jackets"
        clothes={clothes}
        categories={CATEGORIES}
        picturesDirectory={PICTURES_DIRECTORY}
        setHome={setHome}
      />,
    );
    const products = document.querySelector('.products');
    expect(products).not.toBeEmptyDOMElement();
  });
  it('renders correctly', () => {
    const handler = jest.fn();
    const setHome = jest.fn();
    const tree = renderer
      .create(
        <Filter
          selectFilter={handler}
          category="All"
          clothes={clothes}
          categories={CATEGORIES}
          picturesDirectory={PICTURES_DIRECTORY}
          setHome={setHome}
        />,
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
