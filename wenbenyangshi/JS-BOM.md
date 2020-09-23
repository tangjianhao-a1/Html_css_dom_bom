# 1.BOM概述   
## 1-1.什么是DOM  
BOM(Browser Object Model)即浏览器对象模型，它提供了独立于内容而浏览器窗口进行交互的对象。其核心对象是window.   
BOM有一系列相关的对象构成，并且每个对象都提供了很多方法与属性。   
BOM缺乏标准，JavaScript语法的标准化组织是ECMA，DOM的标准化组织是W3C，BOM最初是Netscape浏览器标准的一部分。   
### DOM  
- 文档对象模型   
- DOM就是把文档当中对象来看待   
- DOM的顶级对象是document  
- DOM主要是学习操作页面元素   
- DOM是W3C标准规范  
### BOM   
- 浏览器对象模型   
- 把浏览器当作一个对象来看待   
- BOM的顶级对象是window   
- BOM学习的是浏览器窗口交互的一些对象   
- BOM是浏览器厂商在各自浏览器上定义的，兼容性较差   
  
## 1-2 BOM的构成   
BOM比DOM更大，它包含了DOM    
window对象是浏览器的顶级对象，它具有双重角色。   
1.它是JS访问浏览器窗口的一个接口。   
2.它是一个全局对象，定义在全局作用域中的变量，函数都会变成window对象的属性和方法。   
在调用的时候可以省略window，前面学习的对话框都属于window对象方法，如alert(),prompt()等。    
注意：window下的一个特殊属性window.name   
# 2.window对象的常见事件   
## 2-1.窗口加载事件    
window.onload = function() {}    
或者   
window.addEventListener('load',function() {});  

window.onload是窗口（页面）加载事件，当文档内容完全加载完成会触发该事件（包括图像，脚本文件，CSS文件等），就调用的处理函数。     
注意：  
1.有了window.onload就可以把JS代码写到页面元素的上方，因为onload是等页面内容全部加载完毕，再去执行处理函数。   
2.window.onload传统注册事件方式只能写一次，如果有多个，会以最后一个window.onload为准。   
3.如果使用了addEventLi
