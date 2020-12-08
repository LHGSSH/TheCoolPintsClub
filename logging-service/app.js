const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let app = express();

const JSONParser = bodyParser.json();
const urlParser = bodyParser.urlencoded({ extended: true });

app.set('port', process.env.PORT || 4000);

require('./models/db');

const loggingService = require('./controllers/loggingService.js');

//Allow requests from the client app
app.use('/', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});



app.use(function (req, res, next) {
    res.status(404);
    res.json({
        "status": "error",
        "message": "This page can not be found."
    });
});

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