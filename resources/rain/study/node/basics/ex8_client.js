var http = require('http');

//HTTP Request의 옵션 설정
var options = {
    host:'localhost',
    port:'3000',
    path:'/ex6_index.html'
};

//콜백 함수로 Response를 받아준다
var callback = function(response) {
    //response 이벤트 감지되면 데이터를 body에 받아온다
    var body = '';
    response.on('data', function(data){
        body += data;
    });

    //end 이벤트 감지되면 데이터 수신을 종료하고 내용을 출력한다
    response.on('end',function() {
        console.log(body);
    });
};

//서버를 HTTP Request를 날린다
var req = http.request(options, callback);
req.end();

