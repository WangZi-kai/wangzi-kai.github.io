var refurl=document.referrer; 
if(refurl.indexOf("/download/verify.html")>-1){
console.log("You are pass the verify! You can see something about this website.")
}else{
swal({title:"您没登录呢！",
      text:"如果3秒后无反应请<a href='/tj/verify.html'>点击此处<a>！"
      html: true
      showConfirmButton: false});
setTimeout("location.href = '/tj/verify.html'",3000);
}
