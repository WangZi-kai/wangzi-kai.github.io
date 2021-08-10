function pass(){
  $("#menu").show();
  $.cookie('pass', 'true', { expires: 3 });
}
var check = $.cookie("pass")
if (check == "true") {
  $("#menu").show();
} else {
  $("#menu").hide();
}
function hide(){
  $("#menu").hide();
}
