import { fetchMenuCategories } from '../database';

const getMenuCategories = async (): Promise<MenuCategoriesT | null> => fetchMenuCategories();

export default getMenuCategories;
