/**
 * Created by jianggk on 2017/9/13.
 */

async function f() {
   return 'hello world';
  //await Promise.reject('出错了');
}
f()
  .then(v => console.log(v))
  .catch(e => console.log(e))


//f().then(v => console.log(v),v=>console.log(v))


let fPromise = f();
console.log(fPromise)
