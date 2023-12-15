import { atom, RecoilState } from 'recoil';

export const menuItemsStore: RecoilState<MenuItemsStoreT> = atom({
  key: 'menuItemsStore',
  default: {},
});

export const menuCategoriesStore: RecoilState<MenuCategoriesT> = atom({
  key: 'menuCategoriesStore',
  default: {},
});
