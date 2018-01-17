/**
 * Created by jianggk on 2017/9/8.
 */
var b = [111, 211, 113];
var a =Array(3);

// console.log(a.join( "-" )); // "--"
// console.log(b.join( "-" )); // "--"
var c=b.map(function (v, i) {
  console.log("in bc v=" + v + "   i=" + i);
  return v+i;
}); // [ 0, 1, 2 ]

console.log("bc="+c)

c=a.map(function (v, i) {
  console.log("in ac v=" + v + "   i=" + i);
  return v+i;
}); // [ 0, 1, 2 ]

console.log("ac="+c)






