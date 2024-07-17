import type { Meta, StoryObj } from '@storybook/react';
import { ReturnButton } from "./ReturnButton"

export type Story = StoryObj<typeof ReturnButton>

const meta: Meta<typeof ReturnButton> = {
  title: 'Components/ReturnButton',
  component: ReturnButton,
} satisfies Meta<typeof ReturnButton>

export default meta;

export const Default: Story = {}