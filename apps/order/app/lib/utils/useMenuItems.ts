import { useQuery } from 'react-query';
import { fetcher } from './fetcher';

const refineMenuItems = async () => {
  const menuItems = await fetcher('/api/menu-list');
  return Object.entries(menuItems).reduce((acc, [key, { image, ...rest }]) => {
    acc[key] = { imageSrc: image, ...rest };
    return acc;
  }, {});
};

const useMenuItems = () => useQuery('menu-list', refineMenuItems);

export default useMenuItems;
