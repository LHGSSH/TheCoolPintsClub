const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let app = express();
const passport = require('passport');

// create application/x-www-form-urlencoded parser
const JSONParser = bodyParser.json();
const urlParser = bodyParser.urlencoded({ extended: true });

app.set('port', process.env.PORT || 3050);

require('./models/db');
require('./config/passport');
let userService = require('./controllers/userService');

app.use(passport.initialize());
app.use(cors());

app.use(userService.verifyToken);

app.get("/test", (req, res) => {
    res.send("Hello, Universe!");
})

app.post('/register', JSONParser, userService.register);
app.put('/editUser', JSONParser, userService.editUser);
app.post('/login', JSONParser, userService.login);

// 404 catch-all handler (middleware)
app.use(function (req, res, next) {
    res.status(404);
    res.json({
        "status": "error",
        "message": "This page can not be found."
    });
});

// 500 error handler (middleware)
app.use(function (error, req, res, next) {
    console.error(error.stack);
    res.status(500);
    res.json({
        "status": "error",
        "message": "An internal error has occurred."
    });
});

app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.');
});