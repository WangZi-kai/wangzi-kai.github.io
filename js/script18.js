/**
 * 打开方格函数
 * @param x     方格横坐标
 * @param y     方格纵坐标
 */
function block_Open(x, y) {
    let block = ground[x][y];
    block.isOpen = true; //isOpen为自定义属性，设置为true代表已打开
    block.style.background = '#E1E4E6'; //将背景设置为灰色
    block.style.cursor = 'default'; //将鼠标停留样式设置为默认

    //如果该方格是雷
    if (block.isMine) {
        block.innerHTML = "<img src='/i/mine.jpg' width=\"30\" height=\"30\">";//显示雷
        //遍历矩阵打开所有的地雷方格
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                //找到地雷
                block = ground[i][j];
                if (!block.isOpen && block.isMine) {
                    block.innerHTML = "<img src='mine.jpg' width=\"30\" height=\"30\">";
                }
            }
        }
        clearInterval(timer); //游戏结束停止计时，清除定时器
        //提示游戏结束
        swal("游戏结束","太遗憾了，下次努力，重新开始吧！","error");
        alert("老式的又回来了，这是对你的一种惩罚，不要气馁，点确定刷新一下，再战！")
        window.location.reload() //这里有一个bug，失败了还能继续玩，所以刷新一下。为了避免引起怀疑，加一个窗口
    } else if (block.count === 0) { //打开计雷数为0的方格
        //遍历九宫格内的方格
        for (let i = x - 1; i < x + 2; i++) {
            for (let j = y - 1; j < y + 2; j++) {
                if (i > -1 && j > -1 && i < row && j < col && !ground[i][j].isOpen && !ground[i][j].ismine) {
                    block_Open(i, j);//递归打开方格函数
                }
            }
        }
    } else {
        //打开计雷数不为0的方格
        block.innerHTML = block.count; //显示雷数
    }

}
