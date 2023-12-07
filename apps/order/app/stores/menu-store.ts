import { atom, RecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';

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
