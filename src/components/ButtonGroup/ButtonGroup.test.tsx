import { render } from '@testing-library/react';
import { ButtonGroup } from './ButtonGroup';

test('renders ButtonGroup', () => {
  const { getByText } = render(<ButtonGroup />);
  const element = getByText(/ButtonGroup/i);
  expect(element).toBeInTheDocument();
});