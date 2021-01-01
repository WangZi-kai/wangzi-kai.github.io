var refurl=document.referrer; 
if(refurl.indexOf("/download/verify.html")>-1){
console.log("You are pass the verify! You can see something about this website.")
}else{
window.location.href = "/tj/verify.html";
}
