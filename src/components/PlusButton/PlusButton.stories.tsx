import type { Meta, StoryObj } from '@storybook/react';
import { PlusButton } from "./PlusButton"

export type Story = StoryObj<typeof PlusButton>

const meta: Meta<typeof PlusButton> = {
  title: 'Components/PlusButton',
  component: PlusButton,
} satisfies Meta<typeof PlusButton>

export default meta;

export const Default: Story = {}