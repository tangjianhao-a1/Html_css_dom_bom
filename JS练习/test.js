

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
    //建立空数组 
      var newArr = [];
      //2.遍历数组里面的对象
    for( var i = 0; i < list.length; i++) {
        //3.获取变量里面的username属性值 
       var itm = list[i];   
       var name = itm.username  
       //newArr[newArr.length] = name;
       //4.把获取到的值给添加到新数组里 
       newArr.push(name);
    }
    //5.返回新数组 
    return newArr
};  
//6.入参，打印结果
  var re = test1([{username: "张三", addr: "北京"}, {username: "李四", addr: "北京"}, {username: "王五", addr: "上海"}]);
  console.log(re);
//["张三", "李四", :王五:] 
/**
 * 考察字符串操作 
 * 返回文件名
 * @param {*} str "美女.jpg"
 * @returns "美女"
 */
function test2(str) {   
    //1.把str值赋给rel3变量
    var rel3 = str;     
    //2.用RedExp这个方法创建正则，属性g用于全局匹配，i用于区分大小写，m用于多行匹配
    var reg = new RegExp('.pdf','g');    
    var beg = rel3.replace(reg,'');  
    return beg 
};

 var pat = test2("语文课本.pdf");// "语文课本.pdf" 语文课本  
 console.log(pat);
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
    //创建空数组
   var newArr = [];    
   //遍历对象
   for(var i in obj) {  
      
       //创建新数组里的对象
       var by = {};  
     
       //赋值第一次遍历，第二次遍历；
       by[i] = obj[i];
      
       newArr.push(by) 
      
    
 }
 return newArr;
};  
var re2 = test3({"a": 1, "b": 2});   
console.log(re2);  
/**
 * 对象变数组
 * @param {*} obj  {"a": 1, "b": 2}  {"c": 3, "d": 4}
 * @returns  {a: 1, b: 2, c: 3, d: 4}
 */
function test4(obj1, obj2) {
    //1.第一个对象变量装起来
     var arr1 = obj1;  
     //2.第二个对象变量装起来 
     var arr2 = obj2; 
     //3.通过Objct.assign合并对象
     var obj = Object.assign(arr1,arr2)  
     return obj
    }
    var rel1 =  test4({"a": 1, "b": 2},{c: 3, d: 4});    
    console.log(rel1);
   