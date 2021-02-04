/**
 * 初始化矩阵
 */

function initial_ground() {
    let groundHtml = '';
    for (let i = 0; i < row; i++) {
        groundHtml += '<tr>'//行标签
        for (let j = 0; j < col; j++) {
            //列标签,每个列标签中包含一个span标签，表示方格
            groundHtml +=
                '<td><span class="blocks" onmousedown="block_click(' + i + ',' + j + ',event)"></span></td>';
        }
        groundHtml += '<tr>'
    }
    document.getElementById('ground').innerHTML = groundHtml;//写入body中定义的table标签中
    let span_Blocks = document.getElementsByClassName('blocks');//得到span标签的一维数组
    //将一维数组转换为二维数组
    let ground = new Array();
    for (let i = 0; i < span_Blocks.length; i++) {
        if (i % col === 0) //每一行创建一个一维数组
            ground.push(new Array());
        span_Blocks[i].count = 0;//给每个方格定义一个count属性,记录四周九宫格内雷的数量，均初始化为0
        ground[parseInt(i / col)].push(span_Blocks[i]);//向二维数组添加span标签方格，每个方格包含count属性
    }
    return ground;//返回二维数组
}
