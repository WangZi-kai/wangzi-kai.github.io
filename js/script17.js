/**
 * 方格点击事件
 * @param _i    横坐标
 * @param j    纵坐标
 * @param e     鼠标事件
 */
function block_click(i, j, e) {
    //给每个方格定义一个isOpen属性，用来判断该方格是否打开
    if (ground[i][j].isOpen) {//该方格以打开
        return;//退出
    }

    //鼠标左键,用于打开方格
    if (e.button === 0) {
        //判断是否第一次打开
        if (isFirstOpen) {
            isFirstOpen = false;//如果是第一次打开则将该标志置false
            let count = 0; //初始化当前地雷数为0
            //生成maxCount个地雷
            while (count < maxCount) {
                //生成两个0~9的随机坐标
                let x = Math.floor(Math.random() * row);
                let y = Math.floor(Math.random() * col);
                // 给每个方格定义了isMine属性，用来标志该方格是否为雷
                // 当雷的坐标不等于第一次点击方格的坐标且该方格不是雷时，则将该方格置为雷
                if (!(x === i && y === j) && !ground[x][y].isMine) {
                    ground[x][y].isMine = true; //自定义属性isMine代表方格为地雷
                    count++; //当前地雷数+1
                    //更新九宫格内非雷方格的计雷数
                    for (let i = x - 1; i < x + 2; i++) {
                        for (let j = y - 1; j < y + 2; j++) {
                            //判断坐标防越界
                            if (i > -1 && j > -1 && i < row && j < col) {
                                //该方格四周九宫格内计雷数+1
                                ground[i][j].count++;
                            }
                        }
                    }
                }
            }
        }
        //执行打开方格函数
        block_Open(i, j);
    }
    //鼠标右键,用于标记方格

    else if (e.button === 2) {
        let block = ground[i][j];
        if (block.innerHTML !== "🚩") {
            block.innerHTML = "🚩";
        } else {
            block.innerHTML = '';
        }
    }

    let isWin = true;//判断是否胜利
    count.innerHTML = maxCount; //重置剩余地雷数
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let block = ground[i][j];
            //找到标记
            if (block.innerHTML === "🚩") {
                count.innerHTML = parseInt(count.innerHTML) - 1; //剩余地雷数-1
            }
            //判断游戏胜利条件(所有的非雷方格已打开)
            if (!block.isMine && !block.isOpen) {
                //如果有未打开的非雷方块 条件不成立
                isWin = false;
            }
        }
    }
    if (isWin) {
        clearInterval(timer); //游戏胜利结束计时，清除定时器
        swal("游戏胜利","恭喜！","success");
    }
}
