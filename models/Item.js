const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    department: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    repeatable: {
        type: String,
        required: false
    },
    uName: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);