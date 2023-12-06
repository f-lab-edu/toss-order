import { useRecoilValue } from 'recoil';
import { Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { commaizeNumber } from '@toss/utils';
import { orderHistoryStore } from '../../../app/stores/history-store';

export const BillItems = () => {
  const { sumPrice, ...basketItems } = useRecoilValue(orderHistoryStore);

  return sumPrice ? (
    Object.entries(basketItems)?.map(([id, data]) => (
      <HStack
        key={id}
        borderTop="1px solid lightgray"
        justifyContent="space-between"
        px="4%"
        py="10px"
        w="100%"
      >
        <VStack alignItems="flex-start" flexBasis="50%" gap={0}>
          <Text fontSize="lg" fontWeight={900}>
            {data.name}
          </Text>
          <Text fontSize="md" fontWeight={700}>
            {commaizeNumber(data.price)}원
          </Text>
        </VStack>
        <Flex alignItems="center" flexBasis="20%">
          <Text fontSize="md" fontWeight={700}>
            {data.count}개
          </Text>
          {/* <Text fontSize="md" fontWeight={700}> */}
          {/*  {`${data.orderedTime.replace(':', '시 ')}분`} */}
          {/* </Text> */}
        </Flex>
        <VStack alignItems="flex-end" flexBasis="30%" gap={0}>
          <Text fontSize="lg" fontWeight={700}>
            {commaizeNumber(data.totalPrice)}원
          </Text>
          {/* <Text fontSize="md" fontWeight={700}> */}
          {/*  {data.count}개 */}
          {/* </Text> */}
        </VStack>
      </HStack>
    ))
  ) : (
    <Flex alignItems="center" justifyContent="center" my="30px">
      <Text fontSize="lg" fontWeight={700}>
        아직 주문하신 내역이 없어요.
      </Text>
    </Flex>
  );
};
