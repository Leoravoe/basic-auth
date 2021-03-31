const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name : {type: String},
    toppings : {type: String}
})

module.exports = mongoose.model('items', itemSchema);