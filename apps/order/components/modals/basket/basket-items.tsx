import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Box, Button, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { commaizeNumber } from '@toss/utils';
import { addItemInBasket, basketItemsStore, removeItemFromBasket } from '../../../app/stores';

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
  const addItem = useSetRecoilState(addItemInBasket);
  const removeItem = useSetRecoilState(removeItemFromBasket);

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
        <Button
          _hover={{ bgColor: null }}
          alignItems="flex-end"
          aspectRatio={1}
          bgColor="black"
          borderRadius="full"
          color="white"
          onClick={() => removeItem(id)}
          p={0}
          size="sm"
        >
          <Text fontSize="3xl" fontWeight={900}>
            -
          </Text>
        </Button>
        <Flex flexBasis="40%" justifyContent="center">
          <Text fontSize="2xl" fontWeight={900}>
            {data.count}
          </Text>
        </Flex>
        <Button
          _hover={{ bgColor: null }}
          alignItems="flex-end"
          aspectRatio={1}
          bgColor="black"
          borderRadius="full"
          color="white"
          onClick={() => addItem(id)}
          p={0}
          size="sm"
        >
          <Text fontSize="3xl" fontWeight={900}>
            +
          </Text>
        </Button>
      </HStack>
    </HStack>
  ));
};
