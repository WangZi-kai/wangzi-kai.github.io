var num = 0;
function play(){
    var a = confirm("第一张卡片里有没有你想的数字？")
    if (a == true) {
      var num = num + 1;
      swal("好的👌🏻","继续下一个！","success");
      }else{
          swal("好的👌🏻","继续下一个！","success");
          }
    var b = confirm("第二张卡片里有没有你想的数字？")
    if (b == true) {
      var num = num + 2;
      swal("好的👌🏻","继续下一个！","success");
      }else{
          swal("好的👌🏻","继续下一个！","success");
          }
    var c = confirm("第三张卡片里有没有你想的数字？")
    if (c == true) {
      var num = num + 4;
      swal("好的👌🏻","继续下一个！","success");
      }else{
          swal("好的👌🏻","继续下一个！","success");
          }
    var d = confirm("第四张卡片里有没有你想的数字？")
    if (d == true) {
      var num = num + 8;
      swal("好的👌🏻","继续下一个！","success");
      }else{
          swal("好的👌🏻","继续下一个！","success");
          }
    var e = confirm("第五张卡片里有没有你想的数字？")
    if (e == true) {
      var num = num + 16;
      swal("好的👌🏻","继续下一个！","success");
      }else{
          swal("好的👌🏻","继续下一个！","success");
          }
    var f = confirm("第六张卡片里有没有你想的数字？")
    if (f == true) {
      var num = num + 32;
      swal("好的👌🏻","继续下一个！","success");
      }else{
          swal("好的👌🏻","继续下一个！","success");
          }
    
  document.getElementById("result").innerHTML="我知道了，你想的数字是"+num;
    setTimeout("var g = confirm('我猜中了吧？')",3000)
    if (g == true) {
      swal("好的！", "点一下按钮再来一次吧",
"success");
        swal({
  title: "留言",
  text: "输入一些感想吧，不想写退出：",
  type: "input",
  showCancelButton: true,
  closeOnConfirm: false,
  animation: "slide-from-top",
  inputPlaceholder: "输入一些话"
},
function(inputValue){
  if (inputValue === false) returnfalse;
  
  if (inputValue === "") {
    swal.showInputError("你需要输入一些话！");
    return false
  }
  
  swal("非常好！", "你发出了感想：" + inputValue,"success");
});
      }else{
      swal({
      title:"这不科学！",
      text:"是不是你<span style="color:#F8BB86">搞错了？<span>",
      type:"warning",
      html:ture
    });
    swal("再来一次","眼睛👀看清楚点","error");
  });
    }
}
