var num = 0;
function play(){
  swal('请在1~60随便想一个数字');
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
      var num = num+1;
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
      var num = num+2;
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
      var num = num+4;
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
      var num = num+8;
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
      var num = num+16;
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
    if (isConfirm) {
      var num = num+32;
      swal("好的👌🏻","继续下一个！","success");
    } else {
      swal("好的👌🏻","继续下一个！","success");
    }
  });
  swal("我知道了","你想的数字是"+num,"success");
  swal()
  
