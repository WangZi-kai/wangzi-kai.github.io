$(document).ready(function(){
    $("#dl").click(function(){
        link = document.getElementById("link").value;
        check = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?$/;
        if (!check.test(link)) {
            alert("网址无效，请重新输入");
        } else {
            $("#dler").attr("href",link);
            document.getElementById("dler").click();
        }
  });
});
