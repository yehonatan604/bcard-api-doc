import axios from 'axios';

const axiosManager = (url, method, body) => {
    axios.defaults.headers = {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token')
    }

    let response;

    if (method === 'GET') {
        response = axios.get(url);
    }
    if (method === 'POST') {
        response = axios.post(url, body);
    }
    if (method === 'DELETE') {
        response = axios.delete(url);
    }
    if (method === 'PUT') {
        response = axios.put(url, body);
    }
    if (method === 'PATCH') {
        response = axios.patch(url, body);
    }

    return response;
}

export default axiosManager