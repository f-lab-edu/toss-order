import { fetchMenuItems } from '../database';

type MenuItemsT = {
  [key: string]: { name: string; detail: string; image: string; price: { [key: string]: number } };
};

const getMenuItems = async (): Promise<MenuItemsT | null> => fetchMenuItems();

export default getMenuItems;
