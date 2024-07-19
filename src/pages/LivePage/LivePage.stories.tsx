import type { Meta, StoryObj } from "@storybook/react";
import { LivePage } from ".";
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

export type Story = StoryObj<typeof LivePage>;

const meta: Meta<typeof LivePage> = {
  title: "Pages/Live Page",
  tags: ["autodocs"],
  component: LivePage,
};

export default meta;

const queryClient = new QueryClient();

export const Default: Story = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <LivePage />
    </BrowserRouter>
  </QueryClientProvider>
);