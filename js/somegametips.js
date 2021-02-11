if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    swal("提示","本游戏对手机兼容性不好，去玩玩其他游戏吧！","warning")
    }else{
        consule.log("建议使用Chrome内核的浏览器访问")
    }
