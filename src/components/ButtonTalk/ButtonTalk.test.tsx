import { render } from '@testing-library/react';
import { ButtonTalk } from './ButtonTalk';

test('renders ButtonTalk', () => {
  const { getByText } = render(<ButtonTalk />);
  const element = getByText(/ButtonTalk/i);
  expect(element).toBeInTheDocument();
});