/*定义的一个命名空间*/
window.my = {};
/*封装一个事件 过渡结束事件*/
my.transitionEnd = function(dom, callback) {
    //1.给谁加事件
    //2.事件触发后处理什么业务
    if (!dom || typeof dom != 'object') {
        //没dom的时候或者不是一个对象的时候 程序停止
        return false;
    }
    dom.addEventListener('transitionEnd', function() {
        callback && callback();
    });
    dom.addEventListener('webkitTransitionEnd', function() {
        callback && callback();
    });
}