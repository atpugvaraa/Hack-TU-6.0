import axios from 'axios';

// Set up Axios instance with base URL
const axiosInstance = axios.create({
  baseURL: 'https://1001-117-203-246-41.ngrok-free.app',  // Backend API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add an Axios interceptor to automatically add auth header to each request
axiosInstance.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem('user'));  // Check if a user is logged in
    if (user) {
      // If user is logged in, add Authorization header with the token
      config.headers['Authorization'] = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
