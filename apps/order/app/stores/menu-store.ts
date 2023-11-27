import { atom, RecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';

type MenuItemsStoreT = {
  [key: string]: {
    detail: string;
    imageSrc: string;
    name: string;
    price: { defaultPrice: number };
  };
};

const { persistAtom } = recoilPersist();

export const menuItemsStore: RecoilState<MenuItemsStoreT> = atom({
  key: 'menuItemsStore',
  default: {},
  effects_UNSTABLE: [persistAtom],
});
