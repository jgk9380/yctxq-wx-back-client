/**
 * Created by jianggk on 2017/9/13.
 */
function *foo(x) {
  var y = x * (yield "Hello");     // <-- yield一个值！
  return y;
}

var it = foo( 6 );

var res = it.next();    // 第一个next()，并不传入任何东西
console.log(res.value);              // "Hello"

res = it.next( 7 );     // 向等待的yield传入7
console.log(res.value);              // 42
