// import { format } from 'date-fns';
import { atom, selector, RecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import _ from 'lodash';
// import { menuItemsStore } from './menu-store';
// import { basketItemsStore } from './basket-store';

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
    // const currentTime = Date.now();
    console.log(basket);

    const historyToBeUpdated = _.cloneDeep(currentHistory);

    Object.entries(basketItems).map(([id, item]) => {
      if (currentHistory && currentHistory[id]) {
        historyToBeUpdated[id] = {
          ...currentHistory[id],
          totalPrice: currentHistory[id].totalPrice + item.totalPrice,
          count: currentHistory[id].count + item.count,
        };
      } else {
        historyToBeUpdated[id] = { id, ...item };
      }
    });

    const newSumPrice: number = (currentHistory.sumPrice || 0) + sumPrice;

    set(orderHistoryStore, {
      ...historyToBeUpdated,
      sumPrice: newSumPrice,
    });

    // const menuItem: MenuItemT = get(menuItemsStore)[id];
    // const basket: BasketItemsT = get(basketItemsStore);
    // const itemInBasket: BasketItemT | undefined = basket[id];
    //
    // if (!itemInBasket) return;
    //
    // if (itemInBasket && itemInBasket.count === 1) {
    //   const newBasket: BasketItemsT = _.cloneDeep(basket);
    //   delete newBasket[id];
    //
    //   set(basketItemsStore, {
    //     ...newBasket,
    //     sumCount: basket.sumCount - 1,
    //     sumPrice: basket.sumPrice - menuItem.price.defaultPrice,
    //   });
    // } else {
    //   const itemToBeUpdated: BasketItemT = {
    //     count: itemInBasket.count - 1,
    //     name: itemInBasket.name,
    //     price: menuItem.price.defaultPrice,
    //     totalPrice: menuItem.price.defaultPrice * (itemInBasket.count - 1),
    //   };
    //
    //   set(basketItemsStore, {
    //     ...basket,
    //     [id]: itemToBeUpdated,
    //     sumCount: basket.sumCount - 1,
    //     sumPrice: basket.sumPrice - menuItem.price.defaultPrice,
    //   });
    // }
  },
});
// export const moveBasketToHistory = selector({
//   key: 'moveBasketToHistory',
//   get: () => null,
//   set: ({ set, get }, basket: BasketItemsT) => {
//     const currentHistory = get(orderHistoryStore);
//     const { sumPrice, sumCount, ...basketItems } = basket;
//     const currentTime = Date.now();
//
//     const newItems = Object.entries(basketItems).reduce((acc, [id, item]) => {
//       acc[`${id}-${currentTime.toString()}`] = { ...item, orderedTime: format(currentTime, 'HH:mm') };
//       return acc;
//     }, {});
//     const newSumPrice: number = (currentHistory.sumPrice || 0) + sumPrice;
//
//     set(orderHistoryStore, {
//       ...currentHistory,
//       ...newItems,
//       sumPrice: newSumPrice,
//     });
//   },
// });
