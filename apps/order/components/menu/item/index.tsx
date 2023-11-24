import { Box, HStack } from '@chakra-ui/react';
import { Text } from './text';
import { Image } from './image';

type ItemT = {
  imageSrc: string;
  name: string;
  price: { defaultPrice: number };
};

export const Item = ({ imageSrc, name, price }: ItemT): JSX.Element => (
  // TODO: Modal 구현 후 onClick에 메뉴 상세보기 Modal을 띄우는 action이 할당될 예정. Ticket: toss-order #22, toss-order #23
  <Box h="100%" onClick={() => {}} w="75%">
    <HStack gap={0} h="100%" justifyContent="space-between" w="100%">
      <Text name={name} price={price} />
      <Image alt={name} src={imageSrc} />
    </HStack>
  </Box>
);
