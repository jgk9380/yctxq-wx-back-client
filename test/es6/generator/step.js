/**
 * Created by jianggk on 2017/9/13.
 */
function step(gen) {
  var it = gen();
  var last;
  return function() {
    // 不管yield出来的是什么，下一次都把它原样传回去！
    last = it.next( last ).value;
  };
}



var a = 1;
var b = 2;

function *foo() {
  a++;
  yield;
  b = b * a;
  a = (yield b) + 3;
}

function *bar() {
  b--;
  yield;
  a = (yield 8) + b;
  b = a * (yield 2);
}


a = 1;
b = 2;

var s1 = step( foo );
var s2 = step( bar );

// 首次运行*foo()
s1();
s1();
s1();

// 现在运行*bar()
s2();
s2();
s2();
s2();

console.log( a, b );    // 11 22
