var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Created by jianggk on 2017/9/14.
 */
function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
function asyncPrint(value, ms) {
    return __awaiter(this, void 0, void 0, function* () {
        yield timeout(ms);
        console.log(value);
    });
}
asyncPrint('hello world', 50);
console.log("hhello1 ");
function testPara() {
    return __awaiter(this, void 0, void 0, function* () {
        let asyncPrintPromise = asyncPrint("wait 3sec", 3000); //立刻执行得到prom，但是没有结果
        console.log(asyncPrintPromise, new Date());
        // let asnycValue = await  asyncPrintPromise;//真正执行，用在函数中；如果不等待是否也在执行?
        yield timeout(4000);
        // console.log(asnycValue,new Date,asyncPrintPromise);
        console.log(new Date, asyncPrintPromise);
    });
}
testPara();
//
// 第二点，多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。
//
// let foo = await getFoo();
// let bar = await getBar();
// 上面代码中，getFoo和getBar是两个独立的异步操作（即互不依赖），被写成继发关系。这样比较耗时，因为只有getFoo完成以后，才会执行getBar，完全可以让它们同时触发。
//
// // 写法一
// let [foo, bar] = await Promise.all([getFoo(), getBar()]);
//
// // 写法二
// let fooPromise = getFoo();
// let barPromise = getBar();
// let foo = await fooPromise;
// let bar = await barPromise;
// 上面两种写法，getFoo和getBar都是同时触发，这样就会缩短程序的执行时间。
