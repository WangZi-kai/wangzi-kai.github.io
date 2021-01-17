    var can_up = true;        //可向上移动
    var can_down = true;    //可向下移动
    var can_left = true;    //可向左移动
    var can_right = true;    //可向右移动
    //游戏结束
    function game_over() {
        if(!can_up&&!can_down&&!can_left&&!can_right) {
            document.getElementById("game_over").style.visibility = "visible";
        }
    }
    //开始新游戏
    function new_game() {
        document.getElementById("game_over").style.visibility = "hidden";
        for(var i = 1;i < 5;i++) {
            for(var j = 1;j < 5;j++) {
                document.getElementById("s"+i+j).innerHTML = "";
            }
        }
        born();
        can_up = false;
        can_down = false;
        can_left = false;
        can_right = false;
    }
    //键盘监听
    document.onkeydown = function(event) {
        switch(event.keyCode) {
            case 37: left();break;
            case 38: up();break;
            case 39: right();break;
            case 40: down();break;
            default: ;
        }
    }
    //生成新数字2或者4
    function born() {
        var rand_num = Math.random();
        var new_num = (rand_num>0.5)?2:4;
        while(true) {
            var row = Math.ceil(Math.random()*4);
            var col = Math.ceil(Math.random()*4);
            var square = document.getElementById("s"+row+col);
            if(square.innerHTML =="") {
                square.innerHTML = new_num;
                break;
            }
        }
    }
    //向上移动
    function up() {
        var new_square_num = [];
        var target_square ;
        var target_exist= false;
        for(var i =1;i < 5;i++) {
            for(var j = 2;j < 5;j++) {
                var self_square = document.getElementById("s"+j+i);
                if(self_square.innerHTML!="") {
                    for(var k =1;k < j;k++) {
                        var pre_square = document.getElementById("s"+(j-k)+i);
                        if(pre_square.innerHTML=="") {
                            target_square = pre_square ;
                            target_exist = true;
                        }
                        else if(self_square.innerHTML == pre_square.innerHTML && new_square_num[+((j-k).toString()+i)]==undefined ){
                            pre_square.innerHTML = 2*self_square.innerHTML;
                            document.getElementById("score").innerHTML = +(document.getElementById("score").innerHTML) + (+pre_square.innerHTML);
                            self_square.innerHTML = "";
                            new_square_num[+((j-k).toString()+i)] = 1;
                            can_up = true;
                        }
                        else {
                            break;
                        }
                    }
                    if(target_exist) {
                        target_square.innerHTML = self_square.innerHTML;
                        self_square.innerHTML = "";
                        can_up = true;
                        target_exist = false;
                    }
                }
            }
            new_square_num = [];
        }
        if(can_up) {
            born();
            can_up = false;
        }

    }
    //向下移动
    function down() {
        var new_square_num = [];
        var target_square ;
        var target_exist= false;
        for(var i =1;i < 5;i++) {
            for(var j = 3;j > 0;j--) {
                var self_square = document.getElementById("s"+j+i);
                if(self_square.innerHTML!="") {
                    for(var k =j+1;k < 5;k++) {
                        var pre_square = document.getElementById("s"+k+i);
                        if(pre_square.innerHTML=="") {
                            target_square = pre_square ;
                            target_exist = true;
                        }
                        else if(self_square.innerHTML == pre_square.innerHTML && new_square_num[+((k).toString()+i)]==undefined ){
                            pre_square.innerHTML = 2*self_square.innerHTML;
                            document.getElementById("score").innerHTML = +(document.getElementById("score").innerHTML) + (+pre_square.innerHTML);
                            self_square.innerHTML = "";
                            new_square_num[+((k).toString()+i)] = 1;
                            can_down = true;
                            target_exist = false;
                        }
                        else {
                            break;
                        }
                    }
                    if(target_exist) {
                        target_square.innerHTML = self_square.innerHTML;
                        self_square.innerHTML = "";
                        can_down = true;
                        target_exist = false;
                    }
                }
            }
            new_square_num = [];
        }
        if(can_down) {
            born();
            can_down = false;
        }
    }
    //向左移动
    function left() {
        var new_square_num = [];
        var target_square ;
        var target_exist= false;
        for(var j =1;j < 5;j++) {
            for(var i = 2;i < 5;i++) {
                var self_square = document.getElementById("s"+j+i);
                if(self_square.innerHTML!="") {
                    for(var k =1;k < i;k++) {
                        var pre_square = document.getElementById("s"+j+(i-k));
                        if(pre_square.innerHTML=="") {
                            target_square = pre_square ;
                            target_exist = true;
                        }
                        else if(self_square.innerHTML == pre_square.innerHTML && new_square_num[+(j+(i-k).toString())]==undefined ){
                            pre_square.innerHTML = 2*self_square.innerHTML;
                            document.getElementById("score").innerHTML = +(document.getElementById("score").innerHTML) + (+pre_square.innerHTML);
                            self_square.innerHTML = "";
                            new_square_num[+(j+(i-k).toString())] = 1;
                            can_left = true;
                            target_exist = false;
                        }
                        else {
                            break;
                        }
                    }
                    if(target_exist) {
                        target_square.innerHTML = self_square.innerHTML;
                        self_square.innerHTML = "";
                        can_left = true;
                        target_exist = false;
                    }
                }
            }
            new_square_num = [];
        }
        if(can_left) {
            born();
            can_left = false;
        }
    }
    //向右移动
    function right() {
        var new_square_num = [];
        var target_square ;
        var target_exist= false;
        for(var j =1;j < 5;j++) {
            for(var i = 3;i > 0;i--) {
                var self_square = document.getElementById("s"+j+i);
                if(self_square.innerHTML!="") {
                    for(var k =i+1;k < 5;k++) {
                        var pre_square = document.getElementById("s"+j+k);
                        if(pre_square.innerHTML=="") {
                            target_square = pre_square ;
                            target_exist = true;
                        }
                        else if(self_square.innerHTML == pre_square.innerHTML && new_square_num[+(j.toString()+k)]==undefined ){
                            pre_square.innerHTML = 2*self_square.innerHTML;
                            document.getElementById("score").innerHTML = +(document.getElementById("score").innerHTML) + (+pre_square.innerHTML);
                            self_square.innerHTML = "";
                            new_square_num[+(j.toString()+k)] = 1;
                            can_right = true;
                            target_exist = false;
                        }
                        else {
                            break;
                        }
                    }
                    if(target_exist) {
                        target_square.innerHTML = self_square.innerHTML;
                        self_square.innerHTML = "";
                        can_right = true;
                        target_exist = false;
                    }
                }
            }
            new_square_num = [];
        }
        if(can_right) {
            born();
            can_right = false;
        }
    }
    //涂色
    setInterval(function paint() {
        for(var i = 1;i < 5;i++) {
            for(var j = 1;j < 5;j++) {
                var square = document.getElementById("s"+i+j);
                switch(square.innerHTML) {
                    case "2" :square.style.backgroundColor = "#EEE4DA";
                            square.style.color = "#766D64";
                            break;
                    case "4" :square.style.backgroundColor = "#ECE0C8";
                            square.style.color = "#786D67";
                            break;
                    case "8" :square.style.backgroundColor = "#F2B179";
                            square.style.color = "#F6F7F2";
                            break;
                    case "16" :square.style.backgroundColor = "#F59565";
                            square.style.color = "#FAF6F5";
                            break;
                    case "32" :square.style.backgroundColor = "#F77B5F";
                            square.style.color = "#FBF3F0";
                            break;
                    case "64" :square.style.backgroundColor = "#F35F3B";
                            square.style.color = "#FAF4F4";
                            break;
                    case "128" :square.style.backgroundColor = "#EDCE71";
                            square.style.color = "#F8FAF7";
                            break;
                    case "256" :square.style.backgroundColor = "#EDCC61";
                            square.style.color = "#FAF6F7";
                            break;
                    case "512" :square.style.backgroundColor = "#ECC850";
                            square.style.color = "#FAF4F6";
                            break;
                    case "1024" :square.style.backgroundColor = "#EDC53F";
                            square.style.color = "#F9F4FA";
                            break;
                    case "2048" :square.style.backgroundColor = "#E9B501";
                            square.style.color = "#FFFCB0";
                            break;
                    case "4096" :square.style.backgroundColor = "#FCEDD8";
                            square.style.color = "#524B39";
                            break;
                    default:square.style.backgroundColor = "#FBEFE3";
                }
            }
        }
    },10);
