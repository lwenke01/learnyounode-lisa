'use strict';


var myModule = require('./module-filter.js');

myModule(process.argv[2], process.argv[3], newCallback);


function newCallback(err, data){
  if(!err) {
    data.forEach(function(file) {
      console.log(file);
    });
  }
}
