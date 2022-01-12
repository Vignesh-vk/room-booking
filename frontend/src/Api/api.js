import axios from 'axios';

const Instance_API = axios.create(
    { 
        baseURL : 'http://localhost:2000',
    }
)

export default Instance_API;