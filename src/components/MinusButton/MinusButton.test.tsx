import { render } from '@testing-library/react';
import { MinusButton } from './MinusButton';

test('renders MinusButton', () => {
  const { getByText } = render(<MinusButton />);
  const element = getByText(/MinusButton/i);
  expect(element).toBeInTheDocument();
});