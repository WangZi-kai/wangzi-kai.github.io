var num = 0;
function play(){
    var a = confirm("这张卡片里有没有你想的数字")
    
       function(isConfirm){
    if (a == true) {
      var num = num + 1;
      alert("好的👌🏻，继续下一个！");
      }
  document.getElementById("result").innerHTML="我知道了，你想的数字是"+num;
    if (isConfirm) {
      swal("好的！", "点一下按钮再来一次吧",
"success");
      }else{
      swal("这不科学，是不是你搞错了？再来一次，眼睛👀看清楚点！")
