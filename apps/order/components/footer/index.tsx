import { Box, Flex } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { basketItemsStore } from '../../app/stores';
import { PrimaryCTAButton } from '../buttons/primary-cta-button';
import { useStoredModalState } from '../../app/lib/utils/useStoredModalState';

export const Footer = () => {
  const [basketItems] = useRecoilState(basketItemsStore);
  const { onOpen } = useStoredModalState('basket');

  // useEffect(() => {
  //   if (basketItems.sumCount === 0) {
  //     setBasketItems({ sumCount: 0, sumPrice: 0 });
  //     onClose();
  //   }
  // }, [basketItems.sumCount]);

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
        <Box color="white" flex={0.7} h="100%" pb="10px" w="100%">
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
