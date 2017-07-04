/**
 * Created by shawn on 2017. 7. 4..
 */
function copyList(list) {
  var copiedList = [], i = 0;
  for (i, max = list.length; i < max; i += 1) {
    copiedList.push(list[i]);
  }
  return copiedList;
}

function concat(arr) {
  var eachArg,
    max,
    i = 0,
    copiedList = copyList(arr),
    resultList = [];

  for (i, max = copiedList.length; i < max; i += 1) {
    eachArg = copiedList[i];
    if (eachArg || eachArg === 0) {
      if (Object.prototype.toString.call(eachArg) === '[object Array]') {
        resultList.push.apply(resultList, eachArg);
      } else {
        resultList.push(eachArg);
      }
    }
  }

  return resultList;
}