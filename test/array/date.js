/**
 * Created by jianggk on 2017/9/8.
 */
/*Date(..)主要用来获得当前的Unix时间戳（从1970年1月1日开始计算，以秒为单位）。
该值可以通过日期对象中的getTime()来获得。
从ES5开始引入了一个更简单的方法，即静态函数Date.now()。对ES5之前的版本我们可
以使用下面的polyﬁll：*/

if (!Date.now) {
  Date.now = function(){
    return (new Date()).getTime();
  };
}
/*todo 如果调用Date()时不带new关键字，则会得到当前日期的字符串值。
具体格式规范没有规定，浏览器使用"Fri Jul 18 2014 00:31:02 GMT-0500 (CDT)
这样的格式来显示。*/


// 构造函数Error(..)（与前面的Array()类似）带不带new关键字都可。


// 我们可以使用Symbol(..)原生构造函数来自定义符号。但它比较特殊，不能带new关键字，否则会出错：
var mysym = Symbol( "my own symbol" );
console.log(mysym);              // Symbol(my own symbol)
mysym.toString();   // "Symbol(my own symbol)"
typeof mysym;       // "symbol"

var a = { };
a[mysym] = "foobar";

Object.getOwnPropertySymbols( a );
// [ Symbol(my own symbol) ]


/*ES6中新加入了一个基本数据类型 ——符号（Symbol）。符号是具有唯一性的特殊值（并
非绝对），用它来命名对象属性不容易导致重名。该类型的引入主要源于ES6的一些特殊
构造，此外符号也可以自行定义。
符号可以用作属性名，但无论是在代码还是开发控制台中都无法查看和访问它的值，只会
显示为诸如Symbol(Symbol.create)这样的值。
ES6中有一些预定义符号，以Symbol的静态属性形式出现，如Symbol.create、Symbol.
  iterator等，可以这样来使用：*/
//
// 虽然符号实际上并非私有属性（通过Object.getOwnPropertySymbols(..)便可以公开获得
// 对象中的所有符号），但它却主要用于私有或特殊属性。很多开发人员喜欢用它来替代有
// 下划线（_）前缀的属性，而下划线前缀通常用于命名私有或特殊属性。


// 根据文档约定，我们将String.prototype.XYZ 简写为String#XYZ，对其他.prototypes也同样如此。


//
// Function.prototype是一个空函数，RegExp.prototype是一个“空”的正则表达式（无
// 任何匹配），而Array.prototype是一个空数组。对未赋值的变量来说，它们是很好的默
// 认值。

var aaa=new String("d");

console.log("aaa".constructor);
console.log(aaa.constructor);
console.log(typeof "aaa");
console.log(typeof aaa);
