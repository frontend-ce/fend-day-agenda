import type { Meta, StoryObj } from '@storybook/react';
import { ButtonTalk } from "./ButtonTalk"

export type Story = StoryObj<typeof ButtonTalk>

const meta: Meta<typeof ButtonTalk> = {
  title: 'Components/ButtonTalk',
  component: ButtonTalk,
  args: {
    children: 'Talk',
    initialMode: true,
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    initialMode: {
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
    initialMode: true,
  },

}

export const Disabled: Story = {
  args: {
    children: "Disable",
    initialMode: false
  }
};