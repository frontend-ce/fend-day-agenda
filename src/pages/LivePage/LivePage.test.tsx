import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { LivePage } from './LivePage';

test('renders LivePage', () => {
  const queryClient = new QueryClient();
  const { getByText } = render(
    <QueryClientProvider client={queryClient}>
      <LivePage />
    </QueryClientProvider>
  );
  const element = getByText(/Acontecendo agora:/i);
  expect(element).toBeInTheDocument();
});