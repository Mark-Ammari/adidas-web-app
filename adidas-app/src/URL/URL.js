import axios from 'axios';

const URL = 'http://localhost:5000' || 'https://adidas-copy.herokuapp.com/';

const base = axios.create({
    baseURL: URL,
})

export default base;