v# HTML5和CSS3提高  
# 1.HTML5的新特性  
HTML5的新特性主要针对于以前的不足，增加了一些新的标签，新的表单和新的表单属性等。  
这些新特性都有兼容性问题，基本是IE9+以上版本的浏览器才支持，如果不考虑兼容性问题，可以大量使用这些新特性。  
声明：
1.新特性增加了很多，但是我们专注于开发常用的新特性。  
## 1-1 HTML5新标签的语义化标签  
- header：头部标签  
- nav：导航标签  
- article：内容标签  
- section：定义文档某个区域  
- aside：侧边栏标签  
- footer：尾部标签  
注意：  
- 这种语义化标签主要是针对搜索引擎的  
- 这些新标签页面中可以多次使用  
- 在IE9中，需要把这些元素转化为块级元素  
- 其实，我们移动端更喜欢使用这些标签  
- HTML5中还增加了很多标签，后面慢慢了解  
---
  
## 1-2.HTML5新增的多媒体标签  
1.音频  audio  
2.视频  video  
使用他们可以很方便的在页面中嵌入音频和视频，而不再去使用flash和其他浏览器插件。  
### 1.视频 video  
当前 video元素支持三种视频格式，尽量使用MP4格式  
浏览器|MP4|webm|ogg
-|-|-|-
intennet Explorer|YES|NO|NO
Chrome|YES|YES|YES
Firefox|YES|YES|YES
Safari|YES|NO|NO  
Opera|YES|YES|YES  
语法：  
《video scr="文件地址" conrols="controls"》《/video》  
《video  controls="conrols"  width="300">  
《source src="move.ogg"  type="video/ogg"》  
《source src="move.mp4" type="video/mp4">    
</video》  

HTML5在不使用插件的情况下，也可以原声的支持音频格式文件的播放，当然，支持格式是有限的。  
## 1.视频video-常见属性  
属性|值|描述  
-|-|-  
autoplay|autoplay|视频就绪自动播放（谷歌浏览器需要添加muted来解决自动播放问题）  
controls|controls|向用户显示播放控件  
width|pixels（像素）|设置播放宽度  
height|pixels（像素）|设置播放器高度  
loop|loop|播放完是否继续播放该视频，循环播放  
preload|auto（预先加载视频）none（不应加载视频）|规定了是否预加载视频（如果有了autoplay，就忽略该属性)  
src|url|视频url地址  
poster|imgurl|加载等待的画面图片  
muted|muted|静音播放  
HTML5在不同使用插件的情况下，也是可以原声的支持音频格式文件的播放，当然，支持的格式是有限的。  
## 2.音频audio  
当前audio元素支持三种音频格式：  
浏览器|MP3|Wav|Ogg  
-|-|-|-
intemet Explorer|YES|NO|NO
chrome|YES|YES|YES
Fiefox|YES|YES|YES  
Safari|YES|YES|NO  
Opera|YES|YES|YES    
语法：  
《audio src="文件地址" controls="controls">《/audio>  
《audio controls="controls"》  
《source src="happy.mp3" type="audio/mpeg">  
《source src="happy.ogg" type="audio/ogg">  
</audio》  
 
 常见属性  
 属性|值|描述  
 -|-|-
 autoplay|autoplay|如果出现该属性，则音频在就绪后马上播放  
 controls|controls|如果出现该属性，则向用户显示控件，比如播放按钮。  
 loop|loop|如果出现该属性，则每当音频结束时重新开始播放。  
 src|url|要播放音频的URL.  
 - 谷歌浏览器把音频和视频自动播放禁止了  
 ## 3.多媒体标签总结   
 - 音频标签和视频标签使用方式是一致的  
 - 浏览器支持情况不同  
 - 谷歌浏览器不音频和视频自动播放禁止了  
 - 我们可以给视频标签添加muted属性来静音播放视频，音频不可以（可以通过JavaScript解决）  
 - 视频标签是重点。我们经常设置自动播放，不使用controls控件，循环和设置大小属性    
 ---
