import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Button, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { commaizeNumber } from '@toss/utils';
import { orderHistoryStore } from '../../../app/stores/history-store';

export const BillItems = () => {
  const { sumPrice, ...basketItems } = useRecoilValue(orderHistoryStore);

  return (
    <VStack>
      {Object.entries(basketItems)?.map(([id, data]) => (
        <HStack key={id} borderBottom="1px solid lightgray" justifyContent="space-between" px="4%">
          <HStack alignItems="flex-start" py="6px">
            <VStack alignItems="flex-start" ml="6%">
              <Text>{data.name}</Text>
            </VStack>
            <Text>{`${data.orderTime.replace(':', '시 ')}분`}</Text>
            <VStack alignItems="flex-start" ml="6%">
              <Text>{commaizeNumber(data.totalPrice)}원</Text>
              <Text>{data.count}개</Text>
            </VStack>
          </HStack>
        </HStack>
      ))}
      <Text>{commaizeNumber(sumPrice)}원</Text>
    </VStack>
  );
};
