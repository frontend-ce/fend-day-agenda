import type { Meta, StoryObj } from '@storybook/react';
import { DeadComponent } from "./DeadComponent"

export type Story = StoryObj<typeof DeadComponent>

const meta: Meta<typeof DeadComponent> = {
  title: 'Components/DeadComponent',
  component: DeadComponent,
} satisfies Meta<typeof DeadComponent>

export default meta;

export const Default: Story = {}