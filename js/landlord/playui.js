//发牌
PlayUI.prototype.dealCards = function (){
    var self = this,
        cards = G.cardMgr.getNewCards();
    //抽三张底牌
    for (var i = 0; i < 3; i++) {
        G.hiddenCards.push(self.getOneCard(cards));
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
        //右边电脑玩家发牌
        card = self.getOneCard(cards);
        G.rightPlayer.cardList.push(card);
        c = self.game.add.clone(self.cardPrefab, self.rightPlayerArea.getScript('qc.engine.PlayerUI').cardContainer);
        c.visible = true;
        c.interactive = false;
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

};
