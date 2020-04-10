import axios from 'axios';

const URL = 'https://adidas-copy.herokuapp.com/' || 'http://localhost:3000';

const base = axios.create({
    baseURL: URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }
})

export default base;