import { NumberInCircle } from 'ui/number-in-circle';
import { Box, Flex } from '@chakra-ui/react';

export const BasketItemsCount = ({ count }: { count: number }) => {
  const content = count ? <NumberInCircle number={count} /> : <Box />;
  return (
    <Flex flexBasis={0} flexGrow={1} h="100%" justifyContent="flex-start">
      {content}
    </Flex>
  );
};
