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

function compact(arr) {
  var isNotFalsey, copiedList = copyList(arr), resultList = [], i = 0;
  for (i, max = arr.length; i < max; i += 1) {
    if (isNotFalsey = copiedList[i]) {
      resultList.push(isNotFalsey);
    }
  }
  return resultList;
}