import { Meta } from '@storybook/react';
import { RectangleButton, SquareButton, WideButton } from '../components/TButton';

const buttonStoriesMeta: Meta = {
  title: 'Buttons',
  argTypes: {
    content: {
      control: { type: 'text' },
      defaultValue: '내용',
      description: '버튼 내부에 들어갈 내용',
    },
    color: {
      control: { type: 'radio' },
      options: ['blue', 'orange', 'pink'],
      defaultValue: 'blue',
      description: '색상',
    },
  },
};

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

export default buttonStoriesMeta;
export const Rectangle = createButtonStory(RectangleButton);
export const Square = createButtonStory(SquareButton);
export const Wide = createButtonStory(WideButton);
