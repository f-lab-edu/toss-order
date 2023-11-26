import { useQuery, UseQueryResult } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { fetcher } from './fetcher';
import { menuItemsStore } from '../../stores';

type MenuItemsT = {
  [key: string]: {
    detail: string;
    imageSrc: string;
    name: string;
    price: { defaultPrice: number };
  };
};

const useMenuItems: () => UseQueryResult<MenuItemsT | null> = () => {
  const setMenuItems = useSetRecoilState(menuItemsStore);
  return useQuery('menu-items', () => fetcher('/api/menu-items'), {
    suspense: true,
    onSuccess: data => setMenuItems(data),
  });
};

export default useMenuItems;
