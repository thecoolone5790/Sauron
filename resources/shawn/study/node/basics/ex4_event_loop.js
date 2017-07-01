/**
 * Created by shawn on 2017. 6. 27..
 */
// //example
// //event 모듈 사용
// var event = require('events');
// //EventEmitter 객체생성 (Emitter: 유발 \ 주입자)
// var eventEmitter = new event.EventEmitter();
// //event와 eventHandler를 연동(bind)
// //eventName은 임의로 설정 가능
// eventEmitter.on('evenName', eventHandler);
// eventEmitter.emit('eventName');

  //ex4_event_loop.js
  //event 모듈 사용
var events = require('events');
//---------------------------- import
//EventEmitter 객체 생성
var eventEmitter = new events.EventEmitter();

//---------------------------- new

//EventHandler 함수 생성
var connectHandler = function connected() {
  console.log('Connection Successful');
  //data_recevied 이벤트 발생시키기(Emitter: 유발 \ 주입자)
  eventEmitter.emit('data_received');
};

//---------------------------- func

//connection 이벤트와 connectHandler 이벤트 핸들러를 연동
// 함수를 변수안에 담는 대신에 .on() 메소드의 인자로 직접 함수를 전달
eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function () {
  console.log('Data Received');
});
//---------------------------- event

eventEmitter.emit('connection');

console.log('Program has ended');
//---------------------------- execute
