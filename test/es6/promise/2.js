/**
 * Created by jianggk on 2017/9/12.
 */
var pp = new Promise((X, Y) => {
  //X(222);// 用于完成
  //Y(111);//用于拒绝
  console.log("pp date=" + new Date());
  setTimeout(console.log("time test"), 2000);//todo  这个其实不会延时。什么原因
  setTimeout(()=>X(222), 3000);//todo  这个其实不会延时。什么原因

});
pp.then(a => console.log("\n pp sucess:" + a + " date=" + (new Date())), error => console.log("pp error1:" + error));

var ppp = new Promise((X, Y) => {
  //X(222);// 用于完成
  //Y(111);//用于拒绝
  console.log("ppp date=" + new Date())
  setTimeout(()=>X(222), 3000);//todo  这样才会延时
});


ppp.then(a => console.log("\n ppp sucess:" + a + " date=" + (new Date())), error => console.log("ppp error1:" + error));
