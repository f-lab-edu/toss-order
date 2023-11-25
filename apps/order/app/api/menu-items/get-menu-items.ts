import { fetchMenuItems } from '../database';

type MenuItemsT = {
  [key: string]: { detail: string; image: string; name: string; price: { [key: string]: number } };
};

const getMenuItems = async (): Promise<MenuItemsT | null> => fetchMenuItems();

export default getMenuItems;
