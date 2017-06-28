//event모듈 사용
var events = require('events');
//------------------------------------------------------------- import
//EventEmitter 객체 생성
var eventEmitter = new events.EventEmitter();
//------------------------------------------------------------- new Obj
//EventHandler
var connectHandler = function connected(){
    console.log('Connection Successful');
    eventEmitter.emit('data_received');
};
//-------------------------------------------------------------- func
//connection 이벤트와 connectHandler 이벤트 핸들러를 연동
//함수를 변수안에 담는 대신에 .on() 메소드의 인자로 직접 함수를 전달
eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received',function(){
    console.log('Data Received');
});
//--------------------------------------------------------------- event
eventEmitter.emit('connection');
console.log('Program has ended');

//--------------------------------------------------------------- export