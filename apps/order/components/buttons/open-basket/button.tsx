import { useDisclosure } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { countTotalItemsInBasket, getTotalPriceInBasket } from '../../../app/stores';
import { Basket } from '../../modals/basket';
import { PrimaryCTAButton as CheckoutButton } from '../primary-cta-button/primary-cta-button';

export const Button = ({ count }: { count: number }) => {
  // const count: number = useRecoilValue(countTotalItemsInBasket);
  // const totalPrice: number = useRecoilValue(getTotalPriceInBasket);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <CheckoutButton actionDescription="장바구니 보기" count={count} onClick={onOpen} price={0} />
      <Basket isOpen={isOpen} onClose={onClose} />
    </>
  );
};
