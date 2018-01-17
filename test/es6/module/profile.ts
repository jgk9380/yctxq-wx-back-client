/**
 * Created by jianggk on 2017/9/18.
 */
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;


// var firstName = 'Michael';
// var lastName = 'Jackson';
// var year = 1958;
//
// export {firstName, lastName, year};
export function multiply(x, y) {
  return x * y;
};

//需要特别注意的是，export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。

// // 报错
// export 1;
//
// // 报错
// var m = 1;
// export m;
// 上面两种写法都会报错，因为没有提供对外的接口。第一种写法直接输出1，第二种写法通过变量m，还是直接输出1。1只是一个值，不是接口。正确的写法是下面这样。
//
// // 写法一
// export var m = 1;
//
// // 写法二
// var m = 1;
// export {m};
//
// // 写法三
// var n = 1;
// export {n as m};
