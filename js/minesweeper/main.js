    var row; //数组行数
    var col; //数组列数
    var maxCount; //最大地雷数量
    var isFirstOpen = true; //第一次打开方格
    var count; //剩余雷数
    var ground;//初始化，得到二维数组
    var time; //计时
    var timer; //定时器 100ms执行一次

    function start() {
        swal(document.getElementById("s").value + "等级","开始吧！","info")
        switch (document.getElementById("s").value) {
            case "容易": {
                row = 6; //数组行数
                col = 6; //数组列数
                maxCount = 10; //最大地雷数量
                isFirstOpen = true;//第一次打开方格
                count = document.getElementById('count'); //剩余雷数
                ground = initial_ground(); //初始化，得到二维数组
                time = document.getElementById('time'); //计时
                timer = setInterval(function () {
                    let seconds = (parseFloat(time.innerHTML) + 0.1).toFixed(1); //保留一位小数
                    time.innerHTML = seconds;
                }, 100) //定时器 100ms执行一次
                break;
            }
            case "中等": {
                row = 15; //数组行数
                col = 15; //数组列数
                maxCount = 100; //最大地雷数量
                isFirstOpen = true;//第一次打开方格
                count = document.getElementById('count'); //剩余雷数
                ground = initial_ground(); //初始化，得到二维数组
                time = document.getElementById('time'); //计时
                timer = setInterval(function () {
                    let seconds = (parseFloat(time.innerHTML) + 0.1).toFixed(1); //保留一位小数
                    time.innerHTML = seconds;
                }, 100) //定时器 100ms执行一次
                break;
            }
            case "困难": {
                row = 50; //数组行数
                col = 50; //数组列数
                maxCount = 1000; //最大地雷数量
                isFirstOpen = true;//第一次打开方格
                count = document.getElementById('count'); //剩余雷数
                ground = initial_ground(); //初始化，得到二维数组
                time = document.getElementById('time'); //计时
                timer = setInterval(function () {
                    let seconds = (parseFloat(time.innerHTML) + 0.1).toFixed(1); //保留一位小数
                    time.innerHTML = seconds;
                }, 100) //定时器 100ms执行一次
                break;
            }
        }
    }

    function restart() {
        window.location.reload();
    }

