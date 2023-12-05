import { useRecoilValue } from 'recoil';
import { Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { commaizeNumber } from '@toss/utils';
import { basketItemsStore } from '../../../app/stores';
import { AddButton, SubtractButton } from '../../buttons/edit-item-count';
import { DeleteButton } from '../../buttons/edit-item-count/button';

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

  return sumCount ? (
    Object.entries(basketItems)?.map(([id, data]: [string, BasketItemT]) => (
      <HStack key={id} borderTop="1px solid lightgray" justifyContent="space-between" px="4%">
        <HStack>
          <DeleteButton id={id} />
          <VStack alignItems="flex-start" ml="10px" py="6px">
            <Text fontSize="lg" fontWeight={900}>
              {data.name}
            </Text>
            <Text fontSize="md" fontWeight={800}>
              {commaizeNumber(data.totalPrice)}원
            </Text>
          </VStack>
        </HStack>
        <HStack justifyContent="space-evenly" w="40%">
          <SubtractButton id={id} />
          <Flex flexBasis="40%" justifyContent="center">
            <Text fontSize="2xl" fontWeight={900}>
              {data.count}
            </Text>
          </Flex>
          <AddButton id={id} />
        </HStack>
      </HStack>
    ))
  ) : (
    <Flex alignItems="center" justifyContent="center" my="auto" w="100%">
      <Text fontSize="2xl" fontWeight={700}>
        장바구니가 비었습니다.
      </Text>
    </Flex>
  );

  // return sumCount > 0 ? (
  //   Object.entries(basketItems)?.map(([id, data]: [string, BasketItemT]) => (
  //     <HStack key={id} borderTop="1px solid lightgray" justifyContent="space-between" px="4%">
  //       <VStack alignItems="flex-start" py="6px">
  //         <Text fontSize="lg" fontWeight={900}>
  //           {data.name}
  //         </Text>
  //         <Text fontSize="md" fontWeight={800}>
  //           {commaizeNumber(data.totalPrice)}원
  //         </Text>
  //       </VStack>
  //       <HStack justifyContent="space-evenly" w="40%">
  //         <RemoveButton id={id} />
  //         <Flex flexBasis="40%" justifyContent="center">
  //           <Text fontSize="2xl" fontWeight={900}>
  //             {data.count}
  //           </Text>
  //         </Flex>
  //         <AddButton id={id} />
  //       </HStack>
  //     </HStack>
  //   ))
  // ) : (
  //   <Text>장바구니가 비었습니다.</Text>
  // );
};
