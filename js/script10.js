var refurl=document.referrer; 

if(refurl.indexOf("/download/check.html")>-1){
  alert("对不起，暂时还没有开发mac版本，未来会考虑，感谢支持");
  window.location.href = "/";
}
else{
window.location.href = "/download/";
}
