import { Box, Flex } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { basketItemsStore } from '../../app/stores';
import { PrimaryCTAButton } from '../buttons/primary-cta-button';
import { useModal } from '../../app/lib/utils/useModal';

export const Footer = () => {
  const [basketItems] = useRecoilState(basketItemsStore);
  const { onOpen } = useModal('basket');

  return (
    basketItems.sumCount > 0 && (
      <Flex
        alignItems="center"
        bgColor="white"
        borderTop="4px solid lightgray"
        bottom="-1px"
        flexDirection="column"
        h="12vh"
        justifyContent="center"
        position="sticky"
        px="4%"
        w="100%"
        zIndex={2}
      >
        <Box color="white" h="100%" pb="3vh" pt="1.5vh" w="100%">
          <PrimaryCTAButton
            count={basketItems.sumCount}
            onClick={onOpen}
            price={basketItems.sumPrice}
            text="장바구니 보기"
          />
        </Box>
      </Flex>
    )
  );
};
