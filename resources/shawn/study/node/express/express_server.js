/**
 * Created by shawn on 2017. 7. 4..
 */
var express = require('express');
var ejs = require('ejs');
var app = express();
var router = require('./router/r_main')(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

var server = app.listen(3000, function(){
  console.log("Express server has started on port 3000")
});

app.use(express.static('public'));

// var express= require('express');
// var app = express();
// var server = app.listen(3000, function () {
//   console.log('Express server has started on port 3000');
//   // cd express/ node express_server.js 실생  -> Cannot GET / : router 가 없기 때문
//
// });

// 자 그럼 router 를 만들어 봅시다 : 서버에서 무엇을 할지 지정해 주는 역할

  // app.get('/', function (req, res) {
  //   res.send('Hello world'); // localhost:3000에서 hello world 를 출력하기 시작합니다.
  // });
//라우터 와 서버는 서로 다른 디렉토리로 생성하는 것이 좋다고 합니다~


