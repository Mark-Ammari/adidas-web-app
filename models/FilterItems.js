const mongoose = require('mongoose');

const Schema = mongoose.Schema

const FilterItemsSchema = new Schema({
    sortBy: {
        category: {
            type: String
        },
        filter: {
            type: [
                "Mixed"
            ]
        }
    }
})

module.exports = FilterItems = mongoose.model('filterItems', FilterItemsSchema)