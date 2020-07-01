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

