import { useRecoilValue } from 'recoil';
import { countTotalItemsInBasket, getTotalPriceInBasket } from '../../../app/stores';
import { Button as CheckoutButton } from '../checkout/button';

export const Button = () => {
  const count: number = useRecoilValue(countTotalItemsInBasket);
  const totalPrice: number = useRecoilValue(getTotalPriceInBasket);

  // TODO: Modal 구현 후 onClick에 장바구니 Modal을 띄우는 action이 할당될 예정. Ticket: toss-order #22, toss-order #28
  return <CheckoutButton actionDescription="장바구니 보기" count={count} onClick={() => {}} price={totalPrice} />;
};
