(function () {


           var XiangQi = window.XiangQi = function (id) {
               this.canvas.w = this.canvas.w || document.body.clientWidth;
               this.init(id);
           }
           XiangQi.prototype = {
               canvas: {
                   w: 0, // 画布宽
                   h: 1000 // 画布高
               },
               qipan: {
                   cellSize: 100,  // 棋格大小
                   lineWidth: 2, // 画笔大小
                   strokeStyle: "#000", // 画笔颜色
                   markLen: 30,  // 标记长度
                   markPadding: 10 // 标记间距
               },
               init: function (id) {
                   //私有属性
                   var
                       that = this;


                   that.bodys = [];


                   that.element = document.getElementById(id);
                   that.element.width = that.canvas.w;
                   that.element.height = that.canvas.h;
                   that.ctx = that.element.getContext("2d");




                   that.render();
               },


               render: function () {
                   this.bindevent();
               },
               drawQipan: function () {


                   var that = this, ctx = that.ctx, bodys = that.bodys
                   ,


                   r = 9,
                   c = 8,
                   cellSize = that.qipan.cellSize,
                    w = cellSize * 8,
                   h = r * cellSize,
                   startX = (that.canvas.w - w) / 2,
                   startY = (that.canvas.h - h) / 2,
                   cX = 0,
                   cY = 0,
                   rX = 0,
                   rY = 0
                   ;
                   ctx.beginPath();
                   ctx.lineWidth = that.qipan.lineWidth;
                   ctx.strokeStyle = that.qipan.strokeStyle;


                   that.qipan.w = w;
                   that.qipan.h = h;


                   that.startX = startX;
                   that.startY = startY;
                   that.radius = cellSize / 2;
                   that.maxR = r;
                   that.maxC = c;
                   for (var i = 0; i <= r; i++) {
                       cX = startX;
                       cY = startY + (i * cellSize);
                       ctx.moveTo(cX, cY);
                       ctx.lineTo(cX + w, cY);


                       bodys[i] = bodys[i] || [];
                       for (var k = 0; k <= c; k++) {


                           rX = startX + (k * cellSize);
                           rY = startY + (i * cellSize);


                           bodys[i][k] = bodys[i][k] || {};
                           bodys[i][k].x = rX;
                           bodys[i][k].y = rY;
                           bodys[i][k].r = i;
                           bodys[i][k].c = k;
                           //{
                           //    x: rX,
                           //    y: rY,
                           //    r:i,
                           //    c:k
                           //});
                           if (i == 4 && k != 0 && k != 8 || i == 9) {
                               continue;
                           }


                           ctx.moveTo(rX, cY);
                           ctx.lineTo(rX, rY + cellSize);
                       }




                   }
                   ctx.stroke();




                   ctx.restore();
                   var fontOffsetY = bodys[4][0].y + that.radius;
                   ctx.fillStyle = "#000";
                   ctx.font = "bold 40px Arial";
                   ctx.textBaseline = "middle";


                   ctx.fillText("汉", startX + cellSize, fontOffsetY);
                   ctx.fillText("界", startX + cellSize * 2, fontOffsetY);
                   ctx.fillText("楚", startX + cellSize * 5, fontOffsetY);
                   ctx.fillText("河", startX + cellSize * 6, fontOffsetY);
                   ctx.save();




                   ctx.beginPath();
                   ctx.strokeStyle = "#000";
                   ctx.lineWidth = 2;
                   ctx.moveTo(bodys[0][3].x, bodys[0][3].y);
                   ctx.lineTo(bodys[2][5].x, bodys[2][5].y);
                   ctx.moveTo(bodys[0][5].x, bodys[0][5].y);
                   ctx.lineTo(bodys[2][3].x, bodys[2][3].y);






                   ctx.moveTo(bodys[7][3].x, bodys[7][3].y);
                   ctx.lineTo(bodys[9][5].x, bodys[9][5].y);
                   ctx.moveTo(bodys[7][5].x, bodys[7][5].y);
                   ctx.lineTo(bodys[9][3].x, bodys[9][3].y);


                   ctx.stroke();

                   ctx.restore();
                   var fontOffsetY = bodys[4][0].y + that.radius;
                   ctx.fillStyle = "#000";
                   ctx.font = "bold 40px Arial";
                   ctx.textBaseline = "middle";


                   ctx.fillText("汉", startX + cellSize, fontOffsetY);
                   ctx.fillText("界", startX + cellSize * 2, fontOffsetY);
                   ctx.fillText("楚", startX + cellSize * 5, fontOffsetY);
                   ctx.fillText("河", startX + cellSize * 6, fontOffsetY);
                   ctx.save();




                   ctx.beginPath();
                   ctx.strokeStyle = "#000";
                   ctx.lineWidth = 2;
                   ctx.moveTo(bodys[0][3].x, bodys[0][3].y);
                   ctx.lineTo(bodys[2][5].x, bodys[2][5].y);
                   ctx.moveTo(bodys[0][5].x, bodys[0][5].y);
                   ctx.lineTo(bodys[2][3].x, bodys[2][3].y);






                   ctx.moveTo(bodys[7][3].x, bodys[7][3].y);
                   ctx.lineTo(bodys[9][5].x, bodys[9][5].y);
                   ctx.moveTo(bodys[7][5].x, bodys[7][5].y);
                   ctx.lineTo(bodys[9][3].x, bodys[9][3].y);


                   ctx.stroke();








                   function drawTopLeft(x, y, l, o) {
                       var s = x - o - l, e = s + l, c = y - o;
                       ctx.moveTo(s, c);
                       ctx.lineTo(e, c);
                       ctx.lineTo(e, c - l);
                   }
                   function drawTopRight(x, y, l, o) {
                       var s = x + o + l, e = s - l, c = y - o;
                       ctx.moveTo(s, c);
                       ctx.lineTo(e, c);
                       ctx.lineTo(e, c - l);
                   }
                   function drawBottomLeft(x, y, l, o) {
                       var s = x - o - l, e = s + l, c = y + o;
                       ctx.moveTo(s, c);
                       ctx.lineTo(e, c);
                       ctx.lineTo(e, c + l);
                   }
                   function drawBottomRight(x, y, l, o) {
                       var s = x + o + l, e = s - l, c = y + o;
                       ctx.moveTo(s, c);
                       ctx.lineTo(e, c);
                       ctx.lineTo(e, c + l);
                   }


                   function drawX(r, c, pos) {
                       var x = bodys[r][c].x,
                           y = bodys[r][c].y;
                       ctx.beginPath();
                       ctx.lineWidth = 3;
                       ctx.strokeStyle = "#000";
                       if (pos[0]) {
                           drawTopLeft(x, y, that.qipan.markLen, that.qipan.markPadding);
                       }
                       if (pos[1]) {
                           drawTopRight(x, y, that.qipan.markLen, that.qipan.markPadding);
                       }
                       if (pos[2]) {
                           drawBottomLeft(x, y, that.qipan.markLen, that.qipan.markPadding);
                       }
                       if (pos[3]) {
                           drawBottomRight(x, y, that.qipan.markLen, that.qipan.markPadding);
                       }
                       ctx.stroke();


                   }
                   drawX(2, 1, [1, 1, 1, 1]);
                   drawX(2, 7, [1, 1, 1, 1]);


                   drawX(3, 0, [0, 1, 0, 1]);
                   drawX(3, 2, [1, 1, 1, 1]);
                   drawX(3, 4, [1, 1, 1, 1]);
                   drawX(3, 6, [1, 1, 1, 1]);
                   drawX(3, 8, [1, 0, 1, 0]);


                   drawX(7, 1, [1, 1, 1, 1]);
                   drawX(7, 7, [1, 1, 1, 1]);


                   drawX(6, 0, [0, 1, 0, 1]);
                   drawX(6, 2, [1, 1, 1, 1]);
                   drawX(6, 4, [1, 1, 1, 1]);
                   drawX(6, 6, [1, 1, 1, 1]);
                   drawX(6, 8, [1, 0, 1, 0]);


                   ctx.beginPath();
                   ctx.lineWidth = 5;
                   ctx.rect(startX - 5, startY - 5, w + 10, h + 10);
                   ctx.stroke();






               }
 
           ,
               renderQiJu: function (redBottom) {
                   var qiJu = this.qiJu = [
                   ['车', '马', '相', '仕', '帅', '仕', '相', '马', '车'],
                   [],
                   ['', '炮', '', '', '', '', '', '炮', ''],
                      ['兵', '', '兵', '', '兵', '', '兵', '', '兵'],
                   [],
                   [],
                       ['卒', '', '卒', '', '卒', '', '卒', '', '卒'],
                   ['', '炮', '', '', '', '', '', '炮', ''],
                   [],
                   ['車', '馬', '象', '士', '将', '士', '象', '馬', '車'],
                   ];
                   this.bodys = [];
                   this.clearCanvas();
                   this.drawQipan();
                   this.redBottom = !!redBottom;
                   if (this.redBottom) {
                       qiJu.reverse();
                   }
                   this.drawQiJu(qiJu);
               },
               drawQiJu: function (qiJu) {
                   for (var i = 0; i < qiJu.length; i++) {
                       for (var k = 0; k < qiJu[i].length; k++) {
                           if (qiJu[i][k] != '') {
                               this.bodys[i][k].qizi = new QiZi(this, i, k, qiJu[i][k], (this.redBottom && i > 5 || this.redBottom == false && i < 5) ? true : false);


                           } else {
                               this.bodys[i][k].qizi = null;
                           }
                       }
                   }
               },
               clearCanvas: function () {
                   this.ctx.clearRect(0, 0, this.canvas.w, this.canvas.h);
               },
               resetQiJu: function () {


                   this.clearCanvas();
                   this.drawQipan();


                   this.eachBody(function (d) {
                       if (d.qizi) {
                           d.qizi.draw();
                       }
                   });




               },
               moveQizi: function (r, c, tr, tc) {
                   this.bodys[tr][tc].qizi = this.bodys[r][c].qizi;
                   this.bodys[r][c].qizi = null;
                   this.resetQiJu();


               }
           ,
               getPositions: function (e) {
                   var x = e.x, y = e.y;
                   if (e.layerX) {


                       x = e.layerX;
                       y = e.layerY;
                   } else {
                       x += document.body.scrollLeft;
                       y += document.body.scrollTop;


                   }




                   return { x: x, y: y };
               },
               check: function (x, y) {
                   var that = this,
                       minX = that.startX - that.radius,
                       minY = that.startY - that.radius,
                       maxX = that.startX + that.qipan.w + that.radius,
                           maxY = that.startY + that.qipan.h + that.radius
                   ;


                   return x >= minX && x <= maxX && y >= minY && y <= maxY;
               },


               eachBody: function (handler) {
                   var bodys = this.bodys, len = bodys.length;


                   for (var i = 0; i < len; i++) {


                       for (var k = 0, len2 = bodys[i].length; k < len2; k++) {
                           if (handler(bodys[i][k], i, k) === true) {
                               return bodys[i][k];
                           }
                       }
                   }
                   return null;
               },
               findPos: function (x, y) {
                   var that = this, r = that.radius;
                   return this.eachBody(function (pos) {


                       var minX = pos.x - r, maxX = pos.x + r, minY = pos.y - r, maxY = pos.y + r;
                       if (x >= minX && x <= maxX && y >= minY && y <= maxY) {
                           return true;
                       }
                   });
               },
               messages: {
                   step1: "红方走",
                   step2: "黑方走"
               },
               each: function (data, fn) {
                   for (var i = 0, len = data.length; i < len; i++) {
                       fn.call(data[i], i, data[i]);
                   }
               },
               showMess: function (mess) {
                   this.ctx.fillStyle = "red";
                   this.ctx.font = "16px";
                   this.ctx.fillText(mess, 0, this.startY + this.qipan.h / 2);


                   // this.ctx.st
               },
               bindevent: function () {
                   var that = this;
                   that.qiziRedMove = true;
                   that.qiziSelected = false;
                   that.qiziCurrent = null;
                   this.element.addEventListener("click", function (e) {


                       var xy = that.getPositions(e);


                       if (that.check(xy.x, xy.y)) {
                           var pos = that.findPos(xy.x, xy.y);
                           if (pos != null) {




                               if (pos.qizi && pos.qizi.isred == that.qiziRedMove) {
                                   that.resetQiJu();
                                   that.qiziCurrent = pos.qizi;
                                   that.qiziSelected = true;
                                   pos.qizi.select();


                                   return;
                               }


                               if (that.qiziSelected && that.qiziCurrent != null && that.qiziCurrent.moveTo(pos.r, pos.c)) {


                                   that.qiziRedMove = !that.qiziRedMove;
                                   that.qiziSelected = false;
                               }
                           }
                       }
                   });
                   that.showMess(that.messages.step1);


               },
               save: function () {
                   this.ctx.save();
               },
               restore: function () {
                   this.ctx.restore();
               }
           };
           var QiZi = function (qipan, r, c, text, isred) {
               this.text = text;
               this.isred = isred;
               this.ctx = qipan.ctx;
               this.qipan = qipan;
               this.r = r;
               this.c = c;


               this.draw();
               var that = this, maxR = that.qipan.maxR, maxC = that.qipan.maxC;
               this.checkstep = (function () {


                   if (text == "兵" || text == "卒") {
                       if (that.r > 4) {


                           return function (r, c) {
                               return this.r > 4 && (this.r - 1) == r && this.c == c
                                   || this.r <= 4 && this.r == r && ((this.c - 1) == c || (this.c + 1) == c)
                                   || this.r <= 4 && (this.r - 1) == r && this.c == c;
                           }


                       } else {
                           return function (r, c) {
                               return this.r < 5 && (this.r + 1) == r && this.c == c || this.r >= 5 && this.r == r && ((this.c - 1) == c || (this.c + 1) == c) || this.r >= 5 && (this.r + 1) == r && this.c == c;
                           }
                       }


                   } else if (text == "炮") {
                       return function (r, c) {
                           if (this.r != r && this.c != c) {
                               return false;
                           }
                           var bodys = this.qipan.bodys, step = this.getMoveRange(r, c);


                           return bodys[r][c].qizi != null && step == 1 || bodys[r][c].qizi == null && step == 0;


                       }
                   } else if (text == "车" || text == "車") {
                       return function (r, c) {
                           if (this.r != r && this.c != c) {
                               return false;
                           }
                           return this.getMoveRange(r, c) == 0;


                       }
                   } else if (text == "马" || text == "馬") {
                       return function (r, c) {
                            if (this.r != r && this.c != c) {
                               return false;
                           }
                           return this.getMoveRange(r, c) == 0;


                       }
                   } else if (text == "马" || text == "馬") {
                       return function (r, c) {


                           return this.r - 2 == r && this.c - 1 == c && this.isEnemyOrEmpty(this.r - 1, this.c)
                               || this.r - 2 == r && this.c + 1 == c && this.isEnemyOrEmpty(this.r - 1, this.c)
                                   || this.r + 2 == r && this.c - 1 == c && this.isEnemyOrEmpty(this.r + 1, this.c)
                               || this.r + 2 == r && this.c + 1 == c && this.isEnemyOrEmpty(this.r + 1, this.c)
                                   || this.r - 1 == r && this.c - 2 == c && this.isEnemyOrEmpty(this.r, this.c - 1)
                               || this.r - 1 == r && this.c + 2 == c && this.isEnemyOrEmpty(this.r, this.c + 1)
                                 || this.r + 1 == r && this.c - 2 == c && this.isEnemyOrEmpty(this.r, this.c - 1)
                               || this.r + 1 == r && this.c + 2 == c && this.isEnemyOrEmpty(this.r, this.c + 1)
                           ;
                       }
                   } else if (text == "相" || text == "象") {
                       return function (r, c) {
                           return this.r - 2 == r && this.c - 2 == c && this.isEnemyOrEmpty(this.r - 1, this.c - 1)
                           || this.r - 2 == r && this.c + 2 == c && this.isEnemyOrEmpty(this.r - 1, this.c + 1)
                               || this.r + 2 == r && this.c - 2 == c && this.isEnemyOrEmpty(this.r + 1, this.c - 1)
                           || this.r + 2 == r && this.c + 2 == c && this.isEnemyOrEmpty(this.r + 1, this.c + 1)
                           ;
                       }
                   } else if (text == "士" || text == "仕") {
                       if (that.r > 4) {
                           return function (r, c) {
                               var l = 7, l2 = 9, b = 3, b2 = 5;
                               if (r < l || r > l2 || c < b || c > b2) {
                                   return false;
                               }
                               return this.r - 1 == r && this.c - 1 == c
                                   || this.r - 1 == r && this.c + 1 == c
                                   || this.r + 1 == r && this.c - 1 == c
                                 || this.r + 1 == r && this.c + 1 == c
                               ;
                           }
                       } else {
                           return function (r, c) {
                               var l = 0, l2 = 3, b = 3, b2 = 5;
                               if (r < l || r > l2 || c < b || c > b2) {
                                   return false;
                               }
                               return this.r - 1 == r && this.c - 1 == c
                                   || this.r - 1 == r && this.c + 1 == c
                                   || this.r + 1 == r && this.c - 1 == c
                                 || this.r + 1 == r && this.c + 1 == c
                               ;
                           }
                       }


                   } else if (text == "将" || text == "帅") {
                       if (that.r > 4) {
                           return function (r, c) {
                               var l = 7, l2 = 9, b = 3, b2 = 5;
                               if (r < l || r > l2 || c < b || c > b2) {
                                   return false;
                               }
                               return this.r - 1 == r && this.c == c
                                   || this.r + 1 == r && this.c == c
                                   || this.r == r && this.c - 1 == c
                                 || this.r == r && this.c + 1 == c
                               ;
                           }
                       } else {
                           return function (r, c) {
                               var l = 0, l2 = 3, b = 3, b2 = 5;
                               if (r < l || r > l2 || c < b || c > b2) {
                                   return false;
                               }
                               return this.r - 1 == r && this.c == c
                               || this.r + 1 == r && this.c == c
                               || this.r == r && this.c - 1 == c
                             || this.r == r && this.c + 1 == c
                               ;
                           }
                       }
                   }
                   return function () {


                   };


               }());
           }
           QiZi.prototype = {
               isEnemyOrEmpty: function (r, c) {
                   return this.qipan.bodys[r][c].qizi == null;
               },
               getMoveRange: function (r, c) {
                   var
                               step = 0,
                               bodys = this.qipan.bodys,
                               minR = Math.min(this.r, r), maxR = Math.max(this.r, r), minC = Math.min(this.c, c), maxC = Math.max(this.c, c);


                   if (this.r != r && this.c == c) {
                       for (var i = minR; i < maxR; i++) {


                           if (i != this.r && i != r && bodys[i][c].qizi != null) {


                               step++;
                           }
                       }
                   } else if (this.r == r && this.c != c) {
                       for (var i = minC; i < maxC; i++) {


                           if (i != this.c && i != c && bodys[r][i].qizi != null) {
                               step++;
                           }
                       }
                   }
                   return step;
               },
               draw: function () {
                   var
                       qipan = this.qipan,
                       isred = this.isred,
                ctx = this.ctx,
                bodys = qipan.bodys,
                radius = qipan.radius,
                xy = this.getPostion(this.r, this.c)
                   ;
                   ctx.beginPath();
                   ctx.strokeStyle = isred ? "red" : "#000";
                   ctx.lineWidth = 1;


                   this.x = xy.x;
                   this.y = xy.y;
                   this.left = xy.x - radius;
                   this.top = xy.y - radius;
                   this.right = xy.x + radius;
                   this.bottom = xy.y + radius;


                   ctx.arc(xy.x, xy.y, radius, 0, 2 * Math.PI);


                   ctx.fillStyle = "rgba(250, 240, 240,1)";
                   ctx.fill();
                   ctx.stroke();


                   ctx.fillStyle = isred ? "red" : "#000";
                   ctx.textAlign = "center";
                   ctx.fillText(this.text, xy.x, xy.y);
               },
               getPostion: function (r, c) {
                   return {
                       x: this.qipan.bodys[r][c].x,
                       y: this.qipan.bodys[r][c].y
                   };
               },


               moveTo: function (r, c) {
                   if (this.checkstep(r, c)) {
                       var r2 = this.r, c2 = this.c;
                       this.r = r;
                       this.c = c;
                       this.qipan.moveQizi(r2, c2, r, c);
                       return true;
                   }
                   return false;


               },
               select: function () {
                   var that = this, ctx = that.ctx, len = 15;
                   ctx.beginPath();
                   ctx.strokeStyle = "#00ff21";
                   ctx.lineWidth = 5;


                   ctx.moveTo(that.left, that.top + len);
                   ctx.lineTo(that.left, that.top);
                   ctx.lineTo(that.left + len, that.top);


                   ctx.moveTo(that.left, that.bottom - len);
                   ctx.lineTo(that.left, that.bottom);
                   ctx.lineTo(that.left + len, that.bottom);


                   ctx.moveTo(that.right, that.top + len);
                   ctx.lineTo(that.right, that.top);
                   ctx.lineTo(that.right - len, that.top);


                   ctx.moveTo(that.right, that.bottom - len);
                   ctx.lineTo(that.right, that.bottom);
                   ctx.lineTo(that.right - len, that.bottom);
                   ctx.stroke();
               }


           };




       }());
      
    
        var xq = new XiangQi("xqCanvas");
         xq.renderQiJu(true);
