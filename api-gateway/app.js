const express = require('express');
let app = express();
//const authentication = require('./authentication');

app.set('port', process.env.PORT || 3000);

//Check user's API key.
//app.use(require('apikey')(authentication.auth));

let api = require('./controllers/api');

//Routes
app.post('/addUser', api.addUser);
app.put('/editUser', api.editUser);
app.get('/getUser', api.getUser);

// 404 catch-all handler (middleware)
app.use(function(req, res, next){
  res.status(404);
  res.json({
      "status" : "error",
      "message" : "This page can not be found."
  });
});

// 500 error handler (middleware)
app.use(function(error, req, res, next){
  console.error(error.stack);
  res.status(500);
  res.json({
      "status" : "error",
      "message" : "An internal error has occurred."
  });
});

app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});