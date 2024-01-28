import { Flex, Text, VStack } from '@chakra-ui/react';
import { commaizeNumber } from '@toss/utils';
import { useRecoilValue } from 'recoil';
import { basketItemsStore } from '../../../app/stores';

export const ConfirmItems = () => {
  const { sumPrice, sumCount, ...basketItems } = useRecoilValue(basketItemsStore);
  return (
    sumCount &&
    Object.entries(basketItems)?.map(([id, data]) => (
      <Flex
        key={id}
        borderTop="1px solid lightgray"
        justifyContent="space-between"
        px="4%"
        py="10px"
        w="100%"
      >
        <VStack alignItems="flex-start" flexBasis="40%" gap={0}>
          <Text fontSize="lg" fontWeight={900}>
            {data.name}
          </Text>
          <Text fontSize="md" fontWeight={500}>
            {commaizeNumber(data.price)}원
          </Text>
        </VStack>
        <Flex alignItems="center" flexBasis="10%" justifyContent="flex-end">
          <Text fontSize="md" fontWeight={700}>
            {`${data.count}개`}
          </Text>
        </Flex>
        <Flex alignItems="center" flexBasis="40%" gap={0} justifyContent="flex-end">
          <Text fontSize="lg" fontWeight={800}>
            {commaizeNumber(data.totalPrice)}원
          </Text>
        </Flex>
      </Flex>
    ))
  );
};
