/**
 * Created by jianggk on 2017/9/13.
 */
var gimmeSomething = (function(){
  var nextVal;

  return function(){
    if (nextVal === undefined) {
      nextVal = 1;
    }
    else {
      nextVal = (3 * nextVal) +6;
    }

    return nextVal;
  };
})();

gimmeSomething();       // 1
gimmeSomething();       // 9
gimmeSomething();       // 33
gimmeSomething();       // 105



var something = (function(){
  var nextVal;

  return {
    // for..of循环需要
    [Symbol.iterator]: function(){ return this; },

    // 标准迭代器接口方法
    next: function(){
      if (nextVal === undefined) {
        nextVal = 1;
      }
      else {
        nextVal = (3 * nextVal) + 6;
      }

      return { done:false, value:nextVal };
    }
  };
})();

something.next().value;     // 1
something.next().value;     // 9
something.next().value;     // 33
something.next().value;     // 105



var a = [1,3,5,7,9];

var it = a[Symbol.iterator]();

it.next().value;    // 1
it.next().value;    // 3
it.next().value;    // 5



function *something() {//生产器版本
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
