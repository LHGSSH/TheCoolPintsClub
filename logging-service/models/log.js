const mongoose = require("mongoose");

let logSchema = mongoose.Schema({

    date: { type: Date, default: Date.now},
    service: String,
    route: String,
    request_ID: String,
    response_ID: String,
    message: Number
    
});

const Log = mongoose.model('Log', logSchema);
module.exports = { Log };