/**
 * Created by jianggk on 2017/9/14.
 */
const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
}

//
// Set 实例的属性和方法 § ⇧
// Set 结构的实例有以下属性。
//
// Set.prototype.constructor：构造函数，默认就是Set函数。
// Set.prototype.size：返回Set实例的成员总数。
// Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。
//
// add(value)：添加某个值，返回Set结构本身。
// delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
// has(value)：返回一个布尔值，表示该值是否为Set的成员。
// clear()：清除所有成员，没有返回值。


// 遍历操作
// Set 结构的实例有四个遍历方法，可以用于遍历成员。
//
// keys()：返回键名的遍历器
// values()：返回键值的遍历器
// entries()：返回键值对的遍历器
// forEach()：使用回调函数遍历每个成员


//
// WeakSet
// 含义
// WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。
//
// 首先，WeakSet 的成员只能是对象，而不能是其他类型的值。



const m = new Map();
const o = {p: 'Hello World'};

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false
