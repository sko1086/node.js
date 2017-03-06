var http = require('http');
var express = require('express');
var app = express();
app.get('/test', function(req, res){
  res.send('test');
});
http.createServer(function (req, res) {
    /*res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');*/
}).listen(8002);
console.log('Server running at Cafe24');
