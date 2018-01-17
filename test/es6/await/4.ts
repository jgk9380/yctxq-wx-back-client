/**
 * Created by jianggk on 2017/9/13.
 */
//await命令后面的 Promise 对象如果变为reject状态，则reject的参数会被catch方法的回调函数接收到。

async function f() {
  await Promise.reject('f出错了');
}

f()  .then(v => console.log(v))  .catch(e => console.log(e))
// 123



//有时，我们希望即使前一个异步操作失败，也不要中断后面的异步操作。这时可以将第一个await放在try...catch结构里面，这样不管这个异步操作是否成功，第二个await都会执行。

async function x() {
  try {
    await Promise.reject('x出错了');
  } catch(e) {
    console.log(e)
  }
  return await Promise.resolve('hello world');
}

x()  .then(v => console.log(v))
// hello world


//另一种方法是await后面的 Promise 对象再跟一个catch方法，处理前面可能出现的错误。

async function y() {
  await Promise.reject('y出错了')
    .catch(e => console.log(e));
  return await Promise.resolve('hello world');
}

y().then(v => console.log(v))
// 出错了
// hello world


async function f() {
  await new Promise(function (resolve, reject) {
    throw new Error('出错了');
  });
}

f()
  .then(v => console.log(v))
  .catch(e => console.log(e))
// Error：出错了
