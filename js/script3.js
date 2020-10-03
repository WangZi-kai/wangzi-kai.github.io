    $(window).on("load",function(){
      var winHeight = $(window).height();
      function is_weixin() {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger"||ua.match(/QQ/i) == "qq"){
          return true;
        }
        
        else {
          return false;
        }
      }
      var isWeixin = is_weixin();
      if(isWeixin){
        $(".weixin-tip").css("height",winHeight);
        $(".weixin-tip").show();
      }else{
          window.location.href="/download/jump.html";
      }
    })
