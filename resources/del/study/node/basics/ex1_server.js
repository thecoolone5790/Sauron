var http = require("http");
http.createServer(function(req, res){
  /*
   HTTP 헤더 전송
   HTTP Status: 200 : OK
   Content Type: text/plain
   */
  res.writeHead(200, {'Content-Type': 'text/plain'});

  /*
   Response Body 를 "Hello World" 로 설정
   */
  res.end("Hello World\n");

}).listen(9999);
