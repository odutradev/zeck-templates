import axios from 'axios';

import config from '../config';

var token = localStorage.getItem('token');

const api = axios.create({
  baseURL: config.baseURL,
  headers: {
    'Content-Type': 'application/json',
    'authorization': token
  }
});

export default api;