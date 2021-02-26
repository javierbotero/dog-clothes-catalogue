import {
  render,
  screen,
  clothes,
  CATEGORIES,
  PICTURES_DIRECTORY,
  fireEvent,
} from './test-util/test-util';
import Filter from '../components/Filter';

describe('Testing Filter', () => {
  it('Expects the text All in the screen', () => {
    const handler = jest.fn();
    render(
      <Filter
        selectFilter={handler}
        category="All"
        clothes={clothes}
        categories={CATEGORIES}
        picturesDirectory={PICTURES_DIRECTORY}
      />,
    );
    expect(screen.getByDisplayValue('All')).toHaveValue('All');
  });

  it('Expects The handler to be called when user clicks a category', () => {
    const handler = jest.fn();
    render(
      <Filter
        selectFilter={handler}
        category="All"
        clothes={clothes}
        categories={CATEGORIES}
        picturesDirectory={PICTURES_DIRECTORY}
      />,
    );
    fireEvent.click(screen.queryByRole('select'));
    fireEvent.click(screen.queryByText(clothes[0].category));
    expect(handler.mock.calls.length).toBe(1);
  });
  it('When use selects a category an element should be with the same text as this category', () => {
    const handler = jest.fn();
    render(
      <Filter
        selectFilter={handler}
        category="All"
        clothes={clothes}
        categories={CATEGORIES}
        picturesDirectory={PICTURES_DIRECTORY}
      />,
    );
    fireEvent.click(screen.queryByText(clothes[0].category));
    expect(screen.queryByText(clothes[0].category)).toBeInTheDocument();
  });
  it('Checks div with class products has no elements when a category do not have any', () => {
    const handler = jest.fn();
    render(
      <Filter
        selectFilter={handler}
        category="Unknown Category"
        clothes={clothes}
        categories={CATEGORIES}
        picturesDirectory={PICTURES_DIRECTORY}
      />,
    );
    const products = document.querySelector('.products');
    expect(products).toBeEmptyDOMElement();
  });
  it('Checks div with class products has elements when a category has any', () => {
    const handler = jest.fn();
    render(
      <Filter
        selectFilter={handler}
        category="All"
        clothes={clothes}
        categories={CATEGORIES}
        picturesDirectory={PICTURES_DIRECTORY}
      />,
    );
    const products = document.querySelector('.products');
    expect(products).not.toBeEmptyDOMElement();
  });
});
