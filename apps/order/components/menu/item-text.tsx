import { Text, VStack } from '@chakra-ui/react';
import { commaizeNumber } from '@toss/utils';

type ItemTextT = {
  name: string;
  price: number;
};

export const ItemText = ({ name, price }: ItemTextT): JSX.Element => (
  <VStack alignItems="flex-start" ml="2%" w="60%">
    <Text mb="4px">{name}</Text>
    <Text>{commaizeNumber(price)}원</Text>
  </VStack>
);
