var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res){
    var pathname = url.parse(req.url).pathname; // url 로 변경
    console.log('Request for'+ pathname +'received');

    if(pathname=='/'){
        pathname = 'ex6_index.html';
    }

    fs.readFile(pathname.substr(1), function(err, data){
        if(err){
            console.log(err);
            //페이지를 찾을 수 없음
            //HTTP Status : 404 : NOT FOUND
            //Content Type : text/plain
            res.writeHead(404,{'Content-Type':'text/html'});
            res.write(data.toString());
        }else{
            //페이지 찾음
            //200 : 성공
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data.toString());
        }
        res.end();
    });
}).listen(3000);
console.log('Server running at localhost:3000');

