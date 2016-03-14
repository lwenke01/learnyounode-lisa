'use strict';

var http = require('http');
var bl = require('bl');
var urls = process.argv.slice(2);

var results = [];
var count = 0;

function print() {
  for(var i = 0; i < results.length; i++) {
    console.log(results[i]);
  }
}
function server(index) {
  http.get(urls[index], function(res){
    res.pipe(bl(function(err, data){
      if(err) {
        return console.log(err);
      }
      results[index] = data.toString();
      count++;
      if(count === 3){
        print();
      }
    }));
  });
}
for(var i = 0; i < urls.length; i++) {
  server(i);
}
