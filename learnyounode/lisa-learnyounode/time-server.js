'use strict';

var net = require('net');
var strftime = require('strftime');
var port = process.argv[2];

var server = net.createServer(function(socket){
  var now = new Date();
  var format = '%Y-%m-%d %H:%M';
  socket.write(strftime(format, now) + '\n');
  socket.end();
});

server.listen(port);
