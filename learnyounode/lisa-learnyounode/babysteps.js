'use strict';

var addArray = process.argv;
addArray.splice(0,2);
console.log(addArray.reduce(function(acc,current){
  acc += Number(current);
  return acc;
}, 0));
