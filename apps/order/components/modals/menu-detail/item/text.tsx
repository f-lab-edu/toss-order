import { Text as ChakraText, VStack } from '@chakra-ui/react';
import { commaizeNumber } from '@toss/utils';

type ItemTextT = {
  detail: string;
  name: string;
  price: { [key: string]: number };
};

export const Text = ({ detail, name, price }: ItemTextT): JSX.Element => (
  <VStack alignItems="flex-start" gap={0} ml="6%" w="100%">
    <ChakraText fontSize="2xl" fontWeight={900}>
      {name}
    </ChakraText>
    <ChakraText fontSize="lg" fontWeight={700}>
      {commaizeNumber(price.defaultPrice)}원
    </ChakraText>
    <ChakraText fontSize="md" fontWeight={700} mt="1rem">
      {detail}
    </ChakraText>
  </VStack>
);
