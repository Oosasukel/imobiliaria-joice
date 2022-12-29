import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
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
      return (window.location.href = '/erro');
    }

    return Promise.reject(error);
  }
);

export const api = axiosInstance;
