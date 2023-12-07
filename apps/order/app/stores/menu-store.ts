import { atom, RecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';

type MenuItemsStoreT = {
  [key: string]: {
    category: string;
    detail: string;
    imageSrc: string;
    name: string;
    order: number;
    price: { defaultPrice: number };
  };
};

type MenuCategoriesT = {
  [key: string]: {
    id: string;
  };
};

// const { persistAtom } = recoilPersist();

export const menuItemsStore: RecoilState<MenuItemsStoreT> = atom({
  key: 'menuItemsStore',
  default: {},
  // effects_UNSTABLE: [persistAtom],
});

export const menuCategoriesStore: RecoilState<MenuCategoriesT> = atom({
  key: 'menuCategoriesStore',
  default: {},
  // effects_UNSTABLE: [persistAtom],
});
