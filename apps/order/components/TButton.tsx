'use client';

import React from 'react';
import { Button } from '@chakra-ui/react';

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

interface ButtonProps {
  color: keyof typeof ThemeColors;
  onClick: () => void | undefined;
  content: string | number | React.ReactElement;
}

interface AbstracteButtonProps extends ButtonProps {
  shape: 'square' | 'wide' | 'rectangle';
}

const AbstractButton = ({ color, content, onClick, shape }: AbstracteButtonProps) => (
  <Button
    bgColor={ThemeColors[color]}
    boxShadow="xl"
    color="white"
    onClick={onClick}
    w={ReactangleShapeWidth[shape]}
    h={shape === 'square' ? 14 : 10}
    _hover={{ bgColor: null }}
  >
    {content}
  </Button>
);

export const RectangleButton = ({ color, content, onClick }: ButtonProps) => (
  <AbstractButton color={color} content={content} shape="rectangle" onClick={onClick} />
);

export const SquareButton = ({ color, content, onClick }: ButtonProps) => (
  <AbstractButton color={color} content={content} shape="square" onClick={onClick} />
);

export const WideButton = ({ color, content, onClick }: ButtonProps) => (
  <AbstractButton color={color} content={content} shape="wide" onClick={onClick} />
);
