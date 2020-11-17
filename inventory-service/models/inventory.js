const mongoose = require("mongoose");

let inventorySchema = mongoose.Schema({
    flavor: {
        type: String,
        unique: true
    },
    stock: Number,
    price: Number
});
mongoose.model('inventory', inventorySchema);