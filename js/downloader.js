$(document).ready(function(){
    $("#dl").click(function(){
        link = document.getElementById("link").value;
        check = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?$/;
        if (!check.test(link)) {
            alert("网址无效，请重新输入");
        } else {
            /*以下是以前的思路，还有一个ID为dler的a标签，FireFox会受到同源限制（大部分浏览器都是使用的FireFox，您可以使用浏览器信息查看工具来看代号，为Mozilla的都是），只有Chrome可以正常下载
            $("#dler").attr("href",link);
            document.getElementById("dler").click();
            以下是比较好的思路，使用了download.js，不会受到限制
            */
            $.ajax({
                url: link,
                success: download.bind(true, "text/html", "hi科技-网站源码下载.html")
            });
        }
  });
});
