/**
 * Created by jianggk on 2017/9/13.
 */
let http = require('http');
function test() {
  http.get('http://www.baidu.com', function (res) {
    console.log('the first Status :' + res.statusCode);
    http.get('http://www.163.com', function (res2) {
      console.log('the second Status :' + res2.statusCode);
      http.get('http://www.sina.com', function (res3) {
        console.log('the third Status :' + res3.statusCode);
      })
    })
  });
}

test();
