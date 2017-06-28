/**
 * Created by merlin.ho on 2017. 6. 28..
 */


var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req,res){
  var pathname = url.parse(req.url).pathname;

  if(pathname == '/'){
    pathname = 'ex6_index.html';
  }

  fs.readFile(pathname.substr(1),function(err,data){
    if(err){
      console.log(err);

      res.writeHead(404,{'Content-Type':'text/html'});
    }else{
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write(data.toString());
    }
    res.end(); //
  });


}).listen(1234);

console.log("Sever running at localhost:1234");