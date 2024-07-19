import { render } from '@testing-library/react';
import { MyAgenda } from './MyAgenda';

test('renders MyAgenda', () => {
  const { getByText } = render(<MyAgenda />);
  const element = getByText(/MyAgenda/i);
  expect(element).toBeInTheDocument();
});