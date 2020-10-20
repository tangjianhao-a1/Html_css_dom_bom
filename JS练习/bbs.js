function test2(str) {   
    var name = new RegExp('唐建豪','g')  
    var pps = str.replace(name,'李小琴')  
    return pps
 };
 var re = test2('唐建豪吃饭')
 console.log(re);