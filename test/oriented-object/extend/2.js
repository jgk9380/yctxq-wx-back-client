/**
 * Created by jianggk on 2017/9/21.
 */

// 这个系列的第一部分介绍了"封装"，第二部分介绍了使用构造函数实现"继承"。
// 今天是最后一个部分，介绍不使用构造函数实现"继承"。
// 一、什么是"非构造函数"的继承？
// 比如，现在有一个对象，叫做"中国人"。
var Chinese = {
  nation:'中国'
};
// 还有一个对象，叫做"医生"。
var Doctor ={
  career:'医生'
}
// 请问怎样才能让"医生"去继承"中国人"，也就是说，我怎样才能生成一个"中国医生"的对象？
// 这里要注意，这两个对象都是普通对象，不是构造函数，无法使用构造函数方法实现"继承"
// 二、object()方法
// json格式的发明人Douglas Crockford，提出了一个object()函数，可以做到这一点。
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}


var Doctor = object(Chinese);

//三、浅拷贝
function extendCopy(p) {
  var c = {};
  for (var i in p) {
    c[i] = p[i];
  }
  c.uber = p;
  return c;
}
//四、深拷贝
function deepCopy(p, c) {
  var c = c || {};
  for (var i in p) {
    if (typeof p[i] === 'object') {
      c[i] = (p[i].constructor === Array) ? [] : {};
      deepCopy(p[i], c[i]);
    } else {
      c[i] = p[i];
    }
  }
  return c;
}
