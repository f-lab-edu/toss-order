import { useQuery, UseQueryResult } from 'react-query';
import { fetcher } from './fetcher';

type MenuItemsT = {
  [key: string]: {
    detail: string;
    imageSrc: string;
    name: string;
    price: { defaultPrice: number };
  };
};

const useMenuItems: () => UseQueryResult<MenuItemsT | null> = () =>
  useQuery('menu-items', () => fetcher('/api/menu-items'), { suspense: true });

export default useMenuItems;
