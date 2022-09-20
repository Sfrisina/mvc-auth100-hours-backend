const Mongoose = require('mongoose')
const itemSchema = new Mongoose.Schema({
    itemNum: {
        type: Number,
        unique: true,
        required: true,
    },
    description: {
        type: String,
        unique: true,
        required: true,
    },
    quantity: {
        type: Number,
        unique: false,
        required: true,
    },
    image: {
        type: String,
        unique: true, 
        required: true, 
    },
    inCart: {
        type: Boolean, 
        required: true
    }
})
module.exports = Mongoose.model("Item", itemSchema)
