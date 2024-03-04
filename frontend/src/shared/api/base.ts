import axios from 'axios';

const BASE_API_URL = import.meta.env.VITE_API_URL;

const apiInstance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json; charset=utf-8',
  },
  transformRequest: [
    (data) => {
      return JSON.stringify(data);
    },
  ],
});

export default apiInstance;
