  # study - point
  * 프로토타입 기반의 자바스크립트?
  * 클래스와 프로토타입?
  * 프로토타입 링크와 프로토타입 객체(프로토타입 체인)?
  * 프로토타입 상속?
  * 함수와 내부 구조?
  
  ### prototype - summary 
  1. 함수와 객체의 내부구조
  ~~~ javascript
    // 1단계 : 함수 정의
    // 2단계 : 파싱
        // 생성자 함수 - 해당 프로토타입 객체를 참조함
        // 해당 프로토타입 객체 - constructor속성을 통해 생성자 함수를 참조함
        
    function Person(){} 
  ~~~
  ![그림1](http://www.nextree.co.kr/content/images/2016/09/hjkwon-140324-prototype-11.png "이미지제목")
  
  ~~~ javascript
    function Person(){}
      var merlin = new Person();
      var del = new Person();
  ~~~
  
  ~~~ javascript
    function Person(){}
        
    Person.prototype.getType = function(){
      return "인간";
    };
    
    var merlin = new Person();
    var del = new Person();
    
    console.log(merlin.getType()); //인간
    console.log(del.getType()); //인간
  ~~~
  2. 프로토타입 객체란?
  3. 프로토타입이란?
  4. 코드의 재사용(상속)
  
  ### link - references
  > * [medium.com/@bluesh55](https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67 "포로토타입 이해하기")  
  > * [developer.mozilla.org](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype "객체.프로토타입")  
  > * [stackoverflow.com](https://stackoverflow.com/questions/4859308/in-javascript-why-typeof-function-prototype-is-function-not-object-like-ot "함수 객체")  
  > * [stackoverflow.com](https://stackoverflow.com/questions/32928810/function-prototype-is-a-function "프로토타입 링크")
  > * [nextree.co.kr](http://www.nextree.co.kr/p7323/ "프로토타입 종합")
