var ua = navigator.userAgent;
var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
    isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
    isAndroid = ua.match(/(Android)\s+([\d.]+)/),
    isMobile = isIphone || isAndroid;
    if(isMobile) {
        swal({
  title: "提示",
  text: "本游戏对手机<span style="color:red">兼容性不好<span>，去玩玩其他游戏吧",
  type: "warning",
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",
  confirmButtonText: "好的",
  cancelButtonText: "容我看看",
  closeOnConfirm: false,
  closeOnCancel: false,
  html:ture
},
function(isConfirm){
  if (isConfirm) {
    location.href="/game/";
  } else {
    alert("慢慢看，就打扰你这一下。")
  }
});
    }else{
        consule.log("建议使用Chrome内核的浏览器访问")
    ｝
