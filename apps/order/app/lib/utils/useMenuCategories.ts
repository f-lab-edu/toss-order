'use client';

import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { fetcher } from './fetcher';
import { menuCategoriesStore } from '../../stores';

const useMenuCategories = () => {
  const setMenuCategories = useSetRecoilState(menuCategoriesStore);
  try {
    return useQuery('menu-categories', () => fetcher('/api/menu-categories'), {
      suspense: true,
      onSuccess: (data: MenuCategoriesT) => setMenuCategories(data),
    });
  } catch {
    return null;
  }
};

export default useMenuCategories;
