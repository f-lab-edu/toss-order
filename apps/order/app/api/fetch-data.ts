import axios, { AxiosResponse } from 'axios';

type GetT = ({ queryKey }) => Promise<AxiosResponse<JSON | null>> | void;

export const get: GetT = ({ queryKey }) => {
  console.log(queryKey);
  const [, url] = queryKey;
  try {
    return axios.get(url).then(res => res.data);
  } catch (err) {
    if (process.env.NODE_ENV === 'development') console.error(err);

    return null;
  }
};
