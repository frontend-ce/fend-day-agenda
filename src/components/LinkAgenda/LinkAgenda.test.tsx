import { render } from '@testing-library/react';
import { LinkAgenda } from './LinkAgenda';

test('renders LinkAgenda', () => {
  const { getByText } = render(<LinkAgenda />);
  const element = getByText(/LinkAgenda/i);
  expect(element).toBeInTheDocument();
});