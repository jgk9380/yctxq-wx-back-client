/**
 * Created by jianggk on 2017/9/11.
 */
let a=Promise.resolve("a");
let b=Promise.reject("a");
a.then(a=>console.log("sucess:"+a),error=>console.log("error1:"+error));
a.then(a=>console.log("sucess:"+a),error=>console.log("error1:"+error));
b.then(a=>console.log("sucess:"+a),error=>console.log("error1:"+error));


var p = new Promise( function(resolve,reject){
  resolve(43);
  reject( 42 );
} );

p.then(a=>console.log("p sucess:"+a),error=>console.log("p error1:"+error));

//而如果向Promise.resolve(..)传递一个真正的Promise，就只会返回同一个promise：
var p1 = Promise.resolve( 42 );

var p2 = Promise.resolve( p1 );
p1 === p2; // true


// 链式流
// 尽管我们之前对此有过几次暗示，但Promise并不只是一个单步执行this-then-that操作的
// 机制。当然，那是构成部件，但是我们可以把多个Promise连接到一起以表示一系列异步 步骤。
// 这种方式可以实现的关键在于以下两个Promise固有行为特性：
// •  每次你对Promise调用then(..)，它都会创建并返回一个新的Promise，我们可以将其 链接起来；
// •  不管从then(..)调用的完成回调（第一个参数）返回的值是什么，它都会被自动设置为被链接Promise（第一点中的）的完成。
var pp = new Promise((X,Y)=>{
  //X(222);// 用于完成
  //Y(111);//用于拒绝
} );

pp.then(a=>console.log("pp sucess:"+a),error=>console.log("pp error1:"+error));


//为了避免丢失被忽略和抛弃的Promise错误，一些开发者表示，Promise链的一个最佳实践就是最后总以一个catch(..)结束，比如：


var px = Promise.resolve( 42 );

px.then(
  function fulfilled(msg){
    // 数字没有string函数，所以会抛出错误
    console.log( msg.toLowerCase() );
  }
)
  .catch( error=>console.log(error) );
