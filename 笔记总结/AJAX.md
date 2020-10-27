# 1.AJAX简介     
AJAX 是开发者的梦想，因为您能够：  


不刷新页面更新网页   

在页面加载后从服务器请求数据   

在页面加载后从服务器接收数据   

在后台向服务器发送数    
     
     function loadDoc() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
     }
     };
     xhttp.open("GET", "/example/js/ajax_info.txt", true);
     xhttp.send();
     }   
什么是 AJAX？  

AJAX = Asynchronous JavaScript And XML.

AJAX 并非编程语言。

AJAX 仅仅组合了：

浏览器内建的 XMLHttpRequest 对象（从 web 服务器请求数据）  

JavaScript 和 HTML DOM（显示或使用数据）  

Ajax 是一个令人误导的名称。Ajax 应用程序可能使用 XML 来传输数据，但将数据作为纯文本或 JSON 文本传输也同样常见。

Ajax 允许通过与场景后面的 Web 服务器交换数据来异步更新网页。这意味着可以更新网页的部分，而不需要重新加载整个页面。  
## AJAX 如何工作   
网页中发生一个事件（页面加载、按钮点击）   

由 JavaScript 创建 XMLHttpRequest 对象  

XMLHttpRequest 对象向 web 服务器发送请求   

服务器处理该请求   

服务器将响应发送回网页   

由 JavaScript 读取响应   

由 JavaScript 执行正确的动作（比如更新页面）   
# 2.Ajax 的核心是 XMLHttpRequest 对象。  
所有现代浏览器都支持 XMLHttpRequest 对象。

XMLHttpRequest 对象用于同幕后服务器交换数据。这意味着可以更新网页的部分，而不需要重新加载整个页面   
variable = new XMLHttpRequest();  
## XMLHttpRequest 对象方法:   
方法|描述    
-|-  
new XMLHttpRequest()|创建新的 XMLHttpRequest 对象
abort()	|取消当前请求
getAllResponseHeaders()	|返回头部信息
getResponseHeader()	|返回特定的头部信息
open(method, url, async, user, psw)	|如下列  
规定请求|method：请求类型 GET 或 POST
url：|文件位置  
async：|true（异步）或 false（同步）
user：|可选的用户名称
psw：|可选的密码
send()|将请求发送到服务器，用于 GET 请求
send(string)|将请求发送到服务器，用于 POST 请求
setRequestHeader()	|向要发送的报头添加标签/值对   

## XMLHttpRequest 对象属性  
onreadystatechange:	定义当 readyState 属性发生变化时被调用的函数  
readyState: 保存 XMLHttpRequest 的状态。

- 0：请求未初始化
- 1：服务器连接已建立
- 2：请求已收到
- 3：正在处理请求
- 4：请求已完成且响应已就绪   

responseText: 以字符串返回响应数据;   
responseXML:  以 XML 数据返回响应数据   
status:  返回请求的状态号

- 200: "OK"
- 403: "Forbidden"
- 404: "Not Found"    
# 3.AJAX请求   
### 向服务器发送请求  
如需向服务器发送请求，我们使用 XMLHttpRequest 对象的 open() 和 send() 方法：  
open(method, url, async)：规定请求的类型

- method：请求的类型：GET 还是 POST
- url：服务器（文件）位置
- async：true（异步）或 false（同步）

send()： 向服务器发送请求（用于 GET）   
send(string)： 向服务器发送请求（用于 POST    
### GET 还是 POST？   
GET 比 POST 更简单更快，可用于大多数情况下。  


不过，请在以下情况始终使用 POST： 
 

缓存文件不是选项（更新服务器上的文件或数据库）  

向服务器发送大量数据（POST 无大小限制）  

发送用户输入（可包含未知字符），POST 比 GET 更强大更安全  
### url - 服务器上的文件  
open() 方法的 url 参数，是服务器上文件的地址：  
### 异步 - ture 还是 false？   
如需异步发送请求，open() 方法的 async 参数必须设置为 true：  
发送异步请求对 web 开发人员来说是一个巨大的进步。服务器上执行的许多任务都非常耗时。在 AJAX 之前，此操作可能会导致应用程序挂起或停止。   
## onreadystatechange 属性   
通过 XMLHttpRequest 对象，您可以定义当请求接收到应答时所执行的函数。  
### 同步请求   
如需执行同步的请求，请把 open() 方法中的第三个参数设置为 false：   
一般不用



