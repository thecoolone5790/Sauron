/**
 * Created by shawn on 2017. 7. 11..
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//express 이전의 버전에서는 cookie-parser 도 불러와야 했다.
//하지만 session 모듈이 cookie 부분도 함꼐 처리해 준다 따러서 사용할 필요가 없음
var session = require('express-session');
//파일을 읽기 위해 사용
var fs = require('fs');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function () {
  console.log('express server has started on port 3000');
});

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session({
  //쿠키를 임의로 변조하는것을 방지하기 위한 sign 값 입니다. 원하는 값을 넣으면 됩니다.
  secret: '@#@$MYSIGN#@$#$',
  //세션을 언제나 저장할 지 (변경되지 않아도) 정하는 값입니다.
  //express-session documentation에서는 이 값을 false 로 하는것을 권장하고 필요에 따라 true로 설정합니다.
  resave: false,
  //uninitialized 세션이란 새로 생겼지만 변경되지 않은 세션을 의미합니다.
  //Documentation에서 이 값을 true로 설정하는것을 권장합니다.
  saveUninitialized: true
}));

var router = require('./router/main')(app, fs);

