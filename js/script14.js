var password = 13787595634;
var input = document.getElementById("password");
var td = document.getElementsByTagName("td");
for(var i = 0;i < td.length;i++){
	td[i].style.color = "white"
	td[i].style.backgroundColor = "#EAEAEA";
	td[i].style.borderRadius = "50px";
}
function dodown(obj){
	obj.style.backgroundColor = "darkgray";
	input.value += obj.id;
	
}
function doup(obj){
	obj.style.backgroundColor = "#EAEAEA";
	if(input.value.length == 6){
		if(input.value == password){
			alert("登录成功");
			location.href="/tj/information.html";
		}else{
			alert("密码错误，登录失败")
			input.value = null;
		}
	}
}
function doenter(obj){
	obj.style.backgroundColor = "lightgray";
}
function doout(obj){
	obj.style.backgroundColor = "#EAEAEA";
}
