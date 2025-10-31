import axios from 'axios';

var token = localStorage.getItem('token');

const api = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
  headers: {
    'Content-Type': 'application/json',
    'authorization': token
  }
});

export default api;