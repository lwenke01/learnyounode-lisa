'use strict';
var fs = require('fs');
var path = require('path');

module.exports = function(dir, fileType, callback) {
  var ext = '.' + fileType;
  fs.readdir(dir, function(err, list) {
    if(err) {
      return callback(err);
    } else {
      var files = list.filter(function(file){
        return path.extname(file) === ext;
      });
      return callback(null, files);
    }
  });
};
