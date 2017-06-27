/**
 * Created by shawn on 2017. 6. 27..
 */

//Blocking Code
var fs = require("fs");
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("Program has ended");