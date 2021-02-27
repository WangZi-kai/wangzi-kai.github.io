if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    document.write('<p style="color:orange;font-size:40px"><b>对手机兼容性不好，去试试其他的吧！</b></p>');
}else if(window.navigator.userAgent.indexOf("Chrome") > -1){
    console.log("浏览器很棒，可以正常兼容！");
}else{
    document.write('<p style="color:orange;font-size:40px"><b>建议使用Chrome内核的浏览器访问！</b></p>');
}
