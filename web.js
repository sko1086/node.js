var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.locals.pretty = true;
app.set('view engine', 'jade');
app.get('/test', function(req, res){
  res.send('test');
});
app.listen(8002, function () {
  console.log('Example app listening on port 3000!');
});
