function pass(){
  $("#menu").show();
  $.cookie('pass', 'true', { expires: 3 });
}
if (document.cookie.indexOf("pass=true") != -1) {
  $("#menu").show();
} else {
  $("#menu").hide();
}
