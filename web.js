var http = require('http');
var express = require('express');
var app = express();

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World node\n');
    app.get('/test', function(req, res){
      res.send('test');
    });
}).listen(8002);
console.log('Server running at Cafe24!!!!');
