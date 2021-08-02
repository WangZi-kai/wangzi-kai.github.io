$(document).ready(function(){
    $("#dl").click(function(){
        link = document.getElementById("link").value;
        check = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-_]+)\.)+([A-Za-z0-9-_\/])+$/;
        if (!check.test(link)) {
            alert("网址无效，请重新输入");
        } else {
            $("#dler").attr("href",link);
            document.getElementById("dler").click();
        }
  });
});
