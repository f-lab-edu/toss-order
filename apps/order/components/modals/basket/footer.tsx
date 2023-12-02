import { Flex, useDisclosure } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { PrimaryCTAButton } from '../../buttons/primary-cta-button';
import { basketItemsStore } from '../../../app/stores';

export const Footer = ({ onBasketClose }: { onBasketClose: () => void }) => {
  const basketItems = useRecoilValue(basketItemsStore);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex alignItems="center" borderTop="2px solid lightgray" h="0" justifyContent="center" minH="80px" w="100%">
      <Flex h="60%" px="5%" w="100%">
        <PrimaryCTAButton onClick={onOpen} price={basketItems.sumPrice} text="주문하기" />
      </Flex>
      {/* TODO: 주문 확인 Modal 구현 후 할당될 예정 ticket: toss-order #34 */}
      {/* <ConfirmModal isOpen={isOpen} onBasketClose={onBasketClose} onClose={onClose} /> */}
    </Flex>
  );
};
