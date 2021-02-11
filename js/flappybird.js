        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");

        //创建一个图片
        var img = new Image();
        img.src = "/i/flappybird/bird_down.png";
        var birdX = 200;
        var birdY = 100;
        var birdTimer = null;
        img.onload = function() {
            if (birdTimer == null) {
                birdTimer = setInterval(game_bird, 10);
            }
        }

        function game_bird() {
            if (birdY <= 355) {
                birdY++;
            }
            context.clearRect(0, 0, 800, 400);
            drawColumn();
            context.drawImage(img, birdX, birdY);
        }

        document.onmousedown = function() {
            img.src = "/i/flappybird/bird_up.png";
            birdY = birdY - 30;
        }
        document.onmouseup = function() {
            img.src = "/i/flappybird/bird_down.png";
        }

        //设定按钮
        var bt1 = document.getElementById("bt1");
        var bt2 = document.getElementById("bt2");
        bt1.onclick = function() {
            clearInterval(columnTimer);
            clearInterval(birdTimer);
        }
        bt2.onclick = function() {
            birdTimer = setInterval(game_bird, 10);
            columnTimer = setInterval(game_column, 2000);
        }


        //柱子
        var columnArr = [];
        var columnTimer = null;

        function createColumn() {
            columnTimer = setInterval(game_column, 2000);
        };

        function game_column() {
            var column = {};
            column.positionX = 800;
            column.positionY = -Math.round(Math.random() * 100 + 100);
            column.imgA = new Image();
            column.imgB = new Image();
            column.imgA.src = "/i/flappybird/pipe_revese.png";
            column.imgB.src = "/i/flappybird/pipe_yes.png";
            column.id = new Date().getTime();
            columnArr.push(column);
        };

        createColumn();
        var same = null;
        var mark = -1;

        function drawColumn() {
            for (var i = 0; i < columnArr.length; i++) {
                columnArr[i].positionX--;
                context.drawImage(columnArr[i].imgA, columnArr[i].positionX, columnArr[i].positionY);
                context.drawImage(columnArr[i].imgB, columnArr[i].positionX, columnArr[i].positionY + 350);

                //加分
                if (birdX + 40 >= columnArr[i].positionX && birdX - 70 <= columnArr[i].positionX) {
                    if (columnArr[i].id != same) {
                        mark++;
                        same = columnArr[i].id;
                        document.getElementById("mark").innerHTML = " <h2>" + "得分：" + mark + "</h2>";
                    }

                    //碰撞
                    if (birdY < columnArr[i].positionY + 250 || birdY + 40 > columnArr[i].positionY + 350) {
                        clearInterval(columnTimer);
                        clearInterval(birdTimer);

                        var oRes = document.getElementById("res");
                        oRes.style.display = "block";
                        //判断奖牌
                        oRes.children[0].innerHTML = "<h3>" + "最终得分：" + mark + "</h3>";
                        if (mark > 0 && mark < 10) {
                            oRes.children[1].src = "/i/flappybird/success1.png";
                        }
                        if (mark > 10 && mark < 30) {
                            oRes.children[1].src = "/i/flappybird/success2.png";
                        }
                        if (mark > 30 && mark < 100) {
                            oRes.children[1].src = "/i/flappybird/success3.png";
                        }
                        setTimeout(function() {
                            oRes.innerHTML = "<p>游戏3秒后重新开始</p>";
                            setTimeout(function() {
                                location.reload();
                            }, 3000);
                        }, 5000);
                    }


                }


            }
        }
