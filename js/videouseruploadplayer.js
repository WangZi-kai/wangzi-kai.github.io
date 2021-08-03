$("#video").change(function () {
    $("#video0").show(); 
    var objUrl = getObjectURL(this.files[0]);
    if (objUrl) {
        $("#video0").attr("src", objUrl);
    }
    });
function getObjectURL(file) {
    var url = null;
    if (window.createObjectURL != undefined) { // basic
        url = window.createObjectURL(file);
    } else if (window.URL != undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file);
    } else if (window.webkitURL != undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
    }
    return url;
}
function loadlink(){
    var link = $("#link").val();
    check = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ,./?%&=]*)?$/;
    if (!check.test(link)) {
        alert("网址无效，请重新输入");
    } else {
        $("#video0").show();
        $("#video0").attr("src",link);
    }
}
