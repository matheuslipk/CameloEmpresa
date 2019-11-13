import axios from 'axios';

const api = axios.create({
  baseURL: 'http://31.220.63.74:3333',
  timeout: 5000,
});

export default api;
