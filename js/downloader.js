$(document).ready(function(){
    $("#dl").click(function(){
        link = document.getElementById("link").value;
        check = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?$/;
        if (!check.test(link)) {
            alert("网址无效，请重新输入");
        } else {
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    let url = window.URL.createObjectURL(xhr.response);
                    $("#dler").attr("href", url);
                    document.getElementById("dler").click();
                    window.URL.revokeObjectURL(url);
                }
            }
            xhr.responseType = "blob";
            xhr.open("get", link);
            xhr.send();
        }
  });
});
