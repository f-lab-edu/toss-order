import { Meta } from '@storybook/react';
import { CTAButton } from 'ui/Button';

const buttonStoriesMeta: Meta = {
  title: 'CTA Button',
  argTypes: {
    content: {
      control: { type: 'text' },
      defaultValue: 'Do Something',
      description: '버튼 내부에 들어갈 내용',
    },
    className: {
      control: { type: 'radio' },
      options: ['bg-blue', 'bg-orange', 'bg-pink'],
      defaultValue: 'bg-blue',
      description: '버튼의 배경 색상',
    },
  },
};

const createButtonStory = (ButtonComponent: React.ElementType) => {
  const ButtonTemplate = ({ className, content }: { className: string; content: string }) => (
    <ButtonComponent content={content} className={className} />
  );
  const Story = ButtonTemplate.bind({});
  Story.args = {
    content: 'Do Something',
    className: 'bg-blue',
  };

  return Story;
};

export default buttonStoriesMeta;
export const CTAButtonStory = createButtonStory(CTAButton);
