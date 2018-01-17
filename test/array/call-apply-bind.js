/**
 * Created by jianggk on 2017/9/8.
 */
// var  numbers = [5, 458 , 120 , -215 ];
// var  b = Math.max.apply(Math, numbers),   //458
//   c=Math.max(5, 458 , 120 , -215)
//   a = Math.max.call(Math,5, 458 , 120 , -215); //458
// console.log("a="+a+" b="+b+" c="+c)


// 都是用来改变函数的this对象的指向的；
// 第一个参数都是this要指向的对象；
// 都可以利用后续参数传参；
// bind是返回对应函数，便于稍后调用，apply、call是立即调用；


var a = {
  user:"追梦子",
  fn:function(){
    console.log(this.user);
  }
}
// var b = a.fn;
// b(); //undefined
// a.fn(); //追梦子   这里能够打印是因为，这里的this指向的是函数a，那为什么上面的不指向a？我们如果需要了解this的指向问题
// b.call(a);



var c = {
  user:"追梦子1",
  fn:function(e,ee){
    console.log(this.user); //追梦子
    console.log(e+ee); //3
  }
}

var d = c.fn;
// d.call(c,1,2);
// d.call(a,1,2);

c.fn(1,2)
c.fn.call(c,1,2);
c.fn.call(a,1,2);

