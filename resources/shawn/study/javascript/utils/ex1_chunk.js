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

function chunk(list, size) {
  var copiedList = copyList(list);
  var resultList = [];
  var tmpList = [];

  for (var i = 0, max = copiedList.length; i < max ; i+=1) {

    tmpList.push(copiedList[i]);

    if (tmpList.length === size) {
      resultList.push(tmpList);
      tmpList = [];
    }

  }

  if (tmpList.length !== 0) {
    resultList.push(tmpList);
  }

  if(size === 0 || list.length === 0){
    resultList = [copiedList];
  }

  return resultList;
}