/**
 * Created by shawn on 2017. 6. 28..
 */

var http = require('http');

//HTTP Request의 옵션 설정
var options = {
  host:'localhost',
  port:'7070',
  path:'/ex6_index.html'
};

//콜백 함수로 Response를 받아준다
var callback = function (response) {
  //response 이벤트가 감지되면 데이터를 body에 받아온다
  var body = '';
  response.on('data', function (data) {
    body += data;
  });

  //end 이벤트가 감지되면 데이터 수신을 종료하고 내용을 출력한다
  response.on('end', function () {
    console.log(body);
  });
};

// 서버에 HTTP Request를 날린다
var req = http.request(options, callback);
req.end();
