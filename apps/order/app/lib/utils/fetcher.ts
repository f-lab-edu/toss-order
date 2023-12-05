import axios from 'axios';

let baseUrl = '';
try {
  baseUrl = `${window.location.protocol}//${window.location.host}`;
} catch {}

export const fetcher = (url: string) => axios.get(`${baseUrl}${url}`).then(({ data }) => data);
