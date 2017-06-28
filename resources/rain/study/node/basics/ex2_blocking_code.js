var fs = require('fs'); //file system

var data = fs.readFileSync('ex3_input.txt');
console.log(data.toString());
console.log('Programs has ended');