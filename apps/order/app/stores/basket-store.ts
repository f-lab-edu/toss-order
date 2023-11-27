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

type UpdateBasketParameterT = {
  quantity: 1 | -1;
  id: string;
};

const { persistAtom } = recoilPersist();

export const basketItemsStore: RecoilState<BasketItemsT> = atom({
  key: 'basketItemsStore',
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const updateBasketStore = selector({
  key: 'updateBasketStore',
  get: () => null,
  set: ({ set, get }, { quantity, id }: UpdateBasketParameterT) => {
    const menuItem: MenuItemT = get(menuItemsStore)[id];

    const basket: BasketItemsT = get(basketItemsStore);

    const itemInBasket: BasketItemT | undefined = basket[id];

    const itemToBeUpdated: BasketItemT = {
      count: itemInBasket?.count || 0,
      name: itemInBasket?.name || menuItem?.name || '',
    };

    itemToBeUpdated.count += quantity;
    itemToBeUpdated.totalPrice = menuItem.price.defaultPrice * itemToBeUpdated.count;

    set(basketItemsStore, {
      ...basket,
      [id]: itemToBeUpdated,
    });
  },
});
