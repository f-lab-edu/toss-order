'use client';

import { AspectRatio, Box, Button, Container, Flex, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { Icon } from '@chakra-ui/icons';
import { innerText } from '../app/utils';
import { basketAtom } from '../app/atoms';

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

export const RectangleButton = ({ color, onClick, content }: ButtonProps) => (
  <AbstractButton color={color} shape="rectangle" content={content} onClick={onClick} />
);

export const SquareButton = ({ color, onClick, content }: ButtonProps) => (
  <AbstractButton color={color} shape="square" content={content} onClick={onClick} />
);

export const WideButton = ({ color, onClick, content }: ButtonProps) => (
  <AbstractButton color={color} shape="wide" content={content} onClick={onClick} />
);

export const OpenBasketButton = (isOpen: boolean) => {
  const basket = useRecoilValue(basketAtom);
  return (
    <WideButton
      color="blue"
      content={innerText(
        `${Object.values(basket).reduce((a: number, b: number) => a + b, 0)} 장바구니 보기 0원`,
      )}
      onClick={() => {}}
    />
  );
};

export const NumberInCircle = ({ number }: { number: number }) => (
  <Flex h="80%" aspectRatio={1}>
    <Flex
      h="100%"
      justifyContent="center"
      alignItems="center"
      aspectRatio={1}
      bgColor="white"
      color="black"
      rounded="full"
      p={0}
    >
      {number}
    </Flex>
  </Flex>
);
