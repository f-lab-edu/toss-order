import { useQuery } from 'react-query';
import axios from 'axios';

const refineMenuItems = async () => {
  const menuItems = await axios.get('/api/menu-list').then(({ data }) => data);
  return Object.entries(menuItems).reduce((acc, [key, { image, ...rest }]) => {
    acc[key] = { imageSrc: image, ...rest };
    return acc;
  }, {});
};

const useMenuItems = () => useQuery('menu-list', refineMenuItems);

export default useMenuItems;
