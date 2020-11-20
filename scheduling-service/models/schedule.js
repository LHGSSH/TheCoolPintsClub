const mongoose = require("mongoose");


let scheduleSchema = mongoose.Schema({

    // account username object
    user: {},
    // array
    cart: [{}],
    // delivery date
    deliveryDate: String
    
});
mongoose.model('schedule', scheduleSchema);
