const mongoose = require("mongoose");

//defines the User Schema
let userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    fullName: String,
    address: String,
    apiKey: String
});

mongoose.model('User', userSchema);