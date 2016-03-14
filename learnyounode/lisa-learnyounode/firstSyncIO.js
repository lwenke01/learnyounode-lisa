'use strict';
// console.log(process.argv);
var fs = require('fs');
var path = process.argv[2];

var readPath = fs.readFileSync(path);
console.log(readPath.toString().split('\n').length - 1);
