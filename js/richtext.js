const editor = new window.wangEditor("#hitool-richtext")
editor.create();
function htmlshow(){
  $("#htmlshowcontainer").show();
  document.getElementById("htmlshowcontainer").innerHTML = editor.txt.html();
}
function htmlhide(){
  $("#htmlshowcontainer").hide();
  document.getElementById("htmlshowcontainer").innerHTML = "";
}
function textshow(){
  $("#htmlshowcontainer").show();
  document.getElementById("htmlshowcontainer").innerHTML = editor.txt.text();
}
