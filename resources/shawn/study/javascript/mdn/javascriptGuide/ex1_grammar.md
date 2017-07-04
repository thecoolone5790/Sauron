
###선언

~~~javascript
  //변수 선언 var let const 선언과 동시에 할당도 가능
  //선언만 된경우 기본값으로 undefined
~~~

###undefined, null, NaN

~~~javascript
  // undefined & null & NaN
  //undefined === false :  boolean 문맥에서
  //undefined === NaN : int 문맥에서 (undefined + 2 === NaN
  //null === 0 : int 문맥에서 (null+2 === 0
~~~

###변수 호이스팅

~~~javascript
  console.log(x === undefined); // not defined err - (x)
                                // true - (o)
  var x = 3;

  var val = 'hello';
  // var val = 'world' - undefined
  
  (function () {
    console.log(val); // undefined
    var val = 'world' // 호이스팅 대상 (호이스팅 후 undefined 값을 가지게 된다)
  })();
~~~

###전역변수

~~~javascript
//전역 변수는 사실 global 객체의 속성(property)입니다.
//웹 페이지에서 global 객체는 window 이므로, windows.variable 구문을 통해 전역 변수를 설정하고
//접근할 수 있습니다.
~~~

###상수

~~~javascript
//상수는 읽기전용입니다.
//상수는 스크립트가 실행 중인 동안 대입을 통해 값을 바꾸거나 재선언될 수 없습니다.
//값으로 초기화해야 합니다.
// 오류가 발생합니다
function f() {};
const f = 5;

// 역시 오류가 발생합니다
function f() {
  const g = 5;
  var g;

  //statements
}
~~~

###데이터 구조 및 형태

~~~javascript
//원시 데이터
// boolean,undefined,number,string,symbol
//객체
// Object
~~~



