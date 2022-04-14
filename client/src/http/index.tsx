import axios, { AxiosInstance } from 'axios';

export const API_URL: string = 'http://localhost:4000/api';

const $api: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: API_URL
});

$api.interceptors.request.use( (config: any) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
    return config;
});

$api.interceptors.response.use(config => {
  return config;
}, async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401) {
    originalRequest._isReady = true;
    try {
      const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
      localStorage.setItem('accessToken', response.data.accessToken);
      console.log('Соси хуй');
      return $api.request(originalRequest);
    }
    catch(error) {
      console.log("Пидрила обнаружен");
    }
  }
});

export default $api;

