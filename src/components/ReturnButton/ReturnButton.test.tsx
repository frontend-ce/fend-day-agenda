import { render } from '@testing-library/react';
import { ReturnButton } from './ReturnButton';

test('renders ReturnButton', () => {
  const { getByText } = render(<ReturnButton />);
  const element = getByText(/ReturnButton/i);
  expect(element).toBeInTheDocument();
});