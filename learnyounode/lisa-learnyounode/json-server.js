'use strict';

var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function(req, res){
  if(req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    var urlObj = url.parse(req.url, true);
    var endpoint = urlObj.pathname.split('/')[2];
    var query = urlObj.query;
    var date = new Date(query.iso);
    var time = {};
    if(endpoint === 'parsetime') {
      time.hour = date.getHours();
      time.minute = date.getMinutes();
      time.second = date.getSeconds();
    }
    if(endpoint === 'unixtime'){
      time.unixtime = date.getTime();
    }
    res.end(JSON.stringify(time));
  }
});
server.listen(port);
