const express = require('express');

const router = express.Router();

const Adidas = require('../../models/Adidas')

 // route, GET, GET all items
router.get('/', (req, res) => {
    Adidas.find()
    .then(items => {
        // console.log(items)
        res.json(items)
    })
})
 
module.exports = router