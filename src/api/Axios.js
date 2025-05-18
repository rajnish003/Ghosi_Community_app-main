// src/api/axios.js
import axios from 'axios';


const instance = axios.create({
  baseURL:'http://localhost:4000/api/v1',
  timeout: 10000, // 10s timeout
});

// Request interceptor
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('adminToken');
    if (token && !config.url.includes('/auth')) { // Skip auth routes
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor (optional)
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('adminToken');
      window.location.href = '/admin'; // Force logout
    }
    return Promise.reject(error);
  }
);

export default instance;