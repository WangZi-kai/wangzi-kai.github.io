var num = 0;
function play(){
  swal('请在1~60随便想一个数字');
  swal({
    title:"这张卡片里有没有你想的数字",
    text:"有就点“是”，没有就点“否”",
    imageUrl: "i/age/1.jpg"
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "是",
    cancelButtonText: "否",
    closeOnConfirm: false,
    closeOnCancel: false
  },
       function(isConfirm){
    if (isConfirm) {
    var num = num+1;
    swal('好的');
  } else {
    swal("OK！");
  }
});
       
