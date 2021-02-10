$(document).ready(function(){
	var surface=new Array();
	var facediv="";
	var mx;                   //x方向位移
	var my;                  //y方向位移
	var rox=-30;
	var roy=-30;
	var sfid;               //鼠标点击魔方的位置
	/**
	 * 初始化魔方六个面，包括颜色、位置
	 */
	for(var i=1;i<=6;i++){
		surface[i]=new Array();
		for(var j=1;j<=9;j++){
			surface[i][j]=new Array();
			for(var k=1;k<=2;k++){
				surface[i][j][k]="";
			}
		}
	}
	
	for(var i=1;i<=6;i++){
		for(var j=1;j<=9;j++){
			switch(i){
			case 1:
				surface[i][j][1]="blue";
				break;
			case 2:
				surface[i][j][1]="lime";
				break;
			case 3:
				surface[i][j][1]="red";
				break;
			case 4:
				surface[i][j][1]="yellow";
				break;
			case 5:
				surface[i][j][1]="white";
				break;
			case 6:
				surface[i][j][1]="#FFB416";
				break;
			
			}
		}
	}
	/**
	 * 每个大面的位置
	 */
	local();
	function local(){
	for(var i=1;i<=6;i++){
		for(var j=1;j<=9;j++){
			switch(i){
			case 1:
				surface[i][j][2]="rotateY(0deg)";
				break;
			case 2:
				surface[i][j][2]="rotateY(180deg)";
				break;
			case 3:
				surface[i][j][2]="rotateY(-90deg)";
				break;
			case 4:
				surface[i][j][2]="rotateY(90deg)";
				break;
			case 5:
				surface[i][j][2]="rotateX(90deg)";
				break;
			case 6:
				surface[i][j][2]="rotateX(-90deg)";
				break;
			
			}
		}
	}
	/**
	 * 每个面子方块的位置
	 */
	for(var i=1;i<=6;i++){
		surface[i][1][2] +="translateX(-100px) translateY(-100px)";
		surface[i][2][2] +="translateX(0px) translateY(-100px)";
		surface[i][3][2] +="translateX(100px) translateY(-100px)";
		surface[i][4][2] +="translateX(-100px) translateY(0px)";
		surface[i][5][2] +="translateX(0px) translateY(0px)";
		surface[i][6][2] +="translateX(100px) translateY(0px)";
		surface[i][7][2] +="translateX(-100px) translateY(100px)";
		surface[i][8][2] +="translateX(0px) translateY(100px)";
		surface[i][9][2] +="translateX(100px) translateY(100px)";
		
	}}
	/**
	 * 一个div就是一个面，一个li就是一个格子
	 */
	htmldiv();
	function htmldiv(){
		facediv="";
	for(var i=1;i<=6;i++){
		for(var j=1;j<=9;j++){
			if(j==1){
			switch(i){
			case 1:facediv +='<div id="front">';
				break;
			case 2:facediv +='<div id="back">';
				break;
			case 3:facediv +='<div id="left">';
				break;
			case 4:facediv +='<div id="right">';
				break;
			case 5:facediv +='<div id="top">';
				break;
			case 6:facediv +='<div id="bottom">';
				break;
			}}
			facediv +='<li id="sf'+i+'-'+j+'" style="background-color:'+surface[i][j][1]+'; -webkit-transform:'+surface[i][j][2]+'translateZ(150px);"></li>';
			if(j==9){
				facediv +='</div>';
			}
		}
	}
	$("#cube").html(facediv);
	$("li").bind("mousedown",function(){
		sfid=$(this).attr("id");
		
	});
	}
	$(document).mousedown(function(e){
		
		mx=e.pageX;
		my=e.pageY;
	});
	$(document).mouseup(function(e){
		mx=e.pageX-mx;
		my=e.pageY-my;
		
		rotate();
		
	});
	/**
	 * 
	 * 转动
	 */
	function rotate(){
		if(!sfid){                  // 判断是否有点击到魔方，整体转动
			
		if(Math.abs(mx)>150){
			if(mx>0)roy+=90;
			if(mx<0)roy-=90;
		}
		if(Math.abs(my)>150){
			if(my>0)rox+=180;
			if(my<0)rox-=180;
		}
		//整体转动
		$("#cube").css("-webkit-transform","rotateX("+rox+"deg) rotateY("+roy+"deg) ");
		
	}else{
		var sfi=sfid.charAt(2);
		var sfj=sfid.charAt(4);
		if((Math.abs(mx)<150&&Math.abs(my)>150)||(Math.abs(mx)>150&&Math.abs(my)<150)){
		if(Math.abs(mx)>150){                              //魔方横向转动
			if(sfi!=5&&sfi!=6){
				
			if(sfj<=3)sfj=3;
			if(sfj>3&&sfj<=6)sfj=6;
			if(sfj>6&&sfj<=9)sfj=9;
			changlocalX(sfj);
			}
		}
		if(Math.abs(my)>150){                             //魔方纵向转动
			
			if(sfi==1){
			if(sfj%3==0)sfj=3;
			if(sfj==2||sfj==5||sfj==8)sfj=2;
			if(sfj==1||sfj==4||sfj==7)sfj=1;
			changlocalY(sfj,sfi);
			}
			if(sfi==4){
				if(sfj%3==0)
					{sfj=3;changlocalY1(sfj,sfi);}
				if(sfj==1||sfj==4||sfj==7)
					{sfj=1;changlocalY2(sfj,sfi);}
				if(sfj==2||sfj==5||sfj==8){
					sfj=2;changlocalY3(sfj,sfi);
				}
			}
			if(sfi==2){
				my=-my;
								
				if(sfj==2||sfj==5||sfj==8)sfj=2;
				if(sfj==1||sfj==4||sfj==7)sfj=3;
				else{
					if(sfj%3==0)sfj=1;
				}
					
				changlocalY(sfj,sfi);
			}
			if(sfi==3){
				my=-my;
				if(sfj%3==0)
				{sfj=1;changlocalY2(sfj,sfi);}
				else{
			if(sfj==1||sfj==4||sfj==7)
				{sfj=3;changlocalY1(sfj,sfi);}}
			if(sfj==2||sfj==5||sfj==8){
				sfj=2;changlocalY3(sfj,sfi);
			}
			}
					
		}}
	}
		sfid="";
	}	
	
	
	//魔方横向转动
	function changlocalX(sfj){
 
		if(mx>0){
			if(sfj==3){
		$("#top").css("-webkit-transform","rotateY(90deg)");
		topcolor1(5);
			}
			if(sfj==9){
				$("#bottom").css("-webkit-transform","rotateY(90deg)");
				topcolor2(6);
			}
		
		
		for(var j=sfj-2;j<=sfj;j++){
			$("#sf1-"+j).css("-webkit-transform",surface[4][j][2]+"translateZ(150px)");
			$("#sf2-"+j).css("-webkit-transform",surface[3][j][2].replace("Y(-90","Y(270")+"translateZ(150px)");
			$("#sf3-"+j).css("-webkit-transform",surface[1][j][2]+"translateZ(150px)");
			$("#sf4-"+j).css("-webkit-transform",surface[2][j][2]+"translateZ(150px)");
			
	
			var col =surface[1][j][1];
			surface[1][j][1]=surface[3][j][1];
			surface[3][j][1]=surface[2][j][1];
			surface[2][j][1]=surface[4][j][1];
			surface[4][j][1]=col;
			
		}
		}else{
			if(sfj==3){
			$("#top").css("-webkit-transform","rotateY(-90deg)");
			topcolor2(5);
			}
			if(sfj==9){
				$("#bottom").css("-webkit-transform","rotateY(-90deg)");
				topcolor1(6);
			}
			for(var j=sfj-2;j<=sfj;j++){
				$("#sf3-"+j).css("-webkit-transform",surface[2][j][2].replace("Y(180","Y(-180")+"translateZ(150px)");
				$("#sf2-"+j).css("-webkit-transform",surface[4][j][2]+"translateZ(150px)");
				$("#sf4-"+j).css("-webkit-transform",surface[1][j][2]+"translateZ(150px)");
				$("#sf1-"+j).css("-webkit-transform",surface[3][j][2]+"translateZ(150px)");
				var row =surface[1][j][1];
				surface[1][j][1]=surface[4][j][1];
				surface[4][j][1]=surface[2][j][1];
				surface[2][j][1]=surface[3][j][1];
				surface[3][j][1]=row;
			}
			
		}
		var time =setTimeout(function(){local()},500);     //刷新方格位置
		var time1 =setTimeout(function(){htmldiv()},500);
	}
	
	//魔方第一，二面的纵向转动
	function changlocalY(sfj,sfi){
		
		if(my<0){
 
			if(sfj==3&&(sfi==1||sfi==2)){
			$("#right").css("-webkit-transform","rotateX(90deg) translateY(-50px) translateZ(-50px)");
			topcolor2(4);
			}
			if(sfj==1&&(sfi==1||sfi==2)){
				$("#left").css("-webkit-transform","rotateX(90deg) translateY(-50px) translateZ(-50px)");
				topcolor1(3);
			}
			for(var j=sfj;j<=9;j+=3){
				
				$("#sf1-"+j).css("-webkit-transform",surface[5][j][2]+"translateZ(150px)");
				$("#sf5-"+j).css("-webkit-transform",surface[5][j][2].replace("X(90","X(180")+"translateZ(150px)");
				$("#sf2-"+(10-j)).css("-webkit-transform",surface[2][10-j][2].replace("deg)","deg) rotateX(270deg)")+"translateZ(150px)");
				$("#sf6-"+j).css("-webkit-transform",surface[1][j][2]+"translateZ(150px)");
				
				var col=surface[1][j][1];
				surface[1][j][1]=surface[6][j][1];
				surface[6][j][1]=surface[2][10-j][1];
				surface[2][10-j][1]=surface[5][j][1];
				surface[5][j][1]=col;
			}
		}
		else{
			if(sfj==3&&(sfi==1||sfi==2)){
			$("#right").css("-webkit-transform","rotateX(-90deg) translateY(-50px) translateZ(50px)");
			topcolor1(4);
			}
			if(sfj==1&&(sfi==1||sfi==2)){
				$("#left").css("-webkit-transform","rotateX(-90deg) translateY(-50px) translateZ(50px)");
				topcolor2(3);
			}
			for(var j=sfj;j<=9;j+=3){
				
				$("#sf1-"+j).css("-webkit-transform",surface[6][j][2]+"translateZ(150px)");
				$("#sf6-"+j).css("-webkit-transform",surface[6][j][2].replace("X(-90","X(-180")+"translateZ(150px)");
				$("#sf2-"+(10-j)).css("-webkit-transform",surface[2][(10-j)][2].replace("deg)","deg) rotateX(90deg)")+"translateZ(150px)");
				$("#sf5-"+j).css("-webkit-transform",surface[1][j][2]+"translateZ(150px)");
				
				var col=surface[1][j][1];
				surface[1][j][1]=surface[5][j][1];
				surface[5][j][1]=surface[2][10-j][1];
				surface[2][10-j][1]=surface[6][j][1];
				surface[6][j][1]=col;
			
			}
		}
		
		var time =setTimeout(function(){local()},500);
 
		var time1 =setTimeout(function(){htmldiv()},500);
		
	}
	// 侧面转动的颜色跳转
    function topcolor1(i){
    	var col =surface[i][1][1];
    	var row=surface[i][2][1];
    	surface[i][1][1]=surface[i][3][1];
    	surface[i][3][1]=surface[i][9][1];
    	surface[i][9][1]=surface[i][7][1];
    	surface[i][7][1]=col;
    	surface[i][2][1]=surface[i][6][1];
    	surface[i][6][1]=surface[i][8][1];
    	surface[i][8][1]=surface[i][4][1];
    	surface[i][4][1]=row;
 
    }
	function topcolor2(i){
		var col=surface[i][1][1];
		var row=surface[i][2][1];
		surface[i][1][1]=surface[i][7][1];
		surface[i][7][1]=surface[i][9][1];
		surface[i][9][1]=surface[i][3][1];
		surface[i][3][1]=col;
		surface[i][2][1]=surface[i][4][1];
		surface[i][4][1]=surface[i][8][1];
		surface[i][8][1]=surface[i][6][1];
		surface[i][6][1]=row;
	
	}
	//魔方左右两面的转动，
	function changlocalY1(sfj,sfi){
		if(my<0){
 
			if(sfi==4||sfi==3){
			$("#back").css("-webkit-transform","rotateZ(-90deg) translateX(-50px) translateY(-50px) ");
			topcolor2(2);
			}
			
			for(var j=sfj;j<=9;j+=3){
				var k =j/3;
				$("#sf5-"+k).css("-webkit-transform",surface[5][k][2].replace("deg)","deg) rotateY(-90deg)")+" translateZ(150px)");
				$("#sf6-"+(10-k)).css("-webkit-transform",surface[6][10-k][2].replace("deg)","deg) rotateY(90deg)") +" translateZ(150px)");
				$("#sf4-"+j).css("-webkit-transform",surface[4][j][2].replace("deg)","deg) rotateX(90deg)")+" translateZ(150px)");
				$("#sf3-"+(10-j)).css("-webkit-transform",surface[3][10-j][2].replace("deg)","deg) rotateX(-90deg)")+" translateZ(150px)");		
				
				
//				
			var col=surface[4][j][1];
			surface[4][j][1]=surface[6][10-k][1];
			surface[6][10-k][1]=surface[3][10-j][1];
			surface[3][10-j][1]=surface[5][k][1];
			surface[5][k][1]=col;
//			
			
			}
			
		}
		else{
			if(sfi==4||sfi==3){
			$("#back").css("-webkit-transform","rotateZ(90deg) translateX(50px) translateY(-50px)");
			topcolor1(2);
			}
			
			
			for(var j=sfj;j<=9;j+=3){
				var k=j/3;
				$("#sf5-"+k).css("-webkit-transform",surface[5][k][2].replace("deg)","deg) rotateY(90deg)")+" translateZ(150px)");
				$("#sf6-"+(10-k)).css("-webkit-transform",surface[6][10-k][2].replace("deg)","deg) rotateY(-90deg)") +" translateZ(150px)");
				$("#sf4-"+j).css("-webkit-transform",surface[4][j][2].replace("deg)","deg) rotateX(-90deg)")+" translateZ(150px)");
				$("#sf3-"+(10-j)).css("-webkit-transform",surface[3][10-j][2].replace("deg)","deg) rotateX(90deg)")+" translateZ(150px)");		
					
				var col=surface[4][j][1];
				surface[4][j][1]=surface[5][k][1];
				surface[5][k][1]=surface[3][(10-j)][1];
				surface[3][10-j][1]=surface[6][(10-k)][1];
				surface[6][(10-k)][1]=col;
			
			}
		}
		
		var time =setTimeout(function(){local()},500);
 
		var time1 =setTimeout(function(){htmldiv()},500);
		
	}
	
	function changlocalY2(sfj,sfi){
		if(my<0){
		
			if(sfi==4||sfi==3){
				$("#front").css("-webkit-transform","rotateZ(-90deg) translateX(-50px) translateY(-50px)");
				topcolor1(1);
			}
			for(var j=sfj;j<=3;j++){
				var k =j*3;
				
				$("#sf5-"+(10-j)).css("-webkit-transform",surface[5][10-j][2].replace("deg)","deg) rotateY(-90deg)")+" translateZ(150px)");
				$("#sf6-"+j).css("-webkit-transform",surface[6][j][2].replace("deg)","deg) rotateY(90deg)") +" translateZ(150px)");
				$("#sf4-"+(10-k)).css("-webkit-transform",surface[4][10-k][2].replace("deg)","deg) rotateX(90deg)")+" translateZ(150px)");
				$("#sf3-"+k).css("-webkit-transform",surface[3][k][2].replace("deg)","deg) rotateX(-90deg)")+" translateZ(150px)");		
				
				
//				
			var col=surface[4][10-k][1];
			surface[4][10-k][1]=surface[6][j][1];
			surface[6][j][1]=surface[3][k][1];
			surface[3][k][1]=surface[5][10-j][1];
			surface[5][10-j][1]=col;
//			
			
			}
			
		}
		else{
			
			if(sfi==4||sfi==3){
				$("#front").css("-webkit-transform","rotateZ(90deg) translateX(50px) translateY(-50px)");
				topcolor2(1);
			}
			
			for(var j=sfj;j<=3;j++){
				var k=j*3;
				$("#sf5-"+(10-j)).css("-webkit-transform",surface[5][10-j][2].replace("deg)","deg) rotateY(90deg)")+" translateZ(150px)");
				$("#sf6-"+j).css("-webkit-transform",surface[6][j][2].replace("deg)","deg) rotateY(-90deg)") +" translateZ(150px)");
				$("#sf4-"+(10-k)).css("-webkit-transform",surface[4][10-k][2].replace("deg)","deg) rotateX(-90deg)")+" translateZ(150px)");
				$("#sf3-"+k).css("-webkit-transform",surface[3][k][2].replace("deg)","deg) rotateX(90deg)")+" translateZ(150px)");			
					
				var col=surface[4][10-k][1];
				surface[4][10-k][1]=surface[5][10-j][1];
				surface[5][10-j][1]=surface[3][k][1];
				surface[3][k][1]=surface[6][j][1];
				surface[6][j][1]=col;
			
			}
		}
		
		var time =setTimeout(function(){local()},500);
 
		var time1 =setTimeout(function(){htmldiv()},500);		
	}
	function changlocalY3(sfj,sfi){
		if(my<0){
			var k =2*sfj;
			for(var j=sfj;j<=9;j+=3){
				
				$("#sf5-"+k).css("-webkit-transform",surface[5][k][2].replace("deg)","deg) rotateY(-90deg)")+" translateZ(150px)");
				$("#sf6-"+(10-k)).css("-webkit-transform",surface[6][10-k][2].replace("deg)","deg) rotateY(90deg)") +" translateZ(150px)");
				$("#sf4-"+j).css("-webkit-transform",surface[4][j][2].replace("deg)","deg) rotateX(90deg)")+" translateZ(150px)");
				$("#sf3-"+(10-j)).css("-webkit-transform",surface[3][10-j][2].replace("deg)","deg) rotateX(-90deg)")+" translateZ(150px)");		
				
			var col=surface[4][j][1];
			surface[4][j][1]=surface[6][10-k][1];
			surface[6][10-k][1]=surface[3][10-j][1];
			surface[3][10-j][1]=surface[5][k][1];
			surface[5][k][1]=col;
		
			k++;
			
			}
			
		}
		else{
			var k=sfj*2;
			for(var j=sfj;j<=9;j+=3){
				
				$("#sf5-"+k).css("-webkit-transform",surface[5][k][2].replace("deg)","deg) rotateY(90deg)")+" translateZ(150px)");
				$("#sf6-"+(10-k)).css("-webkit-transform",surface[6][10-k][2].replace("deg)","deg) rotateY(-90deg)") +" translateZ(150px)");
				$("#sf4-"+j).css("-webkit-transform",surface[4][j][2].replace("deg)","deg) rotateX(-90deg)")+" translateZ(150px)");
				$("#sf3-"+(10-j)).css("-webkit-transform",surface[3][10-j][2].replace("deg)","deg) rotateX(90deg)")+" translateZ(150px)");				
					
				var col=surface[4][j][1];
				surface[4][j][1]=surface[5][k][1];
				surface[5][k][1]=surface[3][10-j][1];
				surface[3][10-j][1]=surface[6][10-k][1];
				surface[6][10-k][1]=col;
			k++;
			}
		}
		
		var time =setTimeout(function(){local()},500);
 
		var time1 =setTimeout(function(){htmldiv()},500);		
	}
});
