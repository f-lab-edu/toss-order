import { Box, Flex } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { basketItemsStore } from '../../app/stores';
import { PrimaryCTAButton } from '../buttons/primary-cta-button';

export const Footer = () => {
  const basketItems = useRecoilValue(basketItemsStore);

  return basketItems.sumCount > 0 ? (
    <Flex
      alignItems="center"
      bgColor="white"
      borderTop="4px solid lightgray"
      bottom="-1px"
      flexDirection="column"
      h="10vh"
      justifyContent="center"
      position="sticky"
      px="4%"
      w="100%"
      zIndex={1}
    >
      <Box color="white" flex={0.7} h="100%" pb="10px" w="100%">
        <PrimaryCTAButton
          count={basketItems.sumCount}
          onClick={() => {}}
          price={basketItems.sumPrice}
          text="장바구니 보기"
        />
      </Box>
    </Flex>
  ) : null;
};
