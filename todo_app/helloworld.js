// var http = require('http');

// http.createServer(function(req, res) {
// 	res.writeHead(200, {'Content-Type' : 'text/plain'});
// 	res.end('Hello World\n');
// }).listen(1337, '127.0.0.1');

// var app = require('express').createServer();

// app.get('/', function(req, res) {
// 	res.send("Hello World");
// });

// app.listen(3000);

const express = require('express');
const http = require('http');

const app = express();
	app.get('/', function (req, res) {
  	res.send("Hello World");
});

const server = http.createServer(app).listen(3000, function(err) {
  if (err) {
    console.log(err);
  } else {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Server listening on ${host}:${port}`);
  }
});