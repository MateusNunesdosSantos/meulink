import axios from 'axios';

export const key = "079354ce12c1132073125ddeb800db48253b6977";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;