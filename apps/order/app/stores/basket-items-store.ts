import { atom, RecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const basketItemsStore: RecoilState<{ [key: string]: number }> = atom({
  key: 'basketItemsStore',
  default: {},
  effects_UNSTABLE: [persistAtom],
});
