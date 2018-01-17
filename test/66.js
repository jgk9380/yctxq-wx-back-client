/**
 * Created by jianggk on 2017/9/14.
 */
//todo 如何让这个文件支持直接运行  node 66 es6
var fs = require('fs');

var readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};

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
