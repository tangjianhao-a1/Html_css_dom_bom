# 1.元素偏移量offset系列    
## 1-1.offset概述    
offset翻译过来就是偏移量，我们使用offset系列相关属性可以动态的得到该元素的位置（偏移），大小等。   
- 获得元素距离带有定位父元素的位置   
- 获得元素自身的大小（高度宽度）  
- 注意： 返回数值都不带单位      

offset系列常用属性：       
offset系列属性|作用    
-|-   
element.offsetParent|返回作为该元素带有定位的父级元素，如果父级都没有定位则返回body   
element.offsetTop|返回元素相对带有定位父元素上方偏移   
element.offsetLeft|返回元素相对带有定位父元素左边框的偏移   
element.offsetWidth|返回自身包括padding，边框，内容区的宽度，返回数值不带单位     
element.offsetHeight|返回自身包括padding，边框，内容区的高度，返回数值不带单位    
## 1-2.offset与style区别   
offset     
- offset可以得到任意样式表中的样式值   
- offset系列获得的数值是没有单位的   
- offsetWidth包含padding+border+width   
- offsetWidth等属性是只读属性，只能获取不能赋值   
- 所以，想要获取元素大小位置，用offset更合适    

style     
- style只能得到行内样式表中的样式值   
- style.width获得的是带有单位的字符串   
- style.width获得不包含padding和border的值   
- style.width是可读写属性，可以获取也可以赋值   
- 所以我们想要给元素更改值，则需要用style改变   
# 2.元素可视区client系列     
client翻译过来就是客户端，我们使用client系列的相关属性来获取元素可视区的相关信息，通过client系列的相关属性可以动态的得到该元素的边框大小，元素大小等。  
clicent系列属性|作用  
-|-   
element.clientTop|返回元素上边框的大小   
element.clientLeft|返回元素左边框的大小    
element.clientWidth|返回自身包括padding,内容区的宽度，不含边框，返回数值不带单位   
element.clientHeight|返回自身包括padding,内容区的高度，不含边框，返回数值不带单位
# 3.元素滚动scroll系列    
## 3-1.元素scroll系列属性    
scroll翻译过来就是滚动，我们使用scroll系列的相关属性可以动态得到该元素的大小，滚动距离等。    
scroll系列属性|作用  
-|-   
element.scrollTpop | 返回被卷去的上侧距离，返回数值不带单位   
element.scrollLeft|返回被卷去的左侧距离，返回数值不带单位   
element.scrollWidth|返回自身实际的宽度，不含边框，返回数值不带单位  
element.scrollHeight|返回自身实际的高度，不含边框，返回数值不带单位    
## 3-2.页面被卷去的头部    
如果浏览器的高或宽度不足以显示整个页面时，会自动出现滚动条，当滚动条向下滚动时，页面上面被隐藏掉的高度，我们就称为页面被卷去的头部。滚动条在滚动时会触发onscroll事件。    
# 三大系列总结    
三大系列大小对比|作用   
-|-  
element.offsetWidth|返回自身包括padding.边框，内容区的宽度，返回值不带单位    
element.clientWidth|返回自身包括padding,内容区的宽度，不含边框，返回数值不带单位   
element.scrollWidth|返回自身实际的宽度，不含边框，返回数值不带单位    
他们的用法：   
1.offset系列经常用于获取元素位置 offsetLeft  offsetTop   
2.client经常用于获取元素大小clientWidth  clientHeight   
3.scroll经常用于获取滚动距离scrollTop scrollLeft   
4.注意页面滚动距离通过window.pageXoffLeft获得  
#mouseenter和mouseover的区别
## mouseenter鼠标事件   
- 当鼠标移动到元素上时就会触发mouseeter事件   
- 类似mouseover，他们两者之间的差别是    
- mouseover鼠标经过自身盒子会触发，经过子盒子还会触发，mouseeter只经过自身盒子触发      
- 之所以这样，就是因为mouseeter不会冒泡
# 4.动画实现原理    
核心原理：通过定时器setInterval()不断移动盒子位置。   
实现步骤：   
1.获得当前盒子位置   
2.让盒子在当前位置加上1个移动距离   
3.利用定时器不断重复这个操作   
4.加一个定时器的条件   
5.注意此元素需要添加定位，才使用element.style.left   
## 4-2 动画函数简单封装    
注意函数需要传递2个参数，动画对象和移动距离。  
## 4-3.动画函数给不同元素记录不同定时器    
如果多个元素都使用这个动画函数，每次都要var声明定时器。我们可以给不同的元素使用不同的定时器（自己专门用自己的定时器）。  
核心原理：利用JS是一门动态语言，可以方便的给当前对象添加属性。   
## 4-4.缓动效果原理    
缓动动画就是让元素运动速度有所变化，常见的是让速度慢慢停下来   
思路：  
1.让盒子每次移动的距离慢慢变小，速度就会慢慢落下来。   
2.核心算法：（目标值-现在的位置）/10作为每次移动的距离步长  
3.停止的条件是：让当前盒子位置等于目标位置就停止定时器     
## 4-5.动画函数多个目标值之间移动     
可以让动画函数从800移动到500.   
当我们点击按钮时候，判断步长是正值还是负值   
1.如果是正值，则步长往大了取整   
2.如果是负值，则步长向小取整   
## 4-6 动画函数添加回调函数   
回调函数原理：函数作为一个参数。将这个函数作为参数传递到另外一个函数里面，当那个函数执行完之后，在执行传进去的这个函数，这个过程就叫做回调。  
## 4-7.动画函数封装到单独JS文件里面     
因为以后经常使用这个动画函数，可以单独封装到一个JS文件里面，使用的时候引用这个JS文件即可。

