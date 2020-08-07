# JavaScript数组  
## 1.数组的概念  
之间学习的变量，只能存储一个值，如果我们想存储班级中所有学生的名字，那么该如何存储呢？   
可以使用数组（Arrar）。数组可以把一组相关的数据一起存放，并提供方便的访问（获取）方式。   
什么是数组呢？  
 数组是指一组数据的集合，其中的每个数据被称作元素，再数组中可以存放任意类型的元素，数组是一种将一组数据存储在单个变量名下的优雅方式。   
 # 2.创建数组 
 ## 2-1 数组的创建方式   
 JS中创建数组有两种方式：  
 - 利用new创建数组  
 - 利用数组字面量创建数组    
 ## 2-2 利用new创建数组   
 var 数组名 = new Array（）;   
 var arr = new Array();  //创建一个新的空数组   
 - 这方式暂且了解，等学完对象再看  
 - 注意Array（），A要大写  
 ## 2-3 利用数组字面量创建数组  
 1.使用数组字面量方式创建空的数组  
 var 数组名 = [];  
 2.使用数组字面量方式创建带初始值的数组  
 var  数组名 = ['小白','小黑','大黄','瑞奇'];     
 - 数组的字面量是方括号[]  
 - 声明数组并赋值称为数组的初始化  
 - 这种字面量方式也是我们以后最多使用的方式   
 ## 2-4.数组元素的类型  
 数组中可以存放任意类型的数据，例如字符串，数字，布尔值等。  
 var arrStus = ['小白'，12，true，28.9]；   
 # 3.获取数组元素  
 ## 3-1 数组的索引   
 索引（下标）：用来访问数组元素的序号（数组下标从0开始）。    
 
     var  数组名 = ['小白','小黑','大黄','瑞奇'];    
              索引号 ：0     1      2      3       
数组可以通过索引来访问，设置，修改对应的数组元素，我们可以通过"数组名[索引]"的形式来获取数组中的元素   
这里的访问就是获取得到的意思    
# 4.遍历数组   
问：数组中的每一项我们怎么取出来的？   
答：可以通过"数组名[ 索引号]"的方式一项项的取出来。  
问：怎么把数组里面的元素全部取出来？  
规律：  
我们从数组中取出每一个元素时，代码是重复的，有所不一样的是索引值在递增   
遍历：  
就是把数组中的每个元素从头到尾都访问一次。（类似每天学生的点名）。  

      var arr1 = ['星期一','星期二','星期三','星期四','星期五','星期六','星期日'];
       for (var i = 0; i < 7; i++) {
       console.log(arr1[i]);
     }
       //1.因为我们数组索引号从0开始，所以i必须从0开始 i<7 
       //2.输出的时候arr[i]；i 计算器当索引号来用    
## 4-1.数组的长度   
使用"数组名.length"可以访问数组元素的数量（数组长度）。   
1.数组的长度是元素个数，不要跟索引号混淆  
2.arr.length 动态监测数组元素的个数       
计算数组中的和以及平均数：  

     var arr = [2,6,1,7,4];
     var sum = 0;
     var average = 0;  
     for (var i = 0; i < arr.length; i++) {
     sum += arr[i]; //我们加的是数组元素arr[i] 不是计数器 i 
     }
     average = sum / arr.length;   
     console.log(sum,average); //想要输出多个变量，用逗号分隔即可   
求数组中最小值：  

     var arr = [8,6,1,77,52,25,7];
     var tqq = arr[0];
     for (var i = 1; i < arr.length; i++) {
     if (arr[i] < tqq) {
      tqq = arr[i];
     }
     }
     console.log(tqq);   
# 5.数组中新增元素  
可以通过修改length长度以及索引号增加数组元素  
## 5-1 通过修改length长度新增数组元素  
- 可以通过修改length长度来实现数组扩容的目的  
- length属性是可读写的  

      var arr = ['red','green','blue','pink'];
      arr.length = 7; 
      console.log(arr);
      console.log(arr[4]);
      console.log(arr[5]);
      console.log(arr[6]);  
 其中索引号是4，5，6的空间没有给值，就是声明变量未给值，默认值就是undefined。   
## 5-2 通过修改数组索引新增数组元素  
- 可以通过修改数组索引的方式追加数组元素      
- 不能直接给数组名赋值，否则会覆盖掉以前的数据  
 
      var arr = ['red','green','blue'];
      arr[3] = 'tangjianhao';
      console.log(arr);   
这种方式也是我们最常用的一种方式。    

筛选数组方法1：  

    var arr = [2,0,6,1,77,0,52,0,25,7];
    var newArr = [];
    var j = 0;
    for( var i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
    //newArr[j]=arr[i];
    j++; //  
    或者使用newArr[newArr.length] = arr[i];
    }
    }
    console.log(newArr);  
反转数组方法：  

    var arr = ['red','green','blue','pink','purple'];
    var newArr = [];
    for (i = arr.length-1; i>=0; i--) {
    newArr[newArr.length] = arr[i]
    }
    console.log(newArr);   
数组排列（冒泡排序）：  
冒泡排序：是一种算法，把一系列的数据按照一定的顺序进行排列显示（从小到大或从大到小）。  

     var arr = ['red','green','blue','pink','purple'];
     var newArr = [];
     for (i = arr.length-1; i>=0; i--) {
     newArr[newArr.length] = arr[i]
     }
     console.log(newArr);
# JavaScript函数   
# 1.函数的概念   
在JS里面，可能会定义非常多的相同代码或者功能相似的代码，这些代码可能需要大量重复使用。   
虽然for循环语句也能实现一些简单的重复操作，但是比较具有局限性，此时我们就可以使用JS中的函数。  
函数：就是封装了一段可被重复调用执行的代码块，通过此代码块可以实现大量代码的重复使用。  
# 2.函数的使用  
函数在使用时分为两步：声明函数和调用函数。  
## 2-1.声明函数    
 
       1.声明函数
       function 函数名() {
           //函数体
       }
 - function是声明函数的关键字，必须小写  
 - 由于函数一般是为了实现某个功能才定义的，所以通常我们将函数名命名为动词，比如getSum    
 ## 2-2调用函数   
 //调用函数    
 函数名（）;//通过调用函数名来执行函数代码     
 - 调用的时候千万不要忘记添加小括号  
 - 口诀：函数不调用，自己不执行    
 注意：声明函数本身并不会执行代码，只有调用函数时才会执行函数体代码。    
 ## 2-3.函数的封装    
 - 函数的封装是把一个或者多个功能通过函数的方式封装起来，对外只提供了一个简单的函数接口   
 - 简单理解：封装类似于将电脑配件整合组装到机箱中（类似快递打包）   
 # 3.函数的参数   
 ## 3-1.形参和实参   
 在声明函数时，可以在函数名称后面的小括号中添加一些参数，这些参数被称为形参，而在调用该函数时，同样也需要传递相应的参数，这些参数被称为实参。   
 参数|说明  
 -|-   
 形参|形式上的参数，函数定义的时候，传递的参数，当前并不知道是什么  
 实参|实际上的参数，函数调用的时候传递的参数，实参是传递给形参的     
 参数的作用：在函数内部某些值不能固定，我们可以通过参数在调用函数时传递不同的值进去。   
  
    //1.利用函数求任意两个数的和
    function getSum(num1,num2) {
        console.log(num1+num2);

    }
    getSum(1,3);
    //利用函数求任意两个数之间的和
    function getSums(nums1,nums2) {
       var sum = 0;
       for ( var i = nums1; i <= nums2; i++)  {
         sum = sum + i;
       }
      console.log(sum);
    }
    getSums(1,100);
    getSums(5,70);
## 3-3.函数形参和实参个数不匹配问题    
参数个数|说明
-|-
实参个数等于形参个数|输出正确结果   
实参个数多于形参个数|只取到形参的个数  
实参个数小于形参个数|多的形参定义为undefined，结果为NaN    
## 3-4.小结  
- 函数可以带参数也可以不带参数   
- 声明函数的时候，函数名括号里面的是形参，形参的默认值为undefined   
- 调用函数的时候，函数名括号里面的是实参  
- 多个参数中间用逗号分隔   
- 形参的个数可以和实参个数不匹配，但是结果不可预计，我们尽量要匹配    
# 4.函数的返回值   
## 4-1 return语句    
有的时候，我们会希望函数将值返回给调用者，此时通过使用return语句就可以实现。  

### 求任意两个数的和:
        function getSum(num1, num2) {
            return num1 + num2;
        }
        console.log(getSum(3, 7));
### 利用函数求数组[5,2,99,101,67,77]中的最大值:   

          function getArrMax(arr) {
          var max = arr[0];
          for (var i = 1; i <= arr.length; i++) {
              if (arr[i] > max) {
                  max = arr[i];
              }
          }
          return max;
      }
      var re = getArrMax([10,305,52,56]);
      console.log(re);     
## 4-2.returu终止函数   
returu语句之后的代码不被执行。  
## 4-3 return的返回值   
return只能返回一个值，如果用逗号隔开多个值，以最后一个为准。    
   
   
    function qqw(num1,num2) {
       return num1 + num2;  //return 后面的代码不会被执行
        alert('我是不会被执行的')
     }
    console.log(qqw(4,5));
    //2.return 只能返回一个值  
    function fn(num1,num2) {
        retrun num1,num2;//返回的结果是最后一个值
    }
    console.log(fn(1,2));
    //我们求任意两个数的加减乘除结果
    function getResult(num1,num2) {
        return [num1 + num2,num1 - num2,num1 * num2,num1 / num2];
    }
    var re = getResult(1,2);
    console.log(re);    
## 4-4.函数没有return返回undefined    
函数都是有返回值的   
1.如果有retrun则返回return后面的值   
2.如果没有return则返回undefined  
## 4-5 break,continue,return的区别   
- bareak：结束当前的循环体（如for，while）   
- continue：跳出本次循环，继续执行下次循环（如for，while）   
- return：不仅可以退出循环，还能够返回return语句中的值，同时还可以结束当前的函数体内的代码      
# 5.arguments的使用   
当我们不确定有多少个参数传递的时候，可以用arguments来获取。在JavaScript中，arguments实际上它是当前函数的一个内置对象。所有函数都内置了一个arguments对象，arguments对象中存储了传递的所有实参。  
arguments展示形式是一个伪数组，因此可以进行遍历。伪数组具有以下特点：  
- 具有length属性   
- 按索引方式存储数据  
- 不具有数组的push，pop等方法  
# 6.函数案例
## 利用函数求任意个数的最大值：  

     function getMax() {
            var max = arguments[0];
            for (var i = 1; i < arguments.length; i++) {
                if (arguments[i] > max) {
                    max = arguments[i];
                }
            }
            return max;
        }
        console.log(getMax(1, 2, 3));
        console.log(getMax(1, 2, 3, 4, 5));
        console.log(getMax(11, 56, 78, 34, 101, 1110, 67))   
