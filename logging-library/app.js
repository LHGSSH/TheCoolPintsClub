const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let app = express();

const JSONParser = bodyParser.json();

app.set('port', process.env.PORT || 4100);

const loggingLibrary = require('./controllers/loggingLibrary.js');

app.use('/addLog', loggingLibrary.addLog);

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