var password = "ahsb182467953RI";
var enter = document.getElementsById("password").value;
console.log(enter.value);
function login(){
if(enter == password){
alert("登录成功");
location.href="/tj/information.html";}
else{alert("密码错误，登录失败")}
}
