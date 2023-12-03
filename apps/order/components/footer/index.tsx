import { Box, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { basketItemsStore } from '../../app/stores';
import { PrimaryCTAButton } from '../buttons/primary-cta-button';
import { BasketModal } from '../modals/basket';
import { useRecoilDisclosure } from '../../app/lib/utils/useDisclosure';

export const Footer = () => {
  const [basketItems, setBasketItems] = useRecoilState(basketItemsStore);
  // const { isOpen, onOpen, onClose } = useRecoilValue(disclosuresStore).basket;
  const { isOpen, onOpen, onClose } = useRecoilDisclosure('basket');
  // const test = useRecoilValue(disclosuresStore);
  // const name = 'basket';
  // console.log(test[name]);
  // const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (basketItems.sumCount === 0) {
      setBasketItems({});
      onClose();
    }
  }, [basketItems.sumCount]);

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
      >
        <Box color="white" flex={0.7} h="100%" pb="10px" w="100%">
          <PrimaryCTAButton
            count={basketItems.sumCount}
            onClick={onOpen}
            price={basketItems.sumPrice}
            text="장바구니 보기"
          />
        </Box>
        <BasketModal isOpen={isOpen} onClose={onClose} />
      </Flex>
    )
  );
};
