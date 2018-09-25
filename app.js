var express = require('express');
var nodemon = require('nodemon');

var app = express();
var PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log(`The server is up and running on port: ${PORT} .`);
});