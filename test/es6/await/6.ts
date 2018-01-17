/**
 * Created by jianggk on 2017/9/14.
 */
var fs = require('fs');

var readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};

// var readFile = function (fileName) {
//     fs.readFile(fileName, function(error, data) {
//       if (error) return Promise.reject(error);
//       return   Promise.resolve(data);
//     });
// };

var gen = function* () {
  var f1 = yield readFile('/etc/fstab');
  var f2 = yield readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};
//写成async函数，就是下面这样。

var asyncReadFile = async function () {
  var f1 = await readFile('d:\\1.txt');
  var f2 = await readFile('d:\\2.txt');
  console.log(f1.toString());
  console.log(f2.toString());
};
asyncReadFile();

//async函数返回一个 Promise 对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。
