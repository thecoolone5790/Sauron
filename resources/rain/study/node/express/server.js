var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//express 이전의 버전의 버전에서는 cookie-parser도 불러와야했다
//하지만 session 모듈이 cookie부분도 함께 처리해 준다
var session = require('express-session');
//파일을 읽기 위해 사용
var fs=require('fs');

app.set('views',__dirname + '/views');
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

var server = app.listen(3000, function(){
    console.log('express server has started on port 3000');
});

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session({
    secret:'gsjioae',
    server:false,
    saveUninitionalized:true
}));
var router = require('./router/main')(app,fs);