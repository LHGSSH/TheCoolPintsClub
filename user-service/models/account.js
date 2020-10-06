const mongoose = require("mongoose")

//defines the Account Schema
let accountSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    fullname: String,
    address: String
});

mongoose.model('Account', accountSchema); 