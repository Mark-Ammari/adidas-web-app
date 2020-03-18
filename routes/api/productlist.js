const express = require('express');
const axios = require('axios');
const { parse, stringify } = require('flatted/cjs')

const router = express.Router()

router.get('/', (req, res) => {
    axios.get(`https://www.adidas.com/api/search/tf/taxonomy`, { params: {
        sitePath: req.query.sitePath,
        query: req.query.query,
        start: req.query.start,
        sort: req.query.sort
    }})
    .then(resp => {
        res.send(parse(stringify(resp.data)))
    })
    .catch(err => console.log(err))
});

router.get('/search/:id', (req, res) => {
    axios.get(`https://www.adidas.com/api/products/${req.params.id}?sitePath=us`)
    .then(resp => {
        res.send(parse(stringify(resp.data)))
    })
    .catch(err => console.log(err))
})

router.get('/sizes/:id', (req, res) => {
    axios.get(`https://www.adidas.com/api/products/${req.params.id}/availability?sitePath=us`)
    .then(resp => {
        res.send(parse(stringify(resp.data)))
    })
    .catch(err => console.log(err))
})

module.exports = router