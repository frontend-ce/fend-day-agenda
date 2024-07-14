import React from 'react';
import { render } from '@testing-library/react';
import { TestButton } from './TestButton';

test('renders TestButton', () => {
  const { getByText } = render(<TestButton />);
  const element = getByText(/TestButton/i);
  expect(element).toBeInTheDocument();
});