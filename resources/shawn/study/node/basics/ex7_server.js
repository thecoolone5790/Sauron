/**
 * Created by shawn on 2017. 6. 27..
 */
var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
  var pathname = url.parse(req.url).pathname;
  console.log('Request for ' + pathname + 'received');
  //파일 이름이 비어있다면 index.html 로 설정
  if(pathname == '/'){
    pathname = 'ex6_index.html';
  }

  fs.readFile(pathname.substr(1), function (err, data) {
    if(err){
      console.log(err);
      //페이지를 찾을 수 없음
      //HTTP Status : 404 : NOT FOUND
      //Content Type : text/plain
      res.writeHead(404,{'Content-Type':'text/html'});
    }else{
      //페이지를 찾음
      //HTTP Status : 200 : OK
      //Content-Type : text/plain
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write(data.toString());
    }
    //responseBody 전송
    res.end();
  });
}).listen(7070);
console.log('Server running at localhost:7070');

