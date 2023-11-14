import React from 'react';
import { Box, Text, Button, Flex, HStack, VStack, AspectRatio } from '@chakra-ui/react';
import Image from 'next/image';
import { commaizeNumber } from '@toss/utils';
import InnerText from 'packages/ui/utils/inner-text';
import { SquareButton } from './index';
import { BasketActions, ImageWithContainer } from '../app/utils';

interface MenuProps {
  name: string;
  price: number;
  onBasketCount: number;
  imageUrl?: string;
}

const Menu = ({ name, price, onBasketCount, imageUrl }: MenuProps) => {
  const { addBasket } = BasketActions();
  return (
    <HStack
      alignItems="center"
      marginBottom="6px"
      border="1px solid black"
      borderRadius="8px"
      backgroundColor="white"
      w="94%"
      h="24"
      gap={0}
    >
      <Box w="75%" h="100%">
        <HStack w="100%" h="100%">
          <VStack alignItems="flex-start" w="60%" ml="2%">
            <Text mb="4px">{name}</Text>
            <Text>{commaizeNumber(price)}원</Text>
          </VStack>
          <Box w="40%" h="100%">
            {imageUrl && <ImageWithContainer src={imageUrl} alt="" />}
          </Box>
        </HStack>
      </Box>
      <Flex p={0} w="30%" h="100%" justifyContent="center" alignItems="center">
        {onBasketCount === 0 ? (
          <SquareButton color="blue" onClick={() => addBasket(name)} content={InnerText('담기')} />
        ) : (
          <SquareButton color="orange" onClick={() => addBasket(name)} content={InnerText(onBasketCount)} />
        )}
      </Flex>
    </HStack>
  );
};

export default Menu;
