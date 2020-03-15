import axios from 'axios';

const URL = 'http://localhost:5000';

const base = axios.create({
    baseURL: URL,
})

export default base;