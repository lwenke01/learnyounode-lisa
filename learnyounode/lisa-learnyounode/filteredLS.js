'use strict';

var fs = require('fs');
var path = require('path');
var directory = process.argv[2];
var fileExt = process.argv[3];

fs.readdir(directory, function(err, list){
  if(!err) {
    list.forEach(function(file) {
      if(path.extname(file) === '.' + fileExt) {
        console.log(file);
      }
    });
  }
});
