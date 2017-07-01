/**
 * Created by shawn on 2017. 6. 27..
 */

//ex2_blocking_code.js
//Blocking Code
var fs = require("fs");

var data = fs.readFileSync('ref_input.txt');

console.log(data.toString());
console.log("Program has ended");