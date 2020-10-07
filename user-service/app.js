const express = require('express');
let app = express();
const mongoose = require("mongoose");
const Account = mongoose.model('Account');
const { stringify } = require('querystring');

app.set('port', process.env.PORT || 3050);

mongoose.connect(
"mongodb://localhost:27017/Ice-cream-service",
{useNewUrlParser: true}
);

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});


    Account.create(
    {
        username: "JWexler",
        password: "23456",
        email: "jon@jonwexler.com",
        fullname: "john Wexler",
        address: "9876 high hill drive"
    },
    function (error, savedDocument) {
    if (error) console.log(error);
    console.log(savedDocument);
    }
    );


app.get("/",(req, res) => {
    res.send("Hello, Universe!");
})

app.listen(app.get('port'), function(){
    console.log( 'Express started on http://localhost:'
    );
  });