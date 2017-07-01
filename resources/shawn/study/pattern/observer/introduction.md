# Observer Pattern

> 옵저버 패턴은 한 객체의 상태가 바뀌면 그 객체에 의존하던 다른 객체들에게 연락이가 가고 자동으로 정보가 갱신됩니다(1:N)의 관

## Features

> 1. 주제객체와 옵저버객체가 존재(1:N 의 관계도 가능함)
> 2. 주제객체와 옵저버 객체는 독립적으로사용이 가능  
    : 따라서 옵저버는 언제나 추가/삭제/신규 옵저버 생성도 가능하
> 3. 사용방식  
    : pull - 옵저버가 데이터를 가져가는 방식  
    : push - 주제객체에서 데이터를 보내는 방식  

## How it works

<p align = "center">
  <img src = "https://commons.wikimedia.org/wiki/File:Observer.svg?uselang=ko" alt = ""/>
</p> 

## Links

> [관련링크](http://tiboy.tistory.com/entry/Observer-Pattern)  
