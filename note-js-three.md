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


