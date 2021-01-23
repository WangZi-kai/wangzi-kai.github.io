var num = 0;
function play(){
  alert("请在1~60随便想一个数字");
  swal({
    title:"这张卡片里有没有你想的数字",
    text:"有就点“是”，没有就点“否”",
    imageUrl: "/i/numguess/1.jpg"
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "是",
    cancelButtonText: "否",
    closeOnConfirm: false,
    closeOnCancel: false
  },
       function(isConfirm){
    if (isConfirm) {
      var num = num + 1;
      swal("好的👌🏻","继续下一个！","success");
    } else {
      swal("好的👌🏻","继续下一个！","success");
    }
  });
  swal({
    title:"这张卡片里有没有你想的数字",
    text:"有就点“是”，没有就点“否”",
    imageUrl: "/i/age/2.jpg"
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "是",
    cancelButtonText: "否",
    closeOnConfirm: false,
    closeOnCancel: false
  },
       function(isConfirm){
    if (isConfirm) {
      var num = num + 2;
      swal("好的👌🏻","继续下一个！","success");
    } else {
      swal("好的👌🏻","继续下一个！","success");
    }
  });
 swal({
    title:"这张卡片里有没有你想的数字",
    text:"有就点“是”，没有就点“否”",
    imageUrl: "/i/numguess/3.jpg"
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "是",
    cancelButtonText: "否",
    closeOnConfirm: false,
    closeOnCancel: false
  },
       function(isConfirm){
    if (isConfirm) {
      var num = num + 4;
      swal("好的👌🏻","继续下一个！","success");
    } else {
      swal("好的👌🏻","继续下一个！","success");
    }
  }); 
  swal({
    title:"这张卡片里有没有你想的数字",
    text:"有就点“是”，没有就点“否”",
    imageUrl: "/i/numguess/4.jpg"
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "是",
    cancelButtonText: "否",
    closeOnConfirm: false,
    closeOnCancel: false
  },
       function(isConfirm){
    if (isConfirm) {
      var num = num + 8;
      swal("好的👌🏻","继续下一个！","success");
    } else {
      swal("好的👌🏻","继续下一个！","success");
    }
  });
  swal({
    title:"这张卡片里有没有你想的数字",
    text:"有就点“是”，没有就点“否”",
    imageUrl: "/i/numguess/5.jpg"
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "是",
    cancelButtonText: "否",
    closeOnConfirm: false,
    closeOnCancel: false
  },
       function(isConfirm){
    if (isConfirm) {
      var num = num + 16;
      swal("好的👌🏻","继续下一个！","success");
    } else {
      swal("好的👌🏻","继续下一个！","success");
    }
  });
  swal({
    title:"这张卡片里有没有你想的数字",
    text:"有就点“是”，没有就点“否”",
    imageUrl: "/i/numguess/6.jpg"
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "是",
    cancelButtonText: "否",
    closeOnConfirm: false,
    closeOnCancel: false
  },
       function(isConfirm){
    if (isConfirm) { //不知道怎么写跳过，swal教程少，不敢删else，干脆在控制台上输出信息
      var num = num + 32;
      console.log("finish");
    } else {
      console.log("finish");
    }
  });
  swal("我知道了","你想的数字是"+num,"success");
  swal({
    title:"我猜对了吧？",
    type:"info",
    confirmButtonText: "Yes！",
    cancelButtonText: "No！",
    },
       function(isConfirm){
    if (isConfirm) {
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
  } else {
    swal({
      title:"这不科学！",
      text:"是不是你<span style="color:#F8BB86">搞错了？<span>",
      type:"warning",
      html:ture
    });
    swal("再来一次","眼睛👀看清楚点","error");
  });
    }
  
