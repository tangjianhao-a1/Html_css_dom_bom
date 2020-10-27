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
## 3-6.this     
this的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this到底指向谁，一般情况下this的最终的是那个调用它的对象       
现阶段，我们先了解一下几个this指向    
1.全局作用域或者普通函数中this指向全局对象window（注意定时器里面的this指向window）     
# 4.JS执行机制    
## 4-1.JS是单线程     
JavaScript语言的一大特点就是单线程，也就是说，同一时间只能做一件事，这是因为JavaScript这门脚本语言诞生的使命所致-JavaScript是为处理页面中用户的交互，以及操作DOM而诞生的，比如我们对某个DOM元素进行添加和删除操作，不能同时进行，应该先进行添加，之后再删除。   
单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。这样所导致的问题是：如果JS执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞的感觉。   
## 4-2.同步和异步    
为了解决这个问题，利用多核CPU的计算能力，HTML5提出Web Worker标准，允许JavaScript脚本创建多个线程，于是，JS中出现了同步和异步。   
### 同步    
前一个任务结束后再执行后一个任务，程序的执行顺序与任务的排列顺序是一致的，同步的。比如做饭的同步做法：我们要烧水煮饭，等水开了十分钟，再去切菜，炒菜。    
异步   
你在做一件事情时，因为这件事情会花费很长时间，在做这件事的同时，你还可以去处理其他事情，比如做饭的异步做法我们在烧水的同时，利用这10分钟去切菜，炒菜。   
他们的本质区别：这条流水线上各个流程的执行顺序不同。   
### 同步任务    
同步任务都在主线程上执行，形成一个执行栈。      
### 异步任务    
JS的异步是通过回调函数实现的。    
一般而言，异步任务有以下三种类型：   
1.普通事件，如click,resize等   
2.资源加载，如load，error等     
3.定时器，包括setInterval，setTimeout等   
异步任务相关回调函数添加到任务队列中（任务队列也称为消息队列）。     
## 4-3.JS执行机制    
1.先执行执行栈中的同步任务。   
2.异步任务（回调函数）放入任务队列中。   
3.一旦执行栈中的所有同步任务执行完毕，系统就会按次序读取任务队列中的异步任务，于是被读取的异步任务结束等待状态状态，进入执行栈，开始执行。   
由于主线程不断的重复获得任务，执行任务，在获取任务，在执行，所以这种机制被称为事件循环（event loop).    
# 5.location对象     
## 5-1.什么是location对象
window对象给我们提供了一个location属性用于获取或设置窗体的URL，并且可以用于解析URL。因为这个属性返回的是一个对象，所以我们将这个属性也称为location对象。    
## 5-2.URL   
统一资源定位符（Uniform Resource Locator,URL)是互联网上标准资源的的地址。互联网上的每个文件都有一个唯一的URL，它包含的信息指出文件的位置以及浏览器应该怎么处理它。  
URL的一般语法格式为    
protocol://host[:port]/path/[?query]#fragment   
http://www.itcast.cn/index.html?name=andy&age=18#link   
组成|说明    
-|-    
protocol|通讯协议 常用的http,ftp，maito等   
host|主机（域名）www.itheima.com   
port|端口号可选，省略时使用方案的默认端口如http的默认端口为80   
path|路径由零或多个'/'符号隔开的字符串，一般用来表示主机上的一个目录或文件地址    
query|参数以键值对的形式通过&符号分隔开来   
fragment|片段#后面内容常用于链接锚点    
## 5-3.location对象的属性   
location对象属性|返回值  
-|-
location.href|获取或者设置整个URL   
location.host|返回主机（域名）www.itheima.com   
location.port|返回端口号 如果未写返回  空字符串    
location.pathname|返回路径   
location.seatch|返回参数   
location.hash|返回片段 #后面内容 常见于链接 锚点     
重点记住：href和search    
## 5-4.location对象的方法   
location对象方法|返回值  
-|-   
location.assign()|跟href一样，可以跳转页面（也称为重定向页面）   
location.replace()|替换当前页面，因为不记录历史，所以不能后退页面   
location.reload()|重新加载页面，相当于刷新按钮或者f5如果参数为trun 强制刷新ctrl+f5  
# 6.navigator对象    
navigator对象包含有关浏览器的信息，它有很多属性，我们最常用的是userAgent,该属性可以返回由客户机发送服务器的服务器的user-agent头部的值。   
下面前端代码可以判断用户那个终端打开页面，实现跳转    
# 7.history对象   
window对象给我们提供了一个history对象，与浏览器历史记录进行交互。该对象包含用户（在浏览器窗口中）访问过的URL。   
hisory对象方法|作用  
-|-  
history对象方法|作用    
back()|可以后退功能   
forward()|前进功能    
go(参数)|前进后退功能，参数如果是1 前进1个页面 如果是-1，后退1个页面

 

