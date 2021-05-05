    $(window).on("load",function(){
      var winHeight = $(window).height();
        if (window.navigator.userAgent.toLowerCase().match(/MicroMessenger\/[0-9]/i)||window.navigator.userAgent.toLowerCase().match(/QQ\/[0-9]/i)){
        $(".weixin-tip").css("height",winHeight);
        $(".weixin-tip").show();
        } else {
          consule.log("非微信，QQ");
        }
      }
