const mongoose = require("mongoose");

let scheduleSchema = mongoose.Schema({

    // account username object
    user: {},
    // array
    items: [{}],
    // delivery date
    deliveryDate: String
    
});

const Schedule = mongoose.model('Schedule', scheduleSchema);
module.exports = { Schedule };