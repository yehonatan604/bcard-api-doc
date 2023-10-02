import axios from 'axios';

const axiosManager = (url, method, body) => {
    axios.defaults.headers = {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token')
    }
    let proxyUrl = 'https://corsproxy.io/?' + url;

    let response;

    if (method === 'GET') {
        response = axios.get(proxyUrl);
    }
    if (method === 'POST') {
        response = axios.post(proxyUrl, body);
    }
    if (method === 'DELETE') {
        response = axios.delete(proxyUrl);
    }
    if (method === 'PUT') {
        response = axios.put(proxyUrl, body);
    }
    if (method === 'PATCH') {
        response = axios.patch(proxyUrl, body);
    }

    return response;
}

export default axiosManager