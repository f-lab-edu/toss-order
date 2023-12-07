import { fetchMenuItems } from '../database';

const getMenuItems = async (): Promise<MenuItemsT | null> => fetchMenuItems();

export default getMenuItems;
