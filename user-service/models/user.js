const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

//defines the User Schema
let userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    fullName: String,
    address: String,
    apiKey: String
});

userSchema.methods.generateJwt = function () {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    return jwt.sign({
        _id: this._id,
        email: this.email,
        fullName: this.fullName,
        apiKey: this.apiKey,
        exp: parseInt(expiry.getTime() / 1000, 10),
    }, 'thisIsSecret');
};

mongoose.model('User', userSchema);