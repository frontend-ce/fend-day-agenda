import React from 'react';
import { render } from '@testing-library/react';
import { PlusButton } from './PlusButton';

test('renders PlusButton', () => {
  const { getByText } = render(<PlusButton />);
  const element = getByText(/PlusButton/i);
  expect(element).toBeInTheDocument();
});