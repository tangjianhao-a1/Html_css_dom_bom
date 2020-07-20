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
