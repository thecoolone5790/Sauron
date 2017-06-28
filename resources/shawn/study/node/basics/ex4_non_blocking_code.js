/**
 * Created by shawn on 2017. 6. 27..
 */
//ex4_non_blocking_code.js

var fs = require("fs");

// 노드 어플리케이션의 비동기식 함수에서는 첫번째 매개변수로 err 마지막으로는 callback
fs.readFile('ex3_input.txt', function (err, data) {
  if (err) return console.log(err);
  console.log(data.toString());
});

console.log("program has ended");