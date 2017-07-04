function isArray(target) {
  return Object.prototype.toString.call(target) === '[object Array]';
}

function copyArray(arr) {
  var copiedArr = [];
  var i = 0;
  var max = arr.length;
  for (i; i < max; i += 1) {
    copiedArr.push(arr[i]);
  }
  return copiedArr;
}

function concat(arr) {
  var eachArg;
  var copiedList = copyArray(arr);
  var max = copiedList.length;
  var i = 0;
  var resultList = [];

  for (i; i < max; i += 1) {
    eachArg = copiedList[i];
    if (eachArg || eachArg === 0) {
      if (isArray(eachArg)) {
        resultList.push.apply(resultList, eachArg);
      } else {
        resultList.push(eachArg);
      }
    }
  }
  return resultList;
}

function sortArr(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    var left = [];
    var right = [];
    var equal = [];
    var pivot = parseInt(arr.length / 2) | 0;
    var i = 0;
    var max = arr.length;
    var each;
    for (i; i < max; i += 1) {
      each = arr[i];
      if (each > arr[pivot]) {
        right.push(each);
      } else if (each < arr[pivot]) {
        left.push(each);
      } else {
        equal.push(each);
      }
    }
    return sortArr(left).concat(equal, sortArr(right));
  }
}

function difference(target, source) {
  var copiedTarget = isArray(target) ? copyArray(target) : [];

  if (isArray(source)) {
    // console.log(sortiedTarget);
    // console.log(sortiedSource);

    for (var i = 0; i < copiedTarget.length; i++) {
      for (var j = 0; j < source.length; j++) {
        if (copiedTarget[i] === source[j]) {

        }
      }
    }
  }
  return [];
}

// console.log(difference([2, 1], [2, 3]));
// console.log(difference('', [2, 3]));
// console.log(difference([1, 2, 3, 4, 5], [1, 2, 3]));
// console.log(difference(['multiple', 'noop', 'filter'], ['noop']));

difference([2, 1], [2, 3]);
difference('test', [2, 3]);
difference([1, 2, 3, 4, 5], [1, 2, 3]);
difference(['multiple', 'noop', 'filter'], ['noop']);