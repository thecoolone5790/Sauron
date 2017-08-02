/**
 * Created by shawn on 2017. 7. 27..
 */

(function (exports) {
  //생성자 - 컨벤션 첫글자는 대문자
  function Person(name) {
    if (!(this instanceof Person)) {
      return new Person(name);
    }
    this.name = name;
  }

  Person.prototype.getName = function () {
    return this.name;
  };
  Person.prototype.setMoney = function (money) {
    this.money = money;
    return this;
  };
  Person.prototype.getMoney = function () {
    return this.money;
  };
  Person.prototype.useMoney = function (money) {
    var currentMoney = this.money;
    if(currentMoney && currentMoney >= money){
      return currentMoney - money;
    }
    return this;
  };

  exports.P = Person;
})(window);