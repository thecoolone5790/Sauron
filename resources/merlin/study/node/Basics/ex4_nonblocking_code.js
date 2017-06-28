/**
 * Created by merlin.ho on 2017. 6. 28..
 */

var fs = require('fs');

fs.readFile('ex3_input.txt', function(err,data){
  if ( err ) return console.log(err);
  console.log(data.toString());
});

console.log('program has ended');