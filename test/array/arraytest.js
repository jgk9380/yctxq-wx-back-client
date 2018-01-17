/**
 * Created by jianggk on 2017/9/7.
 */
let  a=[1,2,3];
console.log(typeof  a);
console.log((a instanceof Array)+" cons="+a.constructor)//true;
//console.log(a)//true;
console.log( Object.prototype.toString.call(a))

var ary = [1,23,4];

function isArray(o){
  return Object.prototype.toString.call(o)=='[object Array]';
}
//console.log(isArray(ary));

function isString(str){
  return (typeof str=='string')&&str.constructor==String;
}

function isArray(obj){
  return (typeof obj=='object')&&obj.constructor==Array;
}

function isNumber(obj){
  return (typeof obj=='number')&&obj.constructor==Number;
}

function isDate(obj){
  return (typeof obj=='object')&&obj.constructor==Date;
}

function isFunction(obj){
  return (typeof obj=='function')&&obj.constructor==Function;
}

function isObject(obj){
  return (typeof obj=='object')&&obj.constructor==Object;
}

function isArray(o){
  return Object.prototype.toString.call(o)=='[object Array]';
}

// 我们可以通过下述方式来创建包含undefined单元（而非“空单元”）的数组：
var a = Array.apply( null, { length: 3 } );a; // [ undefined, undefined, undefined ]
// apply(..)是一个工具函数，适用于所有函数对象，它会以一种特殊的方式来调用传递给
// 它的函数。
// 第一个参数是this对象（《你不知道的JavaScript（上卷）》的“this和对象原型”部分中
// 有相关介绍），这里不用太过费心，暂将它设为null。第二个参数则必须是一个数组（或
// 者类似数组的值，也叫作类数组对象，array-like object），其中的值被用作函数的参数。
// 于是Array.apply(..)调用Array(..)函数，并且将{ length: 3 }作为函数的参数。
// 我们可以设想apply(..)内部有一个for循环（与上述join(..)类似），从0开始循环到
// length（即循环到2，不包括3）。
// 假设在apply(..)内部该数组参数名为arr，for循环就会这样来遍历数组：arr[0]、
// arr[1]、arr[2]。然而，由于{ length: 3 } 中并不存在这些属性，所以返回值为
// undefined。
// 换句话说，我们执行的实际上是Array(undefined, undefined, undefined)，所以结果是单
// 元值为undefined的数组，而非空单元数组。
// 虽然Array.apply( null, { length: 3 } )在创建undefined值的数组时有些奇怪和繁琐，
// 但是其结果远比Array(3)更准确可靠。
// 总之，永远不要创建和使用空单元数组。


