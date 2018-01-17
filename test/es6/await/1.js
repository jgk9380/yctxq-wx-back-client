/**
 * Created by jianggk on 2017/9/13.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function f() {
    return __awaiter(this, void 0, void 0, function* () {
        return 'hello world';
        //await Promise.reject('出错了');
    });
}
f()
    .then(v => console.log(v))
    .catch(e => console.log(e));
//f().then(v => console.log(v),v=>console.log(v))
let fPromise = f();
console.log(fPromise);
