const http = require('http');

const options ={
  host:'localhost',
  port:'7070',
  path:'/ex6_index.html'
};

const callback = function (response){
  let body = ' ';
  response.on('data',function(data){
    body += data;
  });

  response.on('end',function (){
    console.log(body);
  });
};


var req =http.request(options , callback)
req.end();