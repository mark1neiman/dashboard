import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
});

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.get('ACCESS_TOKEN');
    config.headers.Authorixation = 'Bearer ${token}';
    return config;
})

axiosClient.interceptors.response.use((response) => {
    return response;
}, (error) => {
    const { response } = error;
    if (response.status === 401) {
        localStorage.removeItem('ACCESS_TOKEN');
        // } else if (response.status === 403) pärast võiks juurde panna 404 redirect ja 403 jn
    }
})

export default axiosClient;