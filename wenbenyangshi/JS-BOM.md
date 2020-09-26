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
3.如果使用了addEventListener则没有限制  
document.addEventener('DOMContenLoaded',function() {})    
DOMContentLoaded事件触发时，仅当DOM加载完成，不包括样式表，图片，flash等等。    
Ie9以上才支持   
如果页面的图片很多的话，从用户访问到onload触发可能需要较长的时间。交互效果就不能实现，必然影响用户体验，此时用DOMContentLoaded事件比较合适。   
## 2-2.调整窗口大小事件   
window.onresize = function() {}    
window.addEventListener('resize',function() {});    
window.onresize是调整窗口大小加载事件。当触发时就调用的处理函数。   
注意：  
1.只要窗口大小发生像素变化，就会触发这个事件。   
2.我们经常利用这个事件完成响应式布局。window.innerWidth当前屏幕的宽度   
# 3.定时器   
## 3-1 两种定时器    
window对象给我们提供了2个非常好用的方法-定时器。   
- setTimeout()   
- setInterval()    
## 3-2 setTimeout()定时器    
window.setTimeout(调用函数，[延迟的毫秒数])；  
setTimeout()方法用于设置一个定时器，该定时器在定时器到期后执行调用函数。  
注意 ：  
1.window可以省略。   
2.这个调用函数可以直接写函数，或者写函数名或者采取字符串'函数名（）'三种形式，第三种不推荐。  
3.延迟的毫秒数省略默认是0，如果写，必须是毫秒。  
4.因为定时器可能有很多，所以我们经常给定时器赋值一个标识符。   
setTimeout()这个调用函数我们也称为回调函数callback   
普通函数是按照代码顺序直接调用。    
而这个函数，需要等待时间，时间到了才去调用这个函数，因此称为回调函数。   
简单理解：回调，就是回头调用的意思，上一件事干完，在回头调用这个函数。  
以前的element.onclick = function() {} 或者 element.addEventListener("click",fn);里面的函数也是回调函数。    
## 3-3.停止setTimeout()定时器   
window.clearTimeout(timeoutId)    
clearTimeout()方法取消了先前通过调用setTimeout()建立的定时器。   
注意 ：   
1.window可以省略。    
## 3-4.setInterval(回调函数，[间隔的毫秒数])；     
setInterval()方法重复调用一个函数，每隔这个时间，就去调用一次回调函数    
注意：   
1.window可以省略。    
2.这个调用函数可以直接写函数，或者写函数名或者采取字符串'函数名（）'三种形式。   
3.间隔的毫秒数省略默认是0，如果写，必须是毫秒，表示每隔多少毫秒就自动调用这个函数。   
4.因为定时器可能有很多，所以我们经常给定时器赋值一个标识符。

## 3-5.停止setInterval()定时器   
window.clearInterval(intervalID);   
clearInterval()方法取消了先前通过调用setInterval()建立的定时器。   
注意：  
1.window可以省略。   
2.里面的参数就是定时器的标识符。
