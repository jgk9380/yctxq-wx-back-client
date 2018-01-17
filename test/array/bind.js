/**
 * Created by jianggk on 2017/9/8.
 */
var a = {
  user:"追梦子",
  fn:function(){
    console.log(this.user);
  }
}
var b = a.fn;
b();
var c = b.bind(a);
console.log("c="+c+"\na.fn="+a.fn); //function() { [native code] }
c();
