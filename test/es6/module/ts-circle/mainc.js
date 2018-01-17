"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
//import * as circle from './circle.mjs'
const circle_1 = require("./circle");
console.log('圆面积：' + circle_1.area(4));
console.log('圆周长：' + circle_1.circumference(14));
console.log("circle_1=",circle_1);
// var circle = require('./circle.mjs');
//
//
// console.log('圆面积：' + circle.area(4));
// console.log('圆周长：' + circle.circumference(14));
//
//
// console.log(module);
//Node 要求 ES6 模块采用.mjs后缀文件名。也就是说，只要脚本文件里面使用import或者export命令，那么就必须采用.mjs后缀名。
// require命令不能加载.mjs文件，会报错，只有import命令才可以加载.mjs文件。反过来，.mjs文件里面也不能使用require命令，必须使用import。
//目前，这项功能还在试验阶段。安装 Node v8.5.0 或以上版本，要用--experimental-modules参数才能打开该功能。
//$ node --experimental-modules my-app.mjs
// 上面代码中，脚本路径带有参数?query=1，Node 会按 URL 规则解读。同一个脚本只要参数不同，就会被加载多次，并且保存成不同的缓存。
// 由于这个原因，只要文件名中含有:、%、#、?等特殊字符，就必须转义，不如foo#bar.js不能写成import './foo#bar'，而要写成import './foo\#bar'。
//
// 目前，Node 的import命令只支持加载本地模块（file:协议），不支持加载远程模块。
//
// 如果模块名不含路径，那么import命令会去node_modules目录寻找这个模块。
//
// import 'baz';
// import 'abc/123';
// 如果模块名包含路径，那么import命令会按照路径去寻找这个名字的脚本文件。
//
// import 'file:///etc/config/app.json';
// import './foo';
// import './foo?search';
// import '../bar';
// import '/baz';
// 如果脚本文件省略了后缀名，比如import './foo'，Node 会依次尝试四个后缀名：./foo.mjs、./foo.js、./foo.json、./foo.node。
// 如果这些脚本文件都不存在，Node 就会去加载./foo/package.json的main字段指定的脚本。
// 如果./foo/package.json不存在或者没有main字段，那么就会依次加载./foo/index.mjs、./foo/index.js、./foo/index.json、./foo/index.node。
// 如果以上四个文件还是都不存在，就会抛出错误。
//
// 最后，Node 的import命令是异步加载，这一点与浏览器的处理方法相同。
//# sourceMappingURL=mainc.js.map
