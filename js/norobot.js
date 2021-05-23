function pass(){
  $("#menu").show();
  $.cookie('pass', 'pass', { expires: 3 });
}
var check = $.cookie('pass');
if (check == "pass") {
  $("#menu").show();
} else {
  $("#menu").hide();
}
