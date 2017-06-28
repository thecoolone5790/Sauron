/**
 * Created by merlin.ho on 2017. 6. 28..
 */

var http = require('http');

// HTTP Request의 옵션 설정
var options = {
  host:'localhost',
  port:'1234',
  path:'/ex6_index.html'
};

var callback = function(response){
  var body = '';
  response.on('data',function(data){
    body += data;
  });

  response.on('end',function(){
    console.log(body);
  });
};

var req = http.request(options, callback);

req.end();
