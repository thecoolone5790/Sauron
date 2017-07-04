function concat() {
  var len = arguments.length, result = [];

  for (var i = 0; i < len; i++) {
    isArray(arguments[i]) ? result.push.apply(result, arguments[i]) : result.push(arguments[i]);
  }

  function isArray(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }


  return result;
}

function difference(target, source) {

  var result = [], tmpList = [];

  for (var i = 0; i < target.length; i++) {
    for (var j = 0; j < source.length; j++) {
      if (target[i] === source[j]) {
        tmpList.push(source[j]);
      }
    }
  }

  for (var k = 0; k < target.length; k++) {
    for (var h = 0; h < source.length; h++) {
      if (target[k] !== source[h]) {
        result.push(target[k]);
      }
    }
  }

  return result;
}


console.log(difference([2, 1], [2, 3]));

