const mongoose = require("mongoose");

let inventorySchema = mongoose.Schema({
    flavor: {
        type: String,
        unique: true
    },
    inStock: Boolean
});
mongoose.model('inventory', inventorySchema);