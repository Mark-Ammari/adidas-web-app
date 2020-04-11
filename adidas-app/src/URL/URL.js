import axios from 'axios';

let URL = process.env.NODE_ENV === "production" ? 'https://adidas-copy.herokuapp.com' : 'http://localhost:3000';

const base = axios.create({
    baseURL: URL,
})

export default base;