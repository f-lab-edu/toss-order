import { Flex, Text } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { commaizeNumber } from '@toss/utils';
import { orderHistoryStore } from '../../../app/stores';

export const Footer = () => {
  const { sumPrice } = useRecoilValue(orderHistoryStore);
  return (
    <Flex borderTop="2px solid lightgray" h="0" justifyContent="center" mb="10px" minH="100px" w="100%">
      <Flex alignItems="center" h="100%" justifyContent="space-between" px="1.5rem" w="100%">
        <Flex flexBasis="30%">
          <Text fontSize="2xl" fontWeight={800}>
            합계
          </Text>
        </Flex>
        <Flex flexBasis="50%" justifyContent="flex-end">
          <Text fontSize="xl" fontWeight={800}>
            {commaizeNumber(sumPrice || 0)}원
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
