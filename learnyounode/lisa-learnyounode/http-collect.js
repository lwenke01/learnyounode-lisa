'use strict';

var http = require('http');
var bl = require('bl');
var url = process.argv[2];

function print(res) {
  res.pipe(bl(function (err, data) {
    if(err){
      console.log(err);
    }
    var string = data.toString();
    console.log(string.length);
    console.log(string);

  }));

}

http.get(url, print);
