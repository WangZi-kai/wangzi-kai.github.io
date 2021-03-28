function baidu(){
    document.writeIn();
    document.writeIn();
    $("#input").attr("name","wd");
    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {📕
        this.form.action="https://m.baidu.com/s";
    }else{
        this.form.action="https://www.baidu.com/s";
    }
}
function sogou(){
    $("#input").attr("name","web");
}
function bing(){
    this.form.action="https://cn.bing.com/search";
}
function google(){
    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        this.form.action="https://m.google.com/search";
    }else{
        this.form.action="https://www.google.com/search";
    }
}
function qihoo(){
    this.form.action="https://www.so.com/s";
}
function sm(){
    this.form.action="https://quark.sm.cn/s";
}
