'use strict';
var fs = require('fs');
var path = process.argv[2];
var readPath = fs.readFile(path, 'utf8', cb);

function cb(err, data) {
  if(!err) {
    console.log(data.split('\n').length - 1);
  }
}
