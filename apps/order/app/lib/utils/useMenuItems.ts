'use client';

import { useQuery } from '@tanstack/react-query';
import { fetcher } from './fetcher';

const useMenuItems = () => {
  try {
    return useQuery({
      queryKey: ['menu-items'],
      queryFn: () => fetcher('/api/menu-items'),
      staleTime: 1000 * 60 * 10,
    });
  } catch {
    return null;
  }
};

export default useMenuItems;
