import React from 'react';
import { render } from '@testing-library/react';
import MenuList from './MenuList';

const mockMenuList = [
  {
    id: 10018,
    name: 'Dark Chocolate Brownie',
    dietaries: ['v', 'gf'],
  },
  {
    id: 10019,
    name: 'Mangajo Pomegranate',
    dietaries: ['ve', 'df', 'gf'],
  },
  {
    id: 10020,
    name: 'Mangajo Acai',
    dietaries: ['ve', 'v', 'gf'],
  }
];

describe('MenuList', () => {
  it('Should contain right items in menu list', () => {
    const { container } = render(<MenuList menuList={mockMenuList} />);
    const items = container.querySelectorAll('li.item');
    expect(items).toHaveLength(3);
    expect(items[0]).toHaveTextContent('Dark Chocolate Brownie');
    expect(items[1]).toHaveTextContent('Mangajo Pomegranate');
    expect(items[2]).toHaveTextContent('Mangajo Acai');
  });

  it('Should render empty list', () => {
    const { container } = render(<MenuList menuList={[]} />);
    const items = container.querySelectorAll('li.item');
    expect(items).toHaveLength(0);
  });
});
