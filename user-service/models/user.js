const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

//defines the User Schema
let userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: String,
    email: {
        type: String,
        unique: true
    },
    fullName: String,
    address: String
});

userSchema.methods.validPassword = function (password) {
    return this.password === password;
};

userSchema.methods.generateJwt = function () {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    return jwt.sign({
        _id: this._id,
        username: this.username,
        fullName: this.fullName,
        exp: parseInt(expiry.getTime() / 1000, 10),
    }, 'thisIsSecret');
};

mongoose.model('User', userSchema);