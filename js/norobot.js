function pass(){
  $("#menu").show();
  $.cookie('pass', 'true', { expires: 3 });
}
var cookie = document.cookie;
if (cookie.indexOf("pass=true") != -1) {
  $("#menu").show();
} else {
  $("#menu").hide();
}
