import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://imobiliaria-joice-dev.vercel.app',
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      if (typeof window !== 'undefined') {
        return (window.location.href = '/adm/login');
      }
    }

    if (error.response.status === 500) {
      if (typeof window !== 'undefined') {
        return (window.location.href = '/erro');
      }
    }

    return Promise.reject(error);
  }
);

export const api = axiosInstance;
