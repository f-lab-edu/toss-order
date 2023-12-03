import { Box, HStack } from '@chakra-ui/react';
import { useSetRecoilState } from 'recoil';
import { Text } from './text';
import { Image } from './image';
import { menuDetailModalID } from '../../../app/stores/modal-state-store';
import { useStoredModalState } from '../../../app/lib/utils/useStoredModalState';

type ItemT = {
  id: string;
  imageSrc: string;
  name: string;
  price: { defaultPrice: number };
};

export const Item = ({ id, imageSrc, name, price }: ItemT): JSX.Element => {
  const setMenuDetailID = useSetRecoilState(menuDetailModalID);
  const { onOpen } = useStoredModalState('menuDetail');
  const onClick = () => {
    setMenuDetailID(id);
    onOpen();
  };
  return (
    // TODO: Modal 구현 후 onClick에 메뉴 상세보기 Modal을 띄우는 action이 할당될 예정. Ticket: toss-order #22, toss-order #23
    <Box flexBasis={0} flexGrow={3} h="100%" onClick={onClick}>
      <HStack gap={0} h="100%" p="6px" w="100%">
        <HStack
          border="1px black solid"
          borderRadius="8px 12px 12px 8px"
          boxShadow="xl"
          gap={0}
          h="100%"
          justifyContent="space-between"
          w="100%"
        >
          <Text name={name} price={price} />
          <Image alt={name} src={imageSrc} />
        </HStack>
      </HStack>
    </Box>
  );
};