## 利用函数翻转任意数组  reverse 翻转    
 
        function reverse(arr) {
            var newArr = [];
            for (var i = arr.length - 1; i >= 0; i--) {
                newArr[newArr.length] = arr[i];
            }
            return newArr;
        }
        var re = reverse([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        console.log(re);   
## 利用函数冒泡排序  
 
       function sort(arr) {
            for (var i = 0; i < arr.length - 1; i++) {
                for (var j = 0; j < arr.length - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        var temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            return arr;
        }
        var arr1 = sort([2, 6, 8, 3, 1, 4, 7])
        console.log(arr1);  
## 利用函数判断闰年  
 
     function isRunYear(year) {
            var flag = false;
            if (year % 4 == 0 && year % 100 != 0 || year % 400) {
                flag = true;
            }
            return flag;
        }
        console.log(isRunYear(1999));  
## 函数可以调用另外一个函数：  
因为每个函数都是独立的代码块，用于完成特殊任务，因此经常会用到函数相互调用的情况。   
 
     function fn1() {
           console.log(111);
           fn2();
           console.log('fn1');
       }
       function fn2() {
           console.log(222);
           console.log('fn2')
       }
       fn1()  
## 输出年份的2月份天数：    

      function backDay() {
            var year = prompt('请您输入年份')
            if (isRunYear(year)) {
                alert('当前年份是闰年2月份有29天');
            } else {
                alert('当前年份是平年2月份有28天');
            }
        }
        backDay();
        function isRunYear(year) {
            var flag = false;
            if (year % 4 == 0 && year % 100 != 0 || year % 400) {
                flag = true;
            }
            return flag;
        }  
# 7.函数的两种声明方式   
 
    1.利用函数关键字自定义函数（命名函数）  
       function fn() {};
       fn();
       2.函数表达式（匿名函数）  
       //var fun = function（）{}；
       var fun = function(aru) {
           console.log('我是函数表达式');
           console.log(aru);
       }
       fun('唐建豪');  
       1.fun是变量名，不是函数名
       2.函数表达式声明方式跟声明变量差不多，只不过变量里存的是值，函数表达式里面存的是函数
       3.函数表达式也可以进行传递参数     
# JavaScript作用域   
# 1.作用域   
## 1-1.作用域概述   
通常来说，一段程序代码中所用到的名字并不总是有效和可用的，而限定这个名字的可用性的代码范围就是这个名字的作用域，作用域的使用提高了程序逻辑的局部性，增强了程序的可靠性，减少了名字冲突。   
1.JavaScript作用域：就是代码名字（变量）在某个范围内起的作用和效果，目的是为了提高程序的可靠性更重要的是减少命名冲突  
2.js的作用域（es6)之前：全局作用域，局部作用域   
3.全局作用域：整个script标签，或者是一个单独的JS文件   
4.局部作用域（函数作用域），在函数内部就是局部作用域，这个代码的名字只在函数内部起效果和作用    
# 2.变量的作用域   
## 2-1.变量作用域的分类   
在JavaScript中，根据作用域的不同，变量可以分为两种：     
## 2-2.全局变量和局部变量   
1.全局变量     
在全局作用域下声明的变量叫做全局变量（在函数外部定义的变量）。  
- 全局变量在代码的任何位置都可以使用   
- 在全局作用域下var声明的变量是全局变量  
- 特殊情况下，在函数内不使用var声明的变量也是全局变量（不建议使用）   

2.局部变量   
在局部作用域下声明的变量叫做局部变量（在函数内部定义的变量）  
- 局部变量只能在该函数内部使用  
- 在函数内部var声明的变量是局部变量  
- 函数的形参实际上就是局部变量   
## 2-3.全局变量和局部变量的区别   
- 全局变量：在任何一个地方都可以使用，只有在浏览器关闭时才会被销毁，因此比较占内存  
- 局部变量：只在函数内部使用，当其所在的代码块被执行时，会被初始化，当代码块运行结束后，就会被销毁，因此更节省内存空间   
# 作用域链  
- 只要是代码，就至少有一个作用域  
- 写在函数内部的局部作用域  
- 如果函数中还有函数，那么在这个作用域中就又可以诞生一个作用域   
- 根据在内部函数可以访问外部函数变量的这种机制，用链式查找决定哪些数据能被内部函数访问，就称作作用域链。  
- 就近原则，优先执行上一级，   
# JavaScript预解析     
1.JavaScript代码是由浏览器中的JavaScript解析器来执行的，JavaScript解析器在运行JavaScript代码的时候分为两步：预解析和代码执行。   
- 预解析js引擎会把js里面所有的var 还有function提升到当前作用域的最前面   
- 代码执行，会按照代码的书写顺序从上往下执行   

2.预解析分为变量预解析（变量提升）和 函数预解析 （函数提升）    
- 变量提升 ，就是把所有的变量声明提升到当前的作用域最前面，不提升赋值操作   
- 函数提升， 就是把所有的函数声明提升到当前作用域的最前面 ，不调用函数    
# JavaScript对象   
# 1.对象   
## 1-1.什么是对象
在JavaScript中，对象是一组无序的相关属性和方法的集合，所有的事物都是对象，例如字符串，数值，数组，函数等。   
对象是由属性和方法组成的。   
- 属性：事物的特征，在对象中用属性来表示（常用动词）  
- 方法：事物的行为，在对象中用方法来表示（常用动词）    
## 1-2.为什么需要对象   
保存一个值时，可以使用变量，保存多个值（一组值）时，可以使用数组。如果要保存一个人的完整信息呢？    
例如，将'张三丰'的个人信息保存在数组中的方式为:    
var arr = ['张三丰','男'，128，154]；   
JS中的对象表达结构更清晰，更强大，张三丰的个人信息在对象中的表达结构如下：  
张三丰.姓名 = '张三丰';   
张三丰.性别 = '男';    
张三丰.年龄 = 128；   
张三丰.身高 = 154；   
person.name = '张三丰'   
person.sex = '男'    
person.age = 128;  
person.height = 154;   
# 2.创建对象的三种方式   
在JavaScript中，现阶段我们可以采用三种方式创建对象（object)：   
- 利用字面量创建对象   
- 利用new Object创建对象   
- 利用构造函数创建对象    
## 2-1 利用字面量创建对象   
对象字面量：就是花括号{}里面包含了表达这个具体事物（对象）的属性和方法。 

     //1.利用对象字面量创建对象{}
      var obj = {
          uname: '张三丰',
          age: 18,
          sex: '男',
          sayHi: function() {
              console.log('hi');
          }
      }
      //（1）里面的属性或者方法我们可以采取键值对的形式  键 属性名 ： 值  属性值  
      //（2）多个属性或者方法中间用逗号隔开的
      //（3）方法冒号后面跟的是一个匿名函数  
      //2.使用对象  
      //（1）调用对象的属性，我们采取 对象名.属性名  
      console.log(obj.uname);
      //（2）调用属性还有一种方法 对象名['属性名']
      console.log(obj['age']);
      //（3）调用对象的方法 sayHi  对象名.方法名()  千万别忘记添加小括号
      obj.sayHi();       
## 变量，属性，函数，方法总结  
- 变量：单独声明赋值，单独存在  
- 属性：对象里面的变量称为属性，不需要声明，用来描述该对象的特征  
- 函数：单独存在的，通过“函数名()”的方法就可以调用  
- 方法：对象里面的函数称为方法，方法不需要声明，使用“对象.方法名()”的方式就可以调用，方法用来描述该对象的行为和功能。   
## 2-2. 利用new Object创建对象  
 
    //利用new object 创建对象  
     var obj = Object();  //创建了一个空的对象   
    obj.uname = '张三丰';
    obj.age = 18;  
    obj.sex = '男';  
    obj.sayHi = function() {
        console.log('Hi');
    }
    //(1) 我们是利用 等号 = 赋值的方法  添加对象的属性和方法  
    //(2)每个属性和方法之间用 分号结束  
    console.log(obj.uname);
    console.log(obj['sex']);  
    obj.sayHi();    
## 2-3 利用构造函数创建对象   
构造函数：是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初始值，它总与new运算符一起使用。我们可以把对象中一些公共的属性和方式抽取出来，然后封装到这个函数里面。   

    //利用构造函数创建对象  
    //我们需要创建四大天王的对象   相同的属性： 名字 年龄 性别 相同的方法： 唱歌  
    //构造函数的语法格式  
    //function 构造函数名() {
    //    this.属性 = 值;
    //    this.方法 = function() {}
    //}
    //new 构造函数名();
    function Star(uname, age , sex) {
        this.name = uname;
        this.age = age;
        this.sex = sex;
        this.sing = function(sang) {
            console.log(sang);
        }
    }
    var ldh = new Star('刘德华',18,'男');//调用函数返回的是一个对象
    //console.log(typeof ldh);
    console.log(ldh.name);
    console.log(ldh['sex']);
    ldh.sing('冰雨');
    var zxy = new Star('张学友',19,'男');
    console.log(zxy.name);
    console.log(zxy.age);
    zxy.sing('李香兰')
    //1.构造函数名字首字母要大写
    //2.我们构造函数不需要return 就可以返回结构
    //3.我们调用构造函数 必须使用new  
    //4.我们只要nwe Star() 调用函数就创建一个对象 ldh  {}
    //5.我们的属性和方法面前必须添加 this    
## 2-4.构造函数和对象   
- 构造函数，如Star(),抽象了对象的公共部分，封装到了函数里面，它泛指某一大类(class)  
- 创建对象，如new Star()，特指某一个，通过new关键字创建对象的过程我们也称为对象实例化    
# 3.new关键字   
new在执行时会做四件事情：  
1.在内存中创建一个新的空对象。  
2.让this指向这个新的对象。   
3执行构造函数里面的代码，给这个新对象添加属性和方法。  
4.返回这个新对象(所以构造函数里面不需要return)。    
# 遍历对象属性    
for...in语句用于对数组或者对象的属性进行循环操作。    
## 小结   
1.对象可以让代码结构更清晰   
2.对象复杂数据类型object。   
3.本质：对象就是一组无序的相关属性和方法的集合。  
4.构造函数泛指某一大类，比如苹果，不管是红色苹果还是绿色苹果，都统称为苹果。  
5.对象实例特指一个事物，比如这个苹果，正在给你们讲课的pink老师等。  
6.for...in语句用于对对象的属性进行循环操作。   
# 1.内置对象    
- JavaScript中的对象分为3种：自定义对象，内置对象，浏览器对象   
- 前面两种对象是JS基础内容，属于ECMAScript；第三个浏览器对象属于我们JS独有的，   
- 内置对象就是指JS语言自带的一些对象，这些对象供开发者使用，并提供了一些常用的或是最基本而必要的功能（属性和方法）  
- JavaScript提供了多个内置对象：Math，Date，Array，string等   
# 2.查文档   
## 2-1.MDN    
学习一个内置对象的使用，只要学会其常用成员的使用即可，我们可以通过查文档学习，可以通过MDN/W3C来查询。   
Mozilla开发者网络（MDN）提供了有关开放网络技术（Open Web）的信息，包括HTML，CSS和万维网及HTML5应用的API。   
MDN: https://developer.mozilla.org/zh-CN/   
## 2-2.如何学习对象中的方法   
1.查阅该方法的功能   
2.查看里面参数的意义和类型  
3.查看返回值的意义和类型   
4.通过demo进行测试
# 3.Math对象


      // Math数学对象  不是一个构造函数， 所以我们不需要new 来调用  而是直接使用里面的属性和方法即可   
      console.log(Math.PI);   //一个属性，圆周率
      console.log(Math.max(1,99,3));  //90
      console.log(Math.max(-1,-10));  //-1  
      console.log(Math.max(1,9,'唐建豪')); // NaN
      console.log(Math.max());  // -Infinity   
## 3-1.Math概述  
Math对象不是构造函数，它是具有数学常数和函数的属性和方法，跟数学相关的运算（求绝对值，取整，最大值等）可以使用Math中的成员。  



     Math.PI   //圆周率 
     Math.floor()  //向下取整  
     Math.ceil()  //向上取整
     Math.round()  //四舍五入 就近取整  注意 -3.5  结果是  -3  
     Math.abs()  //绝对值
     Math.max()/Math.min()  //求最大和最小值  


      
          // 我们想要得到两个数之间的随机整数  并且 包含这两个整数
          /* function getArr(min,max) {
             return Math.floor(Math.random() * (max - min + 1)) + min;
           }
           console.log(getArr(1,10));
           var arr = ['唐建豪', '李晓琴', '张三' , '李四'];
           console.log(arr[getArr(0,arr.length - 1)]); */  

猜数字游戏：  
        
         function getArr(min,max) {
         return Math.floor(Math.random() * (max - min + 1)) + min;
       }
        var random = getArr(1,50);
      for( var i = 1; i <= 10; i++) {
      var num = prompt('你来猜？输入 1 - 50之间的一个数字,机会只有十次');
      if (num > random) {
          alert('你猜大了');
      } else if ( num < random) {
          alert('你猜小了');
      } else {
          alert('你好帅啊，猜对了');
          break;
      }
  }   
# 4.日期对象   
## 4-1 Date概述  
- Date对象和Math对象不一样，他是一个构造函数，所以我们需要实例化后才能使用  
- Date实例用来处理日期和时间
  
        // Date()日期对象  是一个构造函数，必须使用new  来调用创建我们的日期对象
           var arr = new Array(); //创建一个数组对象
           var obj = new Object();  //创建了一个对象实例 
         //1.使用Date 如果没有参数  返回当前系统的当前时间   
          var date = new Date();
         //2.参数常用写法  数字型  2019，10，01  或者是 字符串型  '2019-10-1  8:8:8'
         var date1 = new Date(2019,10,1);
         console.log(date1);  //返回的是 11月 不是10月  
         var date2 = new Date('2019-10-1  8:8:8')
         console.log(date2);
## 4-2.Date()方法的使用    
1.获取当前时间必须实例化   
var now = new Date();
conction.log(now)   
2.Date()构造函数的参数  
如果括号里面有时间，就返回参数里面的时间。例如日期格式字符串为'2019-5-1',可以写成newDate('2019-5-1')或者new Date('2019/5/1')   
## 4-3.日期格式化   
我们想要2019-8-8 8：8：8格式的日期，要怎么办？   
需要获取日期指定部分，所以我们要手动得到这种格式。     
方法名|说明|代码
-|-|-
getFullYear()|获取当年|dObj.getFullYear()
getMonth()|获取当月(0 - 11)|dObj.getMonth()
grtDate()|获取当天日期|dObj.get(Date)
getDay()|获取星期几(周日0到周六)|dObj.getDay()    
getHous()|获取当前小时|dObj.getHous()   
getMinutes()|获取当前分钟|dObj.getMinutes()    
getSeconds()|获取当前秒钟|dObj.getSeconds()   
    var date = new Date();
    console.log(date.getHours());  //时
    console.log(date.getMinutes()); //分
    console.log(date.getSeconds()); //秒
    //封装一个函数返回当前的时分秒 格式 08：08：08  
    function getTime() {
        var time = new Date();
        var h = time.getHours();
        h = h < 10 ? '0' + h : h;
        var m = time.getMinutes();
        m = m < 10 ? '0' + m : m;
        var s = time.getSeconds();
        s = s < 10 ? '0' + s : s;
        return h + ':' + m + ':' + s;
    }
    console.log(getTime());   
## 4-4.获取日期的总的毫秒形式   
Date对象基于1970年1月1日（世界标准时间）起的毫秒数




