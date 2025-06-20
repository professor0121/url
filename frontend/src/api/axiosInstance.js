import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // ⬅️ change to your actual API
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // You can attach tokens here if needed
    // const token = localStorage.getItem('token');
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// Optional: Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global errors (e.g., auth)
    return Promise.reject(error);
  }
);

export default axiosInstance;
