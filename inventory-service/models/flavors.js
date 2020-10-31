const mongoose = require("mongoose");


let flavorSchema = mongoose.Schema({
    flavor: {
        type: String,
        unique: true
    },
    name: String,
    inStock: Boolean
});
mongoose.model('Flavor', flavorSchema);