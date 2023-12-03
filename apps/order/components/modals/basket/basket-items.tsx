import { useRecoilValue } from 'recoil';
import { Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { commaizeNumber } from '@toss/utils';
import { basketItemsStore } from '../../../app/stores';
import { AddButton, RemoveButton } from '../../buttons/edit-item-count';

type BasketItemT = {
  count: number;
  name: string;
  totalPrice: number;
};

type BasketItemsT = { [key: string]: BasketItemT } & {
  sumCount: number;
  sumPrice: number;
};

export const BasketItems = () => {
  const { sumCount, sumPrice, ...basketItems }: BasketItemsT = useRecoilValue(basketItemsStore);

  return Object.entries(basketItems)?.map(([id, data]: [string, BasketItemT]) => (
    <HStack key={id} borderTop="1px solid lightgray" justifyContent="space-between" px="4%">
      <VStack alignItems="flex-start" py="6px">
        <Text fontSize="lg" fontWeight={900}>
          {data.name}
        </Text>
        <Text fontSize="md" fontWeight={800}>
          {commaizeNumber(data.totalPrice)}원
        </Text>
      </VStack>
      <HStack justifyContent="space-evenly" w="40%">
        <RemoveButton id={id} />
        <Flex flexBasis="40%" justifyContent="center">
          <Text fontSize="2xl" fontWeight={900}>
            {data.count}
          </Text>
        </Flex>
        <AddButton id={id} />
      </HStack>
    </HStack>
  ));
};
