import axiosManager from '../helpers/axiosManager';
import BASE_URL from '../helpers/baseApiUrl';
import decoder from '../helpers/decoder';

const useApi = (user, setUser) => {
    const logout = () => {
        user.isLoggedIn && localStorage.setItem('token', '');
    }

    const sendRequest = (e, endpoint, id, setData) => {
        e.preventDefault();
        axiosManager(endpoint.address + id, endpoint.method, e.target[0].value)
            .then((res) => {
                const response = res.data;
                if (endpoint.name === 'Login') {
                    localStorage.setItem('token', response);
                    login(setData);
                } else {
                    setData(response);
                }
            }).catch(err => setData(err.message))
    }

    const login = (setData) => {
        const token = localStorage.getItem('token');
        if (token && token !== '' && !user.isLoggedIn) {
            axiosManager(BASE_URL + 'users/' + decoder(token)._id, 'GET').then((res) => {
                const response = res.data;
                setUser((currVal) => {
                    return {
                        ...currVal,
                        token: token,
                        email: response.email,
                        isLoggedIn: true,
                        authLevel:
                            response.isAdmin ? 'Admin' :
                                response.isBusiness ? 'Biz' :
                                    'User'
                    }
                });
            }).catch((err) => {
                setData(err.message);
            })
        };
    }

    return { login, logout, sendRequest };
}

export default useApi;
