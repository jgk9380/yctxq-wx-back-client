/**
 * Created by jianggk on 2017/9/13.
 */



//第一点，前面已经说过，await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中。

async function myFunction() {
  try {
    await somethingThatReturnsAPromise();
  } catch (err) {
    console.log(err);
  }
}

// 另一种写法

async function myFunction() {
  await somethingThatReturnsAPromise().catch(function (err) {
      console.log(err);
    });
}
//第二点，多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。
function getFoo() {

}

function getBar() {

}
async function fff()
{
  let foo = await  getFoo();
  let bar = await  getBar();
//上面代码中，getFoo和getBar是两个独立的异步操作（即互不依赖），被写成继发关系。这样比较耗时，因为只有getFoo完成以后，才会执行getBar，完全可以让它们同时触发。

// 写法一
  let [foo, bar] = await  Promise.all([getFoo(), getBar()]);

// 写法二
  let fooPromise = getFoo();
  let barPromise = getBar();
  let foo = await  fooPromise; //TODO  这样怎么就不要等待了？
  let bar = await  barPromise;

}

//第三点，await命令只能用在async函数之中，如果用在普通函数，就会报错。

async function dbFuc(db) {
  let docs = [{}, {}, {}];

  // // 报错
  // docs.forEach(function (doc) {
  //   await db.post(doc);
  // });
  // 报错
  docs.forEach(function (doc) {
     db.post(doc);
  });
}