## 1-3.HTML5新增的input类型    
属性值|说明  
-|-
type="email"|限制用户输入必须为Emall类型  
type="url"|限制用户输入必须为URL类型  
type="date"|限制用户输入必须为日期类型  
type="time"|限制用户输入必须为时间类型  
type="mouth"|限制用户输入必须为月类型  
type="week"|限制用户输入必须为周类型  
type="number"|限制用户输入必须为数字类型  
type="tel"|手机号码  
type="search"|搜索框  
type="color"|生成一个颜色选择表单  
---
## 1-4.HTML5新增的表单属性  
属性|值|说明  
-|-|-  
required|required|表单拥有该属性表示其内容不能为空，必填  
placeholder|提示文本|表单的提示信息，存在默认值将不显示
autofocus|autofocus|自动焦距属性，页面加载完成自动焦距到指定表单
autocomplete|off/on|当用户在字段开始键入时，浏览器基于之前键入过的值，应该显示出在字段中填写的选项。默认已经打开，如autocomplete="on"，关闭autocomplete="off"需要放在表单内，同时加上name属性，同时提交成功  
multiple|multiple|可以多选文件提交  
可以通过以下设置方式修改placeholder里面的字体颜色：  
input：：placeholder{  
    color：red；
}    
# 2.css3的新特新  
## 2-1.CSS3的现状   
- 新增的CSS3特新有兼容性问题，ie9+才支持  
- 移动端支持优于PC端  
- 不断改进中  
- 应用相对广泛   
- 现阶段主要学习：新增选择器和盒子模型以及其他特性   
CSS3给我们新增了选择器，可以更加便捷，更加自由的选择目标元素。  
1. 属性选择器  
2. 结构伪类选择器  
3. 伪元素选择器   
## 2-2.属性选择器  
属性选择器可以根据元素特定属性来选择元素，这样就可以不用借助于类或者id选择器。  
选择符|简介  
-|-
E[ att]|选择具有att属性的E元素  
E[ att="val"]|选择具有att属性且属性值等于val的E元素  
E[ att^="val"]|匹配具有att属性且值以val开头的E元素  
E[ att$="val"]|匹配具有att属性且值以val结尾的E元素  
E[ att*="val"]|匹配具有att属性且值中含有val的E元素  
注意：类选择器，属性选择器，伪类选择器，权重为10.  
## 2-3.结构伪类选择器   
结构伪类选择器主要根据文档结构来选择元素，常用于根据父级选择器里面的子元素  
选择器|简介
-|-
E：first-child|匹配父元素中的第一个子元素E  
E：last-child|匹配父元素中最后一个E元素  
E：nth-child（n）|匹配父元素中的第n个子元素E  
E:first-of-type|指定类型E的第一个  
E:last-of-type|指定类型E的最后一个  
E:nth-of-type(n)|指定类型E的第n个  
### nth-child（n）选择某个父元素的一个或多个特定的子元素  
- n可以是数字，关键字和公式  
- n如果是数字，就是选择第几个子元素，里面数字从1开始。。。   
- n可以是关键字：even偶数，odd奇数   

公式|取值  
-|-
2n|偶数  
2n+1|奇数  
5n|5，10，15  
n+5|从第五个开始（包含第五个）到最后）  
-n-5|前五个（包含第五个）  
区别：  
1.nth-child对父元素里面所有孩子排序选择（序号是固定的）先找到第几个孩子，然后看看是否和E匹配  
2.nth-of-type对父元素里面指定子元素进行选择，先去匹配E，然后在根据E找到第几个孩子  
### 小结：   
- 结构伪类选择器一般是用于选择器里面的第几个孩子  
- nth-child对父元素里面所有孩子排序选择（序号是固定的）先找到第几个孩子，然后再看看是否和E匹配  
- nth-of-type 对父元素里面指定子元素进行排序选择，先去匹配E，然后在根据E找到第n个孩子  
- 关于nth-child（n)我们要知道n是从0开始计算的，要记住常用公式  
- 如果是无序列表，我们肯定用nth-child更多  
- 类选择器，属性选择器，伪类选择器，权重为10.  

---
## 2-4.伪元素选择器（重点）  
伪元素选择器可以帮助我们利用CSS创建新标签元素，而不需要HTML标签，从而简化HTML结构。  
选择器|简介  
-|-  
::before|在元素内部的前面插入内容  
::after|在元素内部的后面插入内容  
### 注意：  
- before和after创建一个元素，但是属于行内元素  
- 新创建的这个元素在文档树中是找不到的，所以我们称之为伪元素  
- 语法：element::before{}  
- before和after必须有conten属性  
- before在父元素内容前面创建元素，after在父元素内容的后面插入元素  
- 伪元素选择器和标签选择器一样，权重为1    
---
## 2-5.css3盒子模型  
CSS3中可以通过box-sizing来指定盒模型，有两个值：content-box，border-box，这样我们计算盒子大小的方式就发生了改变。  
可以分成两种情况：  
1.box-sizing：conten-box盒子大小为width+padding+border（以前默认的）  
2.box-sizing：border-box 盒子大小为width   
如果盒子模型我们改了box-sizing：border-box，那padding和border就不会撑大盒子了（前提padding和border不会超过width宽度） 

---
## 2-6.CSS3其他特性（了解）  
1.图片变模糊  
2.计算盒子宽度width：calc函数  
### CSS3滤镜filter：  
filter CSS属性将模糊或颜色偏移等图形效果应用于元素  
filter：函数（); 例如：filter：blur（5px）  blur模糊处理  数值越大越模糊     
### CSS3  calc函数：   
calc（）此CSS函数让你在声明CSS属性值时执行一些计算。  
width：calc（100%-80px）；  
括号里面可以使用+ - * / 来进行计算。  
## 2-7.CSS3过渡（重点）  
过渡（transition）是CSS3中具有颠覆性的特征之一，我们可以不使用Flash动画或JavaScript的情况下，当元素从一种样式变换为另一种样式时为元素添加效果。  
过渡动画：是从一个状态渐渐的过渡到另外一个状态  
可以让我们页面更好看更动感十足，虽然  低版本浏览器不支持（ie9以下版本）但是不会影响页面布局。    
我们现在经常和 ：hover一起 搭配使用。   

---
transition：要过渡的属性   花费时间   运动曲线   何时开始；  
1.属性：想要变化的CSS属性，宽度高度  背景颜色  内外边距都可以。如果想要所有的属性都变化过渡，写一个all就可以。  
2.花费时间:单位是秒（必须写单位）比如0.5s  
3.运动曲线：默认是ease（可以省略）  
4.何时开始：单位是秒（必须写单位）可以设置延迟触发时间  默认是0s（可以省略）    
记住过渡的使用口诀：谁做过渡给谁加，



