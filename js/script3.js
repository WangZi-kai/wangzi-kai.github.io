var ua = navigator.userAgent.toLowerCase();
//使用toLowerCase将字符串全部转为小写，方便我们判断使用
if (ua.match(/MicroMessenger/i) == "micromessenger" || ua.match(/QQ/i) == "qq") {
  //UA判断微信QQ内置浏览器，QQ浏览器会误杀，所以我建议切换电脑UA，这样可以破，wx,qq就切不了UA了
    if (navigator.userAgent.match(/(iPhone|iPod|iPad|Mac);?/i)) { //判断是否是iOS，如果是将安卓的藏起来
        document.getElementById("WeChatAndroid").style.display='none';
    }
    if (navigator.userAgent.match(/android/i)) { //判断是否是Android，如果是将iOS的藏起来
        document.getElementById("WeChatiPhone").style.display='none';
    }
}else{ //如果不是
    document.getElementById("WeChatAndroid").style.display='none';
    document.getElementById("WeChatiPhone").style.display='none'; //全部隐藏
}
