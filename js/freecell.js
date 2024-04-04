$(function(){
    Freecell.Initialize();
});
var Freecell={    
    Initialize:function(){
        Animate.Init();
        document.body.oncontextmenu=function(){return false;};
        var fc=$('<div id="freecell">');
        $(document.body).append(fc);
        this.body=$('<div id="fc-body">');
        fc.append(this.body);
        this.toolbar=$('<div id="fc-toolbar" class="fc-buttons">');
        this.body.append(this.toolbar);
        this.startButton=$('<a id="fc-toolbar-start" href="javascript:void(0)">新游戏</a>');
        this.toolbar.append(this.startButton);
        this.oprZone=$('<div id="fc-oprzone">');
        this.body.append(this.oprZone);
        this.cellContainer=$('<div id="fc-cells">');
        this.oprZone.append(this.cellContainer);
        this.info=$('<div id="fc-info"><div id="fc-logo"><span class="fc-top">&spades;</span><span class="fc-right fc-red">&diams;</span><span>&clubs;</span><span class="fc-right fc-down fc-red">&hearts;</span></div></div>');
        this.oprZone.append(this.info);
        var scoreBoard=$('<div id="fc-score"><span class="fc-label">胜利局数：</span></div>');
        this.info.append(scoreBoard);
        this.scoreWin=$('<span>').text(0);
        scoreBoard.append(this.scoreWin).append('<br/><span class="fc-label">失败局数：</span>');
        this.scoreLose=$('<span>').text(0);
        scoreBoard.append(this.scoreLose);
        this.collectContainer=$('<div id="fc-collections">');
        this.oprZone.append(this.collectContainer);
        var time=$('<div id="fc-time"><span class="fc-label">最快一局时间：</span></div>');
        this.body.append(time);
        this.best=$('<span>').text('-');
        time.append(this.best).append('<span class="fc-label">本局时间：</span>');
        this.elapseTime=$('<span>').text('-');
        time.append(this.elapseTime);
        this.table=$('<div id="fc-table">'); 
        this.body.append(this.table);
        this.msgbox=$('<div id="fc-msgbox">');
        this.body.append(this.msgbox);
        this.msgboxTitle=$('<div id="fc-msgbox-title">');
        this.msgbox.append(this.msgboxTitle);
        this.msgboxTitle.append($('<span class="fc-black">&spades;</span><span class="fc-red">&diams;</span><span class="fc-black">&clubs;</span><span class="fc-red">&hearts;</span>'));
        this.msgboxContent=$('<div id="fc-msgbox-content">');
        this.msgbox.append(this.msgboxContent);
        this.msgboxButtons=$('<div id="fc-msgbox-buttons" class="fc-buttons">');
        this.msgbox.append(this.msgboxButtons);
        this.msgboxButtonOK=$('<a>').text('确认').attr('id','msgboxButtonOK').attr('href','javascript:void(0)');
        this.msgboxButtons.append(this.msgboxButtonOK);
        this.msgboxButtonRetry=$('<a>').text('重玩').attr('id','msgboxButtonRetry').attr('href','javascript:void(0)');
        this.msgboxButtons.append(this.msgboxButtonRetry);
        this.msgboxButtonCancel=$('<a>').text('取消').attr('id','msgboxButtonCancel').attr('href','javascript:void(0)');
        this.msgboxButtons.append(this.msgboxButtonCancel);
        $("#msgboxButtonOK").click(function(){
            $("#fc-msgbox").hide(1000);
            Freecell.mask.hide();
        });
        $("#msgboxButtonRetry").click(function(){
            $("#fc-msgbox").hide(1000);
            Freecell.mask.hide();
            document.getElementById("fc-toolbar-start").click();
        });
        $("#msgboxButtonCancel").click(function(){
            $("#fc-msgbox").hide(1000);
            Freecell.mask.hide();
        });
        this.mask=$('<div id="fc-mask">');
        this.body.append(this.mask);
        this.availableCells=0;
        this.freeColumns=0;
        this.finished=true;
        this.cells=[];
        this.collectCells=[];
        this.columns=[];
        for(var i=0;i<4;i++){
            this.cells[i]=new Cell(i);
            this.cellContainer.append(this.cells[i].Element);
            this.collectCells[i]=new CollectCell(i);
            this.collectContainer.append(this.collectCells[i].Element);
        }
        for(var i=0;i<8;i++){
            this.columns[i]=new Column(i);
            this.table.append(this.columns[i].Element);
        }
        this.win=0;
        this.lose=0;
        this.bestTime=Number.MAX_VALUE;
        this.timer;
        this.elapse=0;
        this.highlight=$('<div id="fc-highlight">');
        this.body.append(this.highlight);
        this.functionBind();
        //this.start();
    },
    shuffle:function(){    
        this.finished=false;
        this.availableCells=5;
        var shuffleCards=[];
        for(var i=0;i<4;i++){
            this.cells[i].Destroy();
            this.collectCells[i].Destroy();
            for(var j=0;j<13;j++){
                var cardIndex=i*13+j;
                var card=new Card(i,j+1);
                shuffleCards[cardIndex]=card;
            }
        }
        for(var i=0;i<8;i++){
            var col=this.columns[i];
            col.Destroy();
            var q=6;
            if(i<4){
                q=7;
            }
            for(var j=0;j<q;j++){
                var l=shuffleCards.length-1;
                var rnd=Math.round(Math.random()*l);
                col.Add(shuffleCards[rnd]);
                shuffleCards.splice(rnd,1);
            }
        }
    },
    score:function(){
        this.scoreWin.text(this.win);
        this.scoreLose.text(this.lose);
    },
    start:function(){
        Freecell.shuffle();
        Freecell.startTimer();
    },
    disableButton:function(disable){
        if(this.finished){
            if(disable){
                this.mask.show();
                this.msgboxButtons.hide();
            }else{
                this.msgboxButtons.show();
            }
        }
    },
    startTimer:function(){
        this.elapse=0;
        this.setRealTime();
        this.timer=setInterval(this.timerInterval,1000);
    },
    timerInterval:function(){
        Freecell.elapse++;
        Freecell.setRealTime();
    },
    getTimeValue:function(){
        var h=Math.floor(this.elapse/3600);
        var m=Math.floor((this.elapse%3600)/60);
        var s=this.elapse%60;
        return (h>0?h+':':'')+(m>9?m:'0'+m)+':'+(s>9?s:'0'+s);
    },
    setRealTime:function(){
        Freecell.elapseTime.text(Freecell.getTimeValue());
    },
    stopTimer:function(){
        clearInterval(Freecell.timer);
        Freecell.elapseTime.text(Freecell.getTimeValue());
    },
    setBestTime:function(){
        if(Freecell.elapse<Freecell.bestTime){
            Freecell.bestTime=Freecell.elapse;
            Freecell.best.text(Freecell.getTimeValue());
        }
    },
    msg:function(message,button){
        if(!button){
            button=0;
        }
        Freecell.msgboxButtonOK.hide();
        Freecell.msgboxButtonRetry.hide();
        Freecell.msgboxButtonCancel.hide();
        if(button==0){
            Freecell.msgboxButtonOK.show();
        }else{
            Freecell.msgboxButtonRetry.show();
            Freecell.msgboxButtonCancel.show();
        }
        Freecell.msgboxContent.html(message);
        var box=Freecell.msgbox;
        var b=$(document.body);
        box.show();
    },
    collect:function(){
        if(Freecell.activeCard){
            Freecell.activeCard.Deactive();
            Freecell.activeCard=null;
        }
        var card;
        var collectSth=false;
        Freecell.freeColumns=0;
        Freecell.availableCells=5;
        for(var i=0;i<8;i++){
            if(i<4){
                if(Freecell.cells[i].Card){
                    card=Freecell.cells[i].Card;
                    if(Freecell.collectableCheck(card)){
                        Freecell.collectCells[card.ColorIndex].Add(Freecell.cells[i].Remove());
                        collectSth=true;
                    }else{
                        Freecell.availableCells--;
                    }
                }
            }
            if(!Freecell.columns[i].IsEmpty()){
                var l=Freecell.columns[i].Cards.length;
                card=Freecell.columns[i].Cards[l-1];
                if(Freecell.collectableCheck(card)){
                    Freecell.columns[i].Cards.splice(l-1,1);
                    Freecell.collectCells[card.ColorIndex].Add(card);
                    collectSth=true;
                }
            }else{
                Freecell.freeColumns++;
            }
        }
        if(Freecell.collectCells[0].Number==13 && Freecell.collectCells[1].Number==13 && Freecell.collectCells[2].Number==13 && Freecell.collectCells[3].Number==13){
            Freecell.stopTimer();
            Freecell.setBestTime();
            Freecell.finished=true;
            Freecell.msg('您赢了！',1);
            Freecell.win++;
            Freecell.score();
            Freecell.disableButton(true);
            Freecell.msgboxButtons.show();
            return;
        }
        if(collectSth){
            Freecell.collect();
        }else{
            if(Freecell.availableCells==1){
                for(var i=0;i<8;i++){
                    var col=Freecell.columns[i];
                    if(col.IsEmpty()){
                        return;
                    }
                    if(i<4){
                        if(Freecell.fitCheck(Freecell.cells[i].Card)){
                            return;
                        }
                        
                    }
                    if(Freecell.fitCheck(col.Cards[col.Cards.length-1])){
                        return;
                    }
                }
                Freecell.stopTimer();
                Freecell.finished=true;
                Freecell.lose++;
                Freecell.score();
                Freecell.msg('您输了！',1);
                Freecell.mask.show();
            }
        }
    },
    fitCheck:function(card){
        if(card){
            for(var j=0;j<8;j++){
                if(j<4){
                    if(Freecell.collectCells[j].Fit(card)){
                        return true;
                    }
                }
                if(Freecell.columns[j].Cards.length>0 && Freecell.columns[j].Cards[Freecell.columns[j].Cards.length-1].Fit(card)){
                    return true;
                }
            }
            return false;
        }
        return true;
    },
    collectableCheck:function(card){
        return ((card.Number==Freecell.minCollectedNumber()+1 || card.Number<3) && card.Number==Freecell.collectCells[card.ColorIndex].Number+1);
    },
    minCollectedNumber:function(){
        var num=15;
        for(var i=0;i<4;i++){
            num=Math.min(num,Freecell.collectCells[i].Number);
        }
        return num;
    },
    functionBind:function(){
        this.body.click(function(){
            if(Freecell.activeCard){
                Freecell.activeCard.Deactive();
                Freecell.activeCard=null;
            }
        });
        this.startButton.click(function(){
            if(!Freecell.finished){
                swal({
                    title: '确认放弃当前进度，开始新游戏？',
                    type: 'info',
                    showCancelButton: 'true',
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    confirmButtonColor: '#208ADB',
                    cancelButtonColor: '#626F75'
                }, function (isConfirm) {
                    if (isConfirm) {
                        Freecell.stopTimer();
                        Freecell.lose++;
                        Freecell.score();
                        Freecell.start();
                    }
                });
            }
        });
        $('#freecell .fc-column').click(function(e){
            stopBubble(e);
            var col=Freecell.columns[this.attributes['index'].value];
            if(Freecell.activeCard){
                if(Freecell.activeCard.Owner!==col){
                    Freecell.activeCard.SendTo(col,Freecell.availableCells,Freecell.freeColumns);
                }
                Freecell.collect();
            }else{
                Freecell.activeCard=col.Active();
            }
        });
        $('#fc-cells .fc-cell').click(function(e){
            stopBubble(e);
            var cell=Freecell.cells[this.attributes['index'].value];
            if(Freecell.activeCard){
                Freecell.activeCard.SendTo(cell);
                Freecell.collect();
            }else{
                Freecell.activeCard=cell.Active();
            }
        });
        $('#fc-collections .fc-cell').click(function(e){
            stopBubble(e);
            var collectCell=Freecell.collectCells[this.attributes['index'].value];
            if(Freecell.activeCard){
                Freecell.activeCard.SendTo(collectCell);
                Freecell.collect();
            }
        });
        $('.fc-card').live('mousedown',function(e){
            stopBubble(e);
            if(e.which==3){
                var t=$(this);
                var h=Freecell.highlight;
                var p=t.offset();
                h.css('top',p.top).css('left',p.left).append(t.clone()).show();
            }
            
        }).live('mouseup',function(e){
            stopBubble(e);
            if(e.which==3){
                Freecell.highlight.empty().hide();
            }
        });
        this.msgboxButtonOK.click(function(){
            Freecell.msgbox.hide();
        });
        this.msgboxButtonCancel.click(function(){
            Freecell.mask.hide();
            Freecell.msgbox.hide();
        });
        this.msgboxButtonRetry.click(function(){
            Freecell.start();
            Freecell.mask.hide();
            Freecell.msgbox.hide();
        });
    }
}
function stopBubble(e){
    if(e && e.stopPropagation){
        e.stopPropagation();
    }else{
        e.cancelBubble=true;
    }
}
function Column(index){
    this.Name='column';
    this.Index=index;
    this.Element=$('<div index="'+index+'" class="fc-column">');
    this.Cards=[];
}
Column.prototype.Add=function(card){
    if(card){
        card.Owner=this;
        this.Cards.push(card);
        this.Element.append(card.Element);
    }
}
Column.prototype.Destroy=function(){
    var l=this.Cards.length;
    for(var i=0;i<l;i++){
        this.Cards[i].Destroy();
        this.Cards[i]=null;
    }
    this.Cards=[];
    this.Element.empty();
}
Column.prototype.Active=function(){
    if(!this.IsEmpty()){
        return this.Cards[this.Cards.length-1].Active();
    }
    return null;
}
Column.prototype.Remove=function(){
    if(!this.IsEmpty()){
        return this.Cards.pop();
    }
    return null;
}
Column.prototype.IsEmpty=function(){
    return this.Cards.length==0;
}
function Cell(index){
    this.Name='cell';
    this.Index=index;
    this.Element=$('<div class="fc-cell" index="'+index+'">');
    this.Card=null;
}
Cell.prototype.Add=function(card){
    if(!this.Card && card){
        card.Owner=this;
        this.Card=card;
        this.Element.append(card.Element);
    }
}
Cell.prototype.Destroy=function(){
    if(this.Card){
        this.Card=this.Card.Destroy();
    }
    this.Element.empty();
}
Cell.prototype.Active=function(){
    if(this.Card){
        return this.Card.Active();
    }else{
        return null;
    }
}
Cell.prototype.Remove=function(){
    var card=this.Card;
    this.Card=null;
    return card;
}
Cell.prototype.IsEmpty=function(){
    return this.Card==null;
}
function CollectCell(index){
    this.Name='collect';
    this.Index=index;
    this.Number=0;
    this.Element=$('<div class="fc-cell" index="'+index+'">');
    this.Card=null;
}
CollectCell.prototype.Add=function(card){
    if(card){
        if(this.Card){
            this.Card.Destroy();
        }
        this.Card=card;
        this.Number=card.Number;
        Animate.Add(this.Index,this.Element,card.Element);
    }
}
CollectCell.prototype.Destroy=function(){
    this.Number=0;
    if(this.Card){
        this.Card=this.Card.Destroy();
    }
    this.Element.empty();
}
CollectCell.prototype.Fit=function(card){
    if(card){
        if(card.Number==(this.Number+1) && card.ColorIndex==this.Index){
            return true;
        }
    }
    return false;
}
var Animate={
    Init:function(){
        this.items=new Array(new Array(),new Array(),new Array(),new Array());
        this.isPlaying=new Array(false,false,false,false);
        this.speed=0.5;
        this.timer=20;
    },
    Add:function(index,cellEl,cardEl){
        var obj=new Object();
        obj.cell=cellEl;
        obj.card=cardEl;
        this.items[index].push(obj);
        this.play(index);
    },
    play:function(index){
        if(Animate.isPlaying[index]){
            return;
        }
        Animate.next(index);
    },
    animate:function(index,obj){
        var card=obj.card;
        var cell=obj.cell;
        var pos=card.position();
        var cellPos=cell.position();
        var cellTop=cellPos.top;
        var cellLeft=cellPos.left;
        if (Math.abs(pos.top-cellTop)>5 || Math.abs(pos.left-cellLeft)>5){
            card.css('top',(cellTop+pos.top)*Animate.speed).css('left',(cellLeft+pos.left)*Animate.speed);
            setTimeout(function(){Animate.animate(index,obj)},Animate.timer);
        }else{
            cell.empty().append(card.removeClass('fc-animate').css('top',0).css('left',0));
            Animate.next(index);
        }
    },
    next:function(index){
        if(Animate.items[index].length==0){
            Animate.isPlaying[index]=false;
            if(!Animate.isPlaying[0] && !Animate.isPlaying[1] && !Animate.isPlaying[2] && !Animate.isPlaying[3]){
                Freecell.disableButton(false);
            }
            return;
        }
        Animate.isPlaying[index]=true;
        var obj=Animate.items[index].shift();
        var pos=obj.card.addClass('fc-animate').position();
        $(document.body).append(obj.card.css('top',pos.top).css('left',pos.left));
        Animate.animate(index,obj);
    }
}
function Card(colorIndex,number){
    this.Index=colorIndex*13+number;
    this.Number=number;
    this.ColorIndex=colorIndex;
    this.Owner=null;
    switch(colorIndex){
        case 0:
            this.Pattern='&spades;';
            this.Color='black';
            break;
        case 1:
            this.Pattern='&diams;';
            this.Color='red';
            break;
        case 2:
            this.Pattern='&clubs;';
            this.Color='black';
            break;
        case 3:
            this.Pattern='&hearts;';
            this.Color='red';
            break;
    }
    switch(number){
        case 1:
            this._string='A';
            break;
        case 11:
            this._string='J';
            break;
        case 12:
            this._string='Q';
            break;
        case 13:
            this._string='K';
            break;
        default:
            this._string=number;
    }
    this.Element=$('<div class="fc-card fc-'+this.Color+'" index="'+this.Index+'"><div class="fc-card-border-4"></div><div class="fc-card-border-3"></div><div class="fc-card-border-2"></div><div class="fc-card-border-1"></div><div class="fc-card-content"><h2 class="fc-card-num">'+this._string+'<span>'+this.Pattern+'</span></h2><div class="fc-card-pattern">'+this.Pattern+'</div><h2 class="fc-card-num fc-right"><span>'+this.Pattern+'</span>'+this._string+'</h2></div><div class="fc-card-border-1"></div><div class="fc-card-border-2"></div><div class="fc-card-border-3"></div><div class="fc-card-border-4"></div></div>');
}
Card.prototype.Destroy=function(){
    this.Index=null;
    this.Number=null;
    this.ColorIndex=null;
    this.Owner=null;
    this.Element=null;
    return null;
}
Card.prototype.Fit=function(card){
    if(card.Number==13 || this.Color==card.Color || this.Number!=(card.Number+1)){
        return false;
    }
    return true;
}
Card.prototype.Active=function(){
    this.Element.addClass('fc-select');
    if(this.Owner){
        this.Owner.ActiveCard=this;
    }
    return this;
}
Card.prototype.Deactive=function(){
    this.Element.removeClass('fc-select');
}
Card.prototype.SendTo=function(target,availableCells,emptyCols){
    var owner=this.Owner;
    switch(target.Name){
        case 'collect':
            if(target.Fit(this)){
                target.Add(owner.Remove());
            }
            break;
        case 'column':
            if(target.IsEmpty()){
                emptyCols--;
            }
            switch(owner.Name){
                case 'cell':
                    if(target.IsEmpty() || target.Cards[target.Cards.length-1].Fit(this)){
                        target.Add(owner.Remove());
                    }
                    break;
                case 'column':
                    var length=owner.Cards.length;
                    var curIndex=length-1;
                    if(target.IsEmpty()){
                        while(curIndex>0){
                            if(!owner.Cards[curIndex-1].Fit(owner.Cards[curIndex])){
                                break;
                            }
                            curIndex--;
                        }
                    }else{
                        var l=target.Cards.length;
                        while(curIndex>=0){
                            var card=owner.Cards[curIndex];
                            if(target.Cards[l-1].Fit(card)){
                                break;
                            }
                            if(curIndex>0 && !owner.Cards[curIndex-1].Fit(card)){
                                curIndex=-2;
                                break;
                            }
                            curIndex--;
                        }
                    }
                    if(curIndex>-1){
                        var cellsNeeded=length-curIndex;
                        if(!target.IsEmpty()){
                            availableCells=emptyCols*availableCells+availableCells;
                            if(cellsNeeded>availableCells){
                                alert('您需要'+cellsNeeded+'组cell，只有'+availableCells+'个可用');
                                return;
                            }
                        }else{
                            if(cellsNeeded>availableCells){
                                curIndex=length-availableCells;
                            }
                        }
                        for(var i=curIndex;i<length;i++){
                            target.Add(owner.Cards[curIndex]);
                            owner.Cards.splice(curIndex,1);
                        }
                    }
                    break;
            }
            break;
        case 'cell':
            if(target.IsEmpty()){
                target.Add(owner.Remove());
            }
            break;
    }
}