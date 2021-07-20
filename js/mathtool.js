window.onload=function(){
var check = $.url().param('choose');
if(check == underfined){
$("#toolshow").attr("src","/tool/math/error.html");
}else{var header = "/tool/math/";
var footer = ".html";
var result = header+check+footer;
$("#toolshow").attr("src",result);
}
};
