/**
 * Created by jianggk on 2017/9/8.
 */
let a=[];
a[1]="1";
a[4]="5";
a["dd"]="c";
console.log(a.toString());
console.log(a.length);
console.log(a["dd"]);



var aa = new String( "abc" );
console.log("type of ="+typeof aa);
                           // 是"object"，不 是 "String"
                // true
console.log(aa instanceof String);// true
console.log(Object.prototype.toString());

//todo console.log(aa instanceof string);// error: string is not defined

// 所有typeof返回值为"object"的对象（如数组）都包含一个内部属性[[Class]]（我们可
// 以把它看作一个内部的分类，而非传统的面向对象意义上的类）。这个属性无法直接访问，
// 一般通过Object.prototype.toString(..)来查看。例如：

console.log(Object.prototype.toString.call(aa)+"  cons==String is "+(aa.constructor==String)+"   cons=[ "+aa.constructor+" ]");
console.log(Object.prototype.toString.call( /regex-literal/i ));


var cc = "ddd";
console.log(typeof cc);



// 封装对象（object wrapper）扮演着十分重要的角色。由于基本类型值没有.length
// 和.toString()这样的属性和方法，需要通过封装对象才能访问，此时JavaScript会自动为
// 基本类型值包装（box或者wrap）一个封装对象：

var a = "abc";
a.length; // 3
a.toUpperCase(); // "ABC"

// 一般情况下，我们不需要直接使用封装对象。最好的办法是让JavaScript引擎自己决定什
// 么时候应该使用封装对象。换句话说，就是应该优先考虑使用"abc"和42这样的基本类型
// 值，而非new String("abc")和new Number(42)。


var a = new Boolean( false );

if (!a) {
  console.log( "Oops" ); // 执行不到这里
}
// 我们为false创建了一个封装对象，然而该对象是真值（“truthy”，即总是返回true，参见第4章），所以这里使用封装对象得到的结果和使用false截然相反。


// 如果想要自行封装基本类型值，可以使用Object(..)函数（不带new关键字）：
var a = "abc";
var b = new String( a );
var c = Object( a );

typeof a; // "string"
typeof b; // "object"
typeof c; // "object"

b instanceof String; // true
c instanceof String; // true

Object.prototype.toString.call( b ); // "[object String]"
Object.prototype.toString.call( c ); // "[object String]"
// 再次强调，一般不推荐直接使用封装对象（如上例中的b 和 c），但它们偶尔也会派上 用场。


// 如果想要得到封装对象中的基本类型值，可以使用valueOf()函数：

//在需要用到封装对象中的基本类型值的地方会发生隐式拆封。具体过程（即强制类型转换）将在第4章详细介绍。
var a = new String( "abc" );
var b = a + ""; // b的值为"abc"

typeof a;       // "object"
typeof b;       // "string"

//
// 关于数组（array）、对象（object）、函数（function）和正则表达式，我们通常喜欢以常
// 量的形式来创建它们。实际上，使用常量和使用构造函数的效果是一样的（创建的值都是
// 通过封装对象来包装）。
// 如前所述，应该尽量避免使用构造函数，除非十分必要，因为它们经常会产生意想不到的
// 结果。

//
// 构造函数Array(..)不要求必须带new关键字。不带时，它会被自动补上。
// 因此Array(1,2,3)和new Array(1,2,3)的效果是一样的。

// Array构造函数只带一个数字参数的时候，该参数会被作为数组的预设长度（length）， 而非只充当数组中的一个元素。
// 这实非明智之举：一是容易忘记，二是容易出错。

//更为关键的是，数组并没有预设长度这个概念。这样创建出来的只是一个空数组，只不过它的length属性被设置成了指定的值。
