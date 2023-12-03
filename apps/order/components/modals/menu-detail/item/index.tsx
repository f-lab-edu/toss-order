import { Box, Flex, HStack, VStack } from '@chakra-ui/react';
import { Text } from './text';
import { Image } from './image';

type ItemT = {
  detail: string;
  imageSrc: string;
  name: string;
  price: { defaultPrice: number };
};

export const Item = ({ detail, imageSrc, name, price }: ItemT): JSX.Element => (
  <VStack aspectRatio={2} w="100%">
    <HStack h="100%" justifyContent="space-between" mt="2vh" px="4%" w="100%">
      <Flex h="100%" mr="10%" mt="2vh" w="100%">
        <Text detail={detail} name={name} price={price} />
      </Flex>
      <Flex h="100%">
        <Image alt={name} src={imageSrc} />
      </Flex>
    </HStack>
    <Box bgColor="red" h="30%" w="100%" />
  </VStack>
);
