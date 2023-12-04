import { Flex, Text as ChakraText, HStack, VStack } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { Text } from './text';
import { Image } from './image';
import { menuDetailModalStore } from '../../../../app/stores/modal-state-store';
import { AddButton, SubtractButton } from './button';

type ItemT = {
  detail: string;
  imageSrc: string;
  name: string;
  price: { defaultPrice: number };
};

export const Item = ({ detail, imageSrc, name, price }: ItemT): JSX.Element => {
  const { quantity } = useRecoilValue(menuDetailModalStore);
  return (
    <VStack w="100%">
      <HStack aspectRatio={2} justifyContent="space-between" mt="2vh" px="4%" w="100%">
        <Flex h="100%" mr="2%" mt="2vh" w="100%">
          <Text detail={detail} name={name} price={price} />
        </Flex>
        <Flex h="100%">
          <Image alt={name} src={imageSrc} />
        </Flex>
      </HStack>
      <HStack h="5vh" justifyContent="space-evenly" my="2vh" w="100%">
        <ChakraText flexGrow="2" fontSize="2xl" fontWeight={900} pl="10%">
          수량
        </ChakraText>
        <Flex flexGrow="2" justifyContent="space-evenly">
          <SubtractButton />
          <ChakraText fontSize="2xl" fontWeight={900}>
            {quantity}
          </ChakraText>
          <AddButton />
        </Flex>
      </HStack>
    </VStack>
  );
};
