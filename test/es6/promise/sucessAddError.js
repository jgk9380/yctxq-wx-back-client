/**
 * Created by jianggk on 2017/9/12.
 */
var pp = new Promise((X, Y) => {
  //X(222);// 用于完成
  //Y(111);//用于拒绝
  console.log("begin date=" + new Date());
  setTimeout(console.log("time test"), 2000);//todo  这个其实是语法错误。居然也执行了一半，什么原因？
  setTimeout(() => X(222), 3000);//todo  这个其实不会延时。什么原因

});
pp.then(a => console.log("\n pp sucess:" + a + " date=" + (new Date())),
  error => console.log("pp error1:" + error));
