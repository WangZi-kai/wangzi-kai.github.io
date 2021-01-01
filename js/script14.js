function login(){
var enter=document.getElementsById("password").value;
if(enter == "ahsb182467953RI"){
alert("登录成功");
location.href="/tj/information.html";
}else{
alert("密码错误，登录失败")
}
}
