import _ from 'lodash';
import { atom, RecoilState, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { menuItemsStore } from './menu-store';

const { persistAtom } = recoilPersist();

export const basketItemsStore: RecoilState<BasketItemsT> = atom({
  key: 'basketItemsStore',
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const addItemInBasket = selector({
  key: 'addItemInBasketStore',
  get: () => null,
  set: ({ set, get }, id: string) => {
    const menuItem: MenuItemT = get(menuItemsStore)[id];
    const basket: BasketItemsT = get(basketItemsStore);
    const itemInBasket: BasketItemT | undefined = basket[id];

    const itemToBeUpdated: BasketItemT = {
      count: (itemInBasket?.count || 0) + 1,
      name: itemInBasket?.name || menuItem?.name || '',
      order: menuItem.order,
      price: menuItem.price.defaultPrice,
      totalPrice: menuItem.price.defaultPrice * ((itemInBasket?.count || 0) + 1),
    };

    set(basketItemsStore, {
      ...basket,
      [id]: itemToBeUpdated,
      sumCount: (basket.sumCount || 0) + 1,
      sumPrice: (basket.sumPrice || 0) + menuItem.price.defaultPrice,
    });
  },
});

export const removeItemFromBasket = selector({
  key: 'removeItemFromBasketStore',
  get: () => null,
  set: ({ set, get }, id: string) => {
    const menuItem: MenuItemT = get(menuItemsStore)[id];
    const basket: BasketItemsT = get(basketItemsStore);
    const itemInBasket: BasketItemT | undefined = basket[id];

    if (!itemInBasket) return;

    if (itemInBasket && itemInBasket.count === 1) {
      const newBasket: BasketItemsT = _.cloneDeep(basket);
      delete newBasket[id];

      set(basketItemsStore, {
        ...newBasket,
        sumCount: basket.sumCount - 1,
        sumPrice: basket.sumPrice - menuItem.price.defaultPrice,
      });
    } else {
      const itemToBeUpdated: BasketItemT = {
        count: itemInBasket.count - 1,
        name: itemInBasket.name,
        order: menuItem.order,
        price: menuItem.price.defaultPrice,
        totalPrice: menuItem.price.defaultPrice * (itemInBasket.count - 1),
      };

      set(basketItemsStore, {
        ...basket,
        [id]: itemToBeUpdated,
        sumCount: basket.sumCount - 1,
        sumPrice: basket.sumPrice - menuItem.price.defaultPrice,
      });
    }
  },
});

export const deleteItemFromBasket = selector({
  key: 'deleteItemFromBasketStore',
  get: () => null,
  set: ({ set, get }, id: string) => {
    const menuItem: MenuItemT = get(menuItemsStore)[id];
    const basket: BasketItemsT = get(basketItemsStore);
    const itemInBasket: BasketItemT | undefined = basket[id];

    const newBasket: BasketItemsT = _.cloneDeep(basket);
    delete newBasket[id];

    set(basketItemsStore, {
      ...newBasket,
      sumCount: basket.sumCount - itemInBasket.count,
      sumPrice: basket.sumPrice - itemInBasket.count * menuItem.price.defaultPrice,
    });
  },
});
