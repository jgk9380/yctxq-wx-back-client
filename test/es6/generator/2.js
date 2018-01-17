/**
 * Created by jianggk on 2017/9/13.
 */
var x = 1;

function *foo() {
  x++;
  console.log( "x1:", x );
   yield  6; // 暂停！
  console.log( "x2:", x );
  return x;
}

function bar() {
  x++;
}

var it = foo();
// 这里启动foo()！
res=it.next();
console.log(x,res.value);                 // 3
bar();
console.log(x,it.value);                 // 3
it.next();         // x: 3
console.log(x,it.value);                 // 3

foo();//没有任何反应
