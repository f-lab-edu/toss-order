import { format } from 'date-fns';
import { atom, selector, RecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';

type BasketItemT = {
  count: number;
  name: string;
  price: number;
  totalPrice: number;
};

type BasketItemsT = { [key: string]: BasketItemT } & {
  sumCount: number;
  sumPrice: number;
};

type ItemT = {
  count: number;
  id: string;
  name: string;
  orderedTime: string;
  price: number;
  totalPrice: number;
};

type OrderHistoryItemsT = { [key: string]: ItemT } & {
  sumPrice: number;
};

const { persistAtom } = recoilPersist();

export const orderHistoryStore: RecoilState<OrderHistoryItemsT> = atom({
  key: 'orderHistoryStore',
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const moveBasketToHistory = selector({
  key: 'moveBasketToHistory',
  get: () => null,
  set: ({ set, get }, basket: BasketItemsT) => {
    const currentHistory = get(orderHistoryStore);
    const { sumPrice, sumCount, ...basketItems } = basket;
    const currentTime = Date.now();

    const newItems = Object.entries(basketItems).reduce((acc, [id, item]) => {
      acc[`${id}-${currentTime.toString()}`] = { ...item, orderedTime: format(currentTime, 'HH:mm') };
      return acc;
    }, {});
    const newSumPrice: number = (currentHistory.sumPrice || 0) + sumPrice;

    set(orderHistoryStore, {
      ...currentHistory,
      ...newItems,
      sumPrice: newSumPrice,
    });
  },
});
