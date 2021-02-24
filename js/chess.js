var game={
	RN:10,//行数
	CN:9,//列数
	CSIZE:40,//每个单元格大小
	OFFSET:20,//单元格区域距离最外层边界的距离，
	URL:"images/chess.png",//保存所有棋子的图片地址
	data:null,//实时保存棋盘中棋子的对象
	chessPieces:[//保存所有棋子的初始位置坐标
		{name:'redC1',r:0,c:0,x:-144,y:0},
		{name:'redC2',r:0,c:8,x:-144,y:0},
		{name:'redM1',r:0,c:1,x:-108,y:0},
		{name:'redM2',r:0,c:7,x:-108,y:0},
		{name:'redX1',r:0,c:2,x:-72,y:0},
		{name:'redX2',r:0,c:6,x:-72,y:0},
		{name:'redS1',r:0,c:3,x:-36,y:0},
		{name:'redS2',r:0,c:5,x:-36,y:0},
		{name:'redB0',r:0,c:4,x:0,y:0},
		{name:'redP1',r:2,c:1,x:-180,y:0},
		{name:'redP2',r:2,c:7,x:-180,y:0},
		{name:'redZ1',r:3,c:0,x:-216,y:0},
		{name:'redZ2',r:3,c:2,x:-216,y:0},
		{name:'redZ3',r:3,c:4,x:-216,y:0},
		{name:'redZ4',r:3,c:6,x:-216,y:0},
		{name:'redZ5',r:3,c:8,x:-216,y:0},

		{name:'blueC1',r:9,c:0,x:-144,y:-36},
		{name:'blueC2',r:9,c:8,x:-144,y:-36},
		{name:'blueM1',r:9,c:1,x:-108,y:-36},
		{name:'blueM2',r:9,c:7,x:-108,y:-36},
		{name:'blueX1',r:9,c:2,x:-72,y:-36},
		{name:'blueX2',r:9,c:6,x:-72,y:-36},
		{name:'blueS1',r:9,c:3,x:-36,y:-36},
		{name:'blueS2',r:9,c:5,x:-36,y:-36},
		{name:'blueB0',r:9,c:4,x:0,y:-36},
		{name:'blueP1',r:7,c:1,x:-180,y:-36},
		{name:'blueP2',r:7,c:7,x:-180,y:-36},
		{name:'blueZ1',r:6,c:0,x:-216,y:-36},
		{name:'blueZ2',r:6,c:2,x:-216,y:-36},
		{name:'blueZ3',r:6,c:4,x:-216,y:-36},
		{name:'blueZ4',r:6,c:6,x:-216,y:-36},
		{name:'blueZ5',r:6,c:8,x:-216,y:-36},
	],
	start:function(){
		//初始化棋盘
		//创建文档片段
		var frag=document.createDocumentFragment();
		var chess=document.getElementById("chess_box");
		//给date添加RN个空元素
		this.data=new Array(this.RN);
		//给date每行添加CN个空元素;
		for(var r=0;r
   
    =0&&r<=9&&c>=0&&c<=8){
			//蓝卒的规则
			if(div.className.indexOf("blueZ")!=-1){
				return (divr>=5&&divr-r==1&&divc==c)||(divr<5&&((divr-r==1&&divc==c)||(divr==r&&Math.abs(divc-c)==1)))
			}
			//红兵的规则
			if(div.className.indexOf("redZ")!=-1){
				return (divr<5&&r-divr==1&&divc==c)||(divr>=5&&((r-divr==1&&divc==c)||(divr==r&&Math.abs(divc-c)==1)))
			}
			//炮和车的规则
			if(div.className.indexOf("P")!=-1||div.className.indexOf("C")!=-1){
				var data=this.data[r][c];
				if(divc==c){
					divr>r&&(r=[divr,divr=r][0]);
					for(var i=0;divr<=r;this.data[divr++][c]&&i++);
				}else if(divr==r){
					divc>c&&(c=[divc,divc=c][0]);
					for(var i=0;divc<=c;this.data[r][divc++]&&i++);
				}
				if(div.className.indexOf("P")!=-1){
					return (!data&&i==1)||(data&&i==3);
				}else{
					return (!data&&i==1)||(data&&i==2);
				}
			}
			//马的规则
			if(div.className.indexOf("M")!=-1){
				if(
					(Math.abs(divr-r)==1&&Math.abs(divc-c)==2&&(!this.data[divr][(divc+c)/2]))
					||(Math.abs(divr-r)==2&&Math.abs(divc-c)==1&&(!this.data[(divr+r)/2][divc]))
				){return true;}
			}
			//相的规则
			if(div.className.indexOf("X")!=-1){
				var bool=(Math.abs(divr-r)==2&&Math.abs(divc-c)==2&&(!this.data[(divr+r)/2][(divc+c)/2]));
				if(div.className.indexOf("redX")!=-1){
					return r>=0&&r<5&&bool;
				}else{
					return r>=5&&r<=9&&bool;
				}
			}
			//士的规则
			if(div.className.indexOf("S")!=-1&&c>2&&c<6){
				var bool=(Math.abs(divr-r)==1&&Math.abs(divc-c)==1);
				if(div.className.indexOf("redS")!=-1){
					return r>=0&&r<3&&bool;
				}else{
					return r>=7&&r<=9&&bool;
				}
			}
			//将的规则
			if(div.className.indexOf("B")!=-1&&c>2&&c<6){
				var bool=((Math.abs(divr-r)==1&&divc==c)||(Math.abs(divc-c)==1&&divr==r));
				if(div.className.indexOf("redB")!=-1){
					return r>=0&&r<3&&bool;
				}else{
					return r>=7&&r<=9&&bool;
				}
			}
		}
	},
	//更新棋子位置的
	paintChees:function(div,r,c){
		div.style.left=c*this.CSIZE+this.OFFSET+"px";
		div.style.top=r*this.CSIZE+this.OFFSET+"px";
		div.className=div.className.slice(0,-2)+r+c;
		return div;
	},
	//更新边框位置
	paintBorder:function(span,div){
		span.style.left=div.style.left;
		span.style.top=div.style.top;
		span.className="index-"+div.className.slice(-2);
	}
};
game.start();
