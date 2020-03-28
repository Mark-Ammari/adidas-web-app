const mongoose = require('mongoose');

const Schema = mongoose.Schema

const FilterItemsSchema = new Schema({
    gender: {
        category: {
            type: String
        },
        filter: {
            type: [
                "Mixed"
            ]
        }
        
    },

    activity: {
        category: {
            type: String
        },
        filter: {
            type: [
                "Mixed"
            ]
        }
    },
    categories: {
        category: {
            type: String
        },
        filter: {
            type: [
                "Mixed"
            ]
        }
    },
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