$(function () {
	var running = 0,
		h1 = $("h1"),
		h1b4 = $("span", h1).eq(0),
		h1a5 = $("span", h1).eq(-1),
		what = $("#what"),
		btn = $("#start"),
		popup = $("#popbox-wrapper"),
		list = $("#list"),
		book = [
			["早餐", "面包 蛋糕 粥 馒头 燕麦片 水煮蛋 黑米糕 鸡蛋饼 汉堡包 披萨 八宝粥 三明治 蛋包饭 豆沙红薯饼 粢饭糕 蒸饺"],
			["化妆品", "防晒霜 隔离霜 粉底液 定妆粉 眉笔 眼影 眼线 睫毛膏 腮红 修容粉 高光 口红 唇膏 发胶"],
			["蔬菜", "大葱 芹菜 蒜苗 小葱 菠菜 韭菜 油麦菜 鸭蛋 大白菜 西芹 南瓜 冬瓜 玉米 海带 竹笋 山药 黄瓜 辣椒 花菜 红萝卜 西红柿 红苋菜 莲藕 蟹味菇 小平菇 金针菇 木耳 蚕豆 杏鲍菇 长豆角 茄子 四季豆 绿豆芽 黄豆芽 蒜苔 西兰花 丝瓜 土豆"]
		],
		times = 0,
		timer,
		hour = (new Date).getHours();
	book[1][1] = book[2][1];

	btn.val("开始").removeAttr("disabled").click(function () {
		var l = list.val().replace(/ +/g, " ").replace(/^ | $/g, "").split(" ");
		if (l.length == 1 && l[0] != "") return alert("→_→ 耍我是吧，一个有什么好选的！");
		if (l.length == 1) return alert("(╬▔皿▔)╯ 啥也没有，选个寂寞是吧？");
		if (!running) {
			times++;
			if (times == 3) {
				$("<span class='tip'>都不想选？可以编辑菜单的哦！</span>").css({
					
					opacity: 0
				}).appendTo("#wrapper").animate({
					left: "-=10px",
					opacity: 1
				});
				btn.val("继续");
				$("#cfg").add(btn).one("click", function () {
					$(".tip").animate({
						left: "+=10px",
						opacity: 0
					}, function () {
						$(this).remove();
					});
				});
				return false;
			};
			h1a5.text("？");
			$(this).val("停止");
			timer = setInterval(function () {
				var r = MOFUN.random(l.length),
					thing = l[r - 1],
					rTop = MOFUN.random($(document).height()),
					rLeft = MOFUN.random($(document).width() - 50),
					rSize = MOFUN.random(37, 14);
				what.html(thing);
				$("<span class='temp'>" + thing + "</span>").css({
					"display": "none",
					"top": rTop,
					"left": rLeft,
					"color": "rgba(0,0,0,." + Math.random() + ")",
					"fontSize": rSize + "px"
				}).appendTo("body").fadeIn("slow", function () {
					$(this).fadeOut("slow", function () {
						$(this).remove();
					});
				});
			}, 60);
			running = 1;
			$("#shareto").fadeOut(function () {
				$(this).remove()
			});
		} else {
			h1a5.text("！");
			btn.val("不行，换一个");
			clearInterval(timer);
			running = 0;

		};
	});

	$("#cfg").click(function () {
		running ? alert("还在选呢！") : popup.fadeIn(function () {
			var t = list.val();
			list.focus().val("").val(t)
		});
	});

	$("#ok").click(function () {
		popup.fadeOut();
	});

	document.onkeydown = function (e) {
		e = e || window.event;
		if (e.keyCode == 32 && !popup.is(":visible")) $("#start").trigger("click");
	};
});