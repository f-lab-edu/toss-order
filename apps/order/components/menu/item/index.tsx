import { Box, HStack } from '@chakra-ui/react';
import { useSetRecoilState } from 'recoil';
import { Text } from './text';
import { Image } from './image';
import { menuDetailModalStore } from '../../../app/stores';
import { useModal } from '../../../app/lib/utils/useModal';

export const Item = ({ id, imageSrc, name, price }: ItemPropsT): JSX.Element => {
  const setMenuDetailID = useSetRecoilState(menuDetailModalStore);
  const { onOpen } = useModal('menuDetail');
  const onClick = () => {
    setMenuDetailID({ id, quantity: 1 });
    onOpen();
  };
  return (
    <Box boxSizing="border-box" flexBasis={0} flexGrow={3} h="100%">
      <HStack gap={0} h="100%" p="8px" w="100%">
        <HStack
          borderBottom="2px lightgray solid"
          borderLeft="2px lightgray solid"
          borderRadius="8px 12px 12px 8px"
          borderRight="3px lightgray solid"
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
