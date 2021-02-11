var tips = document.getElementById("tips");
if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    tips.innerHTML="<p style="color:orange">本游戏对手机兼容性不好，去玩玩其他游戏吧！</p>";
}else if(window.navigator.userAgent.indexOf("Chrome") > -1){
    console.log("浏览器很棒，可以正常兼容这款游戏！");
}else{
    tips.innerHTML="<p stple="color:orange">建议使用Chrome内核的浏览器访问！</p>";
}
