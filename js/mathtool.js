var check = $.url().param('choose');
const header = "/tool/math/";
const footer = ".html";
var result = header+check+footer;
$("#toolshow").attr("src",result);
