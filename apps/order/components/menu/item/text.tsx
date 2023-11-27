import { Text as ChakraText, VStack } from '@chakra-ui/react';
import { commaizeNumber } from '@toss/utils';

type ItemTextT = {
  name: string;
  price: number;
};

export const Text = ({ name, price }: ItemTextT): JSX.Element => (
  <VStack alignItems="flex-start" gap={2} ml="2%">
    <ChakraText>{name}</ChakraText>
    <ChakraText>{commaizeNumber(price)}원</ChakraText>
  </VStack>
);
