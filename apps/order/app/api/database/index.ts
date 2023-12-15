import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://211.250.82.235:44400/api',
  withCredentials: true,
  headers: { 'Cache-Control': 'max-age=10800' },
});

const fetcher = async (url: string) => {
  try {
    const response = await instance.get(url);

    return response.data;
  } catch (err) {
    if (process.env.NODE_ENV === 'development') console.error(err);

    return null;
  }
};

export const fetchMenuItems = async () => fetcher('/menu-items');

export const fetchMenuCategories = async () => fetcher('/menu-categories');
