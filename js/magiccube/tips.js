if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    swal({
        title: "提示",
        text: "本游戏对手机兼容性不好，去玩玩其他游戏吧！",
        type: "warning",
        timer: 5000,
        showConfirmButton: false
    });
    }else{
        consule.log("建议使用Chrome内核的浏览器访问")
    }
