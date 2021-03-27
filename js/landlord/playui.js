/**
 * 开始游戏，负责发牌洗牌，抢地主
 */
var PlayUI = qc.defineBehaviour('qc.engine.PlayUI', qc.Behaviour, function() {
    // need this behaviour be scheduled in editor
    this.startBtn = null;
    /**
     * 用于抢地主
     */
    //当前最高分
    this.currentScore = 0;
    //当前次数
    this.round = 0;
    //当前地主
    this.currentLandlord = null;
    this.dealTimer = null;
    window.playUI = this;
}, {
     startBtn : qc.Serializer.NODE,
     ownCardContainer : qc.Serializer.NODE,
     hiddenContainer : qc.Serializer.NODE,
     cardPrefab: qc.Serializer.PREFAB,
     msgPrefab: qc.Serializer.PREFAB,
     scoreOne : qc.Serializer.NODE,
     scoreTwo : qc.Serializer.NODE,
     scoreThree : qc.Serializer.NODE,
     scoreZero : qc.Serializer.NODE,
     scorePanel : qc.Serializer.NODE,
     ratePanel: qc.Serializer.NODE,
     leftPlayerArea : qc.Serializer.NODE,
     rightPlayerArea : qc.Serializer.NODE,
     ownPlayerArea : qc.Serializer.NODE,
     exitBtn : qc.Serializer.NODE,
     mainScene : qc.Serializer.STRING
});

// Called when the script instance is being loaded.
PlayUI.prototype.awake = function() {
    var self = this;
    //指定玩家区域
    self.leftPlayerArea.getScript('qc.engine.PlayerUI').player = G.leftPlayer;
    self.rightPlayerArea.getScript('qc.engine.PlayerUI').player = G.rightPlayer;
    self.ownPlayerArea.getScript('qc.engine.PlayerUI').player = G.ownPlayer;
    self.reDrawScore();
    //事件
    self.addListener(self.startBtn.onClick, self.startGame, self);
    self.addListener(self.scoreOne.onClick, function(){
        self.playerProvideScore(1);
    }, self);
    self.addListener(self.scoreTwo.onClick, function(){
        self.playerProvideScore(2);
    }, self);
    self.addListener(self.scoreThree.onClick, function(){
        self.playerProvideScore(3);
    }, self);
    self.addListener(self.scoreZero.onClick, function(){
        self.playerProvideScore(4);
    }, self);
    self.addListener(self.exitBtn.onClick, function(){
        if(self.dealTimer){
            self.game.timer.remove(self.dealTimer);
            self.dealTimer = null;
        }
        self.game.state.load(self.mainScene, false, function() {
            // 啥都不干
        }, function() {
            console.log(self.mainScene + '场景加载完毕。');
        });
    }, self);
};

//开始游戏
PlayUI.prototype.startGame = function (){
    var self = this;
    //清空玩家的牌
    for (var i = 0; i < G.currentCards.length ; i++) {
        G.currentCards[i].destroy();
    }
    //清空原牌组
    G.currentCards = [];
    G.hiddenCards = [];
    G.ownPlayer.cardList = [];
    G.leftPlayer.cardList =[];
    G.rightPlayer.cardList = [];
    //还原抢地主数据
    self.currentScore = 0;
    self.round = 0;
    self.currentLandlord = null;
    self.scorePanel.text = '0';
    self.ratePanel.text = '1';
    self.ownPlayerArea.getScript('qc.engine.PlayerUI').headPic.visible = false;
    self.leftPlayerArea.getScript('qc.engine.PlayerUI').headPic.visible = false;
    self.rightPlayerArea.getScript('qc.engine.PlayerUI').headPic.visible = false;
    self.reDraw();
    self.startBtn.visible = false;
    window.landlordUI.roundWinner = null;
    window.landlordUI.hideBtn();
    window.landlordUI.cleanAllPlayArea();
    window.landlordUI.cue.visible = false;
    //还原底牌
    for (i = 0; i < self.hiddenContainer.children.length; i++) {
        self.hiddenContainer.children[i].frame = 'bg.jpg';
    }

    //重新发牌
    self.dealCards();
};
/**
 * 抢地主阶段
 * @method robLandlord
 */
PlayUI.prototype.robLandlord = function (){
    var self = this;
    //随机获取从哪一家开始
    var fb = G.gameRule.random(1,3);
    var firstPlayer = fb === 1 ? G.ownPlayer : (fb == 2 ? G.rightPlayer : G.leftPlayer);
    self.provideScore(firstPlayer);
};

/**
 * 轮换叫分
 * @method robLandlord
 */
