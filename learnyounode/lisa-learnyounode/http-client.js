'use strict';

var http = require('http');
var url = process.argv[2];

function print(res) {
  res.setEncoding('utf8');
  res.on('data', console.log);
  res.on('error', console.log);
}

http.get(url, print);
