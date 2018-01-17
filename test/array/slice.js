/**
 * Created by jianggk on 2017/9/8.
 */

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(0,1);
console.log(citrus);

//array.slice(start, end)

/*start	必需。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。
也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。

end	可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。
如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。
如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。
*/



 var rs=fruits.splice(2,2,"Lemon","Kiwi");
console.log(fruits);
console.log(rs);

// splice() 方法用于插入、删除或替换数组的元素。 注意：这种方法会改变原始数组！
// //array.splice(index,howmany,item1,.....,itemX)

// index	必需。规定从何处添加/删除元素。 该参数是开始插入和（或）删除的数组元素的下标，必须是数字。
// howmany	必需。规定应该删除多少元素。必须是数字，但可以是 "0"。 如果未规定此参数，则删除从 index 开始到原数组结尾的所有元素。
// item1, ..., itemX	可选。要添加到数组的新元素


// 返回值  Type	描述
// Array	如果从 arrayObject 中删除了元素，则返回的是含有被删除的元素的数组。


// JSON.string还有一个可选参数space，用来指定输出的缩进格式。space为正整数时是指定 每一级缩进的字符数，它还可以是字符串，此时最前面的十个字符被用于每一级的缩进：
