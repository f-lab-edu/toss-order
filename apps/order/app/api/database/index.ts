import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://211.250.82.235:8000/api',
  withCredentials: true,
});

const testConnection = async () => {
  try {
    const response = await instance.get('/');

    return response.status === 200 && response.statusText === 'OK';
  } catch {
    return false;
  }
};

const fetcher = async (url: string, maximumRetry: number = 3) => {
  if (maximumRetry === 0) return null;
  try {
    const response = await instance.get(url);

    return response.data;
  } catch (err) {
    if (process.env.NODE_ENV === 'development') console.error(err);

    if (await testConnection()) return fetcher(url, maximumRetry - 1);
  }
};

export const fetchMenuItems = async () => fetcher('/menu-items');
