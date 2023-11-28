import { useRecoilValue } from 'recoil';
import { countTotalItemsInBasket, getTotalPriceInBasket } from '../../../app/stores';
import { Button as CheckoutButton } from '../checkout/button';

export const Button = () => {
  const count: number = useRecoilValue(countTotalItemsInBasket);
  const totalPrice: number = useRecoilValue(getTotalPriceInBasket);

  return <CheckoutButton actionDescription="장바구니 보기" count={count} onClick={() => {}} price={totalPrice} />;
};
