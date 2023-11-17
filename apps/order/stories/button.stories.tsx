import type { Meta, StoryObj } from '@storybook/react';
import { CTAButton } from 'ui/button';

const meta: Meta<typeof CTAButton> = {
  title: 'CTA Button',
  component: CTAButton,
  argTypes: {
    content: {
      control: { type: 'text' },
      description: '버튼 내부에 들어갈 내용',
    },
    className: {
      control: { type: 'radio' },
      options: ['bg-blue', 'bg-orange', 'bg-pink'],
      description: '버튼의 배경 색상',
    },
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof CTAButton>;

export const CTAButtonStory: Story = {
  args: {
    content: <>Do Something</>,
    className: 'bg-blue',
  },
};
