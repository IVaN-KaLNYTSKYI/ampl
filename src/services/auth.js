import axios from 'axios';

const options = {
    baseURL: 'http://localhost:3000/api/admin-api/',
};

const axiosInstance = axios.create(options);
/*axiosInstance.interceptors.request.use(value => {
    console.log('---------------req---------')
    console.log(value)
    console.log('----------------req--------')
}, error => {
    console.log('---------------error---------')
    console.log(error)
    console.log('---------------error---------')
})

axiosInstance.interceptors.response.use(value => {
    console.log('-------------res-----------')
    console.log(value)
    console.log('--------------res----------')
},  function (error) {
    console.log(error)
       return Promise.reject(error)
})*/


export default axiosInstance

export const loginServer = async (data) => {
    try {
        const response = await axiosInstance.post('auth/login', data);
        return response.data;
    } catch (e) {
        return e.response?.data;
    }
};

export const getAllSignalServer = async (page =1, limit=5) => {
    try {
        const token = localStorage.getItem('accessToken');
        const response = await axiosInstance.get(`/clubData/signals?page=${page}&limit=${limit}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (e) {
        console.log(e);
        // alert(JSON.stringify(e.response?.data, null, 2));
        return e.response.data;
    }
};
