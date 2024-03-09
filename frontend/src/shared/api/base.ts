import axios from 'axios';

const MODE = import.meta.env.VITE_MODE;
let BASE_API_URL = '';

if (MODE === 'LOCAL') {
  const API_HOST = import.meta.env.VITE_API_HOST;
  const API_PORT = import.meta.env.VITE_API_PORT;
  BASE_API_URL = `http://${API_HOST}:${API_PORT}`;
}

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
