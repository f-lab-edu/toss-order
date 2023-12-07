import { Box, HStack } from '@chakra-ui/react';
import { useSetRecoilState } from 'recoil';
import { Text } from './text';
import { Image } from './image';
import { menuDetailModalStore } from '../../../app/stores/modal-state-store';
import { useStoredModalState } from '../../../app/lib/utils/useStoredModalState';

type ItemT = {
  id: string;
  imageSrc: string;
  name: string;
  price: { defaultPrice: number };
};

export const Item = ({ id, imageSrc, name, price }: ItemT): JSX.Element => {
  const setMenuDetailID = useSetRecoilState(menuDetailModalStore);
  const { onOpen } = useStoredModalState('menuDetail');
  const onClick = () => {
    setMenuDetailID({ id, quantity: 1 });
    onOpen();
  };
  return (
    <Box boxSizing="border-box" flexBasis={0} flexGrow={3} h="100%">
      <HStack gap={0} h="100%" p="8px" w="100%">
        <HStack
          // boxShadow="inset 11px 11px 0px -10px rgba(0, 0, 0, 1), 11px 11px 0px -10px rgba(0, 0, 0, 1)"
          borderBottom="2px lightgray solid"
          borderLeft="2px lightgray solid"
          borderRadius="8px 12px 12px 8px"
          borderRight="2px lightgray solid"
          // borderTop="2px lightgray solid"
          // boxShadow="xl"
          boxSizing="border-box"
          cursor="pointer"
          gap={0}
          h="100%"
          justifyContent="space-between"
          onClick={onClick}
          w="100%"
        >
          <Text name={name} price={price} />
          <Image alt={name} src={imageSrc} />
        </HStack>
      </HStack>
    </Box>
  );
};
