import axios from 'axios';

const baseUrl = `${window.location.protocol}//${window.location.host}`;

export const fetcher = (url: string) => axios.get(`${baseUrl}${url}`).then(({ data }) => data);
