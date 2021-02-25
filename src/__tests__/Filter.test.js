import React from 'react';
import {
  render,
  screen,
  clothes,
  CATEGORIES,
  PICTURES_DIRECTORY,
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
});
