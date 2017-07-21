/**
 * Created by shawn on 2017. 7. 17..
 */

function InputTimerProvider(input) {
  this.input = document.getElementById(input);
  var self = this;
  this.input.addEventListener('input', function() {
    var input = this;
    self.rightAfterInput(this.value);
    setTimeout(function(){
      self.afterFiveSeconds(input.value, 5);
    }, 5000)
  })
}

InputTimerProvider.prototype = {
  rightAfterInput: function(val) {

  },
  afterFiveSeconds: function(val, secsPassed) {

  }
}

function Provider(input, name) {
  InputTimerProvider.call(this, input);
  this.name = name;
}

Provider.prototype = Object.assign(Object.create(InputTimerProvider.prototype), {
  rightAfterInput: function (val) {
    console.log(val);
  },
  afterFiveSeconds: function (val, passed) {

  }
});
Provider.prototype.constructor = Provider