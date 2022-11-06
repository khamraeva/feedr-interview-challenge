import React from 'react';
import { render } from '@testing-library/react';
import MenuPreview from './MenuPreview';

const previewListMockData = [
  {
    id: 1001,
    name: 'Kale Caesar Pasta, Turmeric Satay Broccoli & Lemon Cashew Greens',
    dietaries: ['v', 've', 'df', 'gf', 'n!'],
  },
  {
    id: 1002,
    name: 'Hake & Smoky Chickpeas, Brown Rice & Quinoa, Roasted Roots',
    dietaries: ['gf', 'df', 'rsf'],
  },
  {
    id: 1003,
    name: 'Dill & Swiss Chard Potato Cakes, Summer Tabbouleh & Roasted Roots',
    dietaries: ['gf', 'df', 'v', 've', 'n!'],
  }
];

describe('MenuPreview', () => {
  it('Should contain right items in preview list', () => {
    const { container } = render(<MenuPreview previewList={previewListMockData} />);
    const items = container.querySelectorAll('li.item');
    expect(items).toHaveLength(3);
    expect(items[0]).toHaveTextContent('Kale Caesar Pasta, Turmeric Satay Broccoli & Lemon Cashew Greens');
    expect(items[1]).toHaveTextContent('Hake & Smoky Chickpeas, Brown Rice & Quinoa, Roasted Roots');
    expect(items[2]).toHaveTextContent('Dill & Swiss Chard Potato Cakes, Summer Tabbouleh & Roasted Roots');
  });

  it('Should render empty list', () => {
    const { container } = render(<MenuPreview previewList={[]} />);
    const items = container.querySelectorAll('li.item');
    expect(items).toHaveLength(0);
  });
});
