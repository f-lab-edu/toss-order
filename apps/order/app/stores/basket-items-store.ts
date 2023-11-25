import { atom, RecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';

type BasketItemsT = {
  [key: string]: {
    count: number;
    detail: string;
    image: string;
    name: string;
    price: { [key: string]: number };
    totalPrice: number;
  };
};

const { persistAtom } = recoilPersist();

export const basketItemsStore: RecoilState<BasketItemsT> = atom({
  key: 'basketItemsStore',
  default: {},
  effects_UNSTABLE: [persistAtom],
});
