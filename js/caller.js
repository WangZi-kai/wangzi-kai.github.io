$(document).ready(function(){
    $("#getnum").click(function(){
    num = document.getElementById("input").value;
    val = "tel:"+num
    $("#call").attr("href",val);
    document.getElementById("call").click();
  });
});
