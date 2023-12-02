import { format } from 'date-fns';
import { atom, selector, RecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { basketItemsStore } from './basket-store';

type BasketItemT = {
  count: number;
  name: string;
  totalPrice: number;
};

type BasketItemsT = { [key: string]: BasketItemT } & {
  sumCount: number;
  sumPrice: number;
};

type ItemT = {
  id: string;
  name: string;
  orderTime: string;
  price: number;
  quantity: number;
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
    const currentTime = format(new Date(), 'HH:mm');

    const newItems = Object.entries(basketItems).reduce((acc, [id, item]) => {
      acc[id + currentTime] = { ...item, orderTime: currentTime };
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
