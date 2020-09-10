# 1.Web ApIs和JS基础关联性  
## 1-1，js的组成  
1.ECMAScripts(Javascript语法)，Javascript基础  
2.DOM(页面文档对象模型)  Web APIs  
3.BOM(浏览器对象模型)   Web APIs  
## 1-2.JS基础阶段以及Web APIs阶段  
JS基础阶段   
- 我们学习的是ECMScript标准规定的基本语法   
- 要求同学们掌握JS基础语法  
- 只学习基本语法，做不了常用的页面交互效果  
- 目的是为了JS后面的课程打基础，做铺垫    

Web APIs阶段   
- Web APIs是w3c组织的标准   
- Web APIs我们主要学习DOM和BOM  
- web APIs是JS独有的部分   
- 我们主要学习页面交互功能   
- 需要使用JS基础的课程内容做基础   

总结：  
JS基础学习ECMAScript基础语法为后面作铺垫，WebAPIs是JS的应用，大量使用JS基础语法做交互效果。   
# 2.API和Web API     
## 2-1.API
API(ApplicationProgrammingInterface,应用程序编程接口)是一些预先定义的函数，目前是提供应用程序与开发人员基于某软件或硬件得以访问一组例程的能力，而又无需访问源码，或理解内部工作机制细节。  
简单理解：API是给程序员提供的一种工具，以便能更轻松的实现想要完成的功能。   
比如手机充电的接口：  
我们要实现这个功能：  
- 我们不关心手机内部变压器，内部怎么存储电等  
- 我们不关心这个充电线怎么制作的  
- 我们只知道，我们拿着这个充电接口就可以充电   
- 这个充电接口就是一个API   
## 2-2.Web API     
Web API是浏览器提供的一套操作浏览器功能和页面元素的API(BOM和DOM).   
现阶段我们主要针对于浏览器讲解常用的API，主要针对浏览器做交互效果。  
比如我们想要浏览器弹出一个警示框，直接使用alert('弹出')       
MDN详情API：https://developer.mozilla.orl/zh-CN/docs/Web/API    
因为Web API很多，所以我们将这个阶段称为Web APIs   
## 2-3.API和Web API总结    
1.API是为我们程序员提供的一个接口，帮助我们实现某种功能，我们会使用就行了，不必纠结内部如何实现   
2.Web API主要是针对于浏览器提供的接口，主要针对于浏览器做交互效果。  
3.Web API一般都有输入和输出(函数的传参和返回值)，WebAPI很多都是方法(函数)  
4.学习Web API可以结合前面学习内置对象方法的思路学习    
# 1.DOM简介   
## 1-1.什么是DOM   
文档对象模型(DocumentObjectModel,简称DOM)，是W3C组织推荐的处理可扩展标记语言(HTML或者XML)的标准编程接口。  
W3C已经定义了一系列的DOM接口，通过这些DOM接口可以改变网页的内容，结构和样式。   
## 1-2.DOM树   
- 文档：一个页面就是一个文档，DOM中使用document表示   
- 元素：页面中的所有内容都是节点(标签，属性，文本，注释等)，DOM中使用node表示   
DOM把以上内容都看做是对象  
# 2.获取元素
## 2-1如何获取页面元素   
DOM在我们实际开发中主要用来操作元素。   
我们如何来获取页面中的元素呢？   
获取页面中的元素可以使用以下几种方式：   
- 根据ID获取  
- 根据标签名获取   
- 通过HTML5新增的方法获取   
- 特殊元素获取   
## 2-2.根据ID获取   
使用getElementByld()方法可以获取带有ID的元素对象。  

     <body>
     <div id="class">2020-8-18</div>
     <script>
     //1.因为文档页面从上往下加载，所以先得有标签，所以我们script写到标签下面
     //2.get 获得 element 元素 by 通过 驼峰命名法
     //3.参数 id是大小写敏感的字符串  
     //4.返回的是一个对象
     var timr = document.getElementById('class');
     console.log(timr)
     console.log(typeof timr);
     //5.console.dir 打印我们返回元素对象  更好的查看里面的属性和方法
     console.dir(timr);
     </script>
     </body>  
## 2-3.根据标签名获取    
使用getElementsByTagName()方法可以返回带有指定标签名的对象的集合。   
document.getElementsByTaName('标签名');    
注意：   
1.因为得到的是一个对象的集合，所以我们想要操作里面的元素就需要遍历。   
2.得到元素对象是动态的     
还可以获取某个元素(父元素)内部所有指定标签名的子元素；   
element.getElementsByTagName('标签名');    
注意：父元素必须是单个对象(必须指明是哪一个元素对象)，获取的时候不包括父元素自己。   
## 2-4.通过HTML5新增的方法获取   
1.document.getElementsByClassName('类名');//根据类名返回元素对象集合   
2.document.querySelector('选择器');   //根据指定选择器返回第一个元素对象   
3.document.querySelectorAll('选择器');  //根据指定选择器返回    
## 2-5.获取特殊元素(body,html)   
获取body元素   
1.document.body //返回body元素对象   
获取html元素   
1.document.documentElement  //返回html元素对象   
# 3.事件基础   
## 3-1.事件概述    
JavaScript使我们有能力创建动态页面，而事件是可以被JavaScript检测到的行为。   
简单理解：触发---响应机制。   
网页中的每个元素都可以产生某些可以触发JavaScript的事件，例如，我们可以在用户点击某按钮时产生一个事件，然后去执行某些操作。   
## 3-2.事件三要素   

        《button id="btn">李晓琴</button>

        //点击一个按钮，弹出对话框
        //1.事件是由三部分组成，事件源，事件类型，事件处理程序  我们也称为事件三要素   
       //(1)事件源，事件被触发的对象，谁，按钮
        var btn = document.getElementById('btn')  
       //(2)事件类型，如何触发，什么事件，比如鼠标点击(onclick)，还是鼠标经过，还是键盘按下  
       //(3)事件处理程序  通过一个函数负值的方式 完成  
       btn.onclick = function() {
       alert('爱唐建豪');   

       }   
## 3-3.执行事件的步骤    
1.获取事件源   
2.注册事件(绑定事件)   
3.添加事件处理程序(采取函数赋值形式)   

    //执行事件步骤  
    //点击div 控制台输出  我被选中了  
    //1.获取事件源   
     var div = document.querySelector('div'); 
    //绑定事件，注册事件   
    //div.onclick  
    //3.添加事件处理程序   
    div.onclick = function() {
      console.log('我被选中了');
    }    
## 常见的鼠标事件    
鼠标事件|触发条件   
-|-
onclick|鼠标点击左键触发  
onmouseover|鼠标经过触发   
onmouseout|鼠标离开触发  
onfocus|获得鼠标焦点触发  
onblur|失去鼠标焦点触发  
onmousemove|鼠标移动触发   
onmouseup|鼠标弹起触发  
onmousedown|鼠标按下触发       
# 4.操作元素    
JavaScript的DOM操作可以改变网页内容，结构和样式，我们可以利用DOM操作元素来改变元素里面的内容，属性等，注意以下都是属性   
## 4-1.改变元素内容     
element.innerText   
从起始位置带终止位置的内容，但它去除html标签，同时空格和换行也会去掉   
element.innerHTML   
起始位置到终止位置的全部内容，包括html标签，同时保留空格和换行   
 
 
    var btn = document.querySelector('button');
    var div = document.querySelector('div');
    btn.onclick = function () {
      div.innerText = getDate();
    }

    function getDate() {
         var date = new Date() 
         var year = date.getFullYear();
         var month = date.getMonth() + 1;
         var dates = date.getDate();
         var arr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
         var day = date.getDay();
         return '今天是：' + year + '年' + month + '月' + dates + '日' + arr[day];
    }
    var p = document.querySelector('p');
    p.innerText = getDate();
## 4-2.常用元素的属性操作   
1.innerText.innerHTML.改变元素内容   
2.src，href  
3.id，alt，title    
## 4-3.表达元素的属性操作  
利用DOM可以操作如下表单元素的属性：   
type,value,checked,selected,disabled    
## 4-4.样式属性操作   
我们可以通过JS修改元素的大小，颜色，位置等样式。   
1.element.style 行内样式操作  
2.element.className 类名样式操作   
注意：  
1.JS里面的样式采取驼峰命名法    
2.JS修改style样式操作，产生的是行内样式，css权重比较高   
## 4-5.排他思想   
如果有同一组元素，我们想要某一个元素实现某种样式，我们需要用到循环的排他思想算法：  
1.所有元素全部清除样式(干掉其他人)  
2.给当前元素设置样式(留下自己)   
3.注意顺序不能颠倒，首先干掉其他人，再设置自己    
## 4-6.自定义属性的操作    
1.获取属性值  
- element.属性   获取属性值。  
- element.getAttribute('属性')；  
区别：   
- element.属性  获取内置属性值(元素本身自带的属性)    
- element.getAttribute('属性');主要获得自定义的属性（标准）程序员自定义的属性。    
2.移除属性   
- element.removeAttribute('属性');   
## 4-7.H5自定义属性   
自定义属性目的：是为了保存并使用数据。有些数据可以保存到数据库中。   
自定义属性获取是通过getAttribute('属性')获取。   
但是有些自定义属性很容易引起歧义，不容易判断是元素的内置属性还是自定义属性。  
H5给我们新增了自定义属性：   
### 1.设置H5自定义属性   
H5规定自定义属性data-开头作为属性名并且赋值。    
比如《div data-index = "1">《/div>   
或者使用JS设置    
element.setAttribute('data-index',2)    
### 2.获取H5自定义属性    
1.兼容性获取element.getAttribute('data-index');    
2.H5新增element.dataset.index或者element.dataset['index']ie11才开始支持    
# 5.节点操作   
## 5-1.为什么学节点操作  
获取元素通常使用两种方式：   
1.利用DOM提供的方式获取元素   
- document.getElementById()  
- document.getElementsByTagName()  
- document.querySelector等  
-逻辑性不强，繁琐   

2.利用节点层级关系获取元素   
- 利用父子兄节点关系获取元素  
- 逻辑性强，但是兼容性稍差      
这两种方式都可以获取元素节点，我们后面都会使用，但是节点操作会更简单   zhong
## 5-2节点概述  
网页中的所有内容都是节点（标签，属性，文本，注释等），再DOM中，节点使用node来表示。  
HTML DOM树中的所有节点均可通过JavaScript进行访问，所有HTML元素（节点）均可被修改，也可以创建或删除。    
一般地，节点至少拥有nodeType（节点类型），nodeName（节点名称）和nodeValue（节点值）这三个基本属性。  
- 元素节点 nodeType为 1  
- 属性节点 nodeType为 2  
- 文本节点 nodeType为3（文本节点包含文字，空格，换行等）   
我们再实际开发中，节点操作的元素节点。   
## 5.3节点层级   
利用DOM树可以把节点划分为不同的层级关系，常见的是父子兄层级关系。   
### 1.父级节点   
node.parrenNode    
### 2.子节点   
1.parentNode.childNodes[标准]  
parentNode.childNodes返回包含指定节点的子节点的集合，该集合为即时更新的集合。   
注意：返回值里面包含了所有的子节点，包括元素节点，文本节点等。    
如果只想要获得里面的元素节点，则需要专门处理。所以我们一般不提倡使用childNodes      
## 2.子节点   
2.parentNode.children[非标准]  
parentNode.children是一个只读属性，返回所有的元素节点。它只返回子元素节点，其余节点不返回   
虽然children是一个非标准，但是得到了各个浏览器的支持，因此我们可以放心使用





