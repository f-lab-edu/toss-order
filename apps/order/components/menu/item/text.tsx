import { Text as ChakraText, VStack } from '@chakra-ui/react';
import { commaizeNumber } from '@toss/utils';

export const Text = ({ name, price }: ItemTextT): JSX.Element => (
  <VStack alignItems="flex-start" ml="6%">
    <ChakraText fontSize="xl" fontWeight={900}>
      {name ?? ''}
    </ChakraText>
    <ChakraText fontSize="md" fontWeight={500}>
      {price ? commaizeNumber(price.defaultPrice) : 0}원
    </ChakraText>
  </VStack>
);
