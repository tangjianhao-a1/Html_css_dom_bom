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

