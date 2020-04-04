const express = require('express');

const router = express.Router();

const Adidas = require('../../models/Adidas')
const FilterItems = require('../../models/FilterItems')


// route, GET, GET all items
router.get('/', (req, res) => {
    Adidas.find()
        .then(items => {
            // console.log(items)
            res.json(items)
        })
})

router.get('/filteritem', (req, res) => {
    FilterItems.find()
        .then(items => {
            // console.log(items)
            res.json(items)
        })
})

router.post('/filteritem', (req, res) => {
    const filter = new FilterItems({
        sortBy: {
             category: "SORT BY",
             filter: [
                {  name: "Newest",  value: "newest-to-oldest" },
                {  name: "Price (High - Low)",  value: "price-high-to-low" },
                {  name: "Price (Low - High)",  value: "price-low-to-high" },
                {  name: "Top Sellers",  value: "top-sellers" }
            ]
        }
    })
    filter.save().then(item => res.json(item))
})

module.exports = router