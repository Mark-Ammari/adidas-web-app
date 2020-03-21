const express = require("express");
const axios = require('axios');
const { parse, stringify } = require('flatted/cjs')

const router = express.Router()

router.get('/reviews/:id', (req, res) => {
    axios.get(`https://www.adidas.com/api/models/${req.params.id}/reviews?sitePath=us&includeLocales=en%2A`, { params: {
        limit: req.query.limit,
        offset: req.query.offset,
        sort: req.query.sort
    }}).then(resp => {
        res.send(parse(stringify(resp.data)))
    }).catch(err => console.log(err))
})

router.get('/ratings/:id', (req, res) => {
    axios.get(`https://www.adidas.com/api/models/${req.params.id}/ratings?sitePath=us&includeLocales=en%2A`).then(resp => {
        res.send(parse(stringify(resp.data)))
    }).catch(err => console.log(err))
})

module.exports = router;