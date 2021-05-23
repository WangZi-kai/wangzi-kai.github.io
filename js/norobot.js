function pass(){
  $("#menu").show();
  document.cookie="pass=pass";
}
if (document.cookie.indexOf("pass=pass") != -1) {
  $("#menu").show();
} else {
  $("#menu").hide();
}
