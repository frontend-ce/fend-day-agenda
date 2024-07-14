import { render } from '@testing-library/react';
import { ButtonTalk } from './ButtonTalk';

test('renders ButtonTalk', () => {
  const { getByText } = render(<ButtonTalk children="Test" mode={undefined}/>);
  const element = getByText(/Test/i);
  expect(element).toBeInTheDocument();
});