/**
 * Created by merlin.ho on 2017. 6. 28..
 */

var fs = require('fs');

var data = fs.readFileSync('ex3_input.txt'); // 동기

console.log(data.toString());
console.log("Program has ended");


// blocking / nonblocking / 동기 / 비동기



