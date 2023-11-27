import _ from 'lodash';
import { atom, RecoilState, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { menuItemsStore } from './menu-store';

type MenuItemT = {
  detail: string;
  imageSrc: string;
  name: string;
  price: { defaultPrice: number };
};

type BasketItemT = {
  count: number;
  name: string;
  totalPrice: number;
};

type BasketItemsT = {
  [key: string]: BasketItemT;
};

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
      totalPrice: menuItem.price.defaultPrice * ((itemInBasket?.count || 0) + 1),
    };

    set(basketItemsStore, {
      ...basket,
      [id]: itemToBeUpdated,
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

      set(basketItemsStore, newBasket);
    } else {
      const itemToBeUpdated: BasketItemT = {
        count: itemInBasket.count - 1,
        name: itemInBasket.name,
        totalPrice: menuItem.price.defaultPrice * (itemInBasket.count - 1),
      };

      set(basketItemsStore, {
        ...basket,
        [id]: itemToBeUpdated,
      });
    }
  },
});
