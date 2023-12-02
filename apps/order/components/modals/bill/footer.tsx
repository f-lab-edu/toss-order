import { Flex, Text } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { commaizeNumber } from '@toss/utils';
import { orderHistoryStore } from '../../../app/stores/history-store';

export const Footer = () => {
  const { sumPrice } = useRecoilValue(orderHistoryStore);
  return (
    <Flex borderTop="2px solid lightgray" h="100%" justifyContent="center" w="100%">
      <Flex alignItems="center" h="80%" justifyContent="space-between" mb="auto" px="10%" w="100%">
        <Text fontSize="2xl" fontWeight={800}>
          합계
        </Text>
        <Text fontSize="xl" fontWeight={800}>
          {commaizeNumber(sumPrice || 0)}원
        </Text>
      </Flex>
    </Flex>
  );
};
