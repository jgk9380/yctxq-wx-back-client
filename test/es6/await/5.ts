/**
 * Created by jianggk on 2017/9/14.
 */

import http = require('http');

class httpAsync {
  constructor() {

  }

  public async GetAsync(url: string): Promise<http.IncomingMessage> {
    var promise = new Promise<http.IncomingMessage>(resolve => {
      http.get(url, res => {
        resolve(res);
      });
    });
    return promise;
  }
}

async function test() {
  let ha = new httpAsync();

  let res = await ha.GetAsync("http://www.baidu.com");
  console.log('the first Status :' + res.statusCode);
  res = await ha.GetAsync("http://www.163.com");
  console.log('the first Status :' + res.statusCode);
  res = await ha.GetAsync("http://www.sina.com");
  console.log('the first Status :' + res.statusCode);
}

test();
