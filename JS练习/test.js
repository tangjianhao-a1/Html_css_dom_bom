

/**
 * 这是一个什么样的方法
 * @param {*} list [{username: "张三", addr: "北京"}, {username: "李四", addr: "北京"}, {username: "王五", addr: "上海"}]
 * @return ["张三", "李四", :王五:]
 */
//1.建立空数组  
//2.遍历数组里面的对象   
//3.获取变量里面的username属性值   
//4.把获取到的值给添加到新数组里   
//5.返回新数组   
//6.入参，打印结果
function test1(list) {  
  var newArr = [];  
  for( var i = 0; i < list.length; i++) {
      var name = list[i];   
      var itl = name.username;  
      newArr.push(itl);
  };  
  return newArr
};  
var re = test1( [{username: "张三", addr: "北京"}, {username: "李四", addr: "北京"}, {username: "王五", addr: "上海"}]);  
console.log(re);
//["张三", "李四", :王五:] 
/**
 * 考察字符串操作 
 * 返回文件名
 * @param {*} str "美女.jpg"
 * @returns "美女"
 */
function test2(str) {   
  var re1 = str.replace(/.pdf/i,'' )  
  return re1
};
var ptp = test2("语文课本.pdf")   
console.log(ptp);
/**
 * 对象变数组
 * @param {*} obj  {"a": 1, "b": 2} 
 * @returns [{"a": 1}, {"b": 2}]
 */
//1.建立新数组，  
//2.遍历对象，  
//3.把遍历对象里面的属性赋值添加给新数组  
//4.返回新数组  
//5.给函数入参  
//6.最后打印
function test3(obj) {
  var newArr = [];  
  for(var i in obj) {
      var objs = {};   
     objs[i] = obj[i];  
     newArr.push(objs);  

  }
return newArr
};  
var re3 = test3({"a": 1, "b": 2} );  
console.log(re3);
/**
 * 对象变数组
 * @param {*} obj  {"a": 1, "b": 2}  {"c": 3, "d": 4}
 * @returns  {a: 1, b: 2, c: 3, d: 4}
 */
function test4(obj1, obj2) {
  var obj = Object.assign(obj1, obj2)  
  return obj
  }  
  var re4 = test4({"a": 1, "b": 2}, {"c": 3, "d": 4})  
  console.log(re4);
   