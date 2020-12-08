const mongoose = require("mongoose");

let logSchema = mongoose.Schema({

    date: { type: Date, default: Date.now},
    service: String,
    route: String,
    request_ID: String,
    message: String
    
});

const Log = mongoose.model('Log', logSchema);
module.exports = { Log };