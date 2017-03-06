var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
/*app.use(bodyParser.urlencoded({ extended: false }));
app.locals.pretty = true;
app.set('view engine', 'jade');
app.get('/test', function(req, res){
  res.send('test');
});*/
http.createServer(function (req, res) {
    /*res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');*/
}).listen(8002);
console.log('Server running at Cafe24');
