/**
 * Created by jianggk on 2017/9/19.
 */
var str = "369hello world  he8llo 1,,,, hello 2";
console.log(str.match("hello")); // ["hello", index: 0, input: "hello world"]
console.log(str.match("Hello")); // null
console.log("/g="+str.match(/hel[1-9]lo/g)); // ["hello", index: 0, input: "hello world"]
console.log("no /g="+str.match(/hello/)); // ["hello", index: 0, input: "hello world"]
// 全局匹配
var str2="1 plus 2 equal 3"
console.log(str2.match(/\d+/g)); //["1", "2", "3"]




// 1. 元字符. 用于匹配任何单个字符(除了换行符以外)；
// 基本语法：new RegExp(“regexp.”) 或者直接量语法 /regexp./
var str = "abcde";
console.log(str.match(/a.c/)); // ["abc", index: 0, input: "abcde"]

// 2. \w; 查找任意一个字母或数字或下划线，等价于A_Za_z0_9,_
// 基本语法：new RegExp(“\w”); 或 直接量语法：/\w/

var str = "abcde";

// 匹配单个字符，找到一个直接返回

console.log(str.match(/\w/)); // ["a", index: 0, input: "abcde"]

// 匹配所有字符

console.log(str.match(/\w+/)); //["abcde", index: 0, input: "abcde"]

// 3. \W; 查找非单词的字符，等价于[^A_Za_z0_9_]
// 基本语法：new RegExp(“\W”) 或直接量 /\W/

var str = "abcde";

// 匹配单个字符，没有找到返回null

console.log(str.match(/\W/)); // null

// 4. \d；匹配与一个数字字符，等价于[0-9];
// 基本语法：new RegExp(“\d”); 或 直接量语法：/\d/


var str = "abcde111";

console.log(/\d/g.exec(str)); // ["1", index: 5, input: "abcde111"]

// 5. \D; 匹配一个非数字字符，等价于[^0-9]
// 基本语法：new RegExp(“\D”) 或直接量 /\D/


var str = "abcde111";

console.log(/\D+/g.exec(str)); // ["abcde", index: 0, input: "abcde111"]

// 6. \s；匹配任何空白字符，包括空格，制表符，换行符等等。等价于[\f\n\r\t\v]
// 基本语法：new RegExp(“\s”) 或直接量 /\s/


var str="Is this all there is?";

console.log(/\s/g.exec(str)); // [" ", index: 2, input: "Is this all there is?"]

// 7. \S；匹配任何非空白字符，等价于[^\f\n\r\t\v]
// 基本语法：new RegExp(“\S”) 或直接量 /\S/

var str="Is this all there is?";

console.log(/\S+/g.exec(str)); // ["Is", index: 0, input: "Is this all there is?"]

// 8. \b; 匹配一个单词边界，也就是指单词和空格间的位置，比如’er\b’可以匹配”never”中的”er”,但是不能匹配”verb”中的”er”
// 基本语法：new RegExp(“\bregexp”) 或直接量 /\bregexp/

var str="Is this all there is?";

console.log(/\bthis\b/g.exec(str)); // ["this", index: 3, input: "Is this all there is?"]

// 9. \B; 匹配非单词边界,’er\B’能匹配’verb’中的’er’,但不能匹配’never’中的’er’
// 基本语法：new RegExp(“\Bregexp”) 或直接量 /\Bregexp/

var str="Is this all there is?";

console.log(/\Bhi/g.exec(str)); // ["hi", index: 4, input: "Is this all there is?"]

// 10. \n; 匹配一个换行符;返回换行符被找到的位置。如果未找到匹配，则返回 -1。
// 基本语法：new RegExp(“\n”) 或直接量 /\n/


var str="Is this all \nthere is?";

console.log(/\n/g.exec(str)); // ["换行符", index: 12, input: "Is this all ↵there is?"]

// 11. \xxx; 查找一个以八进制数xxx规定的字符,如果未找到匹配，则返回 null。
// 基本语法：new RegExp(“\xxx”) 或直接量 /\xxx/

var str="Visit W3School. Hello World!";

console.log(/\127/g.exec(str)); // ["W", index: 6, input: "Visit W3School. Hello World!"]

// 如上代码分析：127的八进制转换为10进制的值等于 1*8的二次方 + 2*8的一次方 + 7*8的0次方 = 64 + 16 + 7 = 87 而W的ASCLL编码转换为10进制也是87，因此打印W
//
// 12. \xdd；查找以16进制数dd规定的字符。如果未找到匹配，则返回 null。
// 基本语法：new RegExp(“\xdd”) 或直接量 /\xdd/

var str="Visit W3School. Hello World!";

console.log(/\x57/g.exec(str)); // ["W", index: 6, input: "Visit W3School. Hello World!"]

// W的16进制数等于57；

// 13.\uxxxx; 查找以16进制数的xxxx规定的Unicode字符。
// 基本语法：new RegExp(“\uxxx”) 或直接量 /\uxxx/

var str="Visit W3School. Hello World!";
console.log(/\u0057/g.exec(str)); // ["W", index: 6, input: "Visit W3School. Hello World!"]
