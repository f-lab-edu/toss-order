import { Flex, Text } from '@chakra-ui/react';
import { commaizeNumber } from '@toss/utils';

export const Price = ({ price }: { price: number }) => (
  <Flex flexBasis={0} flexGrow={1} justifyContent="flex-end">
    <Text fontSize="md" fontWeight="extrabold">
      {commaizeNumber(price)}원
    </Text>
  </Flex>
);
