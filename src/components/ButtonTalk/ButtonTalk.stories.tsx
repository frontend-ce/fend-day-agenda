import type { Meta, StoryObj } from '@storybook/react';
import { ButtonTalk } from "./ButtonTalk"

export type Story = StoryObj<typeof ButtonTalk>

const meta: Meta<typeof ButtonTalk> = {
  title: 'Components/ButtonTalk',
  component: ButtonTalk,
  args: {
    children: 'Talk',
    mode: true,
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    mode: {
      control: {
        type: 'boolean',
      },
    }
  },
} satisfies Meta<typeof ButtonTalk>

export default meta;

export const Default: Story = {
  args: {
    children: "Enable",
    mode: true,
  },

}

export const Disabled: Story = {
  args: {
    children: "Disable",
    mode: false
  }
};