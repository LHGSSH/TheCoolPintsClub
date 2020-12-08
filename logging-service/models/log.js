const mongoose = require("mongoose");

let logSchema = mongoose.Schema({

    date: { type: Date, default: Date.now},
    service: String,
    route: String,
    request_ID: Number,
    response_ID: Number,
    message: String
    
});

const Log = mongoose.model('Log', logSchema);
module.exports = { Log };

/*const small = new Log({
    service: "logging-service",
    route: "/addLog",
    request_ID: 5000,
    response_ID: 4000,
    message: "success!"
});
small.save(function (err) {
  if (err) return handleError(err);
 
});*/