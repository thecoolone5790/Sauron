/**
 * Created by merlin.ho on 2017. 6. 28..
 */
// 임폴트 구간 ( 어떤 모듈을 쓸것인가.. )
// 서버통신을 해야하니깐 http가 필요하다...

var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/plain'});  // 200 성공 ( 올바르면 ,,, )
  res.write('Hello world');
  res.end();
}).listen(1234);

