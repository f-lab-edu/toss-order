import { atom, RecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';

type MenuItemsT = {
  [key: string]: { detail: string; image: string; name: string; price: { [key: string]: number } };
};

const { persistAtom } = recoilPersist();

export const basketItemsStore: RecoilState<MenuItemsT> = atom({
  key: 'basketItemsStore',
  default: {},
  effects_UNSTABLE: [persistAtom],
});
