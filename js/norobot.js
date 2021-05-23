function pass(){
  $("#.weixin-tip").hide();
  $.cookie('pass', 'pass', { expires: 7 });
}
var check = $.cookie('pass');
if (check == "pass") {
  $("#.weixin-tip").hide();
} else {
  $("#.weixin-tip").show();
}
