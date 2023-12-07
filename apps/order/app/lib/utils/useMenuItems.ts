'use client';

import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { fetcher } from './fetcher';
import { menuItemsStore } from '../../stores';

const useMenuItems = () => {
  const setMenuItems = useSetRecoilState(menuItemsStore);
  try {
    return useQuery('menu-items', () => fetcher('/api/menu-items'), {
      suspense: true,
      onSuccess: (data: MenuItemsT) => setMenuItems(data),
    });
  } catch {
    return null;
  }
};

export default useMenuItems;
