import { useRecoilState, useRecoilValue } from 'recoil';
import { basketAtom, orderHistoryAtom } from './atoms';

export const BasketActions = () => {
  const test;
  const [basket, setBasket] = useRecoilState(basketAtom);
  const addBasket = (name: string, amount: number | undefined = 1) => {
    const tempBasket = { ...basket };
    if (tempBasket[name]) {
      tempBasket[name] += amount;
    } else {
      tempBasket[name] = 1;
    }
    if (tempBasket[name] === 0) delete tempBasket[name];

    setBasket(tempBasket);
  };
  const clearBasket = () => {
    setBasket({});
  };
  const getMenuCount = (name: string) => basket[name] || 0;

  return { addBasket, clearBasket, getMenuCount };
};

export const useGetSumOf = (area: 'basket' | 'history'): number => {
  const target = area === 'basket' ? basketAtom : orderHistoryAtom;
  const targetState = useRecoilValue(target);

  return 1;
};
