import { Text as ChakraText, VStack } from '@chakra-ui/react';
import { commaizeNumber } from '@toss/utils';

export const Text = ({ detail, name, price }: MenuDetailTextT): JSX.Element => (
  <VStack alignItems="flex-start" gap={0} ml="4%" w="100%">
    <ChakraText fontSize="2xl" fontWeight={900}>
      {name}
    </ChakraText>
    <ChakraText fontSize="lg" fontWeight={700}>
      {commaizeNumber(price.defaultPrice)}원
    </ChakraText>
    <ChakraText fontSize="md" fontWeight={600} mt="1rem" wordBreak="keep-all">
      {detail}
    </ChakraText>
  </VStack>
);
