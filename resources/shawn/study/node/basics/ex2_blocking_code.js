/**
 * Created by shawn on 2017. 6. 27..
 */

//ex2_blocking_code.js
//Blocking Code
var fs = require("fs");

var data = fs.readFileSync('ex3_input.txt');

console.log(data.toString());
console.log("Program has ended");