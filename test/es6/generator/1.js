/**
 * Created by jianggk on 2017/9/12.
 */
function *something() {
  var nextVal;
  while (true) {
    if (nextVal === undefined) {
      nextVal = 1;
    }
    else {
      nextVal = (3 * nextVal) + 6;
    }
    yield nextVal;
  }
}
