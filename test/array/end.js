/**
 * Created by jianggk on 2017/9/8.
 */
// var a, b;

// a = if (true) {
//   b = 4 + 38;
// };
// 语法不允许我们获得语句的结果值并将其赋值给另一个变量（至少目前不行）。
//todo  那应该怎样获得语句的结果值呢？


//遍历一个obj的属性到数组

var obj = {a: 1, b: 2};
var a = [];
for (a[a.length] in obj)
  console.log(a);


//乍一看可能比较蒙，不过仔细分析还是不难理解的。常见用法是for(var key in obj)，这里key初始也是undefined的，
// a[a.length]整体也是undefined，所以二者其实是等价的。在for循环中，obj 的属性会依次赋值给key，同样，也依次赋值给a[a.length]，
// 这里length一直在变，就巧妙地挨个赋值给数组的每一个元素了。
