import { Text as ChakraText, VStack } from '@chakra-ui/react';
import { commaizeNumber } from '@toss/utils';

type ItemTextT = {
  name: string;
  price: { defaultPrice: number };
};

export const Text = ({ name, price }: ItemTextT): JSX.Element => (
  <VStack alignItems="flex-start" ml="2%">
    <ChakraText mb="4px">{name}</ChakraText>
    <ChakraText>{commaizeNumber(price.defaultPrice)}원</ChakraText>
  </VStack>
);
