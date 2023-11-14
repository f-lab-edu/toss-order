import React from 'react';
import { Button } from '@chakra-ui/react';
import InnerText from '../utils/inner-text';

const ThemeColors = {
  blue: 'var(--main-theme-blue)',
  orange: 'var(--main-theme-orange)',
  pink: 'var(--main-theme-pink)',
} as const;

const ReactangleShapeWidth = {
  square: 14,
  wide: '92%',
  rectangle: 'auto',
} as const;

interface CTAButtonProps {
  className: string;
  content: string | number | JSX.Element;
  onClick?: () => void;
}
// interface CTAButtonProps extends AbstractButtonProps<string> {}
// interface AddToBasketButtonProps extends AbstractButtonProps<string | number> {}

export const CTAButton = ({ className, content, onClick }: CTAButtonProps): JSX.Element => (
  <Button
    className={className}
    boxShadow="xl"
    color="white"
    onClick={onClick}
    w="100%"
    h="100%"
    _hover={{ bgColor: null }}
  >
    {content}
  </Button>
);

// export const CTAButton = ({ className, content, onClick }: CTAButtonProps): JSX.Element => (
//   <AbstractButton className={className} content={content} onClick={onClick} />
// );

// export const AddToBasketButton = ({ className, content, onClick }: AddToBasketButtonProps): JSX.Element => (
//   <AbstractButton className={className} onClick={onClick} content={InnerText(content)} />
// );

// const AbstractButton = ({ color, content, onClick, shape }: AbstractButtonProps) => (
//   <Button
//     bgColor={ThemeColors[color]}
//     boxShadow="xl"
//     color="white"
//     onClick={onClick}
//     w={ReactangleShapeWidth[shape]}
//     h={shape === 'square' ? 14 : 10}
//     _hover={{ bgColor: null }}
//   >
//     {content}
//   </Button>
// );

// export const RectangleButton = ({ color, content, onClick }: ButtonProps) => (
//   <AbstractButton color={color} content={content} shape="rectangle" onClick={onClick} />
// );
//
// export const SquareButton = ({ color, content, onClick }: ButtonProps) => (
//   <AbstractButton color={color} content={content} shape="square" onClick={onClick} />
// );
//
// export const WideButton = ({ color, content, onClick }: ButtonProps) => (
//   <AbstractButton color={color} content={content} shape="wide" onClick={onClick} />
// );
