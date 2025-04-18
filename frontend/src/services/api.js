import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api', // Laravel API URL
    withCredentials: true, // Required for Sanctum
});

// Add CSRF token for Sanctum
api.interceptors.request.use(async (config) => {
    if (localStorage.getItem('token')) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    }
    return config;
});

export default api;