import { Box, HStack } from '@chakra-ui/react';
import { ItemText } from './item-text';
import { ItemImage } from './item-image';

type MenuDisplayAreaT = {
  props: {
    imageSrc: string;
    price: number;
    name: string;
  };
};

export const MenuItem = ({ props: { imageSrc, name, price } }: MenuDisplayAreaT): JSX.Element => (
  // TODO: Modal 구현 후 onClick에 메뉴 상세보기 Modal을 띄우는 action이 할당될 예정. Ticket: toss-order #22, toss-order #23
  <Box w="75%" h="100%" onClick={() => {}}>
    <HStack w="100%" h="100%" gap={0} justifyContent="space-between">
      <ItemText name={name} price={price} />
      <ItemImage alt={name} src={imageSrc} />
    </HStack>
  </Box>
);
