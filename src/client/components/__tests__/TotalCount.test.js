import React from 'react';
import { render } from '@testing-library/react';
import TotalCount from '../TotalCount';

describe('TotalCount', () => {
  it('Count total selected number', () => {
      const { getByTestId } = render(<TotalCount total={5} />);
      const countValue = getByTestId('count').textContent;
      expect(countValue).toEqual('5 items');
  });
});
