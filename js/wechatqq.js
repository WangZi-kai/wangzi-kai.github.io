    $(window).on("load",function(){
      var winHeight = $(window).height();
      function is_weixin() {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger\/[0-9]/i)||ua.match(/QQ\/[0-9]/i)){
          return true;
        } else {
          return false;
        }
      }
      var isWeixin = is_weixin();
      if(isWeixin){
        $(".weixin-tip").css("height",winHeight);
        $(".weixin-tip").show();
      }else{
          console.log("非微信，QQ");
      }
    })
