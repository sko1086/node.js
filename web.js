var http = require('http');
var express = require('express');
var app = express();
/*app.use(bodyParser.urlencoded({ extended: false }));
app.locals.pretty = true;
app.set('view engine', 'jade');
app.get('/test', function(req, res){
  res.send('test');
});*/
var server = http.createServer(function(req, res){
  res.writeHead('Content-Type', 'text/plain');
  res.end('Hello World\n');

});
server.listen(port, hostname function(){
      console.log(`Server running at http://${hostname}:${port}/`);

});
