/**
 * Created by jianggk on 2017/9/19.
 */
var str = "what are you doing?";
// 以" "分割字符串
console.log(str.split(" "));
// 打印 ["what", "are", "you", "doing?"]

// 以 "" 分割字符串
console.log(str.split(""));
/*
 * 打印：["w", "h", "a", "t", " ", "a", "r", "e", " ", "y", "o", "u", " ", "d", "o", "i", "n",
 * "g", "?"]
 */
// 指定返回数组的最大长度为3
console.log(str.split("",3));
// 打印 ["w", "h", "a"]
