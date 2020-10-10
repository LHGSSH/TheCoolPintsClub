const express = require('express');
const bodyParser = require('body-parser');
let app = express();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('port', process.env.PORT || 3050);

require('./models/db');

let userService = require('./controllers/userService');

app.get("/test", (req, res) => {
    res.send("Hello, Universe!");
})

app.post('/addUser', urlencodedParser, userService.addUser);
app.put('/editUser', urlencodedParser, userService.editUser);
app.get('/getUser', urlencodedParser, userService.getUser);

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