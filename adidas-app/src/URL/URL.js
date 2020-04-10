import axios from 'axios';

const URL = 'https://adidas-copy.herokuapp.com/' || 'http://localhost:5000';

const base = axios.create({
    baseURL: URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    }
})

export default base;