import { Box, Flex } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { basketItemsStore } from '../../app/stores';
import { Button as OpenBasketButton } from '../buttons/open-basket';

export const Footer = () => {
  const basketItems = useRecoilValue(basketItemsStore);
  const hasItemInBasket = Object.keys(basketItems).length > 0;

  return hasItemInBasket ? (
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
        <OpenBasketButton />
      </Box>
    </Flex>
  ) : null;
};
