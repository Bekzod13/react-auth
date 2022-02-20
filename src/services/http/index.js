import axios from 'axios'

const http = axios.create({
    baseURL: 'https://reqres.in/api'
});

export default http;