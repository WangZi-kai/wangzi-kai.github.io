function pass(){
  $("#menu").show();
  document.cookie="pass=pass";
}
var check = document.cookie;
if (check == "pass=pass") {
  $("#menu").show();
} else {
  $("#menu").hide();
}
