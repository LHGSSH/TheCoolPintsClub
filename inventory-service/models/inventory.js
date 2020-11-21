const mongoose = require("mongoose");

let inventorySchema = mongoose.Schema({
    flavor: {
        type: String,
        unique: true
    },
    stock: Number,
    price: Number
});
const Inventory = mongoose.model('Inventory', inventorySchema);
module.exports = { Inventory };