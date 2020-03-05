const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdidasSchema = new Schema({
    men: {
        path: {
            type: String
        },
        shoes: {
            type: [
                "Mixed"
            ]
        },
        clothing: {
            type: [
                "Mixed"
            ]
        },
        accessories: {
            type: [
                "Mixed"
            ]
        }
    },
    women: {
        path: {
            type: String
        },
        shoes: {
            type: [
                "Mixed"
            ]
        },
        clothing: {
            type: [
                "Mixed"
            ]
        },
        accessories: {
            type: [
                "Mixed"
            ]
        }
    },
    kids: {
        path: {
            type: String
        },
        youth: {
            type: [
                "Mixed"
            ]
        },
        children: {
            type: [
                "Mixed"
            ]
        },
        babies: {
            type: [
                "Mixed"
            ]
        }
    }
})

module.exports = Adidas = mongoose.model('adidas', AdidasSchema)

