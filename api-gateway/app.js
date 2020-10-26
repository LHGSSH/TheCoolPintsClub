const express = require('express');
const bodyParser = require('body-parser');
let app = express();

app.set('port', process.env.PORT || 3000);

//Check user's API key.
//app.use(require('apikey')(authentication.auth));

let api = require('./controllers/api');

//Allow requests from the client app
app.use('/', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

//Routes
app.use('/test', api.test);
app.use('/register', api.register);
app.use('/editUser', api.editUser);
app.use('/login', api.login);
app.use('/search', api.search);

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