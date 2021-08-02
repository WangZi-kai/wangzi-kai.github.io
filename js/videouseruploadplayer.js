// hTML5实现表单内的上传文件框，上传前预览视频，刷新预览video，使用HTML5 的File API,
    // 建立一个可存取到该file的url，一个空的video标签，ID为video0,把选择的文件显示在video标签中，实现视频预览功能。
    // 需要选择支持HTML API的浏览器。
    $("#video").change(function () {
        $("#video0").show(); 
        var objUrl = getObjectURL(this.files[0]);
        console.log("objUrl = " + objUrl);
        if (objUrl) {
            $("#video0").attr("src", objUrl);
        }
    });
    //建立一个可存取到该file的url
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
        check = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-_]+)\.)+([A-Za-z0-9-_\/])+$/;
        if (!check.test(link)) {
            alert("网址无效，请重新输入");
        } else {
            $("#video0").show();
            $("#video0").attr("src",link);
        }
    }
