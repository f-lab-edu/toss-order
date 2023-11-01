import { Meta } from '@storybook/react';
import { RectangleButton, SquareButton, WideButton } from '../components';

const buttonStoriesMeta: Meta = {
  title: 'Buttons',
  argTypes: {
    content: {
      control: { type: 'text' },
      defaultValue: '텍스트',
      description: '버튼 내부에 들어갈 텍스트',
    },
    color: {
      control: { type: 'radio' },
      options: ['blue', 'orange', 'pink'],
      defaultValue: 'blue',
      description: '색상',
    },
  },
};

export default buttonStoriesMeta;

const createButtonStory = (ButtonComponent: React.ElementType) => {
  const ButtonTemplate = ({ content, color }: { content: string; color: string }) => (
    <ButtonComponent content={content} color={color} />
  );

  const Story = ButtonTemplate.bind({});
  Story.args = {
    content: '버튼',
    color: 'blue',
  };

  return Story;
};

export const Rectangle = createButtonStory(RectangleButton);
export const Square = createButtonStory(SquareButton);
export const Wide = createButtonStory(WideButton);
