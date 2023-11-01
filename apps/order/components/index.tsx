'use client';

import { Box, Button, Container, Flex, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import { innerText } from '../app/utils';

enum ThemeColors {
  blue = 'var(--main-theme-blue)',
  orange = 'var(--main-theme-orange)',
  pink = 'var(--main-theme-pink)',
}

enum ReactangleShapeWidth {
  square = 14,
  wide = '92%',
  rectangle = 'auto',
}

interface ButtonProps {
  color: keyof typeof ThemeColors;
  onClick: () => void;
  content: string | number | React.ReactElement;
}

interface AbstracteButtonProps extends ButtonProps {
  shape?: 'square' | 'wide' | 'rectangle';
}

const AbstractButton = ({ color, onClick, content, shape }: AbstracteButtonProps) => (
  <Button
    bgColor={ThemeColors[color]}
    color="white"
    // w={ReactangleShapeWidth[shape]}
    w={ReactangleShapeWidth[shape]}
    h={shape === 'square' ? 14 : 10}
    onClick={onClick}
    _hover={{ bgColor: null }}
    boxShadow="xl"
  >
    {content}
  </Button>
);

const RectangleButton = ({ color, onClick, content }: ButtonProps) => (
  <AbstractButton color={color} shape="rectangle" content={content} onClick={onClick} />
);

const SquareButton = ({ color, onClick, content }: ButtonProps) => (
  <AbstractButton color={color} shape="square" content={content} onClick={onClick} />
);

const WideButton = ({ color, onClick, content }: ButtonProps) => (
  <AbstractButton color={color} shape="wide" content={content} onClick={onClick} />
);

const THeader = () => (
  <Flex
    bgColor="white"
    top={0}
    w="100%"
    h={16}
    alignItems="center"
    justifyContent="space-around"
    position="sticky"
    zIndex={1}
  >
    <RectangleButton color="blue" content={innerText('직원 호출')} onClick={() => {}} />
    <RectangleButton color="blue" content={innerText('계산서 보기')} onClick={() => {}} />
  </Flex>
);

export { RectangleButton, SquareButton, WideButton, THeader };