PlayUI.prototype.provideScore = function(player){
    var self = this;
    if(player.isAI){//AI玩家随机出分
        self.scoreThree.visible = false;
        self.scoreTwo.visible = false;
        self.scoreOne.visible = false;
        self.scoreZero.visible = false;
        self.game.timer.add(1000, function (){
            var s = (new AILogic(player)).judgeScore();
            var area = player.nextPlayer.isAI ? window.landlordUI.rightCards : window.landlordUI.leftCards;
            if(s < 4 && s > self.currentScore){//小于3分
                console.info(player.name + ":叫" + s);
                self.currentScore = s;
                self.scorePanel.text = s + '';
                self.currentLandlord = player;
                //根据下家是否是AI判断他的出牌区
                for (var i = 0; i < area.children.length; i++) {//清空
                    area.children[i].destroy();
                }
                var mesg = self.game.add.clone(self.msgPrefab, area);
                mesg.text = s + '分';
                if(s === 3){//三分，得地主
                    self.setLandlord(player);
                    return;
                }
            } else {
                var mesg = self.game.add.clone(self.msgPrefab, area);
                mesg.text = '不叫';
                console.info(player.name + "没有叫分抢地主");
            }
            if(++self.round  === 3){//已经三次不再进行
                if(self.currentLandlord){//有叫分的得地主
                    self.setLandlord(self.currentLandlord);
                } else {//没有叫分，重新发牌
                    self.showRestartMesg();
                    self.startGame();
                }
            } else {
                self.provideScore(player.nextPlayer);
            }
        });
    } else {
        self.scoreZero.visible = true;
        self.scoreThree.visible = true;
        if(self.currentScore < 2)
            self.scoreTwo.visible = true;
        if(self.currentScore < 1)
            self.scoreOne.visible = true;
    }
};

/**
 * 玩家给分(抢地主)
 * @method function
 * @return {[type]} [description]
 */
PlayUI.prototype.playerProvideScore = function(score){
    var self = this;
    if(score < 4){//小于3分
        self.currentScore = score;
        self.scorePanel.text = score + '';
        self.currentLandlord = G.ownPlayer;
        var mesg = self.game.add.clone(self.msgPrefab, window.landlordUI.ownCards);
        mesg.text = score + '分';
        if(score === 3){//三分，得地主
            self.setLandlord(G.ownPlayer);
            return;
        }
    } else {
        var mesg = self.game.add.clone(self.msgPrefab, window.landlordUI.ownCards);
        mesg.text = '不叫';
    }
    if(++self.round  === 3){//已经三次不再进行
        if(self.currentLandlord){//有叫分的得地主
            self.setLandlord(self.currentLandlord);
        } else {//没有叫分，重新发牌
            self.showRestartMesg();
            self.startGame();
        }
    } else {
        self.provideScore(G.ownPlayer.nextPlayer);
    }
};

//发牌
PlayUI.prototype.dealCards = function (){
    var self = this,
        cards = G.cardMgr.getNewCards();
    //抽三张底牌

    for (var i = 0; i < 3; i++) {
        G.hiddenCards.push(self.getOneCard(cards));
        //G.hiddenCards.push(cards.splice(0,1)[0]);
    }
    //总牌数
    var total = 17;
    var deal = function (){
        //左边电脑玩家发牌
        card = self.getOneCard(cards);
        G.leftPlayer.cardList.push(card);
        var c = self.game.add.clone(self.cardPrefab, self.leftPlayerArea.getScript('qc.engine.PlayerUI').cardContainer);
        c.visible = true;
        c.interactive = false;
        //c.frame = card.icon;
        //右边电脑玩家发牌
        card = self.getOneCard(cards);
        G.rightPlayer.cardList.push(card);
        c = self.game.add.clone(self.cardPrefab, self.rightPlayerArea.getScript('qc.engine.PlayerUI').cardContainer);
        c.visible = true;
        c.interactive = false;
        //c.frame = card.icon;
        //左边电脑玩家发牌
        //玩家的牌
        card = self.getOneCard(cards);
        G.ownPlayer.cardList.push(card);
        self.insertOneCard(card);
        if ( --total > 0) {
            self.dealTimer = self.game.timer.add(200, deal);
        } else {
            G.leftPlayer.cardList.sort(G.gameRule.cardSort);
            G.rightPlayer.cardList.sort(G.gameRule.cardSort);
            G.ownPlayer.cardList.sort(G.gameRule.cardSort);
            for (i = 0; i < G.currentCards.length; i++) {
                G.currentCards[i].getScript('qc.engine.CardUI').isSelected = false;
            }
            //进入抢地主阶段
            self.robLandlord();
        }
    };
    deal();

