import axios, { AxiosResponse } from 'axios';

type GetT = (url: string) => Promise<AxiosResponse<JSON | never>> | void;

export const get: GetT = url => {
  try {
    return axios.get(url).then(res => res);
  } catch (err) {
    if (process.env.NODE_ENV === 'development') console.error(err);

    return null;
  }
};
