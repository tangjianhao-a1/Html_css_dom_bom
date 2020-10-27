function animate(obj, target) {
    //当我们不断点击按钮，这个元素的速度会越来越快，因为开启了太多的定时器  
    //解决方案就是让我们只有一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        //步长写到定时器里面  
        //把步长值改为整数 不要出现小数的问题
        //var step = Math.ceil((target - obj.offsetLeft)/10);
        var step = (target - obj.offsetLeft)/10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            //停止动画 本质是停止定时器   
            clearInterval(obj.timer);
            //回调函数写到定时器结束里面
            if(callback) {
                callback();
            }
        }
        //把每次加1 这个步长值改为一个慢慢变小的值
        //步长公式：（目标值 - 现在的位置）/10作为每次移动的距离步长  
        obj.style.left = obj.offsetLeft + step + 'px'
    }, 15);
}