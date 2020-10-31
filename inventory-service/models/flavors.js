const mongoose = require("mongoose");


let flavorSchema = mongoose.Schema({
    flavor: {
        type: String,
        unique: true
    }
});
mongoose.model('Flavor', flavorSchema);