import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reqres.in/api/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  responseType: 'json',
});

api.interceptors.request.use(
  async config => {
    const token = await localStorage.getItem('auth_token');

    // TODO: Adicionar verificação para endpoints que não precisam receber o token.

    if (token !== null) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => Promise.reject(error),
);
api.interceptors.response.use(config => config, error => Promise.reject(error));

export default api;
