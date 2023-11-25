import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://211.250.82.235:8000/api',
  withCredentials: true,
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
