import axios, { AxiosInstance } from 'axios';

import defaultConfig from '@assets/config/default';

const api: AxiosInstance = axios.create({
  baseURL: defaultConfig.baseURL, 
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['authorization'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;