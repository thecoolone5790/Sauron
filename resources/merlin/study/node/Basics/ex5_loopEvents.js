/**
 * Created by merlin.ho on 2017. 6. 28..
 */

var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
  console.log('Connection successful');

  eventEmitter.emit('data_received');
};

eventEmitter.on('connection',connectHandler);

eventEmitter.on('data_received', function(){
  console.log('Data Received');
});

eventEmitter.emit('connection');

console.log('Program has ended');
