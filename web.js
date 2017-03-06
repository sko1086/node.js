var http = require('http');
var express = require('express');
var app = express();

app.get('/test', function(req, res){
    res.send("test");
};
app.listen(8002, function(){
  console.log('conected 3000!');
});
