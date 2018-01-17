/**
 * Created by jianggk on 2017/9/8.
 */
// 其中true转换为1，false转换为0。undefined转换为NaN，null转换为0。
/*
      处理失败 时返回NaN（处理数字常量失败时会产生语法错误）。不同之处是ToNumber对以0开头的十六进制数并不按十六进制处理（而是按十进制，参见第2章 ）。
*/


/*
    对象（包括数组）会首先被转换为相应的基本类型值，如果返回的是非数字的基本类型值，则再遵循以上规则将其强制转换为数字。
    为了将值转换为相应的基本类型值，抽象操作ToPrimitive（参见ES5规范9.1节）会首先（通过内部操作DefaultValue，参见ES5规范8.12.8节）检查该值是否有valueOf()方法。
    如果有并且返回基本类型值，就使用该值进行强制类型转换。
    如果没有就使用toString()的返回值（如果存在）来进行强制类型转换。
    如果valueOf()和toString()均不返回基本类型值，会产生TypeError错误。
*/

/*
    从ES5开始，使用Object.create(null)创建的对象[[Prototype]]属性为null，并且没有valueOf()和toString()方法，因此无法进行强制类型转换。
*/


/* toBoolean
      以下这些是假值：
      •  undefined
      •  null
      •  false
      •  +0、-0和NaN
      •  ""
*/

/*
    从逻辑上说，假值列表以外的都应该是真值（truthy）。 但 JavaScript规范对此并没有明确
    定义，只是给出了一些示例，例如规定所有的对象都是真值，我们可以理解为假值列表以
    外的值都是真值。
*/


//例如：
    var a = new Boolean( false );
    var b = new Number( 0 );
    var c = new String( "" );
//它们都是封装了假值的对象（参见第3章）。那它们究竟是true还是false呢？答案很简单：
    var d = Boolean( a && b && c );
    d; // true
//d为true，说明a、b、c都为true。


/*
      最常见的例子是document.all，它是一个类数组对象，包含了页面上的所有元素，由
      DOM（而不是JavaScript引擎）提供给JavaScript程序使用。它以前曾是一个真正意义上
      的对象，布尔强制类型转换结果为true，不过现在它是一个假值对象。
*/


var a = [];             // 空数组——是真值还是假值？
var b = {};             // 空对象——是真值还是假值？
var c = function(){};   // 空函数——是真值还是假值？

var d = Boolean( a && b && c );
d;

// d依然是true。



// 一元运算符+的另一个常见用途是将日期（Date）对象强制类型转换为数字，返回结果为Unix时间戳，以微秒为单位（从1970年1月1日00:00:00 UTC到当前时间）：
var d = new Date( "Mon, 18 Aug 2014 08:53:06 CDT" );
+d; // 1408369986000
