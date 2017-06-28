  # study - point
  * node.js?
  * npm?
  
  <p align = "center">
       <img src = "https://velopert.com/wp-content/uploads/2016/02/nodejs-2560x1440-1024x576.png"alt = ""/>
  </p>
  
  ### node.js? 
  > 1. NodeJS 는 구글 크롬의 자바스크립트 엔진 (V8 Engine) 에 기반해 만들어진 서버 사이드 플랫폼입니다. 
  > 2. Node.js®는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임입니다. 
  > 3. Node.js는 이벤트 기반, 논 블로킹 I/O 모델을 사용해 가볍고 효율적입니다. 
  > 4. 패키지 생태계인 npm은 세계에서 가장 큰 오픈 소스 라이브러리이기도 합니다.
    
  <p align = "center">
         <img src = "https://velopert.com/wp-content/uploads/2016/02/ff.png"alt = ""/>
  </p>  
    
  ### 노드의 특징
  > 1. 비동기 I/O 처리 / 이벤트 위주  
    : Node.js 라이브러리의 모든 API는 비동기식입니다, 멈추지 않는다는거죠 (Non-blocking).  
    Node.js 기반 서버는 API가 실행되었을때, 데이터를 반환할때까지 기다리지 않고 다음 API 를 실행합니다.  
    그리고 이전에 실행했던 API가 결과값을 반환할 시, NodeJS의 이벤트 알림 메커니즘을 통해 결과값을 받아옵니다.  
  > 2. 빠른 속도  
  : 구글 크롬의 V8 자바스크립트 엔진을 사용하여 빠른 코드 실행을 제공합니다.
  > 3. 단일 쓰레드 / 뛰어난 확장성  
  : Node.js는 이벤트 루프와 함께 단일 쓰레드 모델을 사용합니다. 이벤트 메커니즘은 서버가 멈추지않고 반응하도록 해주어 서버의 확장성을 키워줍니다.  
    반면,  일반적인 웹서버는 (Apache) 요청을 처리하기 위하여 제한된 쓰레드를 생성합니다.   
    Node.js 는 쓰레드를 한개만 사용하고  Apache 같은 웹서버보다 훨씬 많은 요청을 처리할 수 있습니다.    
  > 4. 노  버퍼링  
  : Node.js 어플리케이션엔 데이터 버퍼링이 없고, 데이터를 chunk로 출력합니다.
  > 5. 라이센스  
  : Node.js 는 MIT License가 적용되어있습니다.
  
  ### 노드에 적합한 사용
  > 1. 입출력이 잦은 어플리케이션
  > 2. 데이터 스트리밍 어플리케이션
  > 3. 데이터를 실시간으로 다루는 어플리케이션
  > 4. JSON API 기반 어플리케이션
  > 5. 싱글페이지 어플리케이션

  ### 노드에 적합하지 않은 사용
  > 1. CPU 사용률이 높은 어플리케이션에선 Node.js 사용을 권장하지 않습니다.
    
  
  ### link - references
  > * [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node "MDN")  
  > * [velopert](https://velopert.com/287 "노드공부")  
  > * [PDF](https://workshop.benzen.io/course/book.pdf "")
  
