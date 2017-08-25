import _ from 'lodash';
 import aa from './print.js';

if (module.hot) {
    module.hot.accept('./print.js', function() {
       console.log('Accepting the updated printMe module!');
        printMe();
      })
 }

console.log('asdasdasdasd');

function component() {
  var element = document.createElement('div');
     var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webaaapack'], ' ');

     btn.innerHTML = 'Click me and check the console!';
     btn.onclick = aa;

       element.appendChild(btn);

  return element;
}

document.body.appendChild(component());




class Person {
  constructor(name) {
    this._name = name;
  }

  sayHi() {
    console.log(`Hi! ${this._name}`);
  }
}

const me = new Person('Lee');
me.sayHi(); // Hi! Lee

console.log(me instanceof Person); // true