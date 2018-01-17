/**
 * Created by jianggk on 2017/9/21.
 */

function Animal(){
  this.species = "动物";
}




// 怎样才能使"猫"继承"动物"呢？
// 一、 构造函数绑定
// 第一种方法也是最简单的方法，使用call或apply方法，将父对象的构造函数绑定在子对象上，即在子对象构造函数中加一行：
// function Cat(name,color){
//   Animal.apply(this, arguments);
//   this.name = name;
//   this.color = color;
// }
// var cat1 = new Cat("大毛","黄色");
// console.log(cat1.species); // 动物


// 二、 prototype模式
// 第二种方法更常见，使用prototype属性。
// 如果"猫"的prototype对象，指向一个Animal的实例，那么所有"猫"的实例，就能继承Animal了。


function Cat(name,color){
  this.name = name;
  this.color = color;
}

Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
var cat1 = new Cat("大毛","黄色");
console.log(cat1.species); // 动物

//原来，任何一个prototype对象都有一个constructor属性，指向它的构造函数。如果没有"Cat.prototype = new Animal();"
// 这一行，Cat.prototype.constructor是指向Cat的；加了这一行以后，Cat.prototype.constructor指向Animal。

//更重要的是，每一个实例也有一个constructor属性，默认调用prototype对象的constructor属性。


// 这是很重要的一点，编程时务必要遵守。下文都遵循这一点，即如果替换了prototype对象，
// o.prototype = {};
// 那么，下一步必然是为新的prototype对象加上constructor属性，并将这个属性指回原来的构造函数。
// o.prototype.constructor = o;

// 三、 直接继承prototype
// 第三种方法是对第二种方法的改进。由于Animal对象中，不变的属性都可以直接写入Animal.prototype。所以，我们也可以让Cat()跳过 Animal()，直接继承Animal.prototype。




// 四、 利用空对象作为中介
// 由于"直接继承prototype"存在上述的缺点，所以就有第四种方法，利用一个空对象作为中介。
function extend(Child, Parent) {
  var F = function(){};
  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
  Child.uber = Parent.prototype;
}


// 五、 拷贝继承
// 上面是采用prototype对象，实现继承。我们也可以换一种思路，纯粹采用"拷贝"方法实现继承。
// 简单说，如果把父对象的所有属性和方法，拷贝进子对象，不也能够实现继承吗？这样我们就有了第五种方法。
// 首先，还是把Animal的所有不变属性，都放到它的prototype对象上。
function extend2(Child, Parent) {
  var p = Parent.prototype;
  var c = Child.prototype;
  for (var i in p) {
    c[i] = p[i];
  }
  c.uber = p;
}
