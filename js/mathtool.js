window.onload=function(){
var check = $.url().param('choose');
var header = "/tool/math/";
var footer = ".html";
var result = header+check+footer;
$("#toolshow").attr("src",result);
}
};
