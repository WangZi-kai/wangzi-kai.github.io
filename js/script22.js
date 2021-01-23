/*原项目：https://wangzi-kai.github.io/game/numguessuser.html
 *允许转载，但不能去掉这段注释！
 *版权所有，侵权必究！
 */
var num = getRandomNum(10, 100);
var times = 0
function play(){
  var guess = document.getElementById("guess");
	guess.innerHTML="你猜多少";
  document.write('<input type="text" id="enter" placeholder="输入你想猜的数字" />');
  document.write('<button type="button" onclick="enter()">输入完毕</button>');
  }
function enter(){
  var enter=document.getElementById("enter");
  if(parseInt(enter) == parseInt(num)){
  alert("Bingo！猜得很准嘛。");
  }else if(parseInt(enter) < parseInt(num)){
    alert("")
  }else if(parseInt(enter) > parseInt(num)){
    alert("")
    }
  if(parseInt(times) == eval(30)||parseInt(times) > eval(30)){
    alert("")
    }
  times=times+1
  }
