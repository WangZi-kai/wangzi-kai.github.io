webpackJsonp([0], {
	"+MLA": function(t, e, i) {
		var n = i("EqjI"),
		o = i("06OY").onFreeze;
		i("uqUo")("freeze",
		function(t) {
			return function(e) {
				return t && n(e) ? t(o(e)) : e
			}
		})
	},
	"+MLz": function(t, e, i) {
		"use strict";
		var n = function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				ref: "PageHeaderComponent",
				staticClass: "component-page-header clearfix"
			},
			[t._m(0), t._v(" "), i("div", {
				staticClass: "menu"
			},
			[/*i("router-link", {
				staticClass: "menu-item",
				attrs: {
					to: {
						path: "/"
					},
					"active-class": "menu-item-active",
					exact: ""
				}
			},
			[t._v("首页")]), t._v(" "),
                        i("router-link", {
				staticClass: "menu-item",
				attrs: {
					to: {
						path: "/"
					},
					"active-class": "menu-item-active",
					exact: ""
				}
			},
			[t._v("")]), t._v(" "), //标记*/
                        i("a", {
				staticClass: "menu-item",
				on: {
					click: function(e) {
						return e.stopPropagation(),
						t.emitChangeWallPaper(e)
					}
				}
			},
			[t._v("更换壁纸")])], 1)])
		},
		o = [function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("a", {
				staticClass: "trade-mark",
				attrs: {
					target: "_blank",
					href: ""
				}
			},
			[i("i", {
				staticClass: "icon-piano"
			}), t._v(" "), i("h1", {
				staticClass: "trade-mark-txt"
			},
			[t._v("在线钢琴"), i("span", {
				staticClass: "trade-mark-txt--en"
			},
			[t._v("")])])])//标记
		}],
		s = {
			render: n,
			staticRenderFns: o
		};
		e.a = s
	},
	"+OXj": function(t, e, i) {
		"use strict";
		var n = i("pFYg"),
		o = i.n(n),
		s = i("VSxz"),
		r = i("2uFj");
		e.a = {
			name: "AutoPlayScoreList",
			data: function() {
				return {
					ScoreNum: r.d,
					ScoreXml: r.e,
					playingItem: {
						name: ""
					},
					currentView: "LIST"
				}
			},
			mounted: function() {},
			methods: {
				clickScoreItem: function(t) {
					t && t.name && t != this.playingItem && (this.playingItem && this.pauseAutoPlay(this.playingItem), t.playing = !0, this.playingItem = t, setTimeout(function() {
						s.a.$emit(r.b.AUTO_PLAY_NUM_SCORE, t.name)
					},
					200))
				},
				clickXMLScoreItem: function(t) {
					t && t.url && t != this.playingItem && (this.playingItem && this.pauseAutoPlay(this.playingItem), t.playing = !0, this.playingItem = t, $.ajax({
						type: "GET",
						url: t.url || "",
						success: function(t) {
							if (t) {
								var e = t;
								e && "object" == (void 0 === e ? "undefined": o()(e)) && setTimeout(function() {
									s.a.$emit(r.b.AUTO_PLAY_XML_SCORE, e)
								},
								200)
							}
						},
						fail: function() {
							alert("加载乐谱出错，请检查网络")
						}
					}))
				},
				pauseAutoPlay: function(t) {
					t = t || this.playingItem,
					t.playing = !1,
					this.currentView = "LIST",
					s.a.$emit(r.b.PAUSE_AUTO_PLAY, t),
					this.playingItem = {
						name: ""
					}
				}
			}
		}
	},
	"+ZRt": function(t, e, i) {
		"use strict";
		function n(t) {
			i("Jlyz")
		}
		var o = i("XYsL"),
		s = i("+MLz"),
		r = i("VU/8"),
		a = n,
		l = r(o.a, s.a, !1, a, null, null);
		e.a = l.exports
	},
	"+tPU": function(t, e, i) {
		i("xGkn");
		for (var n = i("7KvD"), o = i("hJx8"), s = i("/bQp"), r = i("dSzd")("toStringTag"), a = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < a.length; l++) {
			var u = a[l],
			c = n[u],
			p = c && c.prototype;
			p && !p[r] && o(p, r, u),
			s[u] = s.Array
		}
	},
	"//Fk": function(t, e, i) {
		t.exports = {
		default:
			i("U5ju"),
			__esModule: !0
		}
	},
	"//Im": function(t, e, i) {
		"use strict";
		i.d(e, "b",
		function() {
			return o
		});
		var n = "/audio/pianosimulatoronline/piano/";
		e.a = [{
			id: 1,
			name: "C2",
			keyCode: "49",
			key: "1",
			url: n + "a49.mp3",
			type: "white"
		},
		{
			id: 2,
			name: "D2",
			keyCode: "50",
			key: "2",
			url: n + "a50.mp3",
			type: "white"
		},
		{
			id: 3,
			name: "E2",
			keyCode: "51",
			key: "3",
			url: n + "a51.mp3",
			type: "white"
		},
		{
			id: 4,
			name: "F2",
			keyCode: "52",
			key: "4",
			url: n + "a52.mp3",
			type: "white"
		},
		{
			id: 5,
			name: "G2",
			keyCode: "53",
			key: "5",
			url: n + "a53.mp3",
			type: "white"
		},
		{
			id: 6,
			name: "A2",
			keyCode: "54",
			key: "6",
			url: n + "a54.mp3",
			type: "white"
		},
		{
			id: 7,
			name: "B2",
			keyCode: "55",
			key: "7",
			url: n + "a55.mp3",
			type: "white"
		},
		{
			id: 8,
			name: "C3",
			keyCode: "56",
			key: "8",
			url: n + "a56.mp3",
			type: "white"
		},
		{
			id: 9,
			name: "D3",
			keyCode: "57",
			key: "9",
			url: n + "a57.mp3",
			type: "white"
		},
		{
			id: 10,
			name: "E3",
			keyCode: "48",
			key: "0",
			url: n + "a48.mp3",
			type: "white"
		},
		{
			id: 26,
			name: "F3",
			keyCode: "81",
			key: "Q",
			url: n + "a81.mp3",
			type: "white"
		},
		{
			id: 32,
			name: "G3",
			keyCode: "87",
			key: "W",
			url: n + "a87.mp3",
			type: "white"
		},
		{
			id: 14,
			name: "A3",
			keyCode: "69",
			key: "E",
			url: n + "a69.mp3",
			type: "white"
		},
		{
			id: 27,
			name: "B3",
			keyCode: "82",
			key: "R",
			url: n + "a82.mp3",
			type: "white"
		},
		{
			id: 29,
			name: "C4",
			keyCode: "84",
			key: "T",
			url: n + "a84.mp3",
			type: "white"
		},
		{
			id: 34,
			name: "D4",
			keyCode: "89",
			key: "Y",
			url: n + "a89.mp3",
			type: "white"
		},
		{
			id: 30,
			name: "E4",
			keyCode: "85",
			key: "U",
			url: n + "a85.mp3",
			type: "white"
		},
		{
			id: 18,
			name: "F4",
			keyCode: "73",
			key: "I",
			url: n + "a73.mp3",
			type: "white"
		},
		{
			id: 24,
			name: "G4",
			keyCode: "79",
			key: "O",
			url: n + "a79.mp3",
			type: "white"
		},
		{
			id: 25,
			name: "A4",
			keyCode: "80",
			key: "P",
			url: n + "a80.mp3",
			type: "white"
		},
		{
			id: 10,
			name: "B4",
			keyCode: "65",
			key: "A",
			url: n + "a65.mp3",
			type: "white"
		},
		{
			id: 28,
			name: "C5",
			keyCode: "83",
			key: "S",
			url: n + "a83.mp3",
			type: "white"
		},
		{
			id: 13,
			name: "D5",
			keyCode: "68",
			key: "D",
			url: n + "a68.mp3",
			type: "white"
		},
		{
			id: 15,
			name: "E5",
			keyCode: "70",
			key: "F",
			url: n + "a70.mp3",
			type: "white"
		},
		{
			id: 16,
			name: "F5",
			keyCode: "71",
			key: "G",
			url: n + "a71.mp3",
			type: "white"
		},
		{
			id: 17,
			name: "G5",
			keyCode: "72",
			key: "H",
			url: n + "a72.mp3",
			type: "white"
		},
		{
			id: 19,
			name: "A5",
			keyCode: "74",
			key: "J",
			url: n + "a74.mp3",
			type: "white"
		},
		{
			id: 20,
			name: "B5",
			keyCode: "75",
			key: "K",
			url: n + "a75.mp3",
			type: "white"
		},
		{
			id: 21,
			name: "C6",
			keyCode: "76",
			key: "L",
			url: n + "a76.mp3",
			type: "white"
		},
		{
			id: 35,
			name: "D6",
			keyCode: "90",
			key: "Z",
			url: n + "a90.mp3",
			type: "white"
		},
		{
			id: 33,
			name: "E6",
			keyCode: "88",
			key: "X",
			url: n + "a88.mp3",
			type: "white"
		},
		{
			id: 12,
			name: "F6",
			keyCode: "67",
			key: "C",
			url: n + "a67.mp3",
			type: "white"
		},
		{
			id: 31,
			name: "G6",
			keyCode: "86",
			key: "V",
			url: n + "a86.mp3",
			type: "white"
		},
		{
			id: 11,
			name: "A6",
			keyCode: "66",
			key: "B",
			url: n + "a66.mp3",
			type: "white"
		},
		{
			id: 23,
			name: "B6",
			keyCode: "78",
			key: "N",
			url: n + "a78.mp3",
			type: "white"
		},
		{
			id: 22,
			name: "C7",
			keyCode: "77",
			key: "M",
			url: n + "a77.mp3",
			type: "white"
		},
		{
			id: 36,
			name: "C#2",
			keyCode: "b49",
			key: "⇧<br>+<br>1",
			url: n + "b49.mp3",
			type: "black"
		},
		{
			id: 37,
			name: "D#2",
			keyCode: "b50",
			key: "⇧<br>+<br>2",
			url: n + "b50.mp3",
			type: "black"
		},
		{
			id: 38,
			name: "F#2",
			keyCode: "b52",
			key: "⇧<br>+<br>4",
			url: n + "b52.mp3",
			type: "black"
		},
		{
			id: 39,
			name: "G#2",
			keyCode: "b53",
			key: "⇧<br>+<br>5",
			url: n + "b53.mp3",
			type: "black"
		},
		{
			id: 40,
			name: "A#2",
			keyCode: "b54",
			key: "⇧<br>+<br>6",
			url: n + "b54.mp3",
			type: "black"
		},
		{
			id: 41,
			name: "C#3",
			keyCode: "b56",
			key: "⇧<br>+<br>8",
			url: n + "b56.mp3",
			type: "black"
		},
		{
			id: 42,
			name: "D#3",
			keyCode: "b57",
			key: "⇧<br>+<br>9",
			url: n + "b57.mp3",
			type: "black"
		},
		{
			id: 43,
			name: "F#3",
			keyCode: "b81",
			key: "⇧<br>+<br>Q",
			url: n + "b81.mp3",
			type: "black"
		},
		{
			id: 44,
			name: "G#3",
			keyCode: "b87",
			key: "⇧<br>+<br>W",
			url: n + "b87.mp3",
			type: "black"
		},
		{
			id: 45,
			name: "A#3",
			keyCode: "b69",
			key: "⇧<br>+<br>E",
			url: n + "b69.mp3",
			type: "black"
		},
		{
			id: 46,
			name: "C#4",
			keyCode: "b84",
			key: "⇧<br>+<br>T",
			url: n + "b84.mp3",
			type: "black"
		},
		{
			id: 47,
			name: "D#4",
			keyCode: "b89",
			key: "⇧<br>+<br>Y",
			url: n + "b89.mp3",
			type: "black"
		},
		{
			id: 48,
			name: "F#4",
			keyCode: "b73",
			key: "⇧<br>+<br>I",
			url: n + "b73.mp3",
			type: "black"
		},
		{
			id: 49,
			name: "G#4",
			keyCode: "b79",
			key: "⇧<br>+<br>O",
			url: n + "b79.mp3",
			type: "black"
		},
		{
			id: 50,
			name: "A#4",
			keyCode: "b80",
			key: "⇧<br>+<br>P",
			url: n + "b80.mp3",
			type: "black"
		},
		{
			id: 51,
			name: "C#5",
			keyCode: "b83",
			key: "⇧<br>+<br>S",
			url: n + "b83.mp3",
			type: "black"
		},
		{
			id: 52,
			name: "D#5",
			keyCode: "b68",
			key: "⇧<br>+<br>D",
			url: n + "b68.mp3",
			type: "black"
		},
		{
			id: 53,
			name: "F#5",
			keyCode: "b71",
			key: "⇧<br>+<br>G",
			url: n + "b71.mp3",
			type: "black"
		},
		{
			id: 54,
			name: "G#5",
			keyCode: "b72",
			key: "⇧<br>+<br>H",
			url: n + "b72.mp3",
			type: "black"
		},
		{
			id: 55,
			name: "A#5",
			keyCode: "b74",
			key: "⇧<br>+<br>J",
			url: n + "b74.mp3",
			type: "black"
		},
		{
			id: 56,
			name: "C#6",
			keyCode: "b76",
			key: "⇧<br>+<br>L",
			url: n + "b76.mp3",
			type: "black"
		},
		{
			id: 57,
			name: "D#6",
			keyCode: "b90",
			key: "⇧<br>+<br>Z",
			url: n + "b90.mp3",
			type: "black"
		},
		{
			id: 58,
			name: "F#6",
			keyCode: "b67",
			key: "⇧<br>+<br>C",
			url: n + "b67.mp3",
			type: "black"
		},
		{
			id: 59,
			name: "G#6",
			keyCode: "b86",
			key: "⇧<br>+<br>V",
			url: n + "b86.mp3",
			type: "black"
		},
		{
			id: 60,
			name: "A#6",
			keyCode: "b66",
			key: "⇧<br>+<br>B",
			url: n + "b66.mp3",
			type: "black"
		}];
		var o = [{
			name: "C2",
			file: "a49.mp3"
		},
		{
			name: "D2",
			file: "a50.mp3"
		},
		{
			name: "E2",
			file: "a51.mp3"
		},
		{
			name: "F2",
			file: "a52.mp3"
		},
		{
			name: "G2",
			file: "a53.mp3"
		},
		{
			name: "A2",
			file: "a54.mp3"
		},
		{
			name: "B2",
			file: "a55.mp3"
		},
		{
			name: "C3",
			file: "a56.mp3"
		},
		{
			name: "D3",
			file: "a57.mp3"
		},
		{
			name: "E3",
			file: "a48.mp3"
		},
		{
			name: "F3",
			file: "a81.mp3"
		},
		{
			name: "G3",
			file: "a87.mp3"
		},
		{
			name: "A3",
			file: "a69.mp3"
		},
		{
			name: "B3",
			file: "a82.mp3"
		},
		{
			name: "C4",
			file: "a84.mp3"
		},
		{
			name: "D4",
			file: "a89.mp3"
		},
		{
			name: "E4",
			file: "a85.mp3"
		},
		{
			name: "F4",
			file: "a73.mp3"
		},
		{
			name: "G4",
			file: "a79.mp3"
		},
		{
			name: "A4",
			file: "a80.mp3"
		},
		{
			name: "B4",
			file: "a65.mp3"
		},
		{
			name: "C5",
			file: "a83.mp3"
		},
		{
			name: "D5",
			file: "a68.mp3"
		},
		{
			name: "E5",
			file: "a70.mp3"
		},
		{
			name: "F5",
			file: "a71.mp3"
		},
		{
			name: "G5",
			file: "a72.mp3"
		},
		{
			name: "A5",
			file: "a74.mp3"
		},
		{
			name: "B5",
			file: "a75.mp3"
		},
		{
			name: "C6",
			file: "a76.mp3"
		},
		{
			name: "D6",
			file: "a90.mp3"
		},
		{
			name: "E6",
			file: "a88.mp3"
		},
		{
			name: "F6",
			file: "a67.mp3"
		},
		{
			name: "G6",
			file: "a86.mp3"
		},
		{
			name: "A6",
			file: "a66.mp3"
		},
		{
			name: "B6",
			file: "a78.mp3"
		},
		{
			name: "C7",
			file: "a77.mp3"
		},
		{
			name: "C#2",
			file: "b49.mp3"
		},
		{
			name: "D#2",
			file: "b50.mp3"
		},
		{
			name: "F#2",
			file: "b52.mp3"
		},
		{
			name: "G#2",
			file: "b53.mp3"
		},
		{
			name: "A#2",
			file: "b54.mp3"
		},
		{
			name: "C#3",
			file: "b56.mp3"
		},
		{
			name: "D#3",
			file: "b57.mp3"
		},
		{
			name: "F#3",
			file: "b81.mp3"
		},
		{
			name: "G#3",
			file: "b87.mp3"
		},
		{
			name: "A#3",
			file: "b69.mp3"
		},
		{
			name: "C#4",
			file: "b84.mp3"
		},
		{
			name: "D#4",
			file: "b89.mp3"
		},
		{
			name: "F#4",
			file: "b73.mp3"
		},
		{
			name: "G#4",
			file: "b79.mp3"
		},
		{
			name: "A#4",
			file: "b80.mp3"
		},
		{
			name: "C#5",
			file: "b83.mp3"
		},
		{
			name: "D#5",
			file: "b68.mp3"
		},
		{
			name: "F#5",
			file: "b71.mp3"
		},
		{
			name: "G#5",
			file: "b72.mp3"
		},
		{
			name: "A#5",
			file: "b74.mp3"
		},
		{
			name: "C#6",
			file: "b76.mp3"
		},
		{
			name: "D#6",
			file: "b90.mp3"
		},
		{
			name: "F#6",
			file: "b67.mp3"
		},
		{
			name: "G#6",
			file: "b86.mp3"
		},
		{
			name: "A#6",
			file: "b66.mp3"
		}]
	},
	"/bQp": function(t, e) {
		t.exports = {}
	},
	"/n6Q": function(t, e, i) {
		i("zQR9"),
		i("+tPU"),
		t.exports = i("Kh4W").f("iterator")
	},
	"/wrW": function(t, e, i) {
		"use strict";
		var n = function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				ref: "PianoComponent",
				staticClass: "component-autopiano"
			},
			[i("div", {
				staticClass: "piano-scroll-wrap"
			},
			[i("div", {
				staticClass: "piano-wrap responsive-section-a",
				class: {
					visible: t.pianoShow
				}
			},
			[i("div", {
				staticClass: "piano-band"
			},
			[i("img", {
				staticClass: "piano-band-img",
				attrs: {
					src: t.bandImg,
					alt: ""
				}
			}), t._v(" "), i("div", {
				staticClass: "piano-tip"
			},
			[t._v("⇧ 代表 shift 键")])]), t._v(" "), i("div", {
				staticClass: "piano-key-wrap"
			},
			[t._l(t.Notes,
			function(e) {
				return "white" == e.type ? i("div", {
					key: e.keyCode,
					staticClass: "piano-key wkey",
					attrs: {
						"data-keyCode": e.keyCode,
						"data-name": e.name
					},
					on: {
						click: function(i) {
							i.stopPropagation(),
							t.clickPianoKey(i, e.keyCode)
						}
					}
				},
				[i("div", {
					staticClass: "keytip"
				},
				[i("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: t.showKeyName,
						expression: "showKeyName"
					}],
					staticClass: "keyname"
				},
				[t._v(t._s(e.key))]), t._v(" "), i("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: t.showNoteName,
						expression: "showNoteName"
					}],
					staticClass: "notename"
				},
				[t._v(t._s(e.name))])])]) : t._e()
			}), t._v(" "), i("div", {
				staticClass: "bkey-wrap bkey-wrap1"
			},
			t._l(t.Notes,
			function(e) {
				return "black" == e.type && e.id >= 36 && e.id <= 40 ? i("div", {
					key: e.keyCode,
					staticClass: "piano-key bkey",
					attrs: {
						"data-keyCode": e.keyCode,
						"data-name": e.name
					},
					on: {
						click: function(i) {
							i.stopPropagation(),
							t.clickPianoKey(i, e.keyCode)
						}
					}
				},
				[i("div", {
					staticClass: "keytip"
				},
				[i("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: t.showKeyName,
						expression: "showKeyName"
					}],
					staticClass: "keyname",
					domProps: {
						innerHTML: t._s(e.key)
					}
				})])]) : t._e()
			})), t._v(" "), i("div", {
				staticClass: "bkey-wrap bkey-wrap2"
			},
			t._l(t.Notes,
			function(e) {
				return "black" == e.type && e.id >= 41 && e.id <= 45 ? i("div", {
					key: e.keyCode,
					staticClass: "piano-key bkey",
					attrs: {
						"data-keyCode": e.keyCode,
						"data-name": e.name
					},
					on: {
						click: function(i) {
							i.stopPropagation(),
							t.clickPianoKey(i, e.keyCode)
						}
					}
				},
				[i("div", {
					staticClass: "keytip"
				},
				[i("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: t.showKeyName,
						expression: "showKeyName"
					}],
					staticClass: "keyname",
					domProps: {
						innerHTML: t._s(e.key)
					}
				})])]) : t._e()
			})), t._v(" "), i("div", {
				staticClass: "bkey-wrap bkey-wrap3"
			},
			t._l(t.Notes,
			function(e) {
				return "black" == e.type && e.id >= 46 && e.id <= 50 ? i("div", {
					key: e.keyCode,
					staticClass: "piano-key bkey",
					attrs: {
						"data-keyCode": e.keyCode,
						"data-name": e.name
					},
					on: {
						click: function(i) {
							i.stopPropagation(),
							t.clickPianoKey(i, e.keyCode)
						}
					}
				},
				[i("div", {
					staticClass: "keytip"
				},
				[i("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: t.showKeyName,
						expression: "showKeyName"
					}],
					staticClass: "keyname",
					domProps: {
						innerHTML: t._s(e.key)
					}
				})])]) : t._e()
			})), t._v(" "), i("div", {
				staticClass: "bkey-wrap bkey-wrap4"
			},
			t._l(t.Notes,
			function(e) {
				return "black" == e.type && e.id >= 51 && e.id <= 55 ? i("div", {
					key: e.keyCode,
					staticClass: "piano-key bkey",
					attrs: {
						"data-keyCode": e.keyCode,
						"data-name": e.name
					},
					on: {
						click: function(i) {
							i.stopPropagation(),
							t.clickPianoKey(i, e.keyCode)
						}
					}
				},
				[i("div", {
					staticClass: "keytip"
				},
				[i("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: t.showKeyName,
						expression: "showKeyName"
					}],
					staticClass: "keyname",
					domProps: {
						innerHTML: t._s(e.key)
					}
				})])]) : t._e()
			})), t._v(" "), i("div", {
				staticClass: "bkey-wrap bkey-wrap5"
			},
			t._l(t.Notes,
			function(e) {
				return "black" == e.type && e.id >= 56 && e.id <= 60 ? i("div", {
					key: e.keyCode,
					staticClass: "piano-key bkey",
					attrs: {
						"data-keyCode": e.keyCode,
						"data-name": e.name
					},
					on: {
						click: function(i) {
							i.stopPropagation(),
							t.clickPianoKey(i, e.keyCode)
						}
					}
				},
				[i("div", {
					staticClass: "keytip"
				},
				[i("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: t.showKeyName,
						expression: "showKeyName"
					}],
					staticClass: "keyname",
					domProps: {
						innerHTML: t._s(e.key)
					}
				})])]) : t._e()
			}))], 2)])]), t._v(" "), i("div", {
				staticClass: "piano-options responsive-section-a"
			},
			[i("div", {
				staticClass: "option-item-wrap"
			},
			[i("div", {
				staticClass: "option-item"
			},
			[i("label", {
				staticClass: "label"
			},
			[t._v("\n          显示按键提示\n          "), i("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: t.showKeyName,
					expression: "showKeyName"
				}],
				attrs: {
					type: "checkbox",
					id: "keyname"
				},
				domProps: {
					checked: Array.isArray(t.showKeyName) ? t._i(t.showKeyName, null) > -1 : t.showKeyName
				},
				on: {
					change: function(e) {
						var i = t.showKeyName,
						n = e.target,
						o = !!n.checked;
						if (Array.isArray(i)) {
							var s = t._i(i, null);
							n.checked ? s < 0 && (t.showKeyName = i.concat([null])) : s > -1 && (t.showKeyName = i.slice(0, s).concat(i.slice(s + 1)))
						} else t.showKeyName = o
					}
				}
			}), t._v(" "), i("i")])]), t._v(" "), i("div", {
				staticClass: "option-item"
			},
			[i("label", {
				staticClass: "label"
			},
			[t._v("\n          显示音名\n          "), i("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: t.showNoteName,
					expression: "showNoteName"
				}],
				attrs: {
					type: "checkbox",
					id: "notename"
				},
				domProps: {
					checked: Array.isArray(t.showNoteName) ? t._i(t.showNoteName, null) > -1 : t.showNoteName
				},
				on: {
					change: function(e) {
						var i = t.showNoteName,
						n = e.target,
						o = !!n.checked;
						if (Array.isArray(i)) {
							var s = t._i(i, null);
							n.checked ? s < 0 && (t.showNoteName = i.concat([null])) : s > -1 && (t.showNoteName = i.slice(0, s).concat(i.slice(s + 1)))
						} else t.showNoteName = o
					}
				}
			}), t._v(" "), i("i")])])])]), t._v(" "), i("canvas", {
				ref: "audioEffectCanvas",
				attrs: {
					id: "audioEffectCanvas"
				}
			},
			[t._v("您的浏览器不支持"), i("pre", [t._v("Canvas")]), t._v("。请升级到最新版的chrome、firefox、edge等浏览器。")])])
		},
		o = [],
		s = {
			render: n,
			staticRenderFns: o
		};
		e.a = s
	},
	"06OY": function(t, e, i) {
		var n = i("3Eo+")("meta"),
		o = i("EqjI"),
		s = i("D2L2"),
		r = i("evD5").f,
		a = 0,
		l = Object.isExtensible ||
		function() {
			return ! 0
		},
		u = !i("S82l")(function() {
			return l(Object.preventExtensions({}))
		}),
		c = function(t) {
			r(t, n, {
				value: {
					i: "O" + ++a,
					w: {}
				}
			})
		},
		p = function(t, e) {
			if (!o(t)) return "symbol" == typeof t ? t: ("string" == typeof t ? "S": "P") + t;
			if (!s(t, n)) {
				if (!l(t)) return "F";
				if (!e) return "E";
				c(t)
			}
			return t[n].i
		},
		h = function(t, e) {
			if (!s(t, n)) {
				if (!l(t)) return ! 0;
				if (!e) return ! 1;
				c(t)
			}
			return t[n].w
		},
		f = function(t) {
			return u && d.NEED && l(t) && !s(t, n) && c(t),
			t
		},
		d = t.exports = {
			KEY: n,
			NEED: !1,
			fastKey: p,
			getWeak: h,
			onFreeze: f
		}
	},
	"1H6C": function(t, e, i) {
		var n = function() {
			return this
		} () || Function("return this")(),
		o = n.regeneratorRuntime && Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime") >= 0,
		s = o && n.regeneratorRuntime;
		if (n.regeneratorRuntime = void 0, t.exports = i("HhN8"), o) n.regeneratorRuntime = s;
		else try {
			delete n.regeneratorRuntime
		} catch(t) {
			n.regeneratorRuntime = void 0
		}
	},
	"1kS7": function(t, e) {
		e.f = Object.getOwnPropertySymbols
	},
	"2KxR": function(t, e) {
		t.exports = function(t, e, i, n) {
			if (! (t instanceof e) || void 0 !== n && n in t) throw TypeError(i + ": incorrect invocation!");
			return t
		}
	},
	"2aVo": function(t, e, i) {
		var n = i("wqtZ");
		"string" == typeof n && (n = [[t.i, n, ""]]),
		n.locals && (t.exports = n.locals);
		i("rjj0")("afeabefc", n, !0, {})
	},
	"2uFj": function(t, e, i) {
		"use strict";
		i.d(e, "g",
		function() {
			return c
		}),
		i.d(e, "h",
		function() {
			return p
		}),
		i.d(e, "c",
		function() {
			return h
		}),
		i.d(e, "a",
		function() {
			return f
		}),
		i.d(e, "f",
		function() {
			return d
		}),
		i.d(e, "d",
		function() {
			return y
		}),
		i.d(e, "e",
		function() {
			return m
		}),
		i.d(e, "b",
		function() {
			return g
		});
		var n = i("//Im"),
		o = i("PT5K"),
		s = i("b56o"),
		r = i("aOM9"),
		a = i("FwAT"),
		l = i("ja8J"),
		u = i("3KBG"),
		c = n.a,
		p = o.a,
		h = s.a,
		f = r.a,
		d = a.a,
		y = l.a,
		m = u.a,
		g = {
			AUTO_PLAY_NUM_SCORE: "AUTO_PLAY_NUM_SCORE",
			PAUSE_AUTO_PLAY: "PAUSE_AUTO_PLAY",
			AUTO_PLAY_XML_SCORE: "AUTO_PLAY_XML_SCORE",
			PAUSE_XML_AUTO_PLAY: "PAUSE_XML_AUTO_PLAY",
			CHANGE_WALLPAPER: "CHANGE_WALLPAPER"
		}
	},
	"3Eo+": function(t, e) {
		var i = 0,
		n = Math.random();
		t.exports = function(t) {
			return "Symbol(".concat(void 0 === t ? "": t, ")_", (++i + n).toString(36))
		}
	},
	"3KBG": function(t, e, i) {
		"use strict";//xml歌曲列表。
		var n = [{
			name: "成都",
			url: "/audio/pianosimulatoronline/xmlscore/cd.json",
			degree: 5
		},
		{
			name: "千与千寻 - Always With Me",
			url: "/audio/pianosimulatoronline/xmlscore/qyqx.json",
			degree: 4
		},
		{
			name: "后来",
			url: "/audio/pianosimulatoronline/xmlscore/hl.json",
			degree: 3
		},
		{
			name: "告白气球",
			url: "/audio/pianosimulatoronline/xmlscore/gbqq.json",
			degree: 2
		},
		{
			name: "蒲公英的约定",
			url: "/audio/pianosimulatoronline/xmlscore/pgydyd.json",
			degree: 5
		},
		{
			name: "时间煮雨",
			url: "/audio/pianosimulatoronline/xmlscore/sjzy.json",
			degree: 4
		},
		{
			name: "下一个天亮",
			url: "/audio/pianosimulatoronline/xmlscore/xygtl.json",
			degree: 2
		},
		{
			name: "海角七号 1945",
			url: "/audio/pianosimulatoronline/xmlscore/hjqh.json",
			degree: 3
		}];
		n.forEach(function(t) {
			t.playing = !1
		}),
		e.a = n
	},
	"3YeD": function(t, e, i) {
		"use strict";
		var n = function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				ref: "LyricComponent",
				staticClass: "component-random-lyric"
			},
			[i("div", {
				staticClass: "lyric",
				attrs: {
					id: "randomLyric"
				}
			},
			[t._v(t._s(t.randomLyric))])])
		},
		o = [],
		s = {
			render: n,
			staticRenderFns: o
		};
		e.a = s
	},
	"3fs2": function(t, e, i) {
		var n = i("RY/4"),
		o = i("dSzd")("iterator"),
		s = i("/bQp");
		t.exports = i("FeBl").getIteratorMethod = function(t) {
			if (void 0 != t) return t[o] || t["@@iterator"] || s[n(t)]
		}
	},
	"4mcu": function(t, e) {
		t.exports = function() {}
	},
	"52gC": function(t, e) {
		t.exports = function(t) {
			if (void 0 == t) throw TypeError("Can't call method on  " + t);
			return t
		}
	},
	"5JHN": function(t, e, i) {
		"use strict";
		function n(t) {
			i("uHpY")
		}
		var o = i("CRtL"),
		s = i("3YeD"),
		r = i("VU/8"),
		a = n,
		l = r(o.a, s.a, !1, a, null, null);
		e.a = l.exports
	},
	"5QVw": function(t, e, i) {
		t.exports = {
		default:
			i("BwfY"),
			__esModule: !0
		}
	},
	"6Uk1": function(t, e, i) {
		e = t.exports = i("FZ+f")(!1),
		e.push([t.i, '.component-page-footer{width:100%;min-width:1280px;height:40px;line-height:40px;background:hsla(0,0%,100%,.8);border-top:1px solid #ccc;position:fixed;bottom:0;text-align:center}.component-page-footer .footer-ul{width:auto;height:100%}.component-page-footer .footer-ul .footer-item{display:inline;list-style:none;position:relative}.component-page-footer .footer-ul .footer-item a:hover{color:#fff;background:#1295db}.component-page-footer .footer-ul .footer-item a.em{color:#ef496f}.component-page-footer .footer-ul .footer-item a.em:hover{color:#fff;background:#ef496f}.component-page-footer .footer-ul.left-section{float:left;margin-left:5%}.component-page-footer .footer-ul.right-section{float:right;margin-right:5%}.component-page-footer .popup-container{width:200px;height:260px;position:absolute;top:-285px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);z-index:200;background:#fff;-webkit-box-shadow:1px 1px 10px 1px #ddd;box-shadow:1px 1px 10px 1px #ddd}.component-page-footer .popup-container:after{content:"";width:20px;height:20px;position:absolute;left:50%;bottom:-10px;-webkit-transform:translateX(-50%) rotate(45deg);transform:translateX(-50%) rotate(45deg);z-index:150;background:#fff}.component-page-footer .popup-container .tab-wrap{width:100%;height:60px}.component-page-footer .popup-container .tab-wrap .tab{width:50%;height:100%;float:left;cursor:pointer}.component-page-footer .popup-container .tab-wrap .tab.active-tab{border-bottom:5px solid #1295db}.component-page-footer .popup-container .tab-wrap .tab .icon{-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:50% 0;transform-origin:50% 0;margin-top:14px}.component-page-footer .popup-container .qrcode-wrap{width:100%;padding:12px 18px}.component-page-footer .popup-container .qrcode-wrap .money{width:100%;height:14px;line-height:14px;font-size:14px;margin:0}.component-page-footer .popup-container .qrcode-wrap .qrcode{width:100%}', ""])
	},
	"7UMu": function(t, e, i) {
		var n = i("R9M2");
		t.exports = Array.isArray ||
		function(t) {
			return "Array" == n(t)
		}
	},
	"82Mu": function(t, e, i) {
		var n = i("7KvD"),
		o = i("L42u").set,
		s = n.MutationObserver || n.WebKitMutationObserver,
		r = n.process,
		a = n.Promise,
		l = "process" == i("R9M2")(r);
		t.exports = function() {
			var t, e, i, u = function() {
				var n, o;
				for (l && (n = r.domain) && n.exit(); t;) {
					o = t.fn,
					t = t.next;
					try {
						o()
					} catch(n) {
						throw t ? i() : e = void 0,
						n
					}
				}
				e = void 0,
				n && n.enter()
			};
			if (l) i = function() {
				r.nextTick(u)
			};
			else if (!s || n.navigator && n.navigator.standalone) if (a && a.resolve) {
				var c = a.resolve(void 0);
				i = function() {
					c.then(u)
				}
			} else i = function() {
				o.call(n, u)
			};
			else {
				var p = !0,
				h = document.createTextNode("");
				new s(u).observe(h, {
					characterData: !0
				}),
				i = function() {
					h.data = p = !p
				}
			}
			return function(n) {
				var o = {
					fn: n,
					next: void 0
				};
				e && (e.next = o),
				t || (t = o, i()),
				e = o
			}
		}
	},
	"880/": function(t, e, i) {
		t.exports = i("hJx8")
	},
	"8msa": function(t, e, i) {
		var n = i("Ya+D");
		"string" == typeof n && (n = [[t.i, n, ""]]),
		n.locals && (t.exports = n.locals);
		i("rjj0")("79b0bbd9", n, !0, {})
	},
	"94VQ": function(t, e, i) {
		"use strict";
		var n = i("Yobk"),
		o = i("X8DO"),
		s = i("e6n0"),
		r = {};
		i("hJx8")(r, i("dSzd")("iterator"),
		function() {
			return this
		}),
		t.exports = function(t, e, i) {
			t.prototype = n(r, {
				next: o(1, i)
			}),
			s(t, e + " Iterator")
		}
	},
	"9LSK": function(t, e, i) {
		"use strict";
		var n = i("Xxa5"),
		o = i.n(n),
		s = i("//Fk"),
		r = i.n(s),
		a = i("exGp"),
		l = i.n(a),
		u = i("VSxz");
		e.a = {
			data: function() {
				return {
					lastNote: {
						noteName: ""
					},
					xmlstop: !1,
					xmlPlayQueue: []
				}
			},
			mounted: function() {
				var t = this;
				u.a.$on("xml-music-stop",
				function() {
					t.xmlPlayQueue && t.xmlPlayQueue.length > 0 && (t.xmlPlayQueue.shift(), t.xmlPlayQueue[0] && t.playXMLScore(t.xmlPlayQueue[0]))
				}),
				setTimeout(function() {},
				1e3)
			},
			methods: {
				addToPlayQueue: function(t) {
					this.xmlPlayQueue.length <= 0 && this.playXMLScore(t),
					this.xmlPlayQueue.push(t)
				},
				initXMLPlayState: function() {
					this.xmlstop = !1,
					this.measures = [],
					this.measures_len = 0,
					this.lastNote = {
						noteName: ""
					}
				},
				pauseXMLPlay: function() {
					this.xmlstop = !0,
					$(".piano-key").removeClass("auto-key-active")
				},
				playXMLScore: function(t) {
					var e = this;
					return l()(o.a.mark(function i() {
						var n, s, a, l, c, p, h, f;
						return o.a.wrap(function(i) {
							for (;;) switch (i.prev = i.next) {
							case 0:
								e.initXMLPlayState(),
								e.measures = t.measures,
								e.measures_len = e.measures.length,
								n = 0;
							case 4:
								if (! (n < e.measures_len)) {
									i.next = 19;
									break
								}
								s = e.measures[n],
								a = [];
								for (l in s) {
									c = s[l];
									for (p in c) h = c[p] || [],
									a.push(e.playNotesArr(h))
								}
								return f = r.a.all(a),
								i.next = 11,
								f;
							case 11:
								if (!e.xmlstop) {
									i.next = 15;
									break
								}
								return f = null,
								u.a.$emit("xml-music-stop"),
								i.abrupt("break", 19);
							case 15:
								n == e.measures_len - 1 && u.a.$emit("xml-music-stop");
							case 16:
								n++,
								i.next = 4;
								break;
							case 19:
							case "end":
								return i.stop()
							}
						},
						i, e)
					}))()
				},
				playNotesArr: function(t) {
					var e = this;
					return new r.a(function(i, n) {
						function o() {
							if (e.xmlstop && (clearInterval(u), u = null, i()), new Date - r >= a) {
								l.forEach(function(t) {
									t && t.noteName && $('[data-name="' + t.noteName + '"]').removeClass("auto-key-active")
								}),
								l = [];
								var n = t[s];
								if (!n || !n.duration) return;
								var o = n.duration ? n.duration: 0;
								if (a += o, n.rest);
								else if ("start" != n.tie && n.noteName == e.lastNote.noteName);
								else if (n && n.noteName) {
									for (var c = 0; c < e.Notes.length; c++) {
										var p = e.Notes[c];
										if (n.noteName == p.name) {
											e.playNote(n.noteName),
											$('[data-name="' + n.noteName + '"]').addClass("auto-key-active"),
											l.push(n),
											e.lastNote = n;
											break
										}
									}
									for (; t[s + 1] && t[s + 1].chord;) {
										var h = t[s + 1];
										e.playNote(h.noteName),
										$('[data-name="' + h.noteName + '"]').addClass("auto-key-active"),
										l.push(h),
										s++
									}
								}
								if (++s >= t.length) {
									clearInterval(u),
									u = null;
									var f = Math.floor(t[s - 1].duration || 0);
									setTimeout(function() {
										i(),
										l.forEach(function(t) {
											t && t.noteName && $('[data-name="' + t.noteName + '"]').removeClass("auto-key-active")
										})
									},
									f)
								}
							}
						}
						var s = 0,
						r = new Date,
						a = 0,
						l = [],
						u = setInterval(function() {
							o()
						},
						17)
					})
				}
			}
		}
	},
	"9OEs": function(t, e, i) {
		"use strict";
		var n = i("2uFj");
		e.a = {
			data: function() {
				return {
					ScoreNum: n.d,
					playTimers: [],
					StepMap: {
						C: {
							"1>>": "C2",
							"2>>": "D2",
							"3>>": "E2",
							"4>>": "F2",
							"5>>": "G2",
							"6>>": "A2",
							"7>>": "B2",
							"1>": "C3",
							"2>": "D3",
							"3>": "E3",
							"4>": "F3",
							"5>": "G3",
							"6>": "A3",
							"7>": "B3",
							1 : "C4",
							2 : "D4",
							3 : "E4",
							4 : "F4",
							5 : "G4",
							6 : "A4",
							7 : "B4",
							"1<": "C5",
							"2<": "D5",
							"3<": "E5",
							"4<": "F5",
							"5<": "G5",
							"6<": "A5",
							"7<": "B5",
							"1<<": "C6",
							"2<<": "D6",
							"3<<": "E56",
							"4<<": "F6",
							"5<<": "G6",
							"6<<": "A6",
							"7<<": "B6"
						},
						D: {
							"1>>": "D2",
							"2>>": "E2",
							"3>>": "F#2",
							"4>>": "G2",
							"5>>": "A2",
							"6>>": "B2",
							"7>>": "C#3",
							"1>": "D3",
							"2>": "E3",
							"3>": "F#3",
							"4>": "G3",
							"5>": "A3",
							"6>": "B3",
							"7>": "C#4",
							1 : "D4",
							2 : "E4",
							3 : "F#4",
							4 : "G4",
							5 : "A4",
							6 : "B4",
							7 : "C#5",
							"1<": "D5",
							"2<": "E5",
							"3<": "F#5",
							"4<": "G5",
							"5<": "A5",
							"6<": "B5",
							"7<": "C#6",
							"1<<": "D6",
							"2<<": "E6",
							"3<<": "F#6",
							"4<<": "G6",
							"5<<": "A6",
							"6<<": "B6",
							"7<<": "C#7"
						}
					}
				}
			},
			methods: {
				mapNum2NoteName: function() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
					i = e.match(/[#b]*[0-7][\<\>]*/g)[0];
					if (i && t && this.StepMap[t]) {
						var n = this.StepMap[t];
						if (n && n[i]) {
							return n[i]
						}
					}
					return ""
				},
				getNoteDuration: function(t, e) {
					var i = 1;
					return t.match(/\([0-9.]*\)/g) && (i = t.match(/\([0-9.]*\)/g)[0].replace(/[\)\(]/g, "")),
					e * +i
				},
				autoPlayNumberScore: function() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "C",
					e = this,
					i = arguments[1],
					n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 75;
					$(".piano-key").removeClass("auto-key-active");
					var o = 6e4 / n,
					s = new Date,
					r = 0,
					a = 0,
					l = void 0,
					u = function() {
						if (new Date - s > a) {
							l && $("[data-keyCode=" + l.keyCode + "]").removeClass("auto-key-active");
							var n = i[r],
							u = e.mapNum2NoteName(t, n);
							if (l = e.getNoteByName(u), l && $("[data-keyCode=" + l.keyCode + "]").addClass("auto-key-active"), e.playNote(u), a += e.getNoteDuration(n, o), ++r >= i.length) return setTimeout(function() {
								$(".piano-key").removeClass("auto-key-active")
							},
							1e3),
							void clearInterval(c)
						}
					},
					c = setInterval(function() {
						u()
					},
					20);
					this.playTimers.push(c)
				},
				playScoreByName: function() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "天空之城",
					e = void 0;
					for (var i in this.ScoreNum) {
						var n = this.ScoreNum[i];
						if (n.name == t) {
							e = n;
							break
						}
					}
					if (e) {
						this.pauseAutoPlay();
						var o = e.step,
						s = e.speed;
						this.StepMap[o] && (this.autoPlayNumberScore(o, e.mainTrack, s), e.backingTrack && this.autoPlayNumberScore(o, e.backingTrack, s))
					}
				},
				pauseAutoPlay: function() {
					$(".piano-key").removeClass("auto-key-active"),
					this.playTimers.forEach(function(t) {
						clearInterval(t),
						t = null
					}),
					this.playTimers.splice(0)
				}
			}
		}
	},
	Achj: function(t, e, i) {
		"use strict";
		var n = i("2uFj");
		e.a = {
			name: "ManualPlayScoreList",
			data: function() {
				return {
					scores: n.f,
					sectionTitle: "快速入门",
					showItem: {},
					listShow: !0
				}
			},
			mounted: function() {
				this.showItem = this.scores[0]
			},
			methods: {
				clickScoreItem: function(t) {
					t && (this.toggleListShow(), this.showItem = t, this.showItem.content = t.content.toUpperCase(), this.sectionTitle = t.name || "快速入门")
				},
				toggleListShow: function() {
					this.listShow = !this.listShow,
					this.listShow && (this.sectionTitle = "快速入门")
				}
			}
		}
	},
	BwfY: function(t, e, i) {
		i("fWfb"),
		i("M6a0"),
		i("OYls"),
		i("QWe/"),
		t.exports = i("FeBl").Symbol
	},
	CRtL: function(t, e, i) {
		"use strict";
		var n = i("2uFj");
		e.a = {
			name: "RandomLyric",
			components: {},
			mixins: [],
			props: [],
			data: function() {
				return {
					randomLyric: "",
					randomIndex: 0,
					lyricTimer: null
				}
			},
			computed: {},
			mounted: function() {
				clearInterval(this.lyricTimer),
				this.lyricTimer = null,
				this.setRandomLyric()
			},
			beforeDestroy: function() {
				clearInterval(this.lyricTimer),
				this.lyricTimer = null
			},
			watch: {},
			methods: {
				setRandomLyric: function() {
					var t = this;
					if (!this.lyricTimer) {
						this.randomIndex = Math.floor(Math.random() * n.h.length);
						var e = function() {
							$("#randomLyric").hide(),
							t.randomIndex < n.h.length - 1 ? ++t.randomIndex: t.randomIndex = 0,
							t.randomLyric = '"' + n.h[t.randomIndex] + '"',
							$("#randomLyric").fadeIn(1e3)
						};
						e(),
						this.lyricTimer = setInterval(function() {
							e()
						},
						7e3)
					}
				},
				searchLyric: function() {
					var t = "https://music.163.com/#/search/m/?s=" + encodeURIComponent(n.h[this.randomIndex]);
					window.open(t, "_blank")
				}
			}
		}
	},
	CXw9: function(t, e, i) {
		"use strict";
		var n, o, s, r, a = i("O4g8"),
		l = i("7KvD"),
		u = i("+ZMJ"),
		c = i("RY/4"),
		p = i("kM2E"),
		h = i("EqjI"),
		f = i("lOnJ"),
		d = i("2KxR"),
		y = i("NWt+"),
		m = i("t8x9"),
		g = i("L42u").set,
		_ = i("82Mu")(),
		v = i("qARP"),
		b = i("dNDb"),
		S = i("iUbK"),
		T = i("fJUb"),
		w = l.TypeError,
		A = l.process,
		x = A && A.versions,
		O = x && x.v8 || "",
		P = l.Promise,
		k = "process" == c(A),
		F = function() {},
		C = o = v.f,
		D = !!
		function() {
			try {
				var t = P.resolve(1),
				e = (t.constructor = {})[i("dSzd")("species")] = function(t) {
					t(F, F)
				};
				return (k || "function" == typeof PromiseRejectionEvent) && t.then(F) instanceof e && 0 !== O.indexOf("6.6") && -1 === S.indexOf("Chrome/66")
			} catch(t) {}
		} (),
		E = function(t) {
			var e;
			return ! (!h(t) || "function" != typeof(e = t.then)) && e
		},
		U = function(t, e) {
			if (!t._n) {
				t._n = !0;
				var i = t._c;
				_(function() {
					for (var n = t._v,
					o = 1 == t._s,
					s = 0; i.length > s;) !
					function(e) {
						var i, s, r, a = o ? e.ok: e.fail,
						l = e.resolve,
						u = e.reject,
						c = e.domain;
						try {
							a ? (o || (2 == t._h && L(t), t._h = 1), !0 === a ? i = n: (c && c.enter(), i = a(n), c && (c.exit(), r = !0)), i === e.promise ? u(w("Promise-chain cycle")) : (s = E(i)) ? s.call(i, l, u) : l(i)) : u(n)
						} catch(t) {
							c && !r && c.exit(),
							u(t)
						}
					} (i[s++]);
					t._c = [],
					t._n = !1,
					e && !t._h && M(t)
				})
			}
		},
		M = function(t) {
			g.call(l,
			function() {
				var e, i, n, o = t._v,
				s = R(t);
				if (s && (e = b(function() {
					k ? A.emit("unhandledRejection", o, t) : (i = l.onunhandledrejection) ? i({
						promise: t,
						reason: o
					}) : (n = l.console) && n.error && n.error("Unhandled promise rejection", o)
				}), t._h = k || R(t) ? 2 : 1), t._a = void 0, s && e.e) throw e.v
			})
		},
		R = function(t) {
			return 1 !== t._h && 0 === (t._a || t._c).length
		},
		L = function(t) {
			g.call(l,
			function() {
				var e;
				k ? A.emit("rejectionHandled", t) : (e = l.onrejectionhandled) && e({
					promise: t,
					reason: t._v
				})
			})
		},
		I = function(t) {
			var e = this;
			e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), U(e, !0))
		},
		N = function(t) {
			var e, i = this;
			if (!i._d) {
				i._d = !0,
				i = i._w || i;
				try {
					if (i === t) throw w("Promise can't be resolved itself"); (e = E(t)) ? _(function() {
						var n = {
							_w: i,
							_d: !1
						};
						try {
							e.call(t, u(N, n, 1), u(I, n, 1))
						} catch(t) {
							I.call(n, t)
						}
					}) : (i._v = t, i._s = 1, U(i, !1))
				} catch(t) {
					I.call({
						_w: i,
						_d: !1
					},
					t)
				}
			}
		};
		D || (P = function(t) {
			d(this, P, "Promise", "_h"),
			f(t),
			n.call(this);
			try {
				t(u(N, this, 1), u(I, this, 1))
			} catch(t) {
				I.call(this, t)
			}
		},
		n = function(t) {
			this._c = [],
			this._a = void 0,
			this._s = 0,
			this._d = !1,
			this._v = void 0,
			this._h = 0,
			this._n = !1
		},
		n.prototype = i("xH/j")(P.prototype, {
			then: function(t, e) {
				var i = C(m(this, P));
				return i.ok = "function" != typeof t || t,
				i.fail = "function" == typeof e && e,
				i.domain = k ? A.domain: void 0,
				this._c.push(i),
				this._a && this._a.push(i),
				this._s && U(this, !1),
				i.promise
			},
			catch: function(t) {
				return this.then(void 0, t)
			}
		}), s = function() {
			var t = new n;
			this.promise = t,
			this.resolve = u(N, t, 1),
			this.reject = u(I, t, 1)
		},
		v.f = C = function(t) {
			return t === P || t === r ? new s(t) : o(t)
		}),
		p(p.G + p.W + p.F * !D, {
			Promise: P
		}),
		i("e6n0")(P, "Promise"),
		i("bRrM")("Promise"),
		r = i("FeBl").Promise,
		p(p.S + p.F * !D, "Promise", {
			reject: function(t) {
				var e = C(this);
				return (0, e.reject)(t),
				e.promise
			}
		}),
		p(p.S + p.F * (a || !D), "Promise", {
			resolve: function(t) {
				return T(a && this === r ? P: this, t)
			}
		}),
		p(p.S + p.F * !(D && i("dY0y")(function(t) {
			P.all(t).
			catch(F)
		})), "Promise", {
			all: function(t) {
				var e = this,
				i = C(e),
				n = i.resolve,
				o = i.reject,
				s = b(function() {
					var i = [],
					s = 0,
					r = 1;
					y(t, !1,
					function(t) {
						var a = s++,
						l = !1;
						i.push(void 0),
						r++,
						e.resolve(t).then(function(t) {
							l || (l = !0, i[a] = t, --r || n(i))
						},
						o)
					}),
					--r || n(i)
				});
				return s.e && o(s.v),
				i.promise
			},
			race: function(t) {
				var e = this,
				i = C(e),
				n = i.reject,
				o = b(function() {
					y(t, !1,
					function(t) {
						e.resolve(t).then(i.resolve, n)
					})
				});
				return o.e && n(o.v),
				i.promise
			}
		})
	},
	Cdx3: function(t, e, i) {
		var n = i("sB3e"),
		o = i("lktj");
		i("uqUo")("keys",
		function() {
			return function(t) {
				return o(n(t))
			}
		})
	},
	"CjT/": function(t, e, i) {
		"use strict";
		function n(t) {
			i("8msa")
		}
		var o = i("+OXj"),
		s = i("gYYM"),
		r = i("VU/8"),
		a = n,
		l = r(o.a, s.a, !1, a, null, null);
		e.a = l.exports
	},
	DJ6k: function(t, e, i) {
		"use strict";
		var n = function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				staticClass: "page-pc"
			},
			[i("div", {
				staticClass: "app-bg",
				style: t.appBgStyle
			}), t._v(" "), i("div", {
				staticClass: "app-content"
			},
			[i("PageHeader"), t._v(" "), i("RandomLyric"), t._v(" "), i("Piano"), t._v(" "), i("div", {
				staticClass: "score-section responsive-section-a"
			},
			[i("ManualPlayScoreList"), t._v(" "), i("AutoPlayScoreList")], 1), t._v(" "), i("div", {
				staticClass: "right-drawer",
				class: {
					show: t.rightDrawerShow
				}
			},
			[i("div", {
				staticClass: "trigger",
				on: {
					click: t.toggleRightDrawer
				}
			},
			[t._v("歌曲列表")]), t._v(" "), i("div", {
				staticClass: "close",
				on: {
					click: t.hideRightDrawer
				}
			},
			[t._v("X")]), t._v(" "), i("ManualPlayScoreList")], 1), t._v(" "), i("div", {
				staticClass: "blank-page-pc",
				staticStyle: {
					height: "200px"
				}
			}), t._v(" "), i("PageFooter")], 1)])
		},
		o = [],
		s = {
			render: n,
			staticRenderFns: o
		};
		e.a = s
	},
	Dd8w: function(t, e, i) {
		"use strict";
		e.__esModule = !0;
		var n = i("woOf"),
		o = function(t) {
			return t && t.__esModule ? t: {
			default:
				t
			}
		} (n);
		e.
	default = o.
	default ||
		function(t) {
			for (var e = 1; e < arguments.length; e++) {
				var i = arguments[e];
				for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
			}
			return t
		}
	},
	EGZi: function(t, e) {
		t.exports = function(t, e) {
			return {
				value: e,
				done: !!t
			}
		}
	},
	EqBC: function(t, e, i) {
		"use strict";
		var n = i("kM2E"),
		o = i("FeBl"),
		s = i("7KvD"),
		r = i("t8x9"),
		a = i("fJUb");
		n(n.P + n.R, "Promise", {
			finally: function(t) {
				var e = r(this, o.Promise || s.Promise),
				i = "function" == typeof t;
				return this.then(i ?
				function(i) {
					return a(e, t()).then(function() {
						return i
					})
				}: t, i ?
				function(i) {
					return a(e, t()).then(function() {
						throw i
					})
				}: t)
			}
		})
	},
	EuRD: function(t, e) {
		t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAC8VBMVEUAAADGxsbNzc3h4eHNzc3Nzc3Nzc3Nzc3Nzc3Ozs7Nzc3Nzc3T09PV1dXNzc3Nzc3Nzc3Nzc3Nzc3Q0NDNzc3Nzc3Nzc3Ozs7S0tLNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Ozs7Nzc3Nzc3Nzc3Nzc3MzMzOzs7Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Ozs7MzMzNzc3Ozs7Nzc3Nzc1lcYLjVUQAAADLy8tkcIHPz89nc4RmcoPR0dHOzs7U1NRodIXT09NodYbW1tbhVERpdohhboBrdoZbaXxXZnrrV0bZ2dldan1kb39gaXlTY3hRYXbY2NhfbH9ZZ3vnVkTlVUToV0VeZHP5+Prd3uJWZXpVZHj7+vxXYW9SWWaOjo729vjKyspibHxOVmNJUFxHTVlVVFTh4ubIx8hZYnDz8vXn6Ovc3Ny+vr6co62Pl6Nzfo5teYmAf4BeZ3ZcZXQ+RVDr7O/S1Nm4u8O9vLyqqaqPj4+GhYZNX3RsbG0AJy3////9/P7e3t7Bxcu8wMeorbd7hJJ3dndWXmxCR1IpLjcmIyMBHCLO0NbHytCwtL2rsLmWnahga3tMU1/uWUY0O0XNTT8xNj/DSz4CDhcAAAbu7vHX2d7b29vFxcWlqrSip7GlpKWTmqWioaKXlpd/iZaTk5RbZHJDTFQ4P0rGSz0fKzeGMypqJR3h4eHDwsO1ucK2tra2tbaysrOvrq+Zn6pzcnNUXGlhYF9bWlk7Qk0rND68SDy3RjqqQDYuKyxCFQ2zt7+7ubqsq6yLk5+enp6IkJyKiotpaGhjYmNQVldOTExHRkXYUkPRUEK0Rzs9OzuYPDMiKS4LFygbHyd2KSAhHR1VAADg4ODLztR3gpGsRDmdPDMRIih+MCdbHxYcFxVPHBQ3FBEAABEABg/j5OjLysucnJyFjZk3TlCuQzilPzU2NDR4LiYVEBARCQZ2EwBBAAChoaGgoKGgn6A+VGwrOEEsAgC2iD4ZAAAAN3RSTlMAAvsE/fjw9Uce3BcKBtKshW4sJOtzYhMP4de9WVFNzsiUVTkztJ+Pd2pcQOfFp2e4f3vCwcC+0J0UfAAADRtJREFUaN69mndcU1cUx8lLGKIgyLAi4t6rO8/L2+8lZEEWBCkJQ0SGgLKXAxVR3LvWXUfV1rqr1rqqttZqWzus3Xvvvf7qfUla80aCSD89KCKE983vnHvPvfecG3RLplAoldLvKpUKRdB/ZArPo5QxYYPio+Oihg+MGhEdnxjWq8fNH3bRPM/o3u/ucWPDg6n0Q4fmT5s2/+1DaRTSZ0DPqMQYz2u6hlDCv91H3RkbTKWlczSNBAcj0OBnlZrSbuOQkLEjuymhSkWXZPRIGhbCcRSuRuBzBaZCEJqmOCa4Z2JviOmCo0b1ZdJpdUCjtWn9o3vcntN4RyUOwNMRJDCDl6TlInmMsvOMiH79cUYNER0bomKo8PF3dFIMfPGQO7WUWhCGgGrU+LTIMPiLnYmGIi5EKxTRsRxGPVwgpiMZve5lcMjoJIXWJgjEBGbEhTLQAZ02WsXRwyNuJf7QVcO0uDyiY4w6rS90WceMHkO1EHG7hqT37yamSBndB/iPeLKP+aVow4cIKVJGtwTI8EfAOcZrHKX2x0GYkNECioTROzIdkQOoaZzi6KM7906aNWnSpFl7dx5TMxROq5PlKVCLf0bEvVpEDkHRydNnzSn5Hvxr50uuzH5iMv+DZBlKeDd/YwzCe0KG1E2MesbelwD4bP++4rw8K8EW5uUVnd6/CYBXIYdRy1C0A+AY88MYqFVJGRT+bC0A14tPrtVpNARBoihJEBqNzrJ43RkAntw5lZOj3Kl0U6SQkVpagqCpJ+YA0PDoWo2GxDAM9Rr8kmR1FmsRAKdm4rjEZ0j6cB4iZcSE4LTYU9TDs38CSwpRloQAoWGo0ejC2HVQzQxc6jM8jKdIIH0ZlSTgx18CG+o0JHyixAjjmnd2EC2s5TQ4/xyOiygqLlwaFmVQNCdxFT4LgMUowRPkILsq5pUe0TnYsuug9ksJRTsQQkSMXiGUSsjAJy/iZQhUCCk1J7ZmV+wwYpYl4Op0MYWmkwTjGCKVQ9MRkY6pc0AxBmX4NQNqMu0qzd76bo5hCigRUxAuoXeQQgAJ04p1TL0KiuCA9W96Ww5KmB2ry7fssOvyZShpI0QOG0uJdEyeA6YQARCsaZfziC4HNdj3OHNXmXSLJRQaH9NbIKSfeFzhi6AONIAR+nZnwZaLpLnGiLXNW2CCWq6Ko8/dFaT0gdzDqAQQOK6KCRQLRCFR26Wm3NJLdgNmWsBTpoBaXDjAmPB/owJpg8Sp5BjYgJFoQMNyMsy2NRUFF00kASmr7IYl4DmhFER7d5DyZmJMQwTenPoiqCMC68iobq4yYTk1K+e16VHC1Ja7w2W5vmwGLoREdvdKUcA5gguFPA/yISMgxNxemtvUbra4VrWu0JOofmt5u74MzKFFUsKgFA9k/DREEJCjH29AOzJSX9PcWLAwg7Cvbm0zGcx7yp1GogHs5JIFo3hgkNciYNYSCFkEHmX9CMHc5qZgLdVNrSv1qH3VvIv2Gvv23IUmCzg1VaAFj4Wh96RfgcRk7tib6+UZML8TLKthPTmZNOhtzbkr9IRpZfYuh8HkbNTBnPwII3gal+SF3M0Jk85sYCVlGYTOUv8AtPpCjftdEGTLxdyVZkxTWqHDzJeym+0seOphwQjjenoh/TmBs2aAfaisaerXrf8cQNt8pqjMnXFIoqW5daHZdSL7SA5h2vqFBs0HT1C+EGoMzPj8TitWkFLwR0CZnLcIS/FycOHDbx9/6NyBT8Cm01bCHRlbU0G7xd60pRpzrGndbrKCWuHaFRrmhoSF4r7OSi65YSWkEKJ+KTi4MSUlMzU1KyXl5R/ABycJd3apbtxqNl8qWGAjNaUrjJb1y6bSAkp0kBJ+xAlWXfxh8JgcY/Fy8PSErIkTJ0xImTBxYmbWuU89CdTQ0pxbabZtrXAYjLsqM2BymekbFCRtWFAE/BjmO92TobemaDCpjuUXzqZO8LHUhw6Ck+53w5a22bH2SjjvjQ6UzQO1lAByPx95xb0QIpwkUiWWpeBsaoovJCX1oQvL6wg+wbRXW8gMOwnfCi/t9acgxHet58/6MeGcygfCPPU6Kxm7mmLw9IMeRkpmJnSYm3IW7ONHCGHOgJ9Y70t1Z1467Dsf6dDREDIkFlcJcuMZHSZikNa5H3kFZKVeezkr1YN78MNNeTyFJH3fT8ObMynBpB8EIaN9t1vJ1PFlDRoxBEbzXJb7wZkbP3zrrTdegfHn//MyKJa8ls0HuxnfoGhHQUiSIDlyv4EiadwbQEqm+7Hvgc8ee2EueM1NnJjyyf61pHiIlIFZAsj88RAyiKJ9Ib+DxYQ4m1jnvpEykffVRnD9OM48cx685xkF74MHxPOWRMEkX0jwoTgIiU9HfOO+G+RJIHWfv+YJwoHNz2qTk7kZcw96hvHjUgjKgueFSqIgZOT8YF/IJFAmhrAPgKcz3VH/+RsqmZf7wi8PZXkhGilkttYXMm34/wEZyLsrTeCuvR27i+mUu6bx7kpkVL6Bfw5CAgR++bMw8Ms6E/j5d0NIP1wwhH+VH8LXPDPjFbC5k0M4+FA0hIRBb3U8Gb/9ZzIeEEzGIrnJ+JXQXePl0spS37RCEt604s2OmQ9eu5aa6k0xP/BpRZzmGpYdF6aVfhDSLYGRT5AYC7/QO0hPgvzuZoJM8SbIc+C0KF9LEySNxw6GEMV96dJUzydVwuYgseqvM9xe3wDOPihO9Z9+INlwSFM9k9CN3wj33CZZtFCjiyQcJ6r0ju3ll838omGVWbQ2L5YKkSxa2rERPCSKUYmWX41jzY4Mwx/ORrOlunxFi4GPTdk/yy80fvl95dPN+ZAuhkiW3209IQKeTYKFG4lTm9bamrP3ZBgrCxbmOI7krslhvRuJj87B9T0rFa5aGw+CD2AilRhZuOG8cCNBjXBDesdSgp3wTPCosSp7lYl1lVagFsMXFTV60rMlmgv+OvD+xse/O3ABLG+wyjAwth7MFm2JYMnIfQISbu6mL1vP2poaYTFgV/Yqu74qe4ULdQdYY52ybxOAtunPdfUa+eNLkWhzx/VRejb1d0m2qYWOyoLVLtb4TsHXZuP23JUuC+tehnVY3QPQ6gp18icL0gKuirapQ73b1MGi0wnccBtszi01GNy4OTWk6UjuCp3JQEIKhhIsNEJaBPHORMmGm4n3Qnr0p2jR0aFef7lggavGVZnbBDe527NLq1r0pPDogMqFHZyaLNiq0KH8UctNiRMdgmYsW4rmLJh3wmawLcxtc5HGqorsle/CWRnYMOI0mCk8BGmHQYQHMiRUeC7l9gI4B5xb2s0Ge/O8d4iMjJq2gvIqo5ginYhPik6m6f14Id6ah/hgWgKs5svlpaie1+Lck6N37Gne04EU0nrjvOhgyvx7MIWTJZEWHbGP/rgUda3JbuIplVvKV+sd+hwYlMAQmSP2zWoBhA1gVELKbrDE0LK6tQk1G3LeXdHq3JFhIQI7SyMtFnB9YCH6JiQeFxfeakGRwb4621mdUwMTTEVBY5WDDcjIB1cmi8sewwXFKGWCtIDDU06UN66xk6zDXOmstLOBGSWHRQw8BAoRVHAYSUmNp+RcLm1doHOhhLElYNg1/kpRopJwOiKlLEHNZFt240K9SW/wz8BIcp0Mg4kUVSGVQUNCcImWWrDUStqqnAUVq6uNhD8EqlnbAK4clpQHuUF8RISUKK1KUujc/SPIJzNs253Z5av8hAQjyMU3wGxxzOHwhSd4haROP1amZHv0RbCh3mBzVK1caGPlVJCsdR/4fidOi3VQvsMX2s1aES2poU99/mOwvpAwukwoJi2CsGjhEgAWPUxJi8+0uz4kpYzi5MroRxe9CZbUFcI6/c38y39FajSFjxYDcIUvo0sbQlG8DtmGQLpM0wGnjtUCcOOx/DqdTsMSBEkS7obA2pPFS2EJfSZOQYSE0Vfpr+2gvFO2tcGpZzxSAsDm/esfyy/LsxbmlZ0s3rf/M9ja2PvMZEaugaKNFJSEhZQ7+vtp0uDJh3c/eerVj4HXfnq1ZM6k6dCZMOBSBtMnJkgZoKXVR+u/3YRPn/kVbDfBP7t3PkNzfttNVOjgwE2tXn0CNM4giPEYlOa3ccaFJnXUnouJ7GILkBkz+hYajfekdamZGd7rllqmPRn6ttuy6QO8E73jBjPCIbfDQCh8YI9bbmOPDteqO41RIdqQxFu+xKCAgRmHMwjdSRlM316CxNuxmKQB6Xhnri/QaeHxsNjY2Rsr0WMoRu2V0/FFjNCo7vDXOn/3pndcf/U2HFF1hFCnUQlRMbd1D4f3rjJxXOx8LjCDmhY8dOQdt3+jiH9rvUb2pTmOw2kEUUHXub3H/6tCEDVMMxQVOWJwRJduEyn4342IGT+uTyielsbg/LODg3kazqRto0LHDI2DN7A8iK5f7lIMHjGsb2SsmtKmvf32Ni2lDkm4b9xdYf/RFS/fp3QfnDRoVHx0dPyoQUmDu3l+1CWC1HERitu+Dfc3oyfNm/h5TTsAAAAASUVORK5CYII="
	},
	FclF: function(t, e, i) {
		"use strict";
		var n = i("Xxa5"),
		o = i.n(n),
		s = i("exGp"),
		r = i.n(s),
		a = (i("7+uW"), i("ZnLv")),
		l = (i.n(a), i("VSxz")),
		u = i("2uFj"),
		c = i("Y3FW"),
		p = (i("vYTo"), i("9OEs")),
		h = i("9LSK");
		e.a = {
			name: "Piano",
			mixins: [p.a, h.a],
			components: {},
			data: function() {
				return {
					DEV: !1,
					pianoShow: !1,
					bandImg: i("NeAu"),
					enableBlackKey: !1,
					showKeyName: !0,
					showNoteName: !1,
					Notes: u.g,
					synth: null,
					keydownTimer: null,
					keyLock: !1,
					lastKeyCode: "",
					lastKeyTime: 0
				}
			},
			mounted: function() {
				this.initPiano()
			},
			beforeDestroy: function() {
				this.keydownTimer = null
			},
			methods: {
				initPiano: function() {
					var t = this;
					return r()(o.a.mark(function e() {
						return o.a.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
							case 0:
								setTimeout(function() {
									t.computeEleSize(),
									t.pianoShow = !0
								},
								300),
								t.bindKeyBoradEvent(),
								t.setListener(),
								t.synth = c.a.load({
									instruments: "piano"
								}).toMaster();
							case 4:
							case "end":
								return e.stop()
							}
						},
						e, t)
					}))()
				},
				computeEleSize: function() {
					var t = $(".piano-key-wrap").width() / 36,
					e = 7 * t,
					i = .7 * e;
					$(".piano-key-wrap").height(e),
					$(".bkey").height(i)
				},
				setListener: function() {
					var t = this;
					window.onresize = this.computeEleSize,
					window.onorientationchange = this.computeEleSize,
					l.a.$on(u.b.AUTO_PLAY_NUM_SCORE,
					function(e) {
						t.playScoreByName(e)
					}),
					l.a.$on(u.b.AUTO_PLAY_XML_SCORE,
					function(e) {
						t.addToPlayQueue(e)
					}),
					l.a.$on(u.b.PAUSE_AUTO_PLAY,
					function(e) {
						t.pauseAutoPlay(e),
						t.pauseXMLPlay()
					}),
					l.a.$on(u.b.PAUSE_XML_AUTO_PLAY,
					function(e) {
						t.pauseXMLPlay()
					})
				},
				getNoteByKeyCode: function(t) {
					for (var e = void 0,
					i = this.Notes.length || 0,
					n = 0; n < i; n++) {
						var o = this.Notes[n];
						if (o.keyCode == t) {
							e = o;
							break
						}
					}
					return e
				},
				getNoteByName: function() {
					for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "C4", e = void 0, i = this.Notes.length || 0, n = 0; n < i; n++) {
						var o = this.Notes[n];
						if (o.name == t) {
							e = o;
							break
						}
					}
					return e
				},
				bindKeyBoradEvent: function() {
					var t = this;
					document.addEventListener("keydown",
					function(e) {
						var i = e.keyCode;
						t.DEV && console.log("keydown", i),
						16 == i && (t.enableBlackKey = !0),
						t.enableBlackKey && (i = "b" + i),
						i == t.lastKeyCode ? (t.keyLock || (t.playNoteByKeyCode(i), t.lastKeyCode = i, t.keyLock = !0), t.keydownTimer && (clearTimeout(t.keydownTimer), t.keydownTimer = null), t.keydownTimer = setTimeout(function() {
							t.keyLock = !1
						},
						120)) : (t.playNoteByKeyCode(i), t.lastKeyCode = i)
					},
					!1),
					document.addEventListener("keyup",
					function(e) {
						16 == e.keyCode && (t.enableBlackKey = !1),
						$(".wkey").removeClass("wkey-active"),
						$(".bkey").removeClass("bkey-active")
					},
					!1)
				},
				clickPianoKey: function(t, e) {
					var i = this.getNoteByKeyCode(e);
					i && this.playNote(i.name)
				},
				playNoteByKeyCode: function(t) {
					var e = this.getNoteByKeyCode(t);
					if (e) {
						this.playNote(e.name);
						var i = e.type;
						"white" == i ? $("[data-keyCode=" + e.keyCode + "]").addClass("wkey-active") : "black" == i && $("[data-keyCode=" + e.keyCode + "]").addClass("bkey-active")
					}
				},
				playNote: function() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "C4",
					e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "1n";
					if (this.synth) try {
						this.synth.triggerAttackRelease(t, e)
					} catch(t) {}
				}
			}
		}
	},
	FwAT: function(t, e, i) {
		"use strict";
		e.a = [{//快速入门歌曲列表
			name: "祝你生日快乐",
			content: "oopo sa<br> oopo ds <br> oo h f s a p<br> gg f s d s<br>\n              oopo sa<br> oopo ds <br> oo h f s a p<br> gg f s d fs",
			degree: 1,
			lyrics: "Happy Birthday to You <br>\n            Happy Birthday to You<br>\n            Happy Birthday to You <br>\n            Happy Birthday to You <br>",
			author: "hi科技",
			authorLink: "/"
		},
		{
			name: "小星星",
			content: "sshhjjh ggffdds <br/> hhggffd hhggffd <br/> sshhjjh ggffdds",
			degree: 1,
			lyrics: "Little Star <br>\n            Twinkle, twinkle, little star <br>\n            How I wonder what you are <br>\n            Up above the world so high <br>\n            Like a diamond in the sky <br>\n            When the blazing sun is gone",
			author: "hi科技",
			authorLink: "/"
		},
		{
			name: "新年好",
			content: "ssso fffs sfhhgfd dfgg fdfs sfdo ads <br/> ssso fffs sfhhgfd dfgg fdfs sfdo ads",
			degree: 1,
			lyrics: "新年好呀，新年好呀<br>\n            祝贺大家新年好<br>\n            我们唱歌，我们跳舞<br>\n            祝贺大家新年好",
			author: "hi科技",
			authorLink: "/"
		},
		{
			name: "因为爱情",
			content: "opsspsdfd spfdpfdsp passpfd fdd dff <br/>opsspsdfd spfdpfdsp passpfd spsfhd <br/> dfhf hhfdhh jklllklkkhf <br/> hfhj hjhhs psfdpfdpjh <br/> dfhf hhfdhh jklllklkkhf <br/> hfhj hjhhs psfdpfdpfd fdfs",
			degree: 3,
			lyrics: "",
			author: "hi科技",
			authorLink: "/"
		},
		{
			name: "隐形的翅膀",
			content: "osf hf dsss spoo <br> osf hhh jh hdfd sdd <br> jhf hhhjh fdsdp <br> ops fd fs <br> fhl lk jhjl fds ss sl jh fd sdd <br> 停顿 <br> fhl lk jhjl fds ss sl jh fd ds s",
			degree: 2,
			lyrics: "",
			author: "hi科技",
			authorLink: "/"
		},
		{
			name: "蒲公英的约定",
			content: " uio ooo pas ~ sadp ooo dsdf <br> sdff fgf df s ~ pasd ssp fg d <br> uo sf f gd dhas fghs sdf <br> uo sf f gd dhas fghs sd s <br> jh fds fgd jh as fghs sdf <br> uo sf f gd dhas fghs s d s",
			author: "hi科技",
			authorLink: "/"
		},
		{
			name: "纸短情长",
			content: "o fffd fs ddds dh ~ ss spsp o dddf po <br>\n              gggf gs ddds dh ~ sssp sp o fddss <br>\n              ssd f ff fds a jh ~ hjkl ff lkl kfh <br>\n              hjlh j ~ jhg hf ds ~ ps fdds dh sd <br>\n              ssd ffdf fds hhfh ~ hjk llll lkjk jf h <br>\n              hjlh j jhg hf ds ~ ps fdds dsps",
			degree: 4,
			lyrics: "纸短情长 <br>\n    你陪我步入蝉夏 越过城市喧嚣 <br>\n    歌声在游走 你榴花般的双眸 <br>\n    不见你的温柔 丢失花间欢笑 <br>\n    岁月无法停留 流云的等候 <br>\n    我真的好想你 在每一个雨季 <br>\n    你选择遗忘的 是我最不舍的 <br>\n    纸短情长啊 道不尽太多涟漪 <br>\n    我的故事都是关于你呀 <br>\n    怎么会爱上了他 并决定跟他回家 <br>\n    放弃了我的所有我的一切无所谓 <br>\n    纸短情长啊 诉不完当时年少 <br>\n    我的故事还是关于你啊 <br>\n    我真的好想你 在每一个雨季 <br>\n    你选择遗忘的 是我最不舍的 <br>\n    纸短情长啊 道不尽太多涟漪 <br>\n    我的故事都是关于你呀 <br>\n    关于你呀 <br>\n    怎么会爱上了他 并决定跟他回家 <br>\n    放弃了我的所有我的一切无所谓 <br>\n    纸短情长啊 诉不完当时年少 <br>\n    我的故事还是关于你啊",
			author: "hi科技",
			authorLink: "/"
		},
		{
			name: "同桌的你",
			content: "ooo oui o a ~ ppp pip o <br>\n              ooo oap i i ~ iii iuy t <br>\n              sss sop s f ~ ddd d s ap <br>\n              aaa aas d o ~ aas d s as\n              sss sop s f ~ ddd d s ap <br>\n              aaa aas d o ~ aas d s as",
			degree: 1,
			author: "hi科技",
			authorLink: "/"
		},
		{
			name: "晴天",
			content: "fdgf shk lkhs ~ sjj jhh hgf dfgf <br>\n              fghf ghk zkll ~ llh hjhg dfgh js j kk <br>\n              fdgf shk lkhs ~ sjj jhh hgf dfgf <br>\n              fghf ghk zkll ~ llh hjhg pasd fd s s<br>",
			degree: 2,
			lyrics: "晴天 ~ 周杰伦 <br>\n      刮风这天我试过握着你手 <br>\n      但偏偏雨渐渐大到我看你不见 <br>\n      还要多久我才能在你身边 <br>\n      等到放晴的那天也许我会比较好一点 <br>\n      从前从前有个人爱你很久 <br>\n      但偏偏风渐渐把距离吹得好远 <br>\n      好不容易又能再多爱一天 <br>\n      但故事的最后你好像还是说了拜拜",
			author: "hi科技",
			authorLink: "/"
		},
		{
			name: "千与千寻主题曲",
			content: "fg hhhh hjhg ffff fgfd ss sapa as d dfdf d <br>\n              fg hhhh hjhg ffff fgfd ss sapa asos df d ddss <br>\n              sdfs h f dhd spf sa sapa asos dfg gfds d <br>\n              sdfs h f dhd spp aso o p a sdos dfd ddss",
			degree: 3,
			author: "hi科技",
			authorLink: "/"
		},
		{
			name: "We Wish You A Merry Christmas",
			content: "o s sdsa ppp ~ d dfds aoo <br>\n              f fgfd s p ~ oo pdas <br>\n              s s sa a s a p o ~ d f d s h o <br>\n              oo pdas ~",
			degree: 1,
			author: "hi科技",
			authorLink: "/"
		},
		{
			name: "明天你好",
			content: "fhhfdhh sffsaff pssp ossf gfdsd <br>\n              ssdfd hh as ~ ppasa ff op <br>\n              psgf fs d fd ofd ~ ssdfd hh as <br>\n              ppasa ff op psgf hs dfg fgfgh fd ~ <br>\n              o dsf ssfjh hjkl llkjh hjkl llkjh hfs psdfd <br>\n              o dsf ssfjh hjkl llkjh hjkl llkjh hfs fd s a s ~",
			degree: 4,
			lyrics: "明天你好 <br>\n    看昨天的我们 走远了<br>\n    在命运广场中央 等待<br>\n    那模糊的 肩膀<br>\n    越奔跑 越渺小<br>\n    曾经 并肩往前的 伙伴<br>\n    在举杯 祝福后都 走散<br>\n    只是那个 夜晚<br>\n    我深深 的都留藏在心坎<br>\n    长大以后 我只能奔跑<br>\n    我多害怕 黑暗中跌倒<br>\n    明天你好 含着泪微笑<br>\n    越美好 越害怕得到<br>\n    每一次哭 又笑着 奔跑<br>\n    一边失去 一边在寻找<br>\n    明天你好 声音多渺小<br>\n    却提醒我 勇敢是什么<br>\n    ...",
			author: "hi科技",
			authorLink: "/"
		},
		{
			name: "青花瓷",
			content: "hhfdfdsp dfdso dfdsp sd of<br>\n              sdfh hf f d s ds p sdf h<br>\n              dsps sps spspo dsps sps sfdss<br>\n              opff fdf fdfhf fff dddd dsfd<br>\n              dsps sps spspo opfh hfh hfdss<br>\n              dsd fdds d sp dssp s s s<br>\n              hhfdfp dfhfd hhfdfo dfhds<br>\n              sdf hjhf hffd d sds d sd f hf<br>\n              hhfdfp dfhfd hhfdfo dfhds<br>\n              sdf hjhf hffd d o fd ds~",
			degree: 4,
			author: "hi科技",
			authorLink: "/"
		},
		{
			name: "一直很安静",
			content: "fhdfs sa s p gf d~ fhdfs osd ss ss<br>\n              fhdfs ss j j jh f~ fhdfs df gfds psas s~<br>\n              fhlk lh j h f~ fgfds hhh df<br>\n              fhlk lh j h f~ fgfds s ass~<br>\n\n              fhdfs sa s p gf d~ fhdfs osd ss ss<br>\n              fhdfs ss j j jh f~ fhdfs df gfds psas s~<br>\n              fhlk lh j h f~ fgfds hhh jf~<br>\n              fhlk l z x x~ fgfds s ass~",
			degree: 3,
			author: "hi科技",
			authorLink: "/"
		},
		{
			name: "好好",
			content: "fosf dgfd sdfs o~ gpsg fdgs spsf d<br>\n              dfg hhhd sp jf gfgh j~ jjkl lljs ddf gpsf f d ~<br>\n              停顿<br>\n              fosf dgfd sdfs o~ gpsg fdgs spsf d<br>\n              dfg hhhd sp jf gfgh j~ jjkl lljl ll j xz~<br>\n              高潮<br>\n              hlz xhcx zlz lk lf zl kjh jsgj jhh kl <br>\n              h cxzl h~<br>\n              hlz xhcx zlz lk lf zl kjh jsgj jhh kl <br>\n              h cxzl z~<br>\n              hlz xhcx zlz lk lf vv bv jsgj jhh kl <br>\n              h cxzl  xz bn m mmmmm~",
			degree: 5,
			author: "hi科技",
			authorLink: "/"
		},
		{
			name: "突然好想你(选段)",
			content: "W U UT YT R T~ T I IU IU I O Y<br>\n    T R T PP A D S A P OO P U<br>\n    T R T O OO I E R T<br>\n    W U UT YT R T~ T I IU IU I O Y<br>\n    T R T P~ P A DSAP O OPU<br>\n    T R T O OO IERT<br>\n    P A S F D<br>\n    S D O D S<br>\n    P A S F D S F<br>\n    P A S F D<br>\n    H D G FDFS<br>\n    P A S F D S S",
			degree: 2,
			lyrics: "\n      最怕空气突然安静<br>\n      最怕朋友突然的关心<br> \n      最怕回忆突然翻滚<br> \n      绞痛着不平息<br> \n      最怕突然听到你的消息<br> \n      想念如果会有声音<br> \n      不愿那是悲伤的哭泣<br> \n      事到如今<br> \n      终於让自已属於我自已<br> \n      只剩眼泪还骗不过自己<br> \n      突然好想你<br> \n      你会在哪里<br> \n      过的快乐或委屈<br> \n      突然好想你<br> \n      突然锋利的回忆<br> \n      突然模糊的眼睛",
			author: "hi科技",
			authorLink: "/"
		},
		{
			name: "送别",
			content: "O UOS P S O<br/>\n    O TYU YTY<br/>\n    O UOS AP S O<br/>\n    O YUI RT<br/>\n    PSS A PAS<br/>\n    PASPPOUTY<br/>\n    O UOS AP SO<br/>\n    O YUI RT",
			degree: 1,
			lyrics: "长亭外，古道边，<br/>\n    芳草碧连天。<br/>\n    晚风拂柳笛声残，<br/>\n    夕阳山外山。<br/>\n    天之涯，地之角，<br/>\n    知交半零落；<br/>\n    一壶浊酒尽余欢，<br/>\n    今宵别梦寒。<br/>\n    长亭外，古道边，<br/>\n    芳草碧连天。<br/>\n    问君此去几时还，<br/>\n    来时莫徘徊。<br/>\n    天之涯，地之角，<br/>\n    知交半零落；<br/>\n    人生难得是欢聚，<br/>\n    惟有别离多。",
			author: "hi科技"
		},
		{
			name: "天之大",
			content: "JH JLJH LZX ZLJL<br/>\n    JHJLZXZLZ<br/>    \n    JH JLJH LZX ZLJL<br/>    \n    JHJLZXZLL<br/>    \n    XVV XVBMB XXVZL<br/>    \n    XVV XVBMBXZ<br/>    \n    XVV XVBMB XXVZL<br/>    \n    JHJLZXZLL",
			degree: 1,
			lyrics: "妈妈 月光之下 静静的 我想你了<br/>\n    静静淌在血里的牵挂<br/>    \n    妈妈 你的怀抱 我一生 爱的襁褓<br/>    \n    有你晒过的衣服味道<br/>    \n    天之大 唯有你的爱 是完美无瑕<br/>    \n    天之大 记得你用心传话<br/>    \n    天之大 唯有你的爱 我交给了他<br/>    \n    让他的笑像极了 妈妈",
			author: "hi科技"
		},
		{
			name: "天空之城",
			content: "PAS ASFA~ UP OPSO~ IUI UISU SSSA (^I) IAA <br/>\n\n    PAS ASFA~ UP OPSO~ YUI SA SD FS~ SAP AOP <br/>\n    \n    SDF DFHD OOS ASFF <br/>\n    \n    PAS ASD SOO~ GFDSF~ F J J H H FDS<br/>\n    \n    S DS DHF~ F J J H H FDS ~ S DS DAP",
			degree: 2,
			author: "hi科技"
		},
		{
			name: "小幸运",
			content: "uuo ossa apup~ ppa affa aouo<br/>\n              uuo ossa apup~ pa pa f d s<br>\n              uuo ossa apup~ ppa affa aouo<br>\n              uuo ossa asup~ pa pa f d s<br>\n              fdsa pppp pf d~ dsap ooou od s~<br>\n              sso ot u yp~ ppp sp sp ssss fd d~<br>\n              o fdsd fodf odf~ dd fgfda sups upa~<br>\n              aaf hfsa pgg~ hgf off~ gfs idd~ dsf ds f d s~<br>\n              fodf odf~ dd fghda sups upa~<br>\n              aaf hfsa pgg~ hgf off~ gfs idd~ fss f d s~",
			degree: 4,
			author: "hi科技",
			authorLink: "/"
		},
		{
			name: "莫斯科郊外的晚上",
			content: "t(^y)o(^y)i ~ (^y)y oit <br>\n    (^y)o(^p)(^p)s(^p)(^o)o <br>\n    padso <br>\n    ytoi(^o) <br>\n    (^p)(^o)oi(^y) oit",
			degree: 2,
			lyrics: "《莫斯科郊外的晚上》<br/>\n    深夜花园里四处静悄悄<br/>\n    只有树叶在沙沙响<br/>\n    夜色多么好<br/>\n    令人心神往<br/>\n    多么迷人的晚上<br/>\n    我的心上人坐在我身旁<br/>\n    悄悄看着我不声响<br/>\n    我愿对你讲<br/>\n    不知怎样讲<br/>\n    多少话儿留在心上<br/>\n    长夜快过去天色蒙蒙亮<br/>\n    衷心祝福你好姑娘<br/>\n    但愿从今后<br/>\n    你我永不忘<br/>\n    莫斯科郊外的晚上",
			author: "hi科技"
		},
		{
			name: "Lemon【Unnatural主题曲】",
			content: "SDF SP D A OU APOT OU<br/>\n    YUI S ASO IUI S APO<br/>\n    SD F SP D A OU A P OT O U<br/>\n    YUI O IO U O S F D DD SS<br/>\n    P AS AP OFF D FG FD SDO<br/>\n    I OP OI UOSS A AP AS<br/>\n    DFDS PS FH DS DFDS PS FH DS<br/>\n    DFDS PS FH JH HI KH FH D<br/>\n    DFDS PS FH DS SSDF GFDAS<br/>\n    SA PASD SOUO PDA SS<br/>\n    SA PASD SOSD FGD SS",
			degree: 3,
			author: "hi科技"
		},
		{
			name: "西海情歌",
			content: "\n    U OP SP D~ S DF FD DSP~ <br/>\n    U O PS D D D DS D DF FD DSP~ <br/>\n    U OP SP D~ DS S DF FD DSP~ <br/>\n    SS DF HHHF HJJH JJJHF HJLLLL LJJL JJJHF <br/>\n    HFDDDSP SDD DFHJJHF <br/>\n    SDHHHFHJJHJJJHF HJLLLLLJJLJJJHF <br/>\n    HFDDDSP SDD DFD S~ P~",
			degree: 2,
			author: "hi科技"
		},
		{
			name: "绿色",
			content: "\n      fdfp ppph d dd <br/>\n      fdfooouoh f ff<br/>\n      fhfspss <br/>\n      fhfspsd <br/>\n      sdsgffddsdsg fdf",
			lyrics: "\n    若不是你突然闯进 我生活 <br/>\n\n    我怎会把死守的寂寞 放任了 <br/>\n    \n    爱我的话你都说 <br/>\n    \n    爱我的事你不做 <br/>\n    \n    我却把甜言蜜语当做你爱我的躯壳\n    ",
			degree: 1,
			author: "hi科技"
		},
		{
			name: "我的中国心",
			content: "e uyutre upo uytyu uop apouy ttyu yurewe <br/>\n              e uyutre upo uytyu uop apouy ttyu yurewe <br/>\n              uouu uspp pspo tytyu <br/>\n              uspp psdf fdaop <br/>\n              e u yutre upouytyu <br/>\n              uop apo uy ttyu y u apop",
			degree: 2,
			author: "hi科技",
			authorLink: "/",
			lyrics: "河山只在我梦萦 <br>\n             祖国已多年未亲近 <br>\n             可是不管怎样也改变不了 <br>\n             我的中国心 <br>\n             洋装虽然穿在身 <br>\n             我心依然是中国心 <br>\n             我的祖先早已把我的一切 <br>\n             烙上中国印 <br>\n             长江 长城 黄山 黄河 <br>\n             在我心中重千斤 <br>\n             无论何时 无论何地 <br>\n             心中一样亲 <br>\n             流在心里的血 <br>\n             澎湃着中华的声音 <br>\n             就算身在他乡也改变不了 <br>\n             我的中国心"
		},
		{
			name: "伊莎贝拉之歌《约定的梦幻岛》OST",
			content: "\n    E(^T)YUPOIU TURYE <br/>\n    WEUIOUYAO UOPUOPUYEOU <br/>  \n    E(^T)YUPOIU TURYE <br/> \n    WEUIOUYAO UOPUOPUYEOU <br/> \n    (^T)YUPOIU TUOUP <br/>\n    PSAOUPFA OPASAPASDAF <br/> \n    UPASAPOUYYTOU ERTYTYIUYU <br/>\n    UPASASDODGFDS ERTYUEWE <br/>\n    UPASAPOUYYTOU ERTYTYIUYU <br/>\n    UPASASDODGFDS HSPFAODAAP",
			lyrics: "",
			degree: 3,
			author: "hi科技",
			authorLink: "/"
		},
		{
			name: "cannon in D",
			content: "\n    [tf] [wd] [es] [0a] [qp] [8o] [qp] [wa] <br/>\n    [tsf] o [wad] o [eps] u [0oa] u [qip] t [8uo] t [qip] t [woa] y <br/>\n    [tus] a s [wa] [es] f [0h] j [qg] f d g [8f] d s a [qp] o i u [wy] u i <br/>\n    [tuo] o [wo] p o i [etu] u [0u] i u y [qt] E e E [8t] t [qt] E e t [wr] t y <br/>\n    [8wu] [5ry] [6et] [3r] [4e] [1w] [4e] [5t] r [18wtu]",
			lyrics: "",
			degree: 3,
			author: "hi科技",
			authorLink: ""
		},
		{
			name: "遇见",
			content: "OU OY UYT TRERTRTYU </br> OU OD SAS TRERTRTYT </br> OPASASAPOPO TYUIUIOTYU </br> OPASASADSDSFO TYUIUIUYTRT </br> OPASASDSAPO TYUIUIOTTPO </br> OPASASDSDFO  TYUIUIOTTPO </br> OPASASDSDFO  TYUYUYOTYUT </br> OPASASPAOIO </br> UUUIOUWW YYYUIYWW </br> TTTYUYRT RERTR </br> EWEPO YIUYT </br> TREYYTEERT ",
			degree: 3,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "婚礼进行曲",
			content: "TIII TOUI TIAAPOIUIO TIII TOUI TIPSPIYOPIAPOYY UIOO APOYY UIOO TIII TOUI TIPSPIYOPIYOPII ",
			degree: 1,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "童话",
			content: "OSASO OSASO OSAS SSPPOOSASO OFDDS OSASP PPSJH DDGGFF FFADSSAS SASG OHGFDDDGGFF FFLKJKL LDSJ JJHHHOHGFFGF FGF GFDSSFHJ JJHDDGF SFHJ JJHDDGFGFDS DFPPSSAS",
			degree: 1,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "菊花台",
			content: "UUYU UOUYU TTYUOU YYTY </br>    U OUPO POOUO WUYYOUYYYTY </br>    UUYU UOUYU TTYUOU YYTY </br>    U OUPO POOUO UYUOUYYT </br>    TYUUOP PFFDSPO POUYT ETYYTY </br>    TYUUOP PFDSSDS OOUASTYUYT ",
			degree: 1,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "北京欢迎你",
			content: "FHFDFDFFDPS FD </br>DSPSDFHDFJHHDS </br> DSPSDFHDFJHHF </br> DFDSHJFPFDDS </br> FHLHJJH FF HH FH JL ZL HF D H F F </br> FH LH JL ZL HF HLJ FD FH XZ LL </br> ",
			degree: 1,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "致爱丽斯",
			content: "FDFDFADSPTUPAUOASUFDFDFADSPTUPAUSAPASDFOGFDIFDSUDSAAUFFFFDFDFADSPTUPAUOASUFDFDFADSPTUPAUSAPSGFFDDGJHGFDSAPPOPASDDFGPSDASDFHDASDFHDAFFFFFD ",
			degree: 2,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "约定",
			content: "OSDFDSFDOO UPASAPSAUO POOIISUUDS </br>    DFGFFDSPD OSDFDSFDAO FPASAPSAUO </br>    POOIISDFS PASPSJHH DSHF FDSASPUP </br>    SDSJG GFGPASD FGHHHJS </br>    HADS DFPSGFGHD DSHF FDSASPUP </br>    SDSJG GFGPASD FGHHHJS </br>    HADS DFGPGFSDS ",
			degree: 1,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "美丽的神话",
			content: "PFA PSDSF PJHJHDGF </br>    PJHDFGF S PFDAP </br>    PFAPSDSF PJHJHDGF </br>    PJHDFGFDS PDSAP </br>    PASDFSAO PSDFF </br>    PASDFSAOPSDSS PDSAP </br>    PASDFSAO PSDFF </br>    PASDFSAOPSDSS SSDFSAOSAPAJ",
			degree: 2,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "有没有人告诉你",
			content: "UPPPPPPPPUIOI UOOOOOOOPAAU </br>    UPPPPPPPPFFD AAAAAUSASA </br>    UPPPPPPPPUIOI YOOOOOOOPAAU </br>    UPPPPPPPPFFD AAAAAAAPAP </br>    FJFFFFSPUUFD UHHHHHHHJKKF </br>    FJFFFFSPUUFD DDDDDUAAP ",
			degree: 2,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "好好恋爱",
			content: "UIOOOOOIUYYO AASASSSDFAAO </br>    TPPPUPSOOOOUT IIIUIOPPPSPO </br>    UIUUIOOOOUYTTS APOPO </br>    UTTPPOOOIU SSSSASDD </br>    OGFOOGDOGFGFGFDS SAPPFPFPOOFOFO </br>    GFGFSD OGFOOGHDOGFFFGFDF </br>    SAPPFPFPOOFOFDSP SDAPAPAFDSS",
			degree: 1,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "安静-周杰伦",
			content: "FFFFDSADDDS OFDSSSOFDSSD </br>    FFFFDSADDDS OFDSSSOFDSSDDFG </br>    GGGGFDSSSDD OHHHGFDDDFF </br>    PGFGFDSSASO FGFGFDSDH </br>    OFGHGFHOFGHGFH OFGHGFSDDDFS </br>    HHSSASSHHSSASS GGFFDDSGGFFDDS </br>    OFGHGFHOFGHGFH OFGHGFSDDDFS </br>    HHSSASSHHSSASS GGFFDDSSGFDSPSS",
			degree: 2,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "月亮代表我的心",
			content: "OSFHSAFH HJKLJH FDSSS FDSSS DFDSPDFD OSFHSAFH HJKLJH </br>    DSSS FDSSS DFDPASDS FHFDSHA PAPAPOF HFDSHA PASSSDFD OSFHSAFH HJKLJH </br>    FDSSS FDSSS DFDPASDS",
			degree: 2,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "卡农　(括号是一起按) ",
			content: "T-UOS W-YOA E-TUP 0-RYO </br>    Q-ETI 8-WTU Q-ETI W-RYO </br>    (TF)-UOS (WD)-RYO (SE)-TUP (A0)-RUO </br>    (PQ)-ETI (O8)-0WT (PQ)-ETI (AW)-RYO </br>    SAST (R 9 )OYU (0T)SAP (0A)FHJ </br>    (QG)FDG (F8)DSA (QP)OIU (WY)IUY </br>    (WT)YUI (WR)YOI (EU)POI (0O)IUY </br>    (QT)EPA (8S)APO (QI)UYP OPO </br>    (HU)FGH-FG(HW)OPASDFG </br>    (EF)SDF-UI(RO)POIOUIO </br>    (EI)POI-UY(UW)YTYUIOP </br>    (EI)POP-AS(RO)PASDFGH </br>    (HY)FGH-FG(HW)OPASDFG </br>    (EF)SDF-UI(RO)POIOUIO </br>    (EI)POI-UY(WU)YTYUIOP </br>    (EI)POP-AS(RO)PASDFGH </br>    (TF)-UOS (WD)-RYO (SE)-TUP (A0)-RUO </br>    (PQ)-ETI (O8)-0WT (PQ)-ETI (AW)-",
			degree: 5,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "不能说的秘密",
			content: "WTTT WRRR WTTT WYYY WTTT WRRR WTTT WYYY WIIII IUU IIIOUYTRRT </br>    WOOOO OII OOOOOIIUUY WIIII IUU IIIOUYTRRYT ETOPT OOOOOIIUUY </br>    TSASSOOOOIIU TSASSOOOODDS TSASAPTAPAPO TPOPOIIUIOPPO </br>    TSASSOOOOIIU TSASSOOOODDS TSASAP TAPAPO TPOPOIIUIOPPO TOTIU TTOTIUT",
			degree: 1,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "往事难忘",
			content: "T TYU UIO POU OIUY IUYT </br>    T TYU UIO POU OIUY UYT </br>    OIUY WWIUYT OIUY IUYT </br>    T TYU UIO POU OIUY UYT",
			degree: 1,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "梁祝",
			content: "OUYT YREW </br>    APAOPIUO YUOYUIUYT </br>    ORYETW ETW </br>    0WETY ETW </br>    OSPOUOY </br>    YUREWETY0TEWETW </br>    UORYETW 0W0WERYE </br>    WETYOUYUYTEW0T ETEW0WETW </br>    UOYUYTREW",
			degree: 1,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "大海",
			content: "EWTTTT WETTYT ETYYYY TEYYUY </br>    UOPPOP OUYUYTE WETTTTYT </br>    UOPPPPSPOOPO UYTTTTYU </br>    UYTTTTSPOOPO UOPSSPO </br>    UOPPPPSPOOPO UYTTTTOU </br>    UYTTTTYUOOUO UOP EUYTT",
			degree: 1,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "虫儿飞",
			content: "UUUIOUYY TTTYUURR EUY EUY EUYTT </br>    UUUIOUYY TTTYUURR EUY EUY EUYTT </br>    UYO IUY OIUIOUY TEUY TEYT IUIUT TIUIUTYT",
			degree: 2,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "雪绒花",
			content: "0WY TWQ 000QWEW </br>    0WY TWQ 0WWERTT </br>    Y WWREW0WT </br>    ETYTRW </br>    0WY TWQ </br>    0WWERTT",
			degree: 1,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "痴心绝对",
			content: "SDFFFGFDDSDDHD SASSSFFSSPAAFA </br>    POPPPGGFHS POPPPGGSSPD </br>    SSDFFFGFDDSDDHD SASSSFFSSPAAFA </br>    POPPGGFHS POPPPGGSSSAS",
			degree: 3,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "画心",
			content: "OUU YTYYOU OUUYTYOmU OUUYTYTRTYRWE 0WE EUYTRWE WWEETREW90 00WERTWTYU </br>    OUU YTYTRTYRWE 0WEEUYTRWE 0WETREWE0 0WEERTWTYU OUU YTYTRTYRWE 0WEEUYTRWE </br>    OUU YTYTRTYRWE 0WEEUYTRWE OUUYTYYOU OUUYTYOmU OUUYTYTRTYRWE 0WEEUYTRWE",
			degree: 1,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "蜗牛",
			content: "U UUIUYUYT TTI IYTTYU TTO OPOIUI RT WWU UIUYUT WWT TWTYUIO TSAA ASAPPAOTIOP PASDFO WEOI IOIUYTY WWT TWTYUIO TSAA ASAPPAO TIOP PASDFO WEOI IUYTTRT</br>    ",
			degree: 1,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "神秘园",
			content: "UPAS AS SDAPA ASPOP OU UPAS AS SDAPA ASPOP OP ASHJ JKHGH ASFG GHFDF ASHJ JKHGH HJGFG GHFDF UPAS AS SDAPA ASPOP OU UPAS AS SDAPA ASPOP OP",
			degree: 1,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "无赖",
			content: "TYUUYUIUYRW ERTTYUUPOUO UOPPPOI UIOOIU UIIOITY TYUUYUIUYRW ERTTYUUPOUO UOPPPOI UIOOIU UIUTYT TTWERTTYUTW WQQEWQW WEERUYYTRT TTEWER WWWUYTTYUTO UUOPPASOU UUOPPPIPAPOIOU UIUIOPOO WUYTTYUTO UUOPPASAU UUOPPPIPAPOUYT UIUIOPOOUYTT",
			degree: 1,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "海阔天空",
			content: "FDS DFHHHHJH JKLLLLLLKJHJ </br>    JHH HFDS FGFDDFDD FDDDSSSS DSS </br>    JKLLLLLLKJHHHFDS </br>    LLLLZZZLZX XZL </br>    LLLLZZ HHXZL </br>    LLLLZZZZLKL </br>    JJKJKL LLZLZX XZXL",
			degree: 1,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "下一站天后",
			content: "FFFHD DHSSSFP GFGJF GHDDPSD FDFHHDFLKHHJ GFGHPSFDS </br>    FHKLKJHH FGHJGGFD DSDFHH FJFDSD PSFDDFH </br>    LKJKJ HHSFHH JJJGFD DDKH FFHS FFDDD JFH LKJKJHH SFHH JJJJLKJKLHHFHJHHGPAS",
			degree: 3,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "红河谷",
			content: "WTUUUUYUYT </br>    WTUTUOIUY </br>    OIUUYTYUOI </br>    EEWRTYUYT </br>    OTUUUYUYT </br>    WTUUUOIUY </br>    OIUUYTYUOII </br>    EEWRYUYT",
			degree: 1,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "一千年以后",
			content: "STYUPO IUTUY STYUPAO UP AAASDSA SASFF</br>    APAO PPASDSDGFDDFS SASF APAOPS</br>    </br>    SSSDFGFSFD OSD FDSOD FDSAPUA</br>    </br>    SAPASDOFF FGFSDD OSD FDSOD DFDSAPDA</br>    </br>    SAPOPSODS FFGFD SDFDSDSODS",
			degree: 3,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "男儿当自强",
			content: "PSPSPOP</br>    PSPSOPD</br>    FSDH FDFS</br>    DFSDP</br>    SDPSO</br>    PSDSPO PSO</br>    PSPOP SDSPO</br>    PSOPD FHDFJ</br>    FJHGFHFDF</br>    FHJKJHF FHJKHJK</br>    JKJHFHJKJHFHD</br>    FDSDHGFHD</br>    DFHJFHFDS PDS</br>    PSDFA AFDAP</br>    PSPOP</br>    PSPOP</br>    FHDFJ</br>    ",
			degree: 3,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "回到过去 ",
			content: "TUUYYTRT </br> TRREEW0E </br> EWWTTUUY </br> YTTTREW </br> TUUYYTRYT </br> TRREEW0R </br> EWWW </br> WQ0WQ </br> TUUY </br> YYYTYUUY </br> WRTTRTPO </br> TYTUTTRWW </br> WTYTUTIIUY </br> WTYUU </br> UYUIIUUY </br> YTUUUYYTRT </br> TYTUUUU </br> TTOOUUU </br> TTYYTTTETETY </br> WTYRT",
			degree: 1,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "亲爱的那不是爱情 ",
			content: "SSSAPPOPOOIUO </br> TPPPPOSUUYYTY </br> UYTRTOO </br> OTPOOO </br> PASSSOIUYTT </br> SSSAPPOPOOIUO </br> TPPPPOSUUYYTY </br> UYTRTOO </br> OTPOOO </br> PASSSOIUYTT </br> UUODFOAASP </br> IIPHGPSSDA </br> OOUDSDFDSU </br> SAOSAAOFFGD </br> UUODFOAASP </br> IIPHGPSSDA </br> OOUDSDFDSS </br> PSHGFDSS",
			degree: 3,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "哆啦A梦主题曲",
			content: "WTTUPUO </br> OPOUIUY </br> EYYIAAPOIIUERTY </br> WTTUPUO </br> OPOUIUY </br> EYYIAAPOIIUERYT </br> PPOIOPO </br> YUIYO </br> POIYAPOPOI </br> OPUYT",
			degree: 3,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "想唱就唱",
			content: "SASDSO UIIIOU </br>    SASDSO OPPPSA </br>    SASDFSOU SDSOU </br>    SASDFSOS GFDSF </br>    FGHJ SSDFD </br>    DFGH HGFDF </br>    FGHJHH KKLKHDF GFGH </br>    FGHJ SSDFD </br>    DFH FKKFL LKLJHSS JHGFGH JH </br>    FGHJ SSDFD </br>    DFGH HGFDF </br>    FGHJHH KKLKHDF GFGH </br>    FGHJ SSDFD </br>    DFH FKKFL LKLJHSS JHGFGH",
			degree: 3,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "星语心愿",
			content: "JLKJHJF JHJLKLKJKL　　</br>    LZXXXXZ LKJKH JLKJHJ　　</br>    FHJXZLKL LKJJJJHHJF　　</br>    HHJXZLKLL LKJJHKJ",
			degree: 2,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "千千阙歌",
			content: "TTYU OPSAAAOU YYYUI PSFDDAOTTYU OPSAAAOU YYYUI PSFDDAOPOPOPAAPA DDDDASDFFFDDDSF AOPOPSDFFDF FDSD SPP OPSD FFDF FHJHFFFFDDSDSP FFGFDSD FF F DDSD SPSS",
			degree: 3,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "欢乐颂",
			content: "U U I O O I U Y T T Y U U Y YU U I O O I U Y T T Y U Y T T Y Y U T Y U I U T Y U I U Y T Y W U U I O O I U Y T T Y U Y T T ",
			degree: 1,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "会呼吸的痛",
			content: "HJLJXXJZ ZZLKLZXZHL LKJKLGGGLLZLHHH HCXZXX HJLJXXJZ ZZLKLZXZHLL LKJKLGGGLLZLHHH HJKLLKLL ",
			degree: 3,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "夜曲",
			content: "PA SSSSAFF JJJHGHSS</br>    GGGHFAFD DSASSA</br>    SSSSAFF JJJHGHSS</br>    GGG FDASP",
			degree: 2,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "暗香",
			content: "UIURTUP SAOU UIURTUP </br>    SAOF PPPSFOIPD DFGDFGF </br>    PDFGDFGP PFGHFGHP DFGPG </br>    HIDFDFGF </br>    UIURTUPSAOU </br>    UIURTUPSAOP ",
			degree: 3,
			author: "",
			authorLink: "",
			lyrics: ""
		},
		{
			name: "美丽的神话 ",
			content: "PFA PSDSF PJHJHDGF </br>    PJHDFGF S PFDAP </br>    PFAPSDSF PJHJHDGF </br>    PJHDFGFDS PDSAP </br>    PASDFSAO PSDFF </br>    PASDFSAOPSDSS PDSAP </br>    PASDFSAO PSDFF </br>    PASDFSAOPSDSS SSDFSAOSAPAJ",
			degree: 2,
			author: "",
			authorLink: "",
			lyrics: ""
		}]
	},
	HhN8: function(t, e) { !
		function(e) {
			"use strict";
			function i(t, e, i, n) {
				var s = e && e.prototype instanceof o ? e: o,
				r = Object.create(s.prototype),
				a = new f(n || []);
				return r._invoke = u(t, i, a),
				r
			}
			function n(t, e, i) {
				try {
					return {
						type: "normal",
						arg: t.call(e, i)
					}
				} catch(t) {
					return {
						type: "throw",
						arg: t
					}
				}
			}
			function o() {}
			function s() {}
			function r() {}
			function a(t) { ["next", "throw", "return"].forEach(function(e) {
					t[e] = function(t) {
						return this._invoke(e, t)
					}
				})
			}
			function l(t) {
				function e(i, o, s, r) {
					var a = n(t[i], t, o);
					if ("throw" !== a.type) {
						var l = a.arg,
						u = l.value;
						return u && "object" == typeof u && _.call(u, "__await") ? Promise.resolve(u.__await).then(function(t) {
							e("next", t, s, r)
						},
						function(t) {
							e("throw", t, s, r)
						}) : Promise.resolve(u).then(function(t) {
							l.value = t,
							s(l)
						},
						r)
					}
					r(a.arg)
				}
				function i(t, i) {
					function n() {
						return new Promise(function(n, o) {
							e(t, i, n, o)
						})
					}
					return o = o ? o.then(n, n) : n()
				}
				var o;
				this._invoke = i
			}
			function u(t, e, i) {
				var o = x;
				return function(s, r) {
					if (o === P) throw new Error("Generator is already running");
					if (o === k) {
						if ("throw" === s) throw r;
						return y()
					}
					for (i.method = s, i.arg = r;;) {
						var a = i.delegate;
						if (a) {
							var l = c(a, i);
							if (l) {
								if (l === F) continue;
								return l
							}
						}
						if ("next" === i.method) i.sent = i._sent = i.arg;
						else if ("throw" === i.method) {
							if (o === x) throw o = k,
							i.arg;
							i.dispatchException(i.arg)
						} else "return" === i.method && i.abrupt("return", i.arg);
						o = P;
						var u = n(t, e, i);
						if ("normal" === u.type) {
							if (o = i.done ? k: O, u.arg === F) continue;
							return {
								value: u.arg,
								done: i.done
							}
						}
						"throw" === u.type && (o = k, i.method = "throw", i.arg = u.arg)
					}
				}
			}
			function c(t, e) {
				var i = t.iterator[e.method];
				if (i === m) {
					if (e.delegate = null, "throw" === e.method) {
						if (t.iterator.
						return && (e.method = "return", e.arg = m, c(t, e), "throw" === e.method)) return F;
						e.method = "throw",
						e.arg = new TypeError("The iterator does not provide a 'throw' method")
					}
					return F
				}
				var o = n(i, t.iterator, e.arg);
				if ("throw" === o.type) return e.method = "throw",
				e.arg = o.arg,
				e.delegate = null,
				F;
				var s = o.arg;
				return s ? s.done ? (e[t.resultName] = s.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = m), e.delegate = null, F) : s: (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, F)
			}
			function p(t) {
				var e = {
					tryLoc: t[0]
				};
				1 in t && (e.catchLoc = t[1]),
				2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]),
				this.tryEntries.push(e)
			}
			function h(t) {
				var e = t.completion || {};
				e.type = "normal",
				delete e.arg,
				t.completion = e
			}
			function f(t) {
				this.tryEntries = [{
					tryLoc: "root"
				}],
				t.forEach(p, this),
				this.reset(!0)
			}
			function d(t) {
				if (t) {
					var e = t[b];
					if (e) return e.call(t);
					if ("function" == typeof t.next) return t;
					if (!isNaN(t.length)) {
						var i = -1,
						n = function e() {
							for (; ++i < t.length;) if (_.call(t, i)) return e.value = t[i],
							e.done = !1,
							e;
							return e.value = m,
							e.done = !0,
							e
						};
						return n.next = n
					}
				}
				return {
					next: y
				}
			}
			function y() {
				return {
					value: m,
					done: !0
				}
			}
			var m, g = Object.prototype,
			_ = g.hasOwnProperty,
			v = "function" == typeof Symbol ? Symbol: {},
			b = v.iterator || "@@iterator",
			S = v.asyncIterator || "@@asyncIterator",
			T = v.toStringTag || "@@toStringTag",
			w = "object" == typeof t,
			A = e.regeneratorRuntime;
			if (A) return void(w && (t.exports = A));
			A = e.regeneratorRuntime = w ? t.exports: {},
			A.wrap = i;
			var x = "suspendedStart",
			O = "suspendedYield",
			P = "executing",
			k = "completed",
			F = {},
			C = {};
			C[b] = function() {
				return this
			};
			var D = Object.getPrototypeOf,
			E = D && D(D(d([])));
			E && E !== g && _.call(E, b) && (C = E);
			var U = r.prototype = o.prototype = Object.create(C);
			s.prototype = U.constructor = r,
			r.constructor = s,
			r[T] = s.displayName = "GeneratorFunction",
			A.isGeneratorFunction = function(t) {
				var e = "function" == typeof t && t.constructor;
				return !! e && (e === s || "GeneratorFunction" === (e.displayName || e.name))
			},
			A.mark = function(t) {
				return Object.setPrototypeOf ? Object.setPrototypeOf(t, r) : (t.__proto__ = r, T in t || (t[T] = "GeneratorFunction")),
				t.prototype = Object.create(U),
				t
			},
			A.awrap = function(t) {
				return {
					__await: t
				}
			},
			a(l.prototype),
			l.prototype[S] = function() {
				return this
			},
			A.AsyncIterator = l,
			A.async = function(t, e, n, o) {
				var s = new l(i(t, e, n, o));
				return A.isGeneratorFunction(e) ? s: s.next().then(function(t) {
					return t.done ? t.value: s.next()
				})
			},
			a(U),
			U[T] = "Generator",
			U[b] = function() {
				return this
			},
			U.toString = function() {
				return "[object Generator]"
			},
			A.keys = function(t) {
				var e = [];
				for (var i in t) e.push(i);
				return e.reverse(),
				function i() {
					for (; e.length;) {
						var n = e.pop();
						if (n in t) return i.value = n,
						i.done = !1,
						i
					}
					return i.done = !0,
					i
				}
			},
			A.values = d,
			f.prototype = {
				constructor: f,
				reset: function(t) {
					if (this.prev = 0, this.next = 0, this.sent = this._sent = m, this.done = !1, this.delegate = null, this.method = "next", this.arg = m, this.tryEntries.forEach(h), !t) for (var e in this)"t" === e.charAt(0) && _.call(this, e) && !isNaN( + e.slice(1)) && (this[e] = m)
				},
				stop: function() {
					this.done = !0;
					var t = this.tryEntries[0],
					e = t.completion;
					if ("throw" === e.type) throw e.arg;
					return this.rval
				},
				dispatchException: function(t) {
					function e(e, n) {
						return s.type = "throw",
						s.arg = t,
						i.next = e,
						n && (i.method = "next", i.arg = m),
						!!n
					}
					if (this.done) throw t;
					for (var i = this,
					n = this.tryEntries.length - 1; n >= 0; --n) {
						var o = this.tryEntries[n],
						s = o.completion;
						if ("root" === o.tryLoc) return e("end");
						if (o.tryLoc <= this.prev) {
							var r = _.call(o, "catchLoc"),
							a = _.call(o, "finallyLoc");
							if (r && a) {
								if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
								if (this.prev < o.finallyLoc) return e(o.finallyLoc)
							} else if (r) {
								if (this.prev < o.catchLoc) return e(o.catchLoc, !0)
							} else {
								if (!a) throw new Error("try statement without catch or finally");
								if (this.prev < o.finallyLoc) return e(o.finallyLoc)
							}
						}
					}
				},
				abrupt: function(t, e) {
					for (var i = this.tryEntries.length - 1; i >= 0; --i) {
						var n = this.tryEntries[i];
						if (n.tryLoc <= this.prev && _.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
							var o = n;
							break
						}
					}
					o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
					var s = o ? o.completion: {};
					return s.type = t,
					s.arg = e,
					o ? (this.method = "next", this.next = o.finallyLoc, F) : this.complete(s)
				},
				complete: function(t, e) {
					if ("throw" === t.type) throw t.arg;
					return "break" === t.type || "continue" === t.type ? this.next = t.arg: "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e),
					F
				},
				finish: function(t) {
					for (var e = this.tryEntries.length - 1; e >= 0; --e) {
						var i = this.tryEntries[e];
						if (i.finallyLoc === t) return this.complete(i.completion, i.afterLoc),
						h(i),
						F
					}
				},
				catch: function(t) {
					for (var e = this.tryEntries.length - 1; e >= 0; --e) {
						var i = this.tryEntries[e];
						if (i.tryLoc === t) {
							var n = i.completion;
							if ("throw" === n.type) {
								var o = n.arg;
								h(i)
							}
							return o
						}
					}
					throw new Error("illegal catch attempt")
				},
				delegateYield: function(t, e, i) {
					return this.delegate = {
						iterator: d(t),
						resultName: e,
						nextLoc: i
					},
					"next" === this.method && (this.arg = m),
					F
				}
			}
		} (function() {
			return this
		} () || Function("return this")())
	},
	Ibhu: function(t, e, i) {
		var n = i("D2L2"),
		o = i("TcQ7"),
		s = i("vFc/")(!1),
		r = i("ax3d")("IE_PROTO");
		t.exports = function(t, e) {
			var i, a = o(t),
			l = 0,
			u = [];
			for (i in a) i != r && n(a, i) && u.push(i);
			for (; e.length > l;) n(a, i = e[l++]) && (~s(u, i) || u.push(i));
			return u
		}
	},
	Jlyz: function(t, e, i) {
		var n = i("W0Ow");
		"string" == typeof n && (n = [[t.i, n, ""]]),
		n.locals && (t.exports = n.locals);
		i("rjj0")("1536226a", n, !0, {})
	},
	Kh4W: function(t, e, i) {
		e.f = i("dSzd")
	},
	Kh5d: function(t, e, i) {
		var n = i("sB3e"),
		o = i("PzxK");
		i("uqUo")("getPrototypeOf",
		function() {
			return function(t) {
				return o(n(t))
			}
		})
	},
	L42u: function(t, e, i) {
		var n, o, s, r = i("+ZMJ"),
		a = i("knuC"),
		l = i("RPLV"),
		u = i("ON07"),
		c = i("7KvD"),
		p = c.process,
		h = c.setImmediate,
		f = c.clearImmediate,
		d = c.MessageChannel,
		y = c.Dispatch,
		m = 0,
		g = {},
		_ = function() {
			var t = +this;
			if (g.hasOwnProperty(t)) {
				var e = g[t];
				delete g[t],
				e()
			}
		},
		v = function(t) {
			_.call(t.data)
		};
		h && f || (h = function(t) {
			for (var e = [], i = 1; arguments.length > i;) e.push(arguments[i++]);
			return g[++m] = function() {
				a("function" == typeof t ? t: Function(t), e)
			},
			n(m),
			m
		},
		f = function(t) {
			delete g[t]
		},
		"process" == i("R9M2")(p) ? n = function(t) {
			p.nextTick(r(_, t, 1))
		}: y && y.now ? n = function(t) {
			y.now(r(_, t, 1))
		}: d ? (o = new d, s = o.port2, o.port1.onmessage = v, n = r(s.postMessage, s, 1)) : c.addEventListener && "function" == typeof postMessage && !c.importScripts ? (n = function(t) {
			c.postMessage(t + "", "*")
		},
		c.addEventListener("message", v, !1)) : n = "onreadystatechange" in u("script") ?
		function(t) {
			l.appendChild(u("script")).onreadystatechange = function() {
				l.removeChild(this),
				_.call(t)
			}
		}: function(t) {
			setTimeout(r(_, t, 1), 0)
		}),
		t.exports = {
			set: h,
			clear: f
		}
	},
	LAmw: function(t, e, i) {
		e = t.exports = i("FZ+f")(!1),
		e.push([t.i, ".page-pc{min-width:1280px;padding:1px;font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2c3e50;overflow-x:scroll}.page-pc,.page-pc .app-bg{width:100%;height:100%;position:absolute;top:0;left:0}.page-pc .app-bg{z-index:-100;opacity:.5;background-size:cover;background-repeat:no-repeat;-webkit-transition:all .5s linear;transition:all .5s linear}.page-pc .app-content{width:100%;height:100%;overflow-y:scroll;position:relative}.page-pc .app-content .piano-scroll-wrap{overflow:hidden}.page-pc .app-content .score-section{width:100%;margin:0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.page-pc .app-content .right-drawer{width:500px;height:100%;position:fixed;top:0;right:-500px;z-index:100;border-left:1px solid #ccc;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.page-pc .app-content .right-drawer .trigger{width:30px;height:86px;font-size:16px;padding-top:7px;top:50%;left:-32px}.page-pc .app-content .right-drawer .close,.page-pc .app-content .right-drawer .trigger{text-align:center;position:absolute;background:#ef496f;color:#fff;cursor:pointer;z-index:101}.page-pc .app-content .right-drawer .close{width:20px;height:20px;line-height:20px;top:10px;right:15px}.page-pc .app-content .right-drawer .component-manual-list{width:100%;height:100%;background:hsla(0,0%,100%,.9);border-radius:0;border:none}.page-pc .app-content .right-drawer.show{right:0}", ""])
	},
	LAuN: function(t, e) {
		t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABiCAMAAACRZYZ7AAAC+lBMVEUAAADT1djq6+zU1ti5vcIqUIIlSn0tVYS8wMS8wMUvU4TZ290pT4ErUIJsgqO7v8MUTYMpT4IqUIIqUILJzM3R0dpLaZIrUIK9wsbs7O28wcUoT4IrUYMkRH0nUIO9wcW9wcUqT4Lq6+wpUILp6uu9wsbs7e6/wsfr7Ozq6+y8wcW9wcYpT4K9wsYoT4G1ur7q6+wAKHUqUILt7u/r7O29wsW8wMTp6uwpT4Lr6+y+wsbp6uy7v8W8wMXp6eopUILp6uvp6+u9wcTp6+snT4Gcpbfu7+/o7OzS19wpT4K9wcQAO3nY2tyeqbuOma3s7u4oToEAAFhtgaAyVIQUT4Tb3d82V4UANnrEyMuttcGBk6tabJF+iKMADm/p6uv////n6er+/v6h0v6j1P/r7O3q6+zt7e78/f6l1v/u7+/m6OkAQnwsVIgAPnrx8vHw8PCm2P8uVIUAQ34iSn2n2f8qUobh4+a6vsIcSn8lTIAuUoPCxck3VoU0VIMpTYAfR3wAN3nz9PXd4eUxU4QaRXoANHj5+/z19vfY3eK9wcUAOnvj5urDyMwyVogBRX83XY33+PouV4svT4Cxusm/w8e8wMS7v8MAPn0VQXfP0tVSeadAZpU5WYgQRHvv8fTAyNO1vswASIEIRHybzPfFzdnLz9KTobd+j6onSXuYyPTf4+jFyc2lscOGla5geJxFa5sXSH4fQnfV2uHR1t7X2t3J0NrHy86tt8d3iqdyhaRlfJ5acpdUbpUzWoskUIQOSYAAMHeez/uGtN/O09tfiLUeU4gDTIQAIHLr7vPU19q4wM2qs8J/i6RPbpcfToIAO3ip2//n6/CUxPC9xdGircCJmbFrf6A7YJAAKXWOvOjZ3uaBrtrEy9WPnrYLPncTPXSRwOzc3uB8qNS4wtFpk79lj7tDY48EN3LJzdF4pNB0n8uptceeqbxagq9LcqFAW4fIzM+ap7yKuONvmsaWpLuapLdLZI1/k68AEW+r1v20wNBtlsNslL+ZqcAUuoz/AAAAXnRSTlMAAvsF/f4OCPzafA7HcP74/vS/rRcK/qIxvIhFOh4U/ejap5liRTYi4czBrWJcT/318bZrT0/y7u7Vz4CAai3rxLKShSrGiiMdzXb52NWjmo496+rp6NHDvrqugm9sQn89ewAAEgRJREFUaN61mgVcG2cUwCEkG6wrsK3t1lknlXXWbmvn7u4uIcDdESEJJBCFJEQIEoK7u1uRQtHiMmAtXkptdVttvv1+e98lkIY1+3VsfRBCjtz98+R7733vsPtPYm93/43w879dwyz/wKB5/0eKgwVmk+Gr8b578RTEcLhp89NPP7NmGVzFFkOp1fgvngKn3XSfvNRgMNTf8aYDvLwkY2/KoT2+pC6LY9g/7XLGkYok7sy9N8GBhW94kOablJLr04Uoi9XjxfpQF3mtiL0/n+pYf8cCCry69TpfbUox09Oz64gvWGxRkAdKHalH9W5IRAmOhicdFrzjtju9lZXFPh4enp6HkkAX+0UwljjJqfXBbu4khU2Nlz+DVLG3BPXD3tLJnT4engD5AyA3Xr0IyJpSx9AgYJikn1p6r52Dg4P9fOAt9ZZJz/khBvMQmOsyF4u9vRXkZjk12cyAJx5Vfsc68urLly1bstze7qo7I46c9yEZB/doLm9B2ls9IblPThUhgAkSVRr66ANrV7901wsrn1+/8oW7Xv3StaiymAmmYp6H4EKMy1FiyZrNy8jfLBC227wE51NXfbKR7xWs1wcFBemD9dskyuPIWD4HtLLLY8Cyu9fFcZXLk2ssB1+UU/dbNNHLxXI2izIn2G5VzGSxp6cHszhS2nIDXOIyMA88WhovFofK4252mI/gemq+BcKiJhgY9HnBxnOEXUwEOZQU8dnl+WONPI4al5xsoK46+iYEDnls3aPx4nA3d3A9PLzOiBOSMQsFa2rTdjDBWPsiY3qcHkFJ57a7b/tHFloS+VHu7sH91NBHYWWbKC8edYkjTJp49VPjQ0X4PANX/yShFQPE78BeTmEGb/1au9s+jb72dtsUsExoQmkwaZZkl+Q35yDr7jA4xquDooL1xFFqKLXfwmAQuyOUlblM8HtXdfZWHpvHeu/rtwL8r73KFgXMc7NhgwjsDt90x9L7QHfT4TWPhq6C3JhfKhbHi5OBMQ9hZbUqU7aDR3JPayPzCDBj1BPvPpTmjSi2IPflb8CBAMJfJX9yyRxk2dul4oR4MVUMIQF6XAw50Vbd5YFiKzV9xRbkKzZ/4ysPpZG62IC8WLoh3KQJw9Fg0gQerz3BEyUb4uND40qTwR+XgvgUR6Y3h+AMOIIR2CsP2bQYHHwmLgFSIZJkl/ybzYy19+gpOMbev3+/iE0Awwqy1dWsSSWpCYOf2cnC+e+Axa4HyiUhy5ziqMlB7u5REESr1sAB0O7Ze4IoOJ1Bx0DgaQFk4CKf7CbYWGZPcw3BQBR/m5TNhjhqfH5yKNUx/2kT43VgmC4IMn9xs7CxvDRTdG0/Vd2zlYWHRGolJAUsZoMC8oyjIR5iSC5/ETyCisl6PTCshEHHMRafh4TPZ/9U5Q/p0cPv2N6wH3lsfGBYltNcw6ITtilk7loVGrrKabM5C90VRVmAwAmMUVc2W/7tt9+Wj58dbZJop2Exftch5DaW4HRWVpsmvbmTIB57960A7+tR/TK51joL2y/b/MA6BzuTsR7hU6wRDFZ4/1iTrE3A4QhAsodlMu1xgDB3phb11PEZdCJWEJgOFgta+dVwxDUmxsvwbH+pemJy+kYWxVoN1u6GbI5EIeS29/7yS6+OI6TJlCkoQfp1FbVvJRhA2SoIzGmuowS/+o2JAT1A9N86JXsQM+4FvTWDKDnrygkQcNqaZrM6Q0Lqto4PSaTSyGIEmaEJh0QYHVGMAVOz8NtauATJ8A2wVZTh4KYgawarxlmVxs2eOLEjystcwoJ3VEikx/ygMG6fVHAzMQYK9hO6RhFO4T0Pl0AMb5rKFgUi6wkrjzD4oy3pgbqGPBPA3cuLTEDf9xad8gRhHlRWOWMEUHB6bC0Lwp2/2m45YgjTynUWygLIamtFwKUyyfBAFMo67oBA4u7lpu4J9J4GVZg7W2m08U4CLVkWDgyK/nnEiIgR1LldmArwRmXz75D1fCtbDXb/NLJCDTUFvkEHk3h5BZeH7T2OGgnPg3s1qh8KB0RsFoEjIfSbPvgoggYMN7ezvRqg/D1bbqJgFzNiwwIqnHeADmSR7CtR71KrSzKQvRJjUnN9YD1OD8sCJMa2yPLRTnV4eHjJlrwP29KquuvIE05wgHLVgghzsFqHDCIvO5BbEeVmQmwZHApr750K69k2uLvPa5sxaYaJ3AINtywnXchpd50oLCxsGDJKaO0rQkxpPRMgUDGtGyNI8BmUeQYmqpBUDfW5BSPErnL/KaWSI+BwtdopQXNBo0Ra6YGiuMM/pqqgUWPkatNHOFyuksOJLMswfa7v22WIYX/xely+7qrVwRSGxVhnVYGtJeAOKAS/uXJjBC3bvgWp6A5LV4bRZDTtMbL1ShFy/3TbETve1N0jEPS0NJ7oc0N6ACMs0PsNa8aym+91crqjloHPG6uuJyAsCxjQrozpNBLXgrwSPo/PU48ONvSoqmga7entKIpnlNLDqP3fUdOZl9e5JRhFOnz9nQEl3eloaWhcnPjMXBnEGT9zBROmxv4CxNhEHcbCUabH+bySmthtRolmz4Hv0IJMVRi/vzj2AAIvsoBhbSuoXGdcHA1ycQL1jNle2BZXjSCPVOR73Q/d5eEE3Vxb2HQ6C2NnNg+j0gWU49WJheh9XkgAgR59BbqA6IVZ/+Z8l3pcH8SWJ4hrMQZprbM5kgovpHpJhGykMBwzw/mD4zgOHF5nGi3pHIrifa0x3ruAAu81P3ZkTY5A8C5gLHeKi88w7aqoyWaXTLTpvif1n1VJtqkxlDrgBzYmaC/HYXGzWYWC6kMQX1Agi7izUW5zElV3ckWvIuK6pQsKit3roQkGd+QuXhy1no2j+K35SZFIBxu47TIGdu9GaQlTAwobV/2gKmRA+0BkDiuic1HtOjaiGW5uvBCbl5f3258NTa0qaaTshpetGcgljgly03ZHbobws7qVFRnIhVm9xnKCZDhX7CIY+LgOKKAUzmiWCGdQSzwdqZDlCIwcJAJjeo7O9eEHLQiLuZ6MWzVnrnzSubwyo6oAeV2/Tdk6gBRhNOo4EyEEHZtFFDZQLnCFp3zQTiglSRYp4HI4OTkcTlh3Y+bTFoSV4+tdDIwoL5YhIWE/xkCQk4m9sUiRjGjJT2ocxfSgMZA7EYIxiAKgNLAxojOsqNITrfpDQm5B7e6ssoKCsoHOEJHbI3YOl97tHnURx8cnxFPzcZMmP3J/yUTRn5Fd1UwegurHDZinhDWoWSGpwshpiC+fYwrOz9BrkEIQlOCnbDRfNznVy+MSwFhsC2Q3gvBVkibyEE7HtnICudtCCAarICynKYQoaeBID/gBpIMmaRLhDHPbQQl+yQpinVbukNejtLJAEyOCgJthpUC/gCgYUJrULDZ2sl15HBY9c5+v8LAIm8tHFK+nwFy2NsDLHmOZEKRPOHM+qfpJBGt8LLUWLmum0HFAsnmxU9XnUWbJjZC2AMTcolG8HrGzRYEG4DEWg2GG8MuydRdQdAUNKdN2E/iYquowUIg5i4FxANJe/YcZEmGGYKL+5P7Pn1lne9t1D58gMJPwBrrTnYMAEjzOzS7j07OyAyWTNaBLrEBDUpC2oMnv1prg/XFUMbU0/44HbLjlaruVfSH9WWOzZ0+Mdu7PPCyM7kP22t3LKWex+QNGE4WI5QTmVJB7H/xHnXCBT/LFaB+9gSo33GyjJb7ti/FuLmpFocJlD6VppkpQWglJVDRvIdj80WyZJLKTxcBijQrVKPSNmLpCS5tB0TVDk1SEQ3RgteJQar4IF52hhsZttlAsiJfvvjORE6MQIikqKtIqNCMnUKbJcNYmDvDYDF5mtkzY0kkwiNjhLIysaomK1Fy0GM8Lc35m4wycbYAkjtJwcO0Gw5Pg5IWMpY9Ht8QkSSdPnzp08GBXZWqklFa1zR3VoEFdTjl8TtClRyPrroHr1+I4GIvdmK7s8vEAyKki3VYMqZYgrveCuPdC05iFgzjowa/39lUcST04U8w0yfadx3ylmnCkyq40RU8NgaIp01VXEYLyPdlnnORoWveRM4PJmMRkFhyupYprzUWldkPoA3YO1jPLx6NpSakHdvr5ec6JD/NUUeIYWRkbBNwCFvSIQGlUsximdc0f4ETsOU/29seTJBW7gI33U8X7zZD9GwzPIIiFsZTmK5Qez/VB0z6POWF27BVMRKH4yuNoXAtCcBbBxskCCTiMlZk6WX0aNnVofxqjGuMzQLf9VHEynIBaj2Sxy2YEsTD8fbWT55hMEuHjh8THkzw5EdIXuLFJKONEzh4NIfgsBhKCry5zlZ5O3YcSvc+xvcMrtpAVRxSaEM8mKzCdHMPZWzMqdyIt4AyfnR0zMzMd0x7fMf3OJ3ELSVUye9NkUq5q6MesOgyaIrxzsCJMoxjeB2sEtlvRMg5SBARPFsMUBk5hyB2tFgowZNrTuaZZn0dHV2qrVCv1b0k52OE5HRmo20XmryGlTCaMkeoSDzdCe9d4WCcJTIo85/Prr3DWKaWkGTaOJIQtFzu6GPKPOlLrnZbbWTGSTAxAnJZqY2KEUqEwpkhJizxUqeCOk51U1lRAS0pqUnWMQpCYmCigxeyN6NoJ/eOvvzJ/3xNgzCTMaR4XGeKOxolD60ut5tVgK2ifmKjf9Di0R0jzNkYPDQ2tyG5PVyiKFDRZNjn16oMJ17niAwcr048kVVfvPZL6+7QfOgeaiCNpuguYZUyV8fZ9To863fu01eT9fggs0iHM7adgviu98cmQLSDJsYUtOQJJoIY7i2LF7WRiUYrnd8zi6Y4Dx4/NnNvpA2og+55PTdU1sC8auLFW2627ad3yBUX+QRiHR+7zYeamAOPaW+026QkkGFsdW3hYRZMcJqc74b5S4TRY1M8PFqqPHxnroPvBPYHREyILg8JbaR6YWS92RBG27NsODP/30Z/u0lMgQ2A4hrFqCtIC28vI5vDnHOEhuDQZgugnAk6n7ElTkX3fvKDdL4gFYaF4aysR4xo7ch//GIvCHxjE6IDilQkUzeROa0t7TKUHEwgmEKiz84/oIo2qUXQRgxL1qp2tGzq3gC5aYJinBatZ+IC3DigQLeoKRW8dWepTpbIDHts9mX5gMc/tuR1dkUmBnNaT7IsZQc8vsVURr7a75XFvYJhf2YPBGtoDwsowVPzOCtJ/DkYbjrGpACGsngMd5zoO/J4SrVTGSMKc8wj8IgZr41oyk9jS5TlvM+Oq66+BKdEOZy6ioJb4B0V2H6pddVMBNGkRhO+RI3urixTDVaqKrHBTtrREFsmwTVlqZlwb7b8U5l0kZRBRnKu4v5EbiEmpxr/NaBQkgmS3/tA4KuLjFzEo9KBHbNjKUrTmFPGmAeU1oHBIClbGySlEkOBvR9rKYi/MlhfCOOrkqJoO0ykrhv4p5NPLkqsfBso1MB/sm4CmdIyB9RurmrxQavlRNTUQxOLz0VyNBXNJhLAw8KCnLvv2mf0c5fUndjiPhJVjmHqFMm0XcsoJzkgBwyxWANLnxCO2GbYpS1b2NZbTcTy8IWc4D0G+z+YUQqm/lFCCNm4ibfWvKQ6vqjPQ0Hd2pI3c3Oa1pjuLsEsh6MHr19pi2KbcQFLsNq0PIij0syrBVgSpa02fKMEugeBRXlpCxu7iKMufekyPFYxkZ5k0qdr2NwiFEsRauRbyxGJul5IUGIs+e9djP3NdM1H2Gm1LbwjHFyL065HH7Rd3w/QGb//rXkYfcM2KKlN0bRVwx9m45fp0gh/Ee371EhNikRTag2RS/kDa1kQ2kidV7YMYxSx4hp6/8YmXnl1ustRiKVfdavrt+oiRMvI2YAM3rMYN3ZyLinLXb7xn5VPgCkBY1Fg8a6lvTPcOZK0tPYEf3wc3GuE243svrd70mnnQ+58BUAQepKX1ZpF9Z2zv5A129g5Llix3MP15ETrYKmcB3AY92XqlKnzvB6rp+g4OoMP/xojIGYJqAl9Z7RF3Xm1n9Z8Z/xujKjKcbOz7WhTeSy0Z8H9lcLxLSIZbOTfiDbDV/y7QXkhWhJsYY6pAWDb2/z/k1ud8pYd3kcPF38ICo9+/Egx7oESk96Ax8qhRFn391QhyJSiPRwi7Q9wyjTTLzPKKUDgrylqFLddeCYbFYr40Hc10h/pKydWgi2/AlWNYdLnSDHJJPvyfGX8BoxjtwOPqk94AAAAASUVORK5CYII="
	},
	LKZe: function(t, e, i) {
		var n = i("NpIQ"),
		o = i("X8DO"),
		s = i("TcQ7"),
		r = i("MmMw"),
		a = i("D2L2"),
		l = i("SfB7"),
		u = Object.getOwnPropertyDescriptor;
		e.f = i("+E39") ? u: function(t, e) {
			if (t = s(t), e = r(e, !0), l) try {
				return u(t, e)
			} catch(t) {}
			if (a(t, e)) return o(!n.f.call(t, e), t[e])
		}
	},
	M6a0: function(t, e) {},
	MU5D: function(t, e, i) {
		var n = i("R9M2");
		t.exports = Object("z").propertyIsEnumerable(0) ? Object: function(t) {
			return "String" == n(t) ? t.split("") : Object(t)
		}
	},
	Mhyx: function(t, e, i) {
		var n = i("/bQp"),
		o = i("dSzd")("iterator"),
		s = Array.prototype;
		t.exports = function(t) {
			return void 0 !== t && (n.Array === t || s[o] === t)
		}
	},
	"NWt+": function(t, e, i) {
		var n = i("+ZMJ"),
		o = i("msXi"),
		s = i("Mhyx"),
		r = i("77Pl"),
		a = i("QRG4"),
		l = i("3fs2"),
		u = {},
		c = {},
		e = t.exports = function(t, e, i, p, h) {
			var f, d, y, m, g = h ?
			function() {
				return t
			}: l(t),
			_ = n(i, p, e ? 2 : 1),
			v = 0;
			if ("function" != typeof g) throw TypeError(t + " is not iterable!");
			if (s(g)) {
				for (f = a(t.length); f > v; v++) if ((m = e ? _(r(d = t[v])[0], d[1]) : _(t[v])) === u || m === c) return m
			} else for (y = g.call(t); ! (d = y.next()).done;) if ((m = o(y, _, d.value, e)) === u || m === c) return m
		};
		e.BREAK = u,
		e.RETURN = c
	},
	NeAu: function(t, e) {
		t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAA9BAMAAAAqpSomAAAAA3NCSVQICAjb4U/gAAAAGFBMVEX////b29u2traSkpJtbW1JSUkkJCQAAACt4IhzAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAABQFJREFUWIXtmMtz4jgQh9sYyNVFavDVmASuHszGVxN2livJLPHVSWaGK35J//5262HLGY9DDjtVu4UvIKelT/3rh0SA/64HLqQL6UK6kP53pHL3r5Oqw+HAeWH3Gpkktp35s8lfH6Owr74D9Eyc47mk0vmD9hfcfoRzDzBfH57Y4W8HrntRDamwpMzMi84GfXPgRi1fwI/PvfLVpMrRgMI6F/QIdqK/ByPO4+k5pKCxOtepF2icKAAVYdCjnyZJR9i9j7FKR2eBCgPEA/E9vnqfFLgECmC9xSUGLZNq3T3VGTQeFEDz+aknUopUCb9j2DWD+vG6ay4Do1ADOSXvCbFa5TQkO1iql2axZ7DvnOkYGpcgB3lPI1B/IvGYM9QvI85ftYU3/to1sTC3s6cZtOH3faJpKST6Jfq2qFdMOks5NULCQBH278apAjIf1y+XPNeh2tvVsmuiSCH1ZHqq05O1kkQ5njZ5ABGrqwuWeWeRyEJnkqrUKJWIPaQc87pxCUkbvXoOx5B3oVSySYASLbWSM0hG0lawqgXbD5nbmVHy3Y0AyGJC/eHd3ENSMKzfFdB8J/GCrvkObb8QCEfpnsIvSs8glWBK/GDVchVwXJubaJ6A7IOjsbESpp2WLRIHr6mEjdHP9nYZ8aorThku+iBKQReTN+i2bJP2dT5UgR00ueG4z28mbCP15fNkdiOXkJuMdTlWq1ajZF9aJOzLR2kFN9zBfFjhdr+gIE9T7lPlyjH17JVe4rtcOQfRwDfombDEpVYufvhHXiZ0kqt8UaQMHPDDlQfXO0y9BMdHhq6dbCwmZ8z1mD9bx4c3Tgpf8BRAX8mSOaj9VHx/pUzxbDYySbHNVr7vh09EtajZYTnueDBeIDiqxyXub94GMcwHVIIOX2GpzgOsQ5EpKWbXrUnyjCMsHuGKuxiomleJAOvx3uKV2yZlYMFg/sTVFksMOEN/4mEJ2NQYSTc1SMxsI2iQ2nkUXGGTWgiwHtO85zfpFTRJKyxRMZIaonkB5BIufmWQSuPso47gTT8xlP9EhUX5oca4RLlog0pofCRLymFviEfic0KXBIpcERkk8zokxHvkGYrluaJ2kaDGo2rOixYpNa5xwpKCucRFlgTOxWl05MualDe1yvCPqbXkKFYp7GxSSI2vsYJa56Jx1EhLWwjIYMJJvJg8mMsLuySdRi17bBiVAHLhVwVqLGpTNN9Xxw/pMzNkD8gSVcCjO8fP/RD3getiCr3wLhKeO2R/Ggi90Q8MlxpTpfA8EdHZyaPJaVyqhGUirkmYo5RYGSwZoHiLLlKGq51wo3glzen2lhJRjUWX2opYqk763PRicXeb4ewQaagp3gq4DwkVVbFrSJkmMTpKvZHYURi7YtMFqDGGipdCPMdVbrhNyE5ouRnzcmuhLwmJUISWyAmxOZ17moTiilLHsBRRgMmDtPt6jKSNzINIRsa8oKQu//N0xdeYXSQzrhSim8WQl5FBqtSUgtSgkGD1zHk8rhYn9yXQ43TMXyJJEr5sWoc5Wu7y0eMutx/obpWO8qi0+Mr+rtqX7kZijvy94VE4PItie4Ot+LYelzD7JM3pxGOb9v0ELdH1O9zGjBIyB7QNBrsyPLZIKYW48u7qeexN0xHjSvtQwMR3rN6ftfzHm7EiMc8OQ+vuJ/NfPd9W/rr/x+ZPj24mbPvhqR98/pv/j7iQLqQL6Xc9/wDCRGyDgSM2MAAAAABJRU5ErkJggg=="
	},
	NpIQ: function(t, e) {
		e.f = {}.propertyIsEnumerable
	},
	O4R0: function(t, e, i) {
		i("+MLA"),
		t.exports = i("FeBl").Object.freeze
	},
	O4g8: function(t, e) {
		t.exports = !0
	},
	OYls: function(t, e, i) {
		i("crlp")("asyncIterator")
	},
	PT5K: function(t, e, i) {
		"use strict";//语录
		//var n = ["长亭外，古道边，芳草碧连天，晚风拂柳笛声残，夕阳山外山...", "你可知Macau，不是我真姓...", "what time will you be here now? it's a quater past seven now...", "君の前前前世から仆は, 君を探しはじめたよ", "你会不会忽然的出现，在街角的咖啡店", "时间它总说谎，我从不曾失去那些肩膀。", "不怕要多少时间多少代价，青春是我的筹码。", "如果还有梦就追，至少不会遗憾后悔", "Believe me I can fly  I'm singing in the sky", "我相信十年后的八月 我们还能再相遇 你最后一直在心底呼喊著『谢谢你』", "长大后 世界像一张网 网住我们的翅膀", "有了你开心D 乜都称心满意 咸鱼白菜也好好味", "Now please don't go Most nights I hardly sleep when I'm alone ", "我依然爱你 就是唯一的退路 我依然珍惜 时时刻刻的幸福", "只会傻傻的看着天上的星星 你就是那么的纯静", "我的眼睛望向窗外 幻想我对你的表白", "让蜡烛代替所有灯 让音乐代替话语声 此时无声胜有声", "当你觉得外面的世界很精彩 我会在这里衷心的祝福你", "苦海翻起爱恨 在世间难逃避命运", "不管按怎过按怎变 按怎的人 永远的永远我是彼个人", "Rage your dream 風も　光満ちてゆく Rage your dream 忘れないでいて ", "我喜欢 入学时我们稚气的脸庞 我喜欢 毕业季上写满留言的墙", "如今这里荒草丛生 没有了鲜花 好在曾经拥有你们的春秋和冬夏", "白云山高 珠江水长 吾校矗立 蔚为国光", "突然好想你 突然锋利的回忆 突然模糊的眼睛", "我站在你左侧，却像隔着银河", "多少人曾爱慕你年轻时的容颜，可知谁愿承受岁月无情的变迁。", "往事不要再提，人生已多风雨", "天空海阔你与我，可会变", "一生何求,常判断放弃与拥有", "让我再看你一眼 星空和黑夜 西去而旋转的飞鸟", "但是每一天，当我在左转，你便行向右，终不会遇见", "回忆这理想不够理想 沿途逛世间一趟只有向上", "模糊的迷恋你一场就当风雨下潮涨", "如蝴蝶破茧吹过春风 我展翅 可不可得到认同", "剪影的你轮廓太好看 凝住眼泪才敢细看", "山顶一起俯瞰过 这花花世界灯火处处", "彼此之间即使各有车票 失散于凡嚣 灰风的初吻 至少感动 一两秒", "静待紫色天空 闪出清风 有降雪跳动", "你未忘 我未忘 犹胜伴在旁", "冷雨狂风历尽，人格更光耀，披荆斩棘汉子心里磊落永不折腰", "你是空气但是好闻胜过了空气，你是阳光但是却能照进半夜里", "我心如月拂过长夜未有声 久照长门流光只影向一人", "所谓的彩虹，不过就是光，只要心还透明，就能折射希望", "本来就一无所有，才会幻想它是白鸽，飞到渴望的尽头，坠落到无名的山丘", "我若是游子，你便是人间", "我把美梦放冰箱 长大再拿行不行", "天空好想下雨 我好想住你隔壁", "许多年前 你有一双清澈的双眼 奔跑起来 像是一道春天的闪电", "乱世慷慨我行歌，千万人中有相和", "将心愿种在出发之前，我们说好走多远也不改变", "春烟柳绿，不如望你。叹这天下谁人不识君", "时间是星星的眼睛 望穿我的困惑", "确认过眼神，我遇上对的人", "如果全世界都对你恶语相加，我就对你说上一世情话", "走在地安门外，没有人不动真情", "我未入过繁华之境 未听过喧嚣的声音", "问君此去几时还，来时莫徘徊。", "乘着风游荡在蓝天边 一片云掉落在我面前", "那些你很冒险的梦，我陪你去疯。", "风筝有风 海豚有海 而你有我", "沿路旅途如歌变幻 在游览，还给大地昨天的喜怒和烦忧", "天雨粟，鬼夜哭，思念漫太古", "永远自由自我，永远高唱我歌，走遍千里", "檐下窗棂斜映枝丫 与你席地对坐饮茶", "情深深雨蒙蒙 多少楼台烟雨中 记得当初你侬我侬 车如流水马如龙"];
        var n = ["欢迎使用hi科技-在线钢琴模拟器"];
		e.a = n
	},
	PzxK: function(t, e, i) {
		var n = i("D2L2"),
		o = i("sB3e"),
		s = i("ax3d")("IE_PROTO"),
		r = Object.prototype;
		t.exports = Object.getPrototypeOf ||
		function(t) {
			return t = o(t),
			n(t, s) ? t[s] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype: t instanceof Object ? r: null
		}
	},
	QRG4: function(t, e, i) {
		var n = i("UuGF"),
		o = Math.min;
		t.exports = function(t) {
			return t > 0 ? o(n(t), 9007199254740991) : 0
		}
	},
	"QWe/": function(t, e, i) {
		i("crlp")("observable")
	},
	R4wc: function(t, e, i) {
		var n = i("kM2E");
		n(n.S + n.F, "Object", {
			assign: i("To3L")
		})
	},
	R9M2: function(t, e) {
		var i = {}.toString;
		t.exports = function(t) {
			return i.call(t).slice(8, -1)
		}
	},
	RPLV: function(t, e, i) {
		var n = i("7KvD").document;
		t.exports = n && n.documentElement
	},
	"RY/4": function(t, e, i) {
		var n = i("R9M2"),
		o = i("dSzd")("toStringTag"),
		s = "Arguments" == n(function() {
			return arguments
		} ()),
		r = function(t, e) {
			try {
				return t[e]
			} catch(t) {}
		};
		t.exports = function(t) {
			var e, i, a;
			return void 0 === t ? "Undefined": null === t ? "Null": "string" == typeof(i = r(e = Object(t), o)) ? i: s ? n(e) : "Object" == (a = n(e)) && "function" == typeof e.callee ? "Arguments": a
		}
	},
	Rrel: function(t, e, i) {
		var n = i("TcQ7"),
		o = i("n0T6").f,
		s = {}.toString,
		r = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
		a = function(t) {
			try {
				return o(t)
			} catch(t) {
				return r.slice()
			}
		};
		t.exports.f = function(t) {
			return r && "[object Window]" == s.call(t) ? a(t) : o(n(t))
		}
	},
	TVmP: function(t, e, i) {
		"use strict";
		function n(t) {
			i("oHzg")
		}
		var o = i("UthT"),
		s = i("bIJo"),
		r = i("VU/8"),
		a = n,
		l = r(o.a, s.a, !1, a, null, null);
		e.a = l.exports
	},
	TcQ7: function(t, e, i) {
		var n = i("MU5D"),
		o = i("52gC");
		t.exports = function(t) {
			return n(o(t))
		}
	},
	To3L: function(t, e, i) {
		"use strict";
		var n = i("lktj"),
		o = i("1kS7"),
		s = i("NpIQ"),
		r = i("sB3e"),
		a = i("MU5D"),
		l = Object.assign;
		t.exports = !l || i("S82l")(function() {
			var t = {},
			e = {},
			i = Symbol(),
			n = "abcdefghijklmnopqrst";
			return t[i] = 7,
			n.split("").forEach(function(t) {
				e[t] = t
			}),
			7 != l({},
			t)[i] || Object.keys(l({},
			e)).join("") != n
		}) ?
		function(t, e) {
			for (var i = r(t), l = arguments.length, u = 1, c = o.f, p = s.f; l > u;) for (var h, f = a(arguments[u++]), d = c ? n(f).concat(c(f)) : n(f), y = d.length, m = 0; y > m;) p.call(f, h = d[m++]) && (i[h] = f[h]);
			return i
		}: l
	},
	U5ju: function(t, e, i) {
		i("M6a0"),
		i("zQR9"),
		i("+tPU"),
		i("CXw9"),
		i("EqBC"),
		i("jKW+"),
		t.exports = i("FeBl").Promise
	},
	UthT: function(t, e, i) {
		"use strict";
		e.a = {
			name: "PageFooter",
			data: function() {
				return {
					supportShow: !1,
					payType: "WXPAY",
					aliPaySrc: i("WyC5"),
					wxPaySrc: i("uTwv")
				}
			},
			mounted: function() {},
			methods: {
				togglePayType: function(t) {
					this.payType = t
				},
				toggleSupportShow: function() {
					this.supportShow = !this.supportShow
				}
			}
		}
	},
	UuGF: function(t, e) {
		var i = Math.ceil,
		n = Math.floor;
		t.exports = function(t) {
			return isNaN(t = +t) ? 0 : (t > 0 ? n: i)(t)
		}
	},
	V3tA: function(t, e, i) {
		i("R4wc"),
		t.exports = i("FeBl").Object.assign
	},
	VSxz: function(t, e, i) {
		"use strict";
		var n = i("7+uW"),
		o = new n.a;
		e.a = o
	},
	W0Ow: function(t, e, i) {
		e = t.exports = i("FZ+f")(!1),
		e.push([t.i, '.component-page-header{width:100%;height:60px;line-height:60px;margin:10px auto;padding:0 5%}.component-page-header .trade-mark{display:block;width:350px;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;float:left}.component-page-header .trade-mark .icon-piano{display:block;-webkit-transform:scale(.7);transform:scale(.7);-webkit-transform-origin:50% 30%;transform-origin:50% 30%}.component-page-header .trade-mark .trade-mark-txt{font-size:28px;font-weight:500;color:#000;margin:0 0 0 10px}.component-page-header .trade-mark .trade-mark-txt .trade-mark-txt--en{font-style:italic;font-size:20px;color:#666;margin-left:7px}.component-page-header .menu{float:right;height:45px;line-height:45px;margin-top:5px}.component-page-header .menu .menu-item{display:inline-block;width:80px;margin:0 7px;text-align:center;position:relative;cursor:pointer}.component-page-header .menu .menu-item:before{height:1px;-webkit-transform:scaleX(1);transform:scaleX(1);background:#ccc}.component-page-header .menu .menu-item:after,.component-page-header .menu .menu-item:before{content:"";width:100%;position:absolute;left:0;bottom:0;-webkit-transition:.3s;transition:.3s}.component-page-header .menu .menu-item:after{height:5px;-webkit-transform:scaleX(0);transform:scaleX(0);background:#1295db}.component-page-header .menu .menu-item-active:after,.component-page-header .menu .menu-item:hover:after{-webkit-transform:scaleX(1);transform:scaleX(1)}', ""])
	},
	WyC5: function(t, e, i) {
		t.exports =/* i.p +*/ "/i/warning.jpg"//标记
	},
	XYsL: function(t, e, i) {
		"use strict";
		var n = i("Dd8w"),
		o = i.n(n),
		s = i("VSxz"),
		r = i("NYxO"),
		a = i("2uFj");
		e.a = {
			name: "PageHeader",
			components: {},
			mixins: [],
			props: [],
			data: function() {
				return {
					wallpaperLoading: !1
				}
			},
			computed: {},
			mounted: function() {
				var t = this;
				s.a.$on(a.b.CHANGE_WALLPAPER,
				function() {
					t.setRandomWallPaper()
				})
			},
			watch: {},
			methods: o()({},
			i.i(r.c)(["$setWallpaper"]), {
				emitChangeWallPaper: function() {
					this.wallpaperLoading || s.a.$emit(a.b.CHANGE_WALLPAPER)
				},
				setRandomWallPaper: function() {
					var t = this;
					this.wallpaperLoading = !0;
					var e = a.c.length,
					i = "";
					do {
						var n = Math.floor(Math.random() * e);
						i = a.c[n]
					} while (! i || i == this . $currentWallpaper );
					var o = new Image;
					o.src = i,
					o.onload = function() {
						t.wallpaperLoading = !1,
						t.$setWallpaper(i),
						o = null
					}
				}
			})
		}
	},
	Xc4G: function(t, e, i) {
		var n = i("lktj"),
		o = i("1kS7"),
		s = i("NpIQ");
		t.exports = function(t) {
			var e = n(t),
			i = o.f;
			if (i) for (var r, a = i(t), l = s.f, u = 0; a.length > u;) l.call(t, r = a[u++]) && e.push(r);
			return e
		}
	},
	Xxa5: function(t, e, i) {
		t.exports = i("1H6C")
	},
	Y3FW: function(t, e, i) {
		"use strict";
		var n = i("fZjL"),
		o = i.n(n),
		s = i("ZnLv"),
		r = i.n(s),
		a = i("//Im"),
		l = function(t) {
			var e = "";
			return a.b.forEach(function(i) {
				i.name == t && (e = i.file)
			}),
			e
		},
		u = {
			minify: !1,
			ext: ".[mp3|ogg]",
			baseUrl: "/audio/pianosimulatoronline/",
			list: [ "piano" ],
			onload: null,
			setExt: function(t) {
				var e;
				for (e = 0; e <= this.list.length - 1; e++) for (var i in this[this.list[e]]) this[this.list[e]][i] = this[this.list[e]][i].replace(this.ext, t);
				return this.ext = t,
				console.log("sample extensions set to " + this.ext)
			},
			load: function(t) {
				var e, i, n;
				if (e = t || {},
				e.instruments = e.instruments || this.list, e.baseUrl = e.baseUrl || this.baseUrl, e.onload = e.onload || this.onload, e.ext && (e.ext != this.ext && this.setExt(e.ext), e.ext = this.ext), i = {},
				Array.isArray(e.instruments)) {
					for (n = 0; n <= e.instruments.length - 1; n++) {
						var s = this[e.instruments[n]];
						if (!0 === this.minify || !0 === e.minify) {
							var a = 1;
							o()(s).length >= 17 && (a = 2),
							o()(s).length >= 33 && (a = 4),
							o()(s).length >= 49 && (a = 6);
							var l = o()(s).filter(function(t, e) {
								return e % a != 0
							});
							l.forEach(function(t) {
								delete s[t]
							})
						}
						i[e.instruments[n]] = new r.a.Sampler(s, {
							baseUrl: e.baseUrl + e.instruments[n] + "/",
							onload: e.onload
						})
					}
					return i
				}
				return s = this[e.instruments],
				!0 !== this.minify && !0 !== e.minify || (a = 1, o()(s).length >= 17 && (a = 2), o()(s).length >= 33 && (a = 4), o()(s).length >= 49 && (a = 6), l = o()(s).filter(function(t, e) {
					return e % a != 0
				}), l.forEach(function(t) {
					delete s[t]
				})),
				new r.a.Sampler(s, {
					baseUrl: e.baseUrl + e.instruments + "/",
					onload: e.onload
				})
			},
			"bass-electric": {
				"A#2": "As2.[mp3|ogg]",
				"A#3": "As3.[mp3|ogg]",
				"A#4": "As4.[mp3|ogg]",
				"A#5": "As5.[mp3|ogg]",
				"C#2": "Cs2.[mp3|ogg]",
				"C#3": "Cs3.[mp3|ogg]",
				"C#4": "Cs4.[mp3|ogg]",
				"C#5": "Cs5.[mp3|ogg]",
				E2: "E2.[mp3|ogg]",
				E3: "E3.[mp3|ogg]",
				E4: "E4.[mp3|ogg]",
				E5: "E5.[mp3|ogg]",
				G2: "G2.[mp3|ogg]",
				G3: "G3.[mp3|ogg]",
				G4: "G4.[mp3|ogg]",
				G5: "G5.[mp3|ogg]"
			},
			bassoon: {
				A3: "A3.[mp3|ogg]",
				C2: "C2.[mp3|ogg]",
				C3: "C3.[mp3|ogg]",
				C4: "C4.[mp3|ogg]",
				E3: "E3.[mp3|ogg]",
				G1: "G1.[mp3|ogg]",
				G2: "G2.[mp3|ogg]",
				G3: "G3.[mp3|ogg]",
				A1: "A1.[mp3|ogg]",
				A2: "A2.[mp3|ogg]"
			},
			cello: {
				E3: "E3.[mp3|ogg]",
				E4: "E4.[mp3|ogg]",
				F2: "F2.[mp3|ogg]",
				F3: "F3.[mp3|ogg]",
				F4: "F4.[mp3|ogg]",
				"F#3": "Fs3.[mp3|ogg]",
				"F#4": "Fs4.[mp3|ogg]",
				G2: "G2.[mp3|ogg]",
				G3: "G3.[mp3|ogg]",
				G4: "G4.[mp3|ogg]",
				"G#2": "Gs2.[mp3|ogg]",
				"G#3": "Gs3.[mp3|ogg]",
				"G#4": "Gs4.[mp3|ogg]",
				A2: "A2.[mp3|ogg]",
				A3: "A3.[mp3|ogg]",
				A4: "A4.[mp3|ogg]",
				"A#2": "As2.[mp3|ogg]",
				"A#3": "As3.[mp3|ogg]",
				"A#4": "As4.[mp3|ogg]",
				B2: "B2.[mp3|ogg]",
				B3: "B3.[mp3|ogg]",
				B4: "B4.[mp3|ogg]",
				C2: "C2.[mp3|ogg]",
				C3: "C3.[mp3|ogg]",
				C4: "C4.[mp3|ogg]",
				C5: "C5.[mp3|ogg]",
				"C#3": "Cs3.[mp3|ogg]",
				"C#4": "Cs4.[mp3|ogg]",
				D2: "D2.[mp3|ogg]",
				D3: "D3.[mp3|ogg]",
				D4: "D4.[mp3|ogg]",
				"D#2": "Ds2.[mp3|ogg]",
				"D#3": "Ds3.[mp3|ogg]",
				"D#4": "Ds4.[mp3|ogg]",
				E2: "E2.[mp3|ogg]"
			},
			clarinet: {
				D3: "D3.[mp3|ogg]",
				D4: "D4.[mp3|ogg]",
				D5: "D5.[mp3|ogg]",
				F2: "F2.[mp3|ogg]",
				F3: "F3.[mp3|ogg]",
				F4: "F4.[mp3|ogg]",
				"F#5": "Fs5.[mp3|ogg]",
				"A#2": "As2.[mp3|ogg]",
				"A#3": "As3.[mp3|ogg]",
				"A#4": "As4.[mp3|ogg]",
				D2: "D2.[mp3|ogg]"
			},
			contrabass: {
				C1: "C1.[mp3|ogg]",
				"C#2": "Cs2.[mp3|ogg]",
				D1: "D1.[mp3|ogg]",
				E1: "E1.[mp3|ogg]",
				E2: "E2.[mp3|ogg]",
				"F#0": "Fs0.[mp3|ogg]",
				"F#1": "Fs1.[mp3|ogg]",
				G0: "G0.[mp3|ogg]",
				"G#1": "Gs1.[mp3|ogg]",
				"G#2": "Gs2.[mp3|ogg]",
				A1: "A1.[mp3|ogg]",
				"A#0": "As0.[mp3|ogg]",
				B2: "B2.[mp3|ogg]"
			},
			flute: {
				A5: "A5.[mp3|ogg]",
				C3: "C3.[mp3|ogg]",
				C4: "C4.[mp3|ogg]",
				C5: "C5.[mp3|ogg]",
				C6: "C6.[mp3|ogg]",
				E3: "E3.[mp3|ogg]",
				E4: "E4.[mp3|ogg]",
				E5: "E5.[mp3|ogg]",
				A3: "A3.[mp3|ogg]",
				A4: "A4.[mp3|ogg]"
			},
			"french-horn": {
				D2: "D2.[mp3|ogg]",
				D4: "D4.[mp3|ogg]",
				"D#1": "Ds1.[mp3|ogg]",
				F2: "F2.[mp3|ogg]",
				F4: "F4.[mp3|ogg]",
				G1: "G1.[mp3|ogg]",
				A0: "A0.[mp3|ogg]",
				A2: "A2.[mp3|ogg]",
				C1: "C1.[mp3|ogg]",
				C3: "C3.[mp3|ogg]"
			},
			"guitar-acoustic": {
				F3: "F3.[mp3|ogg]",
				"F#1": "Fs1.[mp3|ogg]",
				"F#2": "Fs2.[mp3|ogg]",
				"F#3": "Fs3.[mp3|ogg]",
				G1: "G1.[mp3|ogg]",
				G2: "G2.[mp3|ogg]",
				G3: "G3.[mp3|ogg]",
				"G#1": "Gs1.[mp3|ogg]",
				"G#2": "Gs2.[mp3|ogg]",
				"G#3": "Gs3.[mp3|ogg]",
				A1: "A1.[mp3|ogg]",
				A2: "A2.[mp3|ogg]",
				A3: "A3.[mp3|ogg]",
				"A#1": "As1.[mp3|ogg]",
				"A#2": "As2.[mp3|ogg]",
				"A#3": "As3.[mp3|ogg]",
				B1: "B1.[mp3|ogg]",
				B2: "B2.[mp3|ogg]",
				B3: "B3.[mp3|ogg]",
				C2: "C2.[mp3|ogg]",
				C3: "C3.[mp3|ogg]",
				C4: "C4.[mp3|ogg]",
				"C#2": "Cs2.[mp3|ogg]",
				"C#3": "Cs3.[mp3|ogg]",
				"C#4": "Cs4.[mp3|ogg]",
				D1: "D1.[mp3|ogg]",
				D2: "D2.[mp3|ogg]",
				D3: "D3.[mp3|ogg]",
				D4: "D4.[mp3|ogg]",
				"D#1": "Ds1.[mp3|ogg]",
				"D#2": "Ds2.[mp3|ogg]",
				"D#3": "Ds3.[mp3|ogg]",
				E1: "E1.[mp3|ogg]",
				E2: "E2.[mp3|ogg]",
				E3: "E3.[mp3|ogg]",
				F1: "F1.[mp3|ogg]",
				F2: "F2.[mp3|ogg]"
			},
			"guitar-electric": {
				"D#3": "Ds3.[mp3|ogg]",
				"D#4": "Ds4.[mp3|ogg]",
				"D#5": "Ds5.[mp3|ogg]",
				E2: "E2.[mp3|ogg]",
				"F#2": "Fs2.[mp3|ogg]",
				"F#3": "Fs3.[mp3|ogg]",
				"F#4": "Fs4.[mp3|ogg]",
				"F#5": "Fs5.[mp3|ogg]",
				A2: "A2.[mp3|ogg]",
				A3: "A3.[mp3|ogg]",
				A4: "A4.[mp3|ogg]",
				A5: "A5.[mp3|ogg]",
				C3: "C3.[mp3|ogg]",
				C4: "C4.[mp3|ogg]",
				C5: "C5.[mp3|ogg]",
				C6: "C6.[mp3|ogg]",
				"C#2": "Cs2.[mp3|ogg]"
			},
			"guitar-nylon": {
				"F#2": "Fs2.[mp3|ogg]",
				"F#3": "Fs3.[mp3|ogg]",
				"F#4": "Fs4.[mp3|ogg]",
				"F#5": "Fs5.[mp3|ogg]",
				G3: "G3.[mp3|ogg]",
				G5: "G3.[mp3|ogg]",
				"G#2": "Gs2.[mp3|ogg]",
				"G#4": "Gs4.[mp3|ogg]",
				"G#5": "Gs5.[mp3|ogg]",
				A2: "A2.[mp3|ogg]",
				A3: "A3.[mp3|ogg]",
				A4: "A4.[mp3|ogg]",
				A5: "A5.[mp3|ogg]",
				"A#5": "As5.[mp3|ogg]",
				B1: "B1.[mp3|ogg]",
				B2: "B2.[mp3|ogg]",
				B3: "B3.[mp3|ogg]",
				B4: "B4.[mp3|ogg]",
				"C#3": "Cs3.[mp3|ogg]",
				"C#4": "Cs4.[mp3|ogg]",
				"C#5": "Cs5.[mp3|ogg]",
				D2: "D2.[mp3|ogg]",
				D3: "D3.[mp3|ogg]",
				D5: "D5.[mp3|ogg]",
				"D#4": "Ds4.[mp3|ogg]",
				E2: "E2.[mp3|ogg]",
				E3: "E3.[mp3|ogg]",
				E4: "E4.[mp3|ogg]",
				E5: "E5.[mp3|ogg]"
			},
			harmonium: {
				C2: "C2.[mp3|ogg]",
				C3: "C3.[mp3|ogg]",
				C4: "C4.[mp3|ogg]",
				C5: "C5.[mp3|ogg]",
				"C#2": "Cs2.[mp3|ogg]",
				"C#3": "Cs3.[mp3|ogg]",
				"C#4": "Cs4.[mp3|ogg]",
				"C#5": "Cs5.[mp3|ogg]",
				D2: "D2.[mp3|ogg]",
				D3: "D3.[mp3|ogg]",
				D4: "D4.[mp3|ogg]",
				D5: "D5.[mp3|ogg]",
				"D#2": "Ds2.[mp3|ogg]",
				"D#3": "Ds3.[mp3|ogg]",
				"D#4": "Ds4.[mp3|ogg]",
				E2: "E2.[mp3|ogg]",
				E3: "E3.[mp3|ogg]",
				E4: "E4.[mp3|ogg]",
				F2: "F2.[mp3|ogg]",
				F3: "F3.[mp3|ogg]",
				F4: "F4.[mp3|ogg]",
				"F#2": "Fs2.[mp3|ogg]",
				"F#3": "Fs3.[mp3|ogg]",
				G2: "G2.[mp3|ogg]",
				G3: "G3.[mp3|ogg]",
				G4: "G4.[mp3|ogg]",
				"G#2": "Gs2.[mp3|ogg]",
				"G#3": "Gs3.[mp3|ogg]",
				"G#4": "Gs4.[mp3|ogg]",
				A2: "A2.[mp3|ogg]",
				A3: "A3.[mp3|ogg]",
				A4: "A4.[mp3|ogg]",
				"A#2": "As2.[mp3|ogg]",
				"A#3": "As3.[mp3|ogg]",
				"A#4": "As4.[mp3|ogg]"
			},
			harp: {
				C5: "C5.[mp3|ogg]",
				D2: "D2.[mp3|ogg]",
				D4: "D4.[mp3|ogg]",
				D6: "D6.[mp3|ogg]",
				D7: "D7.[mp3|ogg]",
				E1: "E1.[mp3|ogg]",
				E3: "E3.[mp3|ogg]",
				E5: "E5.[mp3|ogg]",
				F2: "F2.[mp3|ogg]",
				F4: "F4.[mp3|ogg]",
				F6: "F6.[mp3|ogg]",
				F7: "F7.[mp3|ogg]",
				G1: "G1.[mp3|ogg]",
				G3: "G3.[mp3|ogg]",
				G5: "G5.[mp3|ogg]",
				A2: "A2.[mp3|ogg]",
				A4: "A4.[mp3|ogg]",
				A6: "A6.[mp3|ogg]",
				B1: "B1.[mp3|ogg]",
				B3: "B3.[mp3|ogg]",
				B5: "B5.[mp3|ogg]",
				B6: "B6.[mp3|ogg]",
				C3: "C3.[mp3|ogg]"
			},
			organ: {
				C3: "C3.[mp3|ogg]",
				C4: "C4.[mp3|ogg]",
				C5: "C5.[mp3|ogg]",
				C6: "C6.[mp3|ogg]",
				"D#1": "Ds1.[mp3|ogg]",
				"D#2": "Ds2.[mp3|ogg]",
				"D#3": "Ds3.[mp3|ogg]",
				"D#4": "Ds4.[mp3|ogg]",
				"D#5": "Ds5.[mp3|ogg]",
				"F#1": "Fs1.[mp3|ogg]",
				"F#2": "Fs2.[mp3|ogg]",
				"F#3": "Fs3.[mp3|ogg]",
				"F#4": "Fs4.[mp3|ogg]",
				"F#5": "Fs5.[mp3|ogg]",
				A1: "A1.[mp3|ogg]",
				A2: "A2.[mp3|ogg]",
				A3: "A3.[mp3|ogg]",
				A4: "A4.[mp3|ogg]",
				A5: "A5.[mp3|ogg]",
				C1: "C1.[mp3|ogg]",
				C2: "C2.[mp3|ogg]"
			},
			piano: {
				A2: l("A2"),
				A3: l("A3"),
				A4: l("A4"),
				A5: l("A5"),
				A6: l("A6"),
				"A#3": l("A#3"),
				"A#4": l("A#4"),
				"A#5": l("A#5"),
				"A#6": l("A#6"),
				B2: l("B2"),
				B3: l("B3"),
				B4: l("B4"),
				B5: l("B5"),
				B6: l("B6"),
				C2: l("C2"),
				C3: l("C3"),
				C4: l("C4"),
				C5: l("C5"),
				C6: l("C6"),
				C7: l("C7"),
				"C#2": l("C#2"),
				"C#3": l("C#3"),
				"C#4": l("C#4"),
				"C#5": l("C#5"),
				"C#6": l("C#6"),
				D0: l("D0"),
				D1: l("D1"),
				D2: l("D2"),
				D3: l("D3"),
				D4: l("D4"),
				D5: l("D5"),
				D6: l("D6"),
				"D#2": l("D#2"),
				"D#3": l("D#3"),
				"D#4": l("D#4"),
				"D#5": l("D#5"),
				"D#6": l("D#6"),
				E2: l("E2"),
				E3: l("E3"),
				E4: l("E4"),
				E5: l("E5"),
				E6: l("E6"),
				F2: l("F2"),
				F3: l("F3"),
				F4: l("F4"),
				F5: l("F5"),
				F6: l("F6"),
				"F#2": l("F#2"),
				"F#3": l("F#3"),
				"F#4": l("F#4"),
				"F#5": l("F#5"),
				"F#6": l("F#6"),
				G2: l("G2"),
				G3: l("G3"),
				G4: l("G4"),
				G5: l("G5"),
				G6: l("G6"),
				"G#2": l("G#2"),
				"G#3": l("G#3"),
				"G#4": l("G#4"),
				"G#5": l("G#5"),
				"G#6": l("G#6")
			},
			saxophone: {
				"D#4": "Ds4.[mp3|ogg]",
				E2: "E2.[mp3|ogg]",
				E3: "E3.[mp3|ogg]",
				E4: "E4.[mp3|ogg]",
				F2: "F2.[mp3|ogg]",
				F3: "F3.[mp3|ogg]",
				F4: "F4.[mp3|ogg]",
				"F#2": "Fs2.[mp3|ogg]",
				"F#3": "Fs3.[mp3|ogg]",
				"F#4": "Fs4.[mp3|ogg]",
				G2: "G2.[mp3|ogg]",
				G3: "G3.[mp3|ogg]",
				G4: "G4.[mp3|ogg]",
				"G#2": "Gs2.[mp3|ogg]",
				"G#3": "Gs3.[mp3|ogg]",
				"G#4": "Gs4.[mp3|ogg]",
				A3: "A3.[mp3|ogg]",
				A4: "A4.[mp3|ogg]",
				"A#2": "As2.[mp3|ogg]",
				"A#3": "As3.[mp3|ogg]",
				B2: "B2.[mp3|ogg]",
				B3: "B3.[mp3|ogg]",
				C3: "C3.[mp3|ogg]",
				C4: "C4.[mp3|ogg]",
				"C#2": "Cs2.[mp3|ogg]",
				"C#3": "Cs3.[mp3|ogg]",
				"C#4": "Cs4.[mp3|ogg]",
				D2: "D2.[mp3|ogg]",
				D3: "D3.[mp3|ogg]",
				D4: "D4.[mp3|ogg]",
				"D#2": "Ds2.[mp3|ogg]",
				"D#3": "Ds3.[mp3|ogg]"
			},
			trombone: {
				"A#2": "As2.[mp3|ogg]",
				C2: "C2.[mp3|ogg]",
				C3: "C3.[mp3|ogg]",
				"C#1": "Cs1.[mp3|ogg]",
				"C#3": "Cs3.[mp3|ogg]",
				D2: "D2.[mp3|ogg]",
				D3: "D3.[mp3|ogg]",
				"D#1": "Ds1.[mp3|ogg]",
				"D#2": "Ds2.[mp3|ogg]",
				"D#3": "Ds3.[mp3|ogg]",
				F1: "F1.[mp3|ogg]",
				F2: "F2.[mp3|ogg]",
				F3: "F3.[mp3|ogg]",
				"G#1": "Gs1.[mp3|ogg]",
				"G#2": "Gs2.[mp3|ogg]",
				"A#0": "As0.[mp3|ogg]",
				"A#1": "As1.[mp3|ogg]"
			},
			trumpet: {
				C5: "C5.[mp3|ogg]",
				D4: "D4.[mp3|ogg]",
				"D#3": "Ds3.[mp3|ogg]",
				F2: "F2.[mp3|ogg]",
				F3: "F3.[mp3|ogg]",
				F4: "F4.[mp3|ogg]",
				G3: "G3.[mp3|ogg]",
				A2: "A2.[mp3|ogg]",
				A4: "A4.[mp3|ogg]",
				"A#3": "As3.[mp3|ogg]",
				C3: "C3.[mp3|ogg]"
			},
			tuba: {
				"A#1": "As1.[mp3|ogg]",
				"A#2": "As2.[mp3|ogg]",
				D2: "D2.[mp3|ogg]",
				D3: "D3.[mp3|ogg]",
				"D#1": "Ds1.[mp3|ogg]",
				F0: "F0.[mp3|ogg]",
				F1: "F1.[mp3|ogg]",
				F2: "F2.[mp3|ogg]",
				"A#0": "As0.[mp3|ogg]"
			},
			violin: {
				A3: "A3.[mp3|ogg]",
				A4: "A4.[mp3|ogg]",
				A5: "A5.[mp3|ogg]",
				A6: "A6.[mp3|ogg]",
				C4: "C4.[mp3|ogg]",
				C5: "C5.[mp3|ogg]",
				C6: "C6.[mp3|ogg]",
				C7: "C7.[mp3|ogg]",
				E4: "E4.[mp3|ogg]",
				E5: "E5.[mp3|ogg]",
				E6: "E6.[mp3|ogg]",
				G4: "G4.[mp3|ogg]",
				G5: "G5.[mp3|ogg]",
				G6: "G6.[mp3|ogg]"
			},
			xylophone: {
				C7: "C7.[mp3|ogg]",
				G3: "G3.[mp3|ogg]",
				G4: "G4.[mp3|ogg]",
				G5: "G5.[mp3|ogg]",
				G6: "G6.[mp3|ogg]",
				C4: "C4.[mp3|ogg]",
				C5: "C5.[mp3|ogg]",
				C6: "C6.[mp3|ogg]"
			}
		};
		e.a = u
	},
	"Ya+D": function(t, e, i) {
		e = t.exports = i("FZ+f")(!1),
		e.push([t.i, ".score-container.component-auto-list{width:40%;min-width:500px;padding-bottom:50%;font-size:14px;overflow:hidden;background:hsla(0,0%,100%,.6);border-radius:5px;border:1px solid #ddd;position:relative}.score-container.component-auto-list .list-view{width:100%;height:100%;position:absolute;top:0;left:0;padding:20px 15px;overflow-y:scroll}.score-container.component-auto-list .component-title{margin:0 0 10px;font-size:18px;font-weight:700;line-height:26px;position:relative}.score-container.component-auto-list .component-title .music-img{display:inline-block;width:26px;vertical-align:middle}.score-container.component-auto-list .component-title .title{vertical-align:middle;margin-left:5px}.score-container.component-auto-list .component-title .degree{width:150px;float:right;text-align:left}.score-container.component-auto-list .list{width:100%;padding-left:25px;padding-bottom:10px;line-height:32px}.score-container.component-auto-list .list .list-item{height:32px;line-height:32px;list-style:none}.score-container.component-auto-list .list .list-item a{display:inline-block;min-width:120px;cursor:pointer}.score-container.component-auto-list .list .list-item .icon-pause{display:inline-block;-webkit-transform:scale(.6);transform:scale(.6);cursor:pointer}.score-container.component-auto-list .list .list-item .icon-pause:hover{opacity:.8}.score-container.component-auto-list .list .list-item a:hover{color:#1295db;text-decoration:underline}.score-container.component-auto-list .list .list-item .num{float:left;width:35px;height:32px;font-size:16px;margin-left:-35px;text-align:center;color:#ef496f}.score-container.component-auto-list .list .list-item .difficulty-degree{width:150px;float:right;text-align:left}.score-container.component-auto-list .list .list-item .difficulty-degree .icon-heartbeat{display:inline-block;-webkit-transform:scale(.7);transform:scale(.7);margin-left:-6px}.score-container.component-auto-list .player-view{font-size:16px;width:100%;height:100%;position:absolute;top:0;left:0;padding:20px 15px;overflow-y:scroll}.score-container.component-auto-list .player-view .top-bar .return-btn{cursor:pointer;width:80px;height:32px;line-height:32px;font-size:14px;color:#1f6fb5}.score-container.component-auto-list .player-view .top-bar .return-btn:hover{text-decoration:underline;color:#1295db}.score-container.component-auto-list .player-view .top-bar h2{font-size:18px}.score-container.component-auto-list .player-view .cd{width:220px;height:220px;margin:0 auto;border-radius:50%;border:5px solid #ddd;background:-webkit-gradient(linear,left top,right top,from(#000),color-stop(#555),to(#000));background:linear-gradient(90deg,#000,#555,#000);position:relative;-webkit-animation:spin 7s linear infinite;animation:spin 7s linear infinite}.score-container.component-auto-list .player-view .cd .cd-inner{width:70px;height:70px;line-height:70px;border-radius:50%;border:3px solid #aaa;background:#cd3f11;position:absolute;top:0;left:0;bottom:0;right:0;margin:auto;text-align:center;color:#fff;font-size:12px}.score-container.component-auto-list .player-view .music-name{text-align:center;padding:15px 0;font-weight:400}.score-container.component-auto-list .player-view .control-bar{width:100%;text-align:center;padding:15px 0}.score-container.component-auto-list .player-view .control-bar .stop-btn{display:inline-block;width:70px;height:35px;line-height:35px;background:#ef496f;color:#fff;cursor:pointer}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}", ""])
	},
	Yobk: function(t, e, i) {
		var n = i("77Pl"),
		o = i("qio6"),
		s = i("xnc9"),
		r = i("ax3d")("IE_PROTO"),
		a = function() {},
		l = function() {
			var t, e = i("ON07")("iframe"),
			n = s.length;
			for (e.style.display = "none", i("RPLV").appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object<\/script>"), t.close(), l = t.F; n--;) delete l.prototype[s[n]];
			return l()
		};
		t.exports = Object.create ||
		function(t, e) {
			var i;
			return null !== t ? (a.prototype = n(t), i = new a, a.prototype = null, i[r] = t) : i = l(),
			void 0 === e ? i: o(i, e)
		}
	},
	Z2zZ: function(t, e, i) {
		"use strict";
		function n(t) {
			i("2aVo")
		}
		var o = i("Achj"),
		s = i("nyna"),
		r = i("VU/8"),
		a = n,
		l = r(o.a, s.a, !1, a, null, null);
		e.a = l.exports
	},
	ZnLv: function(t, e, i) { !
		function(e, i) {
			t.exports = i()
		} ("undefined" != typeof self && self,
		function() {
			return function(t) {
				function e(n) {
					if (i[n]) return i[n].exports;
					var o = i[n] = {
						i: n,
						l: !1,
						exports: {}
					};
					return t[n].call(o.exports, o, o.exports, e),
					o.l = !0,
					o.exports
				}
				var i = {};
				return e.m = t,
				e.c = i,
				e.d = function(t, i, n) {
					e.o(t, i) || Object.defineProperty(t, i, {
						configurable: !1,
						enumerable: !0,
						get: n
					})
				},
				e.r = function(t) {
					Object.defineProperty(t, "__esModule", {
						value: !0
					})
				},
				e.n = function(t) {
					var i = t && t.__esModule ?
					function() {
						return t.
					default
					}:
					function() {
						return t
					};
					return e.d(i, "a", i),
					i
				},
				e.o = function(t, e) {
					return Object.prototype.hasOwnProperty.call(t, e)
				},
				e.p = "",
				e(e.s = 155)
			} ([function(t, e, i) { (function(n) {
					var o, s;
					/**
 *  Tone.js
 *  @author Yotam Mann
 *  @license http://opensource.org/licenses/MIT MIT License
 *  @copyright 2014-2019 Yotam Mann
 */
					o = [i(153)],
					void 0 === (s = function(t) {
						"use strict";
						var e = function() {
							if (! (this instanceof e)) throw new Error("constructor needs to be called with the 'new' keyword")
						};
						return e.prototype.toString = function() {
							for (var t in e) {
								var i = t[0].match(/^[A-Z]$/),
								n = e[t] === this.constructor;
								if (e.isFunction(e[t]) && i && n) return t
							}
							return "Tone"
						},
						e.prototype.dispose = function() {
							return this
						},
						e.prototype.set = function(t, i, n) {
							if (e.isObject(t)) n = i;
							else if (e.isString(t)) {
								var o = {};
								o[t] = i,
								t = o
							}
							t: for (var s in t) {
								i = t[s];
								var r = this;
								if ( - 1 !== s.indexOf(".")) {
									for (var a = s.split("."), l = 0; l < a.length - 1; l++) if ((r = r[a[l]]) instanceof e) {
										a.splice(0, l + 1);
										var u = a.join(".");
										r.set(u, i);
										continue t
									}
									s = a[a.length - 1]
								}
								var c = r[s];
								e.isUndef(c) || (e.Signal && c instanceof e.Signal || e.Param && c instanceof e.Param ? c.value !== i && (e.isUndef(n) ? c.value = i: c.rampTo(i, n)) : c instanceof AudioParam ? c.value !== i && (c.value = i) : e.TimeBase && c instanceof e.TimeBase ? r[s] = i: c instanceof e ? c.set(i) : c !== i && (r[s] = i))
							}
							return this
						},
						e.prototype.get = function(t) {
							e.isUndef(t) ? t = this._collectDefaults(this.constructor) : e.isString(t) && (t = [t]);
							for (var i = {},
							n = 0; n < t.length; n++) {
								var o = t[n],
								s = this,
								r = i;
								if ( - 1 !== o.indexOf(".")) {
									for (var a = o.split("."), l = 0; l < a.length - 1; l++) {
										var u = a[l];
										r[u] = r[u] || {},
										r = r[u],
										s = s[u]
									}
									o = a[a.length - 1]
								}
								var c = s[o];
								e.isObject(t[o]) ? r[o] = c.get() : e.Signal && c instanceof e.Signal ? r[o] = c.value: e.Param && c instanceof e.Param ? r[o] = c.value: c instanceof AudioParam ? r[o] = c.value: c instanceof e ? r[o] = c.get() : !e.isFunction(c) && e.isDefined(c) && (r[o] = c)
							}
							return i
						},
						e.prototype._collectDefaults = function(t) {
							var i = [];
							if (e.isDefined(t.defaults) && (i = Object.keys(t.defaults)), e.isDefined(t._super)) for (var n = this._collectDefaults(t._super), o = 0; o < n.length; o++) - 1 === i.indexOf(n[o]) && i.push(n[o]);
							return i
						},
						e.defaults = function(t, i, n) {
							var o = {};
							if (1 === t.length && e.isObject(t[0])) o = t[0];
							else for (var s = 0; s < i.length; s++) o[i[s]] = t[s];
							return e.isDefined(n.defaults) ? e.defaultArg(o, n.defaults) : e.isObject(n) ? e.defaultArg(o, n) : o
						},
						e.defaultArg = function(t, i) {
							if (e.isObject(t) && e.isObject(i)) {
								var n = {};
								for (var o in t) n[o] = e.defaultArg(i[o], t[o]);
								for (var s in i) n[s] = e.defaultArg(t[s], i[s]);
								return n
							}
							return e.isUndef(t) ? i: t
						},
						e.prototype.log = function() {
							if (this.debug || this.toString() === e.global.TONE_DEBUG_CLASS) {
								var t = Array.from(arguments);
								t.unshift(this.toString() + ":"),
								console.log.apply(void 0, t)
							}
						},
						e.prototype.assert = function(t, e) {
							if (!t) throw new Error(e)
						},
						e.connectSeries = function() {
							for (var t = arguments[0], i = 1; i < arguments.length; i++) {
								var n = arguments[i];
								t.connect(n),
								t = n
							}
							return e
						},
						e.isUndef = function(t) {
							return void 0 === t
						},
						e.isDefined = function(t) {
							return ! e.isUndef(t)
						},
						e.isFunction = function(t) {
							return "function" == typeof t
						},
						e.isNumber = function(t) {
							return "number" == typeof t
						},
						e.isObject = function(t) {
							return "[object Object]" === Object.prototype.toString.call(t) && t.constructor === Object
						},
						e.isBoolean = function(t) {
							return "boolean" == typeof t
						},
						e.isArray = function(t) {
							return Array.isArray(t)
						},
						e.isString = function(t) {
							return "string" == typeof t
						},
						e.isNote = function(t) {
							return e.isString(t) && /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(t)
						},
						e.noOp = function() {},
						e.prototype._readOnly = function(t) {
							if (Array.isArray(t)) for (var e = 0; e < t.length; e++) this._readOnly(t[e]);
							else Object.defineProperty(this, t, {
								writable: !1,
								enumerable: !0
							})
						},
						e.prototype._writable = function(t) {
							if (Array.isArray(t)) for (var e = 0; e < t.length; e++) this._writable(t[e]);
							else Object.defineProperty(this, t, {
								writable: !0
							})
						},
						e.State = {
							Started: "started",
							Stopped: "stopped",
							Paused: "paused"
						},
						e.global = e.isUndef(n) ? window: n,
						e.equalPowerScale = function(t) {
							var e = .5 * Math.PI;
							return Math.sin(t * e)
						},
						e.dbToGain = function(t) {
							return Math.pow(10, t / 20)
						},
						e.gainToDb = function(t) {
							return Math.log(t) / Math.LN10 * 20
						},
						e.intervalToFrequencyRatio = function(t) {
							return Math.pow(2, t / 12)
						},
						e.prototype.now = function() {
							return e.context.now()
						},
						e.now = function() {
							return e.context.now()
						},
						e.prototype.immediate = function() {
							return e.context.currentTime
						},
						e.immediate = function() {
							return e.context.currentTime
						},
						e.extend = function(t, i) {
							function n() {}
							e.isUndef(i) && (i = e),
							n.prototype = i.prototype,
							t.prototype = new n,
							t.prototype.constructor = t,
							t._super = i
						},
						e._audioContext = null,
						e.start = function() {
							return e.context.resume()
						},
						Object.defineProperty(e, "context", {
							get: function() {
								return e._audioContext
							},
							set: function(t) {
								t.isContext ? e._audioContext = t: e._audioContext = new e.Context(t),
								e.Context.emit("init", e._audioContext)
							}
						}),
						Object.defineProperty(e.prototype, "context", {
							get: function() {
								return e.context
							}
						}),
						e.setContext = function(t) {
							e.context = t
						},
						Object.defineProperty(e.prototype, "blockTime", {
							get: function() {
								return 128 / this.context.sampleRate
							}
						}),
						Object.defineProperty(e.prototype, "sampleTime", {
							get: function() {
								return 1 / this.context.sampleRate
							}
						}),
						Object.defineProperty(e, "supported", {
							get: function() {
								var t = e.global.hasOwnProperty("AudioContext") || e.global.hasOwnProperty("webkitAudioContext"),
								i = e.global.hasOwnProperty("Promise");
								return t && i
							}
						}),
						Object.defineProperty(e, "initialized", {
							get: function() {
								return Boolean(e.context)
							}
						}),
						e.getContext = function(t) {
							if (e.initialized) t(e.context);
							else {
								var i = function() {
									t(e.context),
									e.Context.off("init", i)
								};
								e.Context.on("init", i)
							}
							return e
						},
						e.version = t,
						e
					}.apply(e, o)) || (t.exports = s)
				}).call(this, i(154))
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(7), i(4), i(14), i(97), i(3)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Signal = function() {
						var e = t.defaults(arguments, ["value", "units"], t.Signal);
						t.Param.call(this, e),
						this._constantSource = this.context.createConstantSource(),
						this._constantSource.start(0),
						this._param = this._constantSource.offset,
						this.value = e.value,
						this.output = this._constantSource,
						this.input = this._param = this.output.offset
					},
					t.extend(t.Signal, t.Param),
					t.Signal.defaults = {
						value: 0,
						units: t.Type.Default,
						convert: !0
					},
					t.Signal.prototype.connect = t.SignalBase.prototype.connect,
					t.Signal.prototype.disconnect = t.SignalBase.prototype.disconnect,
					t.Signal.prototype.getValueAtTime = function(e) {
						return this._param.getValueAtTime ? this._param.getValueAtTime(e) : t.Param.prototype.getValueAtTime.call(this, e)
					},
					t.Signal.prototype.dispose = function() {
						return t.Param.prototype.dispose.call(this),
						this._constantSource.disconnect(),
						this._constantSource = null,
						this
					},
					t.Signal
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(20)],
				void 0 === (o = function(t) {
					return t.AudioNode = function() {
						t.call(this);
						var e = t.defaults(arguments, ["context"], {
							context: t.context
						});
						this._context = e.context
					},
					t.extend(t.AudioNode),
					Object.defineProperty(t.AudioNode.prototype, "context", {
						get: function() {
							return this._context
						}
					}),
					t.AudioNode.prototype.createInsOuts = function(t, e) {
						1 === t ? this.input = this.context.createGain() : t > 1 && (this.input = new Array(t)),
						1 === e ? this.output = this.context.createGain() : e > 1 && (this.output = new Array(e))
					},
					Object.defineProperty(t.AudioNode.prototype, "channelCount", {
						get: function() {
							return this.output.channelCount
						},
						set: function(t) {
							return this.output.channelCount = t
						}
					}),
					Object.defineProperty(t.AudioNode.prototype, "channelCountMode", {
						get: function() {
							return this.output.channelCountMode
						},
						set: function(t) {
							return this.output.channelCountMode = t
						}
					}),
					Object.defineProperty(t.AudioNode.prototype, "channelInterpretation", {
						get: function() {
							return this.output.channelInterpretation
						},
						set: function(t) {
							return this.output.channelInterpretation = t
						}
					}),
					Object.defineProperty(t.AudioNode.prototype, "numberOfInputs", {
						get: function() {
							return this.input ? t.isArray(this.input) ? this.input.length: 1 : 0
						}
					}),
					Object.defineProperty(t.AudioNode.prototype, "numberOfOutputs", {
						get: function() {
							return this.output ? t.isArray(this.output) ? this.output.length: 1 : 0
						}
					}),
					t.AudioNode.prototype.connect = function(e, i, n) {
						return t.isArray(this.output) ? (i = t.defaultArg(i, 0), this.output[i].connect(e, 0, n)) : this.output.connect(e, i, n),
						this
					},
					t.AudioNode.prototype.disconnect = function(e, i, n) {
						t.isArray(this.output) ? t.isNumber(e) ? this.output[e].disconnect() : (i = t.defaultArg(i, 0), this.output[i].disconnect(e, 0, n)) : this.output.disconnect.apply(this.output, arguments)
					},
					t.AudioNode.prototype.chain = function() {
						for (var t = this,
						e = 0; e < arguments.length; e++) {
							var i = arguments[e];
							t.connect(i),
							t = i
						}
						return this
					},
					t.AudioNode.prototype.fan = function() {
						for (var t = 0; t < arguments.length; t++) this.connect(arguments[t]);
						return this
					},
					t.global.AudioNode && (AudioNode.prototype.chain = t.AudioNode.prototype.chain, AudioNode.prototype.fan = t.AudioNode.prototype.fan),
					t.AudioNode.prototype.dispose = function() {
						return t.isDefined(this.input) && (this.input instanceof AudioNode && this.input.disconnect(), this.input = null),
						t.isDefined(this.output) && (this.output instanceof AudioNode && this.output.disconnect(), this.output = null),
						this._context = null,
						this
					},
					t.AudioNode
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(14), i(4), i(2)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Gain = function() {
						var e = t.defaults(arguments, ["gain", "units"], t.Gain);
						t.AudioNode.call(this, e),
						this.input = this.output = this._gainNode = this.context.createGain(),
						this.gain = new t.Param({
							param: this._gainNode.gain,
							units: e.units,
							value: e.gain,
							convert: e.convert
						}),
						this._readOnly("gain")
					},
					t.extend(t.Gain, t.AudioNode),
					t.Gain.defaults = {
						gain: 1,
						convert: !0
					},
					t.Gain.prototype.dispose = function() {
						t.AudioNode.prototype.dispose.call(this),
						this._gainNode.disconnect(),
						this._gainNode = null,
						this._writable("gain"),
						this.gain.dispose(),
						this.gain = null
					},
					t.Gain
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(65), i(46), i(45), i(20)],
				void 0 === (o = function(t) {
					return t.Type = {
						Default: "number",
						Time: "time",
						Frequency: "frequency",
						TransportTime: "transportTime",
						Ticks: "ticks",
						NormalRange: "normalRange",
						AudioRange: "audioRange",
						Decibels: "db",
						Interval: "interval",
						BPM: "bpm",
						Positive: "positive",
						Gain: "gain",
						Cents: "cents",
						Degrees: "degrees",
						MIDI: "midi",
						BarsBeatsSixteenths: "barsBeatsSixteenths",
						Samples: "samples",
						Hertz: "hertz",
						Note: "note",
						Milliseconds: "milliseconds",
						Seconds: "seconds",
						Notation: "notation"
					},
					t.prototype.toSeconds = function(e) {
						return t.isNumber(e) ? e: t.isUndef(e) ? this.now() : t.isString(e) || t.isObject(e) ? new t.Time(e).toSeconds() : e instanceof t.TimeBase ? e.toSeconds() : void 0
					},
					t.prototype.toFrequency = function(e) {
						return t.isNumber(e) ? e: t.isString(e) || t.isUndef(e) || t.isObject(e) ? new t.Frequency(e).valueOf() : e instanceof t.TimeBase ? e.toFrequency() : void 0
					},
					t.prototype.toTicks = function(e) {
						return t.isNumber(e) || t.isString(e) || t.isObject(e) ? new t.TransportTime(e).toTicks() : t.isUndef(e) ? t.Transport.ticks: e instanceof t.TimeBase ? e.toTicks() : void 0
					},
					t
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(14), i(3), i(36)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Multiply = function(e) {
						t.Signal.call(this),
						this.createInsOuts(2, 0),
						this._mult = this.input[0] = this.output = new t.Gain,
						this._param = this.input[1] = this.output.gain,
						this.value = t.defaultArg(e, 0),
						this.proxy = !1
					},
					t.extend(t.Multiply, t.Signal),
					t.Multiply.prototype.dispose = function() {
						return t.Signal.prototype.dispose.call(this),
						this._mult.dispose(),
						this._mult = null,
						this._param = null,
						this
					},
					t.Multiply
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(16), i(27), i(40), i(4), i(33), i(1), i(2)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Source = function(e) {
						e = t.defaultArg(e, t.Source.defaults),
						t.AudioNode.call(this),
						this._volume = this.output = new t.Volume(e.volume),
						this.volume = this._volume.volume,
						this._readOnly("volume"),
						this._state = new t.TimelineState(t.State.Stopped),
						this._state.memory = 100,
						this._synced = !1,
						this._scheduled = [],
						this._volume.output.output.channelCount = 2,
						this._volume.output.output.channelCountMode = "explicit",
						this.mute = e.mute
					},
					t.extend(t.Source, t.AudioNode),
					t.Source.defaults = {
						volume: 0,
						mute: !1
					},
					Object.defineProperty(t.Source.prototype, "state", {
						get: function() {
							return this._synced ? t.Transport.state === t.State.Started ? this._state.getValueAtTime(t.Transport.seconds) : t.State.Stopped: this._state.getValueAtTime(this.now())
						}
					}),
					Object.defineProperty(t.Source.prototype, "mute", {
						get: function() {
							return this._volume.mute
						},
						set: function(t) {
							this._volume.mute = t
						}
					}),
					t.Source.prototype._start = t.noOp,
					t.Source.prototype.restart = t.noOp,
					t.Source.prototype._stop = t.noOp,
					t.Source.prototype.start = function(e, i, n) {
						if (e = t.isUndef(e) && this._synced ? t.Transport.seconds: this.toSeconds(e), this._state.getValueAtTime(e) === t.State.Started) this._state.cancel(e),
						this._state.setStateAtTime(t.State.Started, e),
						this.restart(e, i, n);
						else if (this._state.setStateAtTime(t.State.Started, e), this._synced) {
							var o = this._state.get(e);
							o.offset = t.defaultArg(i, 0),
							o.duration = n;
							var s = t.Transport.schedule(function(t) {
								this._start(t, i, n)
							}.bind(this), e);
							this._scheduled.push(s),
							t.Transport.state === t.State.Started && this._syncedStart(this.now(), t.Transport.seconds)
						} else this._start.apply(this, arguments);
						return this
					},
					t.Source.prototype.stop = function(e) {
						if (e = t.isUndef(e) && this._synced ? t.Transport.seconds: this.toSeconds(e), this._synced) {
							var i = t.Transport.schedule(this._stop.bind(this), e);
							this._scheduled.push(i)
						} else this._stop.apply(this, arguments);
						return this._state.cancel(e),
						this._state.setStateAtTime(t.State.Stopped, e),
						this
					},
					t.Source.prototype.sync = function() {
						return this._synced = !0,
						this._syncedStart = function(e, i) {
							if (i > 0) {
								var n = this._state.get(i);
								if (n && n.state === t.State.Started && n.time !== i) {
									var o, s = i - this.toSeconds(n.time);
									n.duration && (o = this.toSeconds(n.duration) - s),
									this._start(e, this.toSeconds(n.offset) + s, o)
								}
							}
						}.bind(this),
						this._syncedStop = function(e) {
							var i = t.Transport.getSecondsAtTime(Math.max(e - this.sampleTime, 0));
							this._state.getValueAtTime(i) === t.State.Started && this._stop(e)
						}.bind(this),
						t.Transport.on("start loopStart", this._syncedStart),
						t.Transport.on("stop pause loopEnd", this._syncedStop),
						this
					},
					t.Source.prototype.unsync = function() {
						this._synced && (t.Transport.off("stop pause loopEnd", this._syncedStop), t.Transport.off("start loopStart", this._syncedStart)),
						this._synced = !1;
						for (var e = 0; e < this._scheduled.length; e++) {
							var i = this._scheduled[e];
							t.Transport.clear(i)
						}
						return this._scheduled = [],
						this._state.cancel(0),
						this
					},
					t.Source.prototype.dispose = function() {
						t.AudioNode.prototype.dispose.call(this),
						this.unsync(),
						this._scheduled = null,
						this._writable("volume"),
						this._volume.dispose(),
						this._volume = null,
						this.volume = null,
						this._state.dispose(),
						this._state = null
					},
					t.Source
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(36), i(98)],
				void 0 === (o = function(t) {
					"use strict";
					return t.WaveShaper = function(e, i) {
						t.SignalBase.call(this),
						this._shaper = this.input = this.output = this.context.createWaveShaper(),
						this._curve = null,
						Array.isArray(e) ? this.curve = e: isFinite(e) || t.isUndef(e) ? this._curve = new Float32Array(t.defaultArg(e, 1024)) : t.isFunction(e) && (this._curve = new Float32Array(t.defaultArg(i, 1024)), this.setMap(e))
					},
					t.extend(t.WaveShaper, t.SignalBase),
					t.WaveShaper.prototype.setMap = function(t) {
						for (var e = new Array(this._curve.length), i = 0, n = this._curve.length; i < n; i++) {
							var o = i / (n - 1) * 2 - 1;
							e[i] = t(o, i)
						}
						return this.curve = e,
						this
					},
					Object.defineProperty(t.WaveShaper.prototype, "curve", {
						get: function() {
							return this._shaper.curve
						},
						set: function(t) {
							this._curve = new Float32Array(t),
							this._shaper.curve = this._curve
						}
					}),
					Object.defineProperty(t.WaveShaper.prototype, "oversample", {
						get: function() {
							return this._shaper.oversample
						},
						set: function(t) {
							if (! ["none", "2x", "4x"].includes(t)) throw new RangeError("Tone.WaveShaper: oversampling must be either 'none', '2x', or '4x'");
							this._shaper.oversample = t
						}
					}),
					t.WaveShaper.prototype.dispose = function() {
						return t.SignalBase.prototype.dispose.call(this),
						this._shaper.disconnect(),
						this._shaper = null,
						this._curve = null,
						this
					},
					t.WaveShaper
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(23), i(2)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Effect = function() {
						var e = t.defaults(arguments, ["wet"], t.Effect);
						t.AudioNode.call(this),
						this.createInsOuts(1, 1),
						this._dryWet = new t.CrossFade(e.wet),
						this.wet = this._dryWet.fade,
						this.effectSend = new t.Gain,
						this.effectReturn = new t.Gain,
						this.input.connect(this._dryWet.a),
						this.input.connect(this.effectSend),
						this.effectReturn.connect(this._dryWet.b),
						this._dryWet.connect(this.output),
						this._readOnly(["wet"])
					},
					t.extend(t.Effect, t.AudioNode),
					t.Effect.defaults = {
						wet: 1
					},
					t.Effect.prototype.connectEffect = function(t) {
						return this.effectSend.chain(t, this.effectReturn),
						this
					},
					t.Effect.prototype.dispose = function() {
						return t.AudioNode.prototype.dispose.call(this),
						this._dryWet.dispose(),
						this._dryWet = null,
						this.effectSend.dispose(),
						this.effectSend = null,
						this.effectReturn.dispose(),
						this.effectReturn = null,
						this._writable(["wet"]),
						this.wet = null,
						this
					},
					t.Effect
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(1), i(2)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Filter = function() {
						var e = t.defaults(arguments, ["frequency", "type", "rolloff"], t.Filter);
						t.AudioNode.call(this),
						this.createInsOuts(1, 1),
						this._filters = [],
						this.frequency = new t.Signal(e.frequency, t.Type.Frequency),
						this.detune = new t.Signal(0, t.Type.Cents),
						this.gain = new t.Signal({
							value: e.gain,
							convert: !0,
							type: t.Type.Decibels
						}),
						this.Q = new t.Signal(e.Q),
						this._type = e.type,
						this._rolloff = e.rolloff,
						this.rolloff = e.rolloff,
						this._readOnly(["detune", "frequency", "gain", "Q"])
					},
					t.extend(t.Filter, t.AudioNode),
					t.Filter.defaults = {
						type: "lowpass",
						frequency: 350,
						rolloff: -12,
						Q: 1,
						gain: 0
					},
					Object.defineProperty(t.Filter.prototype, "type", {
						get: function() {
							return this._type
						},
						set: function(t) {
							if ( - 1 === ["lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "notch", "allpass", "peaking"].indexOf(t)) throw new TypeError("Tone.Filter: invalid type " + t);
							this._type = t;
							for (var e = 0; e < this._filters.length; e++) this._filters[e].type = t
						}
					}),
					Object.defineProperty(t.Filter.prototype, "rolloff", {
						get: function() {
							return this._rolloff
						},
						set: function(e) {
							e = parseInt(e, 10);
							var i = [ - 12, -24, -48, -96].indexOf(e);
							if ( - 1 === i) throw new RangeError("Tone.Filter: rolloff can only be -12, -24, -48 or -96");
							i += 1,
							this._rolloff = e,
							this.input.disconnect();
							for (var n = 0; n < this._filters.length; n++) this._filters[n].disconnect(),
							this._filters[n] = null;
							this._filters = new Array(i);
							for (var o = 0; o < i; o++) {
								var s = this.context.createBiquadFilter();
								s.type = this._type,
								this.frequency.connect(s.frequency),
								this.detune.connect(s.detune),
								this.Q.connect(s.Q),
								this.gain.connect(s.gain),
								this._filters[o] = s
							}
							var r = [this.input].concat(this._filters).concat([this.output]);
							t.connectSeries.apply(t, r)
						}
					}),
					t.Filter.prototype.getFrequencyResponse = function(e) {
						e = t.defaultArg(e, 128);
						for (var i = new Float32Array(e).map(function() {
							return 1
						}), n = new Float32Array(e), o = 0; o < e; o++) {
							var s = 19980 * Math.pow(o / e, 2) + 20;
							n[o] = s
						}
						var r = new Float32Array(e),
						a = new Float32Array(e);
						return this._filters.forEach(function() {
							var t = this.context.createBiquadFilter();
							t.type = this._type,
							t.Q.value = this.Q.value,
							t.frequency.value = this.frequency.value,
							t.gain.value = this.gain.value,
							t.getFrequencyResponse(n, r, a),
							r.forEach(function(t, e) {
								i[e] *= t
							})
						}.bind(this)),
						i
					},
					t.Filter.prototype.dispose = function() {
						t.AudioNode.prototype.dispose.call(this);
						for (var e = 0; e < this._filters.length; e++) this._filters[e].disconnect(),
						this._filters[e] = null;
						return this._filters = null,
						this._writable(["detune", "frequency", "gain", "Q"]),
						this.frequency.dispose(),
						this.Q.dispose(),
						this.frequency = null,
						this.Q = null,
						this.detune.dispose(),
						this.detune = null,
						this.gain.dispose(),
						this.gain = null,
						this
					},
					t.Filter
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(2)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Merge = function() {
						t.AudioNode.call(this),
						this.createInsOuts(2, 0),
						this.left = this.input[0] = new t.Gain,
						this.right = this.input[1] = new t.Gain,
						this._merger = this.output = this.context.createChannelMerger(2),
						this.left.connect(this._merger, 0, 0),
						this.right.connect(this._merger, 0, 1),
						this.left.channelCount = 1,
						this.right.channelCount = 1,
						this.left.channelCountMode = "explicit",
						this.right.channelCountMode = "explicit"
					},
					t.extend(t.Merge, t.AudioNode),
					t.Merge.prototype.dispose = function() {
						return t.AudioNode.prototype.dispose.call(this),
						this.left.dispose(),
						this.left = null,
						this.right.dispose(),
						this.right = null,
						this._merger.disconnect(),
						this._merger = null,
						this
					},
					t.Merge
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(35), i(4), i(81)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Buffer = function() {
						var e = t.defaults(arguments, ["url", "onload", "onerror"], t.Buffer);
						t.call(this),
						this._buffer = null,
						this._reversed = e.reverse,
						this._xhr = null,
						this.onload = t.noOp,
						e.url instanceof AudioBuffer || e.url instanceof t.Buffer ? (this.set(e.url), this.loaded || (this.onload = e.onload)) : t.isString(e.url) && this.load(e.url).then(e.onload).
						catch(e.onerror)
					},
					t.extend(t.Buffer),
					t.Buffer.defaults = {
						url: void 0,
						reverse: !1,
						onload: t.noOp,
						onerror: t.noOp
					},
					t.Buffer.prototype.set = function(e) {
						return e instanceof t.Buffer ? e.loaded ? this._buffer = e.get() : e.onload = function() {
							this.set(e),
							this.onload(this)
						}.bind(this) : this._buffer = e,
						this
					},
					t.Buffer.prototype.get = function() {
						return this._buffer
					},
					t.Buffer.prototype.load = function(e, i, n) {
						return new Promise(function(o, s) {
							this._xhr = t.Buffer.load(e,
							function(t) {
								this._xhr = null,
								this.set(t),
								o(this),
								this.onload(this),
								i && i(this)
							}.bind(this),
							function(t) {
								this._xhr = null,
								s(t),
								n && n(t)
							}.bind(this))
						}.bind(this))
					},
					t.Buffer.prototype.dispose = function() {
						return t.prototype.dispose.call(this),
						this._buffer = null,
						this._xhr && (t.Buffer._removeFromDownloadQueue(this._xhr), this._xhr.abort(), this._xhr = null),
						this
					},
					Object.defineProperty(t.Buffer.prototype, "loaded", {
						get: function() {
							return this.length > 0
						}
					}),
					Object.defineProperty(t.Buffer.prototype, "duration", {
						get: function() {
							return this._buffer ? this._buffer.duration: 0
						}
					}),
					Object.defineProperty(t.Buffer.prototype, "length", {
						get: function() {
							return this._buffer ? this._buffer.length: 0
						}
					}),
					Object.defineProperty(t.Buffer.prototype, "numberOfChannels", {
						get: function() {
							return this._buffer ? this._buffer.numberOfChannels: 0
						}
					}),
					t.Buffer.prototype.fromArray = function(t) {
						var e = t[0].length > 0,
						i = e ? t.length: 1,
						n = e ? t[0].length: t.length,
						o = this.context.createBuffer(i, n, this.context.sampleRate);
						e || 1 !== i || (t = [t]);
						for (var s = 0; s < i; s++) o.copyToChannel(t[s], s);
						return this._buffer = o,
						this
					},
					t.Buffer.prototype.toMono = function(e) {
						if (t.isNumber(e)) this.fromArray(this.toArray(e));
						else {
							for (var i = new Float32Array(this.length), n = this.numberOfChannels, o = 0; o < n; o++) for (var s = this.toArray(o), r = 0; r < s.length; r++) i[r] += s[r];
							i = i.map(function(t) {
								return t / n
							}),
							this.fromArray(i)
						}
						return this
					},
					t.Buffer.prototype.toArray = function(e) {
						if (t.isNumber(e)) return this.getChannelData(e);
						if (1 === this.numberOfChannels) return this.toArray(0);
						for (var i = [], n = 0; n < this.numberOfChannels; n++) i[n] = this.getChannelData(n);
						return i
					},
					t.Buffer.prototype.getChannelData = function(t) {
						return this._buffer.getChannelData(t)
					},
					t.Buffer.prototype.slice = function(e, i) {
						i = t.defaultArg(i, this.duration);
						for (var n = Math.floor(this.context.sampleRate * this.toSeconds(e)), o = Math.floor(this.context.sampleRate * this.toSeconds(i)), s = [], r = 0; r < this.numberOfChannels; r++) s[r] = this.toArray(r).slice(n, o);
						return (new t.Buffer).fromArray(s)
					},
					t.Buffer.prototype._reverse = function() {
						if (this.loaded) for (var t = 0; t < this.numberOfChannels; t++) Array.prototype.reverse.call(this.getChannelData(t));
						return this
					},
					Object.defineProperty(t.Buffer.prototype, "reverse", {
						get: function() {
							return this._reversed
						},
						set: function(t) {
							this._reversed !== t && (this._reversed = t, this._reverse())
						}
					}),
					t.Emitter.mixin(t.Buffer),
					t.Buffer._downloadQueue = [],
					t.Buffer.baseUrl = "",
					t.Buffer.fromArray = function(e) {
						return (new t.Buffer).fromArray(e)
					},
					t.Buffer.fromUrl = function(e) {
						var i = new t.Buffer;
						return i.load(e).then(function() {
							return i
						})
					},
					t.Buffer._removeFromDownloadQueue = function(e) {
						var i = t.Buffer._downloadQueue.indexOf(e); - 1 !== i && t.Buffer._downloadQueue.splice(i, 1)
					},
					t.Buffer.load = function(e, i, n) {
						function o(e) {
							if (t.Buffer._removeFromDownloadQueue(c), t.Buffer.emit("error", e), !n) throw e;
							n(e)
						}
						function s() {
							for (var e = 0,
							i = 0; i < t.Buffer._downloadQueue.length; i++) e += t.Buffer._downloadQueue[i].progress;
							t.Buffer.emit("progress", e / t.Buffer._downloadQueue.length)
						}
						i = t.defaultArg(i, t.noOp);
						var r = e.match(/\[(.+\|?)+\]$/);
						if (r) {
							for (var a = r[1].split("|"), l = a[0], u = 0; u < a.length; u++) if (t.Buffer.supportsType(a[u])) {
								l = a[u];
								break
							}
							e = e.replace(r[0], l)
						}
						var c = new XMLHttpRequest;
						return c.open("GET", t.Buffer.baseUrl + e, !0),
						c.responseType = "arraybuffer",
						c.progress = 0,
						t.Buffer._downloadQueue.push(c),
						c.addEventListener("load",
						function() {
							200 === c.status ? t.context.decodeAudioData(c.response).then(function(e) {
								c.progress = 1,
								s(),
								i(e),
								t.Buffer._removeFromDownloadQueue(c),
								0 === t.Buffer._downloadQueue.length && t.Buffer.emit("load")
							}).
							catch(function() {
								t.Buffer._removeFromDownloadQueue(c),
								o("Tone.Buffer: could not decode audio data: " + e)
							}) : o("Tone.Buffer: could not locate file: " + e)
						}),
						c.addEventListener("error", o),
						c.addEventListener("progress",
						function(t) {
							t.lengthComputable && (c.progress = t.loaded / t.total * .95, s())
						}),
						c.send(),
						c
					},
					t.Buffer.cancelDownloads = function() {
						return t.Buffer._downloadQueue.slice().forEach(function(e) {
							t.Buffer._removeFromDownloadQueue(e),
							e.abort()
						}),
						t.Buffer
					},
					t.Buffer.supportsType = function(t) {
						var e = t.split(".");
						return e = e[e.length - 1],
						"" !== document.createElement("audio").canPlayType("audio/" + e)
					},
					t.loaded = function() {
						function e() {
							t.Buffer.off("load", i),
							t.Buffer.off("error", n)
						}
						var i, n;
						return new Promise(function(e, o) {
							i = function() {
								e()
							},
							n = function() {
								o()
							},
							t.Buffer.on("load", i),
							t.Buffer.on("error", n)
						}).then(e).
						catch(function(t) {
							throw e(),
							new Error(t)
						})
					},
					t.Buffer
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(17), i(26), i(2), i(1), i(22), i(4), i(28)],
				void 0 === (o = function(t) {
					"use strict";
					return t.LFO = function() {
						var e = t.defaults(arguments, ["frequency", "min", "max"], t.LFO);
						t.AudioNode.call(this),
						this._oscillator = new t.Oscillator({
							frequency: e.frequency,
							type: e.type
						}),
						this.frequency = this._oscillator.frequency,
						this.amplitude = this._oscillator.volume,
						this.amplitude.units = t.Type.NormalRange,
						this.amplitude.value = e.amplitude,
						this._stoppedSignal = new t.Signal(0, t.Type.AudioRange),
						this._zeros = new t.Zero,
						this._stoppedValue = 0,
						this._a2g = new t.AudioToGain,
						this._scaler = this.output = new t.Scale(e.min, e.max),
						this._units = t.Type.Default,
						this.units = e.units,
						this._oscillator.chain(this._a2g, this._scaler),
						this._zeros.connect(this._a2g),
						this._stoppedSignal.connect(this._a2g),
						this._readOnly(["amplitude", "frequency"]),
						this.phase = e.phase
					},
					t.extend(t.LFO, t.AudioNode),
					t.LFO.defaults = {
						type: "sine",
						min: 0,
						max: 1,
						phase: 0,
						frequency: "4n",
						amplitude: 1,
						units: t.Type.Default
					},
					t.LFO.prototype.start = function(t) {
						return t = this.toSeconds(t),
						this._stoppedSignal.setValueAtTime(0, t),
						this._oscillator.start(t),
						this
					},
					t.LFO.prototype.stop = function(t) {
						return t = this.toSeconds(t),
						this._stoppedSignal.setValueAtTime(this._stoppedValue, t),
						this._oscillator.stop(t),
						this
					},
					t.LFO.prototype.sync = function() {
						return this._oscillator.sync(),
						this._oscillator.syncFrequency(),
						this
					},
					t.LFO.prototype.unsync = function() {
						return this._oscillator.unsync(),
						this._oscillator.unsyncFrequency(),
						this
					},
					Object.defineProperty(t.LFO.prototype, "min", {
						get: function() {
							return this._toUnits(this._scaler.min)
						},
						set: function(t) {
							t = this._fromUnits(t),
							this._scaler.min = t
						}
					}),
					Object.defineProperty(t.LFO.prototype, "max", {
						get: function() {
							return this._toUnits(this._scaler.max)
						},
						set: function(t) {
							t = this._fromUnits(t),
							this._scaler.max = t
						}
					}),
					Object.defineProperty(t.LFO.prototype, "type", {
						get: function() {
							return this._oscillator.type
						},
						set: function(t) {
							this._oscillator.type = t,
							this._stoppedValue = this._oscillator._getInitialValue(),
							this._stoppedSignal.value = this._stoppedValue
						}
					}),
					Object.defineProperty(t.LFO.prototype, "phase", {
						get: function() {
							return this._oscillator.phase
						},
						set: function(t) {
							this._oscillator.phase = t,
							this._stoppedValue = this._oscillator._getInitialValue(),
							this._stoppedSignal.value = this._stoppedValue
						}
					}),
					Object.defineProperty(t.LFO.prototype, "units", {
						get: function() {
							return this._units
						},
						set: function(t) {
							var e = this.min,
							i = this.max;
							this._units = t,
							this.min = e,
							this.max = i
						}
					}),
					Object.defineProperty(t.LFO.prototype, "mute", {
						get: function() {
							return this._oscillator.mute
						},
						set: function(t) {
							this._oscillator.mute = t
						}
					}),
					Object.defineProperty(t.LFO.prototype, "state", {
						get: function() {
							return this._oscillator.state
						}
					}),
					t.LFO.prototype.connect = function(e) {
						return e.constructor !== t.Signal && e.constructor !== t.Param || (this.convert = e.convert, this.units = e.units),
						t.SignalBase.prototype.connect.apply(this, arguments),
						this
					},
					t.LFO.prototype._fromUnits = t.Param.prototype._fromUnits,
					t.LFO.prototype._toUnits = t.Param.prototype._toUnits,
					t.LFO.prototype.dispose = function() {
						return t.AudioNode.prototype.dispose.call(this),
						this._writable(["amplitude", "frequency"]),
						this._oscillator.dispose(),
						this._oscillator = null,
						this._stoppedSignal.dispose(),
						this._stoppedSignal = null,
						this._zeros.dispose(),
						this._zeros = null,
						this._scaler.dispose(),
						this._scaler = null,
						this._a2g.dispose(),
						this._a2g = null,
						this.frequency = null,
						this.amplitude = null,
						this
					},
					t.LFO
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(29), i(94), i(1), i(3)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Subtract = function(e) {
						t.Signal.call(this),
						this.createInsOuts(2, 0),
						this._sum = this.input[0] = this.output = new t.Gain,
						this._neg = new t.Negate,
						this._param = this.input[1] = new t.Signal(e),
						this._param.chain(this._neg, this._sum),
						this.proxy = !1
					},
					t.extend(t.Subtract, t.Signal),
					t.Subtract.prototype.dispose = function() {
						return t.Signal.prototype.dispose.call(this),
						this._neg.dispose(),
						this._neg = null,
						this._sum.disconnect(),
						this._sum = null,
						this
					},
					t.Subtract
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(4), i(2), i(24)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Param = function() {
						var e = t.defaults(arguments, ["param", "units", "convert"], t.Param);
						t.AudioNode.call(this, e),
						this._param = this.input = e.param,
						this.units = e.units,
						this.convert = e.convert,
						this.overridden = !1,
						this._events = new t.Timeline(1e3),
						t.isDefined(e.value) && this._param && this.setValueAtTime(e.value, 0)
					},
					t.extend(t.Param, t.AudioNode),
					t.Param.defaults = {
						units: t.Type.Default,
						convert: !0,
						param: void 0
					},
					Object.defineProperty(t.Param.prototype, "value", {
						get: function() {
							var t = this.now();
							return this._toUnits(this.getValueAtTime(t))
						},
						set: function(t) {
							this._initialValue = this._fromUnits(t),
							this.cancelScheduledValues(this.now()),
							this.setValueAtTime(t, this.now())
						}
					}),
					Object.defineProperty(t.Param.prototype, "minValue", {
						get: function() {
							return this.units === t.Type.Time || this.units === t.Type.Frequency || this.units === t.Type.NormalRange || this.units === t.Type.Positive || this.units === t.Type.BPM ? 0 : this.units === t.Type.AudioRange ? -1 : this.units === t.Type.Decibels ? -1 / 0 : this._param.minValue
						}
					}),
					Object.defineProperty(t.Param.prototype, "maxValue", {
						get: function() {
							return this.units === t.Type.NormalRange || this.units === t.Type.AudioRange ? 1 : this._param.maxValue
						}
					}),
					t.Param.prototype._fromUnits = function(e) {
						if (!this.convert && !t.isUndef(this.convert) || this.overridden) return e;
						switch (this.units) {
						case t.Type.Time:
							return this.toSeconds(e);
						case t.Type.Frequency:
							return this.toFrequency(e);
						case t.Type.Decibels:
							return t.dbToGain(e);
						case t.Type.NormalRange:
							return Math.min(Math.max(e, 0), 1);
						case t.Type.AudioRange:
							return Math.min(Math.max(e, -1), 1);
						case t.Type.Positive:
							return Math.max(e, 0);
						default:
							return e
						}
					},
					t.Param.prototype._toUnits = function(e) {
						if (!this.convert && !t.isUndef(this.convert)) return e;
						switch (this.units) {
						case t.Type.Decibels:
							return t.gainToDb(e);
						default:
							return e
						}
					},
					t.Param.prototype._minOutput = 1e-5,
					t.Param.AutomationType = {
						Linear: "linearRampToValueAtTime",
						Exponential: "exponentialRampToValueAtTime",
						Target: "setTargetAtTime",
						SetValue: "setValueAtTime",
						Cancel: "cancelScheduledValues"
					},
					t.Param.prototype.setValueAtTime = function(e, i) {
						return i = this.toSeconds(i),
						e = this._fromUnits(e),
						this._events.add({
							type: t.Param.AutomationType.SetValue,
							value: e,
							time: i
						}),
						this.log(t.Param.AutomationType.SetValue, e, i),
						this._param.setValueAtTime(e, i),
						this
					},
					t.Param.prototype.getValueAtTime = function(e) {
						e = this.toSeconds(e);
						var i = this._events.getAfter(e),
						n = this._events.get(e),
						o = t.defaultArg(this._initialValue, this._param.defaultValue),
						s = o;
						if (null === n) s = o;
						else if (n.type === t.Param.AutomationType.Target) {
							var r, a = this._events.getBefore(n.time);
							r = null === a ? o: a.value,
							s = this._exponentialApproach(n.time, r, n.value, n.constant, e)
						} else s = null === i ? n.value: i.type === t.Param.AutomationType.Linear ? this._linearInterpolate(n.time, n.value, i.time, i.value, e) : i.type === t.Param.AutomationType.Exponential ? this._exponentialInterpolate(n.time, n.value, i.time, i.value, e) : n.value;
						return s
					},
					t.Param.prototype.setRampPoint = function(t) {
						t = this.toSeconds(t);
						var e = this.getValueAtTime(t);
						return this.cancelAndHoldAtTime(t),
						0 === e && (e = this._minOutput),
						this.setValueAtTime(this._toUnits(e), t),
						this
					},
					t.Param.prototype.linearRampToValueAtTime = function(e, i) {
						return e = this._fromUnits(e),
						i = this.toSeconds(i),
						this._events.add({
							type: t.Param.AutomationType.Linear,
							value: e,
							time: i
						}),
						this.log(t.Param.AutomationType.Linear, e, i),
						this._param.linearRampToValueAtTime(e, i),
						this
					},
					t.Param.prototype.exponentialRampToValueAtTime = function(e, i) {
						return e = this._fromUnits(e),
						e = Math.max(this._minOutput, e),
						i = this.toSeconds(i),
						this._events.add({
							type: t.Param.AutomationType.Exponential,
							time: i,
							value: e
						}),
						this.log(t.Param.AutomationType.Exponential, e, i),
						this._param.exponentialRampToValueAtTime(e, i),
						this
					},
					t.Param.prototype.exponentialRampTo = function(t, e, i) {
						return i = this.toSeconds(i),
						this.setRampPoint(i),
						this.exponentialRampToValueAtTime(t, i + this.toSeconds(e)),
						this
					},
					t.Param.prototype.linearRampTo = function(t, e, i) {
						return i = this.toSeconds(i),
						this.setRampPoint(i),
						this.linearRampToValueAtTime(t, i + this.toSeconds(e)),
						this
					},
					t.Param.prototype.targetRampTo = function(t, e, i) {
						return i = this.toSeconds(i),
						this.setRampPoint(i),
						this.exponentialApproachValueAtTime(t, i, e),
						this
					},
					t.Param.prototype.exponentialApproachValueAtTime = function(t, e, i) {
						var n = Math.log(this.toSeconds(i) + 1) / Math.log(200);
						return e = this.toSeconds(e),
						this.setTargetAtTime(t, e, n)
					},
					t.Param.prototype.setTargetAtTime = function(e, i, n) {
						if (e = this._fromUnits(e), n <= 0) throw new Error("timeConstant must be greater than 0");
						return i = this.toSeconds(i),
						this._events.add({
							type: t.Param.AutomationType.Target,
							value: e,
							time: i,
							constant: n
						}),
						this.log(t.Param.AutomationType.Target, e, i, n),
						this._param.setTargetAtTime(e, i, n),
						this
					},
					t.Param.prototype.setValueCurveAtTime = function(e, i, n, o) {
						o = t.defaultArg(o, 1),
						n = this.toSeconds(n),
						i = this.toSeconds(i),
						this.setValueAtTime(e[0] * o, i);
						for (var s = n / (e.length - 1), r = 1; r < e.length; r++) this.linearRampToValueAtTime(e[r] * o, i + r * s);
						return this
					},
					t.Param.prototype.cancelScheduledValues = function(e) {
						return e = this.toSeconds(e),
						this._events.cancel(e),
						this._param.cancelScheduledValues(e),
						this.log(t.Param.AutomationType.Cancel, e),
						this
					},
					t.Param.prototype.cancelAndHoldAtTime = function(e) {
						var i = this.getValueAtTime(e);
						this.log("cancelAndHoldAtTime", e, "value=" + i),
						this._param.cancelScheduledValues(e);
						var n = this._events.get(e),
						o = this._events.getAfter(e);
						return n && n.time === e ? o ? this._events.cancel(o.time) : this._events.cancel(e + this.sampleTime) : o && (this._events.cancel(o.time), o.type === t.Param.AutomationType.Linear ? this.linearRampToValueAtTime(i, e) : o.type === t.Param.AutomationType.Exponential && this.exponentialRampToValueAtTime(i, e)),
						this._events.add({
							type: t.Param.AutomationType.SetValue,
							value: i,
							time: e
						}),
						this._param.setValueAtTime(i, e),
						this
					},
					t.Param.prototype.rampTo = function(e, i, n) {
						return i = t.defaultArg(i, .1),
						this.units === t.Type.Frequency || this.units === t.Type.BPM || this.units === t.Type.Decibels ? this.exponentialRampTo(e, i, n) : this.linearRampTo(e, i, n),
						this
					},
					t.Param.prototype._exponentialApproach = function(t, e, i, n, o) {
						return i + (e - i) * Math.exp( - (o - t) / n)
					},
					t.Param.prototype._linearInterpolate = function(t, e, i, n, o) {
						return e + (o - t) / (i - t) * (n - e)
					},
					t.Param.prototype._exponentialInterpolate = function(t, e, i, n, o) {
						return e * Math.pow(n / e, (o - t) / (i - t))
					},
					t.Param.prototype.dispose = function() {
						return t.AudioNode.prototype.dispose.call(this),
						this._param = null,
						this._events = null,
						this
					},
					t.Param
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(8), i(19), i(10), i(23)],
				void 0 === (o = function(t) {
					"use strict";
					return t.StereoEffect = function() {
						t.AudioNode.call(this);
						var e = t.defaults(arguments, ["wet"], t.Effect);
						this.createInsOuts(1, 1),
						this._dryWet = new t.CrossFade(e.wet),
						this.wet = this._dryWet.fade,
						this._split = new t.Split,
						this.effectSendL = this._split.left,
						this.effectSendR = this._split.right,
						this._merge = new t.Merge,
						this.effectReturnL = this._merge.left,
						this.effectReturnR = this._merge.right,
						this.input.connect(this._split),
						this.input.connect(this._dryWet, 0, 0),
						this._merge.connect(this._dryWet, 0, 1),
						this._dryWet.connect(this.output),
						this._readOnly(["wet"])
					},
					t.extend(t.StereoEffect, t.Effect),
					t.StereoEffect.prototype.dispose = function() {
						return t.AudioNode.prototype.dispose.call(this),
						this._dryWet.dispose(),
						this._dryWet = null,
						this._split.dispose(),
						this._split = null,
						this._merge.dispose(),
						this._merge = null,
						this.effectSendL = null,
						this.effectSendR = null,
						this.effectReturnL = null,
						this.effectReturnR = null,
						this._writable(["wet"]),
						this.wet = null,
						this
					},
					t.StereoEffect
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(86), i(4), i(24), i(35), i(3), i(84), i(83), i(55)],
				void 0 === (o = function(t) {
					"use strict";
					t.Transport = function() {
						t.Emitter.call(this),
						t.getContext(function() {
							this.loop = !1,
							this._loopStart = 0,
							this._loopEnd = 0,
							this._ppq = e.defaults.PPQ,
							this._clock = new t.Clock({
								callback: this._processTick.bind(this),
								frequency: 0
							}),
							this._bindClockEvents(),
							this.bpm = this._clock.frequency,
							this.bpm._toUnits = this._toUnits.bind(this),
							this.bpm._fromUnits = this._fromUnits.bind(this),
							this.bpm.units = t.Type.BPM,
							this.bpm.value = e.defaults.bpm,
							this._readOnly("bpm"),
							this._timeSignature = e.defaults.timeSignature,
							this._scheduledEvents = {},
							this._timeline = new t.Timeline,
							this._repeatedEvents = new t.IntervalTimeline,
							this._syncedSignals = [],
							this._swingTicks = e.defaults.PPQ / 2,
							this._swingAmount = 0,
							this.context.transport = this
						}.bind(this))
					},
					t.extend(t.Transport, t.Emitter),
					t.Transport.defaults = {
						bpm: 120,
						swing: 0,
						swingSubdivision: "8n",
						timeSignature: 4,
						loopStart: 0,
						loopEnd: "4m",
						PPQ: 192
					},
					t.Transport.prototype.isTransport = !0,
					t.Transport.prototype._processTick = function(e, i) {
						if (this._swingAmount > 0 && i % this._ppq != 0 && i % (2 * this._swingTicks) != 0) {
							var n = i % (2 * this._swingTicks) / (2 * this._swingTicks),
							o = Math.sin(n * Math.PI) * this._swingAmount;
							e += t.Ticks(2 * this._swingTicks / 3).toSeconds() * o
						}
						this.loop && i >= this._loopEnd && (this.emit("loopEnd", e), this._clock.setTicksAtTime(this._loopStart, e), i = this._loopStart, this.emit("loopStart", e, this._clock.getSecondsAtTime(e)), this.emit("loop", e)),
						this._timeline.forEachAtTime(i,
						function(t) {
							t.invoke(e)
						})
					},
					t.Transport.prototype.schedule = function(e, i) {
						var n = new t.TransportEvent(this, {
							time: t.TransportTime(i),
							callback: e
						});
						return this._addEvent(n, this._timeline)
					},
					t.Transport.prototype.scheduleRepeat = function(e, i, n, o) {
						var s = new t.TransportRepeatEvent(this, {
							callback: e,
							interval: t.Time(i),
							time: t.TransportTime(n),
							duration: t.Time(t.defaultArg(o, 1 / 0))
						});
						return this._addEvent(s, this._repeatedEvents)
					},
					t.Transport.prototype.scheduleOnce = function(e, i) {
						var n = new t.TransportEvent(this, {
							time: t.TransportTime(i),
							callback: e,
							once: !0
						});
						return this._addEvent(n, this._timeline)
					},
					t.Transport.prototype.clear = function(t) {
						if (this._scheduledEvents.hasOwnProperty(t)) {
							var e = this._scheduledEvents[t.toString()];
							e.timeline.remove(e.event),
							e.event.dispose(),
							delete this._scheduledEvents[t.toString()]
						}
						return this
					},
					t.Transport.prototype._addEvent = function(t, e) {
						return this._scheduledEvents[t.id.toString()] = {
							event: t,
							timeline: e
						},
						e.add(t),
						t.id
					},
					t.Transport.prototype.cancel = function(e) {
						return e = t.defaultArg(e, 0),
						e = this.toTicks(e),
						this._timeline.forEachFrom(e,
						function(t) {
							this.clear(t.id)
						}.bind(this)),
						this._repeatedEvents.forEachFrom(e,
						function(t) {
							this.clear(t.id)
						}.bind(this)),
						this
					},
					t.Transport.prototype._bindClockEvents = function() {
						this._clock.on("start",
						function(e, i) {
							i = t.Ticks(i).toSeconds(),
							this.emit("start", e, i)
						}.bind(this)),
						this._clock.on("stop",
						function(t) {
							this.emit("stop", t)
						}.bind(this)),
						this._clock.on("pause",
						function(t) {
							this.emit("pause", t)
						}.bind(this))
					},
					Object.defineProperty(t.Transport.prototype, "state", {
						get: function() {
							return this._clock.getStateAtTime(this.now())
						}
					}),
					t.Transport.prototype.start = function(e, i) {
						return t.isDefined(i) && (i = this.toTicks(i)),
						this._clock.start(e, i),
						this
					},
					t.Transport.prototype.stop = function(t) {
						return this._clock.stop(t),
						this
					},
					t.Transport.prototype.pause = function(t) {
						return this._clock.pause(t),
						this
					},
					t.Transport.prototype.toggle = function(e) {
						return e = this.toSeconds(e),
						this._clock.getStateAtTime(e) !== t.State.Started ? this.start(e) : this.stop(e),
						this
					},
					Object.defineProperty(t.Transport.prototype, "timeSignature", {
						get: function() {
							return this._timeSignature
						},
						set: function(e) {
							t.isArray(e) && (e = e[0] / e[1] * 4),
							this._timeSignature = e
						}
					}),
					Object.defineProperty(t.Transport.prototype, "loopStart", {
						get: function() {
							return t.Ticks(this._loopStart).toSeconds()
						},
						set: function(t) {
							this._loopStart = this.toTicks(t)
						}
					}),
					Object.defineProperty(t.Transport.prototype, "loopEnd", {
						get: function() {
							return t.Ticks(this._loopEnd).toSeconds()
						},
						set: function(t) {
							this._loopEnd = this.toTicks(t)
						}
					}),
					t.Transport.prototype.setLoopPoints = function(t, e) {
						return this.loopStart = t,
						this.loopEnd = e,
						this
					},
					Object.defineProperty(t.Transport.prototype, "swing", {
						get: function() {
							return this._swingAmount
						},
						set: function(t) {
							this._swingAmount = t
						}
					}),
					Object.defineProperty(t.Transport.prototype, "swingSubdivision", {
						get: function() {
							return t.Ticks(this._swingTicks).toNotation()
						},
						set: function(t) {
							this._swingTicks = this.toTicks(t)
						}
					}),
					Object.defineProperty(t.Transport.prototype, "position", {
						get: function() {
							var e = this.now(),
							i = this._clock.getTicksAtTime(e);
							return t.Ticks(i).toBarsBeatsSixteenths()
						},
						set: function(t) {
							var e = this.toTicks(t);
							this.ticks = e
						}
					}),
					Object.defineProperty(t.Transport.prototype, "seconds", {
						get: function() {
							return this._clock.seconds
						},
						set: function(t) {
							var e = this.now(),
							i = this.bpm.timeToTicks(t, e);
							this.ticks = i
						}
					}),
					Object.defineProperty(t.Transport.prototype, "progress", {
						get: function() {
							if (this.loop) {
								var t = this.now();
								return (this._clock.getTicksAtTime(t) - this._loopStart) / (this._loopEnd - this._loopStart)
							}
							return 0
						}
					}),
					Object.defineProperty(t.Transport.prototype, "ticks", {
						get: function() {
							return this._clock.ticks
						},
						set: function(e) {
							if (this._clock.ticks !== e) {
								var i = this.now();
								this.state === t.State.Started ? (this.emit("stop", i), this._clock.setTicksAtTime(e, i), this.emit("start", i, this.seconds)) : this._clock.setTicksAtTime(e, i)
							}
						}
					}),
					t.Transport.prototype.getTicksAtTime = function(t) {
						return Math.round(this._clock.getTicksAtTime(t))
					},
					t.Transport.prototype.getSecondsAtTime = function(t) {
						return this._clock.getSecondsAtTime(t)
					},
					Object.defineProperty(t.Transport.prototype, "PPQ", {
						get: function() {
							return this._ppq
						},
						set: function(t) {
							var e = this.bpm.value;
							this._ppq = t,
							this.bpm.value = e
						}
					}),
					t.Transport.prototype._fromUnits = function(t) {
						return 1 / (60 / t / this.PPQ)
					},
					t.Transport.prototype._toUnits = function(t) {
						return t / this.PPQ * 60
					},
					t.Transport.prototype.nextSubdivision = function(e) {
						if (e = this.toTicks(e), this.state !== t.State.Started) return 0;
						var i = this.now(),
						n = e - this.getTicksAtTime(i) % e;
						return this._clock.nextTickTime(n, i)
					},
					t.Transport.prototype.syncSignal = function(e, i) {
						if (!i) {
							var n = this.now();
							i = 0 !== e.getValueAtTime(n) ? e.getValueAtTime(n) / this.bpm.getValueAtTime(n) : 0
						}
						var o = new t.Gain(i);
						return this.bpm.chain(o, e._param),
						this._syncedSignals.push({
							ratio: o,
							signal: e,
							initial: e.value
						}),
						e.value = 0,
						this
					},
					t.Transport.prototype.unsyncSignal = function(t) {
						for (var e = this._syncedSignals.length - 1; e >= 0; e--) {
							var i = this._syncedSignals[e];
							i.signal === t && (i.ratio.dispose(), i.signal.value = i.initial, this._syncedSignals.splice(e, 1))
						}
						return this
					},
					t.Transport.prototype.dispose = function() {
						return t.Emitter.prototype.dispose.call(this),
						this._clock.dispose(),
						this._clock = null,
						this._writable("bpm"),
						this.bpm = null,
						this._timeline.dispose(),
						this._timeline = null,
						this._repeatedEvents.dispose(),
						this._repeatedEvents = null,
						this
					};
					var e = t.Transport;
					return t.Transport = new e,
					t.Context.on("init",
					function(i) {
						i.transport && i.transport.isTransport ? t.Transport = i.transport: t.Transport = new e
					}),
					t.Context.on("close",
					function(t) {
						t.transport && t.transport.isTransport && t.transport.dispose()
					}),
					t.Transport
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(1), i(6), i(16), i(82)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Oscillator = function() {
						var e = t.defaults(arguments, ["frequency", "type"], t.Oscillator);
						t.Source.call(this, e),
						this._oscillator = null,
						this.frequency = new t.Signal(e.frequency, t.Type.Frequency),
						this.detune = new t.Signal(e.detune, t.Type.Cents),
						this._wave = null,
						this._partials = e.partials,
						this._partialCount = e.partialCount,
						this._phase = e.phase,
						this._type = e.type,
						e.partialCount && e.type !== t.Oscillator.Type.Custom && (this._type = this.baseType + e.partialCount.toString()),
						this.phase = this._phase,
						this._readOnly(["frequency", "detune"])
					},
					t.extend(t.Oscillator, t.Source),
					t.Oscillator.defaults = {
						type: "sine",
						frequency: 440,
						detune: 0,
						phase: 0,
						partials: [],
						partialCount: 0
					},
					t.Oscillator.Type = {
						Sine: "sine",
						Triangle: "triangle",
						Sawtooth: "sawtooth",
						Square: "square",
						Custom: "custom"
					},
					t.Oscillator.prototype._start = function(e) {
						this.log("start", e),
						this._oscillator = new t.OscillatorNode,
						this._wave ? this._oscillator.setPeriodicWave(this._wave) : this._oscillator.type = this._type,
						this._oscillator.connect(this.output),
						this.frequency.connect(this._oscillator.frequency),
						this.detune.connect(this._oscillator.detune),
						e = this.toSeconds(e),
						this._oscillator.start(e)
					},
					t.Oscillator.prototype._stop = function(t) {
						return this.log("stop", t),
						this._oscillator && (t = this.toSeconds(t), this._oscillator.stop(t)),
						this
					},
					t.Oscillator.prototype.restart = function(t) {
						return this._oscillator && this._oscillator.cancelStop(),
						this._state.cancel(this.toSeconds(t)),
						this
					},
					t.Oscillator.prototype.syncFrequency = function() {
						return t.Transport.syncSignal(this.frequency),
						this
					},
					t.Oscillator.prototype.unsyncFrequency = function() {
						return t.Transport.unsyncSignal(this.frequency),
						this
					},
					Object.defineProperty(t.Oscillator.prototype, "type", {
						get: function() {
							return this._type
						},
						set: function(t) {
							var e = this._getRealImaginary(t, this._phase),
							i = this.context.createPeriodicWave(e[0], e[1]);
							this._wave = i,
							null !== this._oscillator && this._oscillator.setPeriodicWave(this._wave),
							this._type = t
						}
					}),
					Object.defineProperty(t.Oscillator.prototype, "baseType", {
						get: function() {
							return this._type.replace(this.partialCount, "")
						},
						set: function(e) {
							this.partialCount && this._type !== t.Oscillator.Type.Custom && e !== t.Oscillator.Type.Custom ? this.type = e + this.partialCount: this.type = e
						}
					}),
					Object.defineProperty(t.Oscillator.prototype, "partialCount", {
						get: function() {
							return this._partialCount
						},
						set: function(e) {
							var i = this._type,
							n = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);
							n && (i = n[1]),
							this._type !== t.Oscillator.Type.Custom && (this.type = 0 === e ? i: i + e.toString())
						}
					}),
					t.Oscillator.prototype.get = function() {
						const e = t.prototype.get.apply(this, arguments);
						return e.type !== t.Oscillator.Type.Custom && delete e.partials,
						e
					},
					t.Oscillator.prototype._getRealImaginary = function(e, i) {
						var n = 2048,
						o = new Float32Array(n),
						s = new Float32Array(n),
						r = 1;
						if (e === t.Oscillator.Type.Custom) r = this._partials.length + 1,
						this._partialCount = this._partials.length,
						n = r;
						else {
							var a = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(e);
							a ? (r = parseInt(a[2]) + 1, this._partialCount = parseInt(a[2]), e = a[1], n = r = Math.max(r, 2)) : this._partialCount = 0,
							this._partials = []
						}
						for (var l = 1; l < n; ++l) {
							var u, c = 2 / (l * Math.PI);
							switch (e) {
							case t.Oscillator.Type.Sine:
								u = l <= r ? 1 : 0,
								this._partials[l - 1] = u;
								break;
							case t.Oscillator.Type.Square:
								u = 1 & l ? 2 * c: 0,
								this._partials[l - 1] = u;
								break;
							case t.Oscillator.Type.Sawtooth:
								u = c * (1 & l ? 1 : -1),
								this._partials[l - 1] = u;
								break;
							case t.Oscillator.Type.Triangle:
								u = 1 & l ? c * c * 2 * (l - 1 >> 1 & 1 ? -1 : 1) : 0,
								this._partials[l - 1] = u;
								break;
							case t.Oscillator.Type.Custom:
								u = this._partials[l - 1];
								break;
							default:
								throw new TypeError("Tone.Oscillator: invalid type: " + e)
							}
							0 !== u ? (o[l] = -u * Math.sin(i * l), s[l] = u * Math.cos(i * l)) : (o[l] = 0, s[l] = 0)
						}
						return [o, s]
					},
					t.Oscillator.prototype._inverseFFT = function(t, e, i) {
						for (var n = 0,
						o = t.length,
						s = 0; s < o; s++) n += t[s] * Math.cos(s * i) + e[s] * Math.sin(s * i);
						return n
					},
					t.Oscillator.prototype._getInitialValue = function() {
						for (var t = this._getRealImaginary(this._type, 0), e = t[0], i = t[1], n = 0, o = 2 * Math.PI, s = 0; s < 8; s++) n = Math.max(this._inverseFFT(e, i, s / 8 * o), n);
						return - this._inverseFFT(e, i, this._phase) / n
					},
					Object.defineProperty(t.Oscillator.prototype, "partials", {
						get: function() {
							return this._partials
						},
						set: function(e) {
							this._partials = e,
							this.type = t.Oscillator.Type.Custom
						}
					}),
					Object.defineProperty(t.Oscillator.prototype, "phase", {
						get: function() {
							return this._phase * (180 / Math.PI)
						},
						set: function(t) {
							this._phase = t * Math.PI / 180,
							this.type = this._type
						}
					}),
					t.Oscillator.prototype.dispose = function() {
						return t.Source.prototype.dispose.call(this),
						null !== this._oscillator && (this._oscillator.dispose(), this._oscillator = null),
						this._wave = null,
						this._writable(["frequency", "detune"]),
						this.frequency.dispose(),
						this.frequency = null,
						this.detune.dispose(),
						this.detune = null,
						this._partials = null,
						this
					},
					t.Oscillator
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(14), i(2)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Delay = function() {
						var e = t.defaults(arguments, ["delayTime", "maxDelay"], t.Delay);
						t.AudioNode.call(this, e),
						this._maxDelay = Math.max(this.toSeconds(e.maxDelay), this.toSeconds(e.delayTime)),
						this._delayNode = this.input = this.output = this.context.createDelay(this._maxDelay),
						this.delayTime = new t.Param({
							param: this._delayNode.delayTime,
							units: t.Type.Time,
							value: e.delayTime
						}),
						this._readOnly("delayTime")
					},
					t.extend(t.Delay, t.AudioNode),
					t.Delay.defaults = {
						maxDelay: 1,
						delayTime: 0
					},
					Object.defineProperty(t.Delay.prototype, "maxDelay", {
						get: function() {
							return this._maxDelay
						}
					}),
					t.Delay.prototype.dispose = function() {
						return t.AudioNode.prototype.dispose.call(this),
						this._delayNode.disconnect(),
						this._delayNode = null,
						this._writable("delayTime"),
						this.delayTime = null,
						this
					},
					t.Delay
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(3), i(2)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Split = function() {
						t.AudioNode.call(this),
						this.createInsOuts(0, 2),
						this._splitter = this.input = this.context.createChannelSplitter(2),
						this.left = this.output[0] = new t.Gain,
						this.right = this.output[1] = new t.Gain,
						this._splitter.connect(this.left, 0, 0),
						this._splitter.connect(this.right, 1, 0)
					},
					t.extend(t.Split, t.AudioNode),
					t.Split.prototype.dispose = function() {
						return t.AudioNode.prototype.dispose.call(this),
						this._splitter.disconnect(),
						this.left.dispose(),
						this.left = null,
						this.right.dispose(),
						this.right = null,
						this._splitter = null,
						this
					},
					t.Split
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(35), i(24), i(34)],
				void 0 === (o = function(t) {
					t.Context = function() {
						t.Emitter.call(this);
						var i = t.defaults(arguments, ["context"], t.Context);
						if (!i.context && (i.context = new t.global.AudioContext, !i.context)) throw new Error("could not create AudioContext. Possibly too many AudioContexts running already.");
						for (this._context = i.context; this._context.rawContext;) this._context = this._context.rawContext;
						for (var n in this._context) this._defineProperty(this._context, n);
						this._latencyHint = i.latencyHint,
						this._constants = {},
						this.lookAhead = i.lookAhead,
						this._computedUpdateInterval = 0,
						this._ticker = new e(this.emit.bind(this, "tick"), i.clockSource, i.updateInterval),
						this._timeouts = new t.Timeline,
						this._timeoutIds = 0,
						this.on("tick", this._timeoutLoop.bind(this)),
						this._context.onstatechange = function(t) {
							this.emit("statechange", t)
						}.bind(this)
					},
					t.extend(t.Context, t.Emitter),
					t.Emitter.mixin(t.Context),
					t.Context.defaults = {
						clockSource: "worker",
						latencyHint: "interactive",
						lookAhead: .1,
						updateInterval: .03
					},
					t.Context.prototype.isContext = !0,
					t.Context.prototype._defineProperty = function(e, i) {
						t.isUndef(this[i]) && Object.defineProperty(this, i, {
							get: function() {
								return "function" == typeof e[i] ? e[i].bind(e) : e[i]
							},
							set: function(t) {
								e[i] = t
							}
						})
					},
					t.Context.prototype.now = function() {
						return this._context.currentTime + this.lookAhead
					},
					Object.defineProperty(t.Context.prototype, "destination", {
						get: function() {
							return this.master ? this.master: this._context.destination
						}
					}),
					t.Context.prototype.resume = function() {
						return "suspended" === this._context.state && this._context instanceof AudioContext ? this._context.resume() : Promise.resolve()
					},
					t.Context.prototype.close = function() {
						var e = Promise.resolve();
						return this !== t.global.TONE_AUDIO_CONTEXT && (e = this.rawContext.close()),
						e.then(function() {
							t.Context.emit("close", this)
						}.bind(this))
					},
					t.Context.prototype.getConstant = function(t) {
						if (this._constants[t]) return this._constants[t];
						for (var e = this._context.createBuffer(1, 128, this._context.sampleRate), i = e.getChannelData(0), n = 0; n < i.length; n++) i[n] = t;
						var o = this._context.createBufferSource();
						return o.channelCount = 1,
						o.channelCountMode = "explicit",
						o.buffer = e,
						o.loop = !0,
						o.start(0),
						this._constants[t] = o,
						o
					},
					t.Context.prototype._timeoutLoop = function() {
						for (var t = this.now(); this._timeouts && this._timeouts.length && this._timeouts.peek().time <= t;) this._timeouts.shift().callback()
					},
					t.Context.prototype.setTimeout = function(t, e) {
						this._timeoutIds++;
						var i = this.now();
						return this._timeouts.add({
							callback: t,
							time: i + e,
							id: this._timeoutIds
						}),
						this._timeoutIds
					},
					t.Context.prototype.clearTimeout = function(t) {
						return this._timeouts.forEach(function(e) {
							e.id === t && this.remove(e)
						}),
						this
					},
					Object.defineProperty(t.Context.prototype, "updateInterval", {
						get: function() {
							return this._ticker.updateInterval
						},
						set: function(t) {
							this._ticker.updateInterval = t
						}
					}),
					Object.defineProperty(t.Context.prototype, "rawContext", {
						get: function() {
							return this._context
						}
					}),
					Object.defineProperty(t.Context.prototype, "clockSource", {
						get: function() {
							return this._ticker.type
						},
						set: function(t) {
							this._ticker.type = t
						}
					}),
					Object.defineProperty(t.Context.prototype, "latencyHint", {
						get: function() {
							return this._latencyHint
						},
						set: function(e) {
							var i = e;
							if (this._latencyHint = e, t.isString(e)) switch (e) {
							case "interactive":
								i = .1,
								this._context.latencyHint = e;
								break;
							case "playback":
								i = .8,
								this._context.latencyHint = e;
								break;
							case "balanced":
								i = .25,
								this._context.latencyHint = e;
								break;
							case "fastest":
								this._context.latencyHint = "interactive",
								i = .01
							}
							this.lookAhead = i,
							this.updateInterval = i / 3
						}
					}),
					t.Context.prototype.dispose = function() {
						return this.close().then(function() {
							for (var e in t.Emitter.prototype.dispose.call(this), this._ticker.dispose(), this._ticker = null, this._timeouts.dispose(), this._timeouts = null, this._constants) this._constants[e].disconnect();
							this._constants = null
						}.bind(this))
					};
					var e = function(e, i, n) {
						this._type = i,
						this._updateInterval = n,
						this._callback = t.defaultArg(e, t.noOp),
						this._createClock()
					};
					if (e.Type = {
						Worker: "worker",
						Timeout: "timeout",
						Offline: "offline"
					},
					e.prototype._createWorker = function() {
						t.global.URL = t.global.URL || t.global.webkitURL;
						var e = new Blob(["var timeoutTime = " + (1e3 * this._updateInterval).toFixed(1) + ";self.onmessage = function(msg){\ttimeoutTime = parseInt(msg.data);};function tick(){\tsetTimeout(tick, timeoutTime);\tself.postMessage('tick');}tick();"]),
						i = URL.createObjectURL(e),
						n = new Worker(i);
						n.onmessage = this._callback.bind(this),
						this._worker = n
					},
					e.prototype._createTimeout = function() {
						this._timeout = setTimeout(function() {
							this._createTimeout(),
							this._callback()
						}.bind(this), 1e3 * this._updateInterval)
					},
					e.prototype._createClock = function() {
						if (this._type === e.Type.Worker) try {
							this._createWorker()
						} catch(t) {
							this._type = e.Type.Timeout,
							this._createClock()
						} else this._type === e.Type.Timeout && this._createTimeout()
					},
					Object.defineProperty(e.prototype, "updateInterval", {
						get: function() {
							return this._updateInterval
						},
						set: function(t) {
							this._updateInterval = Math.max(t, 128 / 44100),
							this._type === e.Type.Worker && this._worker.postMessage(Math.max(1e3 * t, 1))
						}
					}), Object.defineProperty(e.prototype, "type", {
						get: function() {
							return this._type
						},
						set: function(t) {
							this._disposeClock(),
							this._type = t,
							this._createClock()
						}
					}), e.prototype._disposeClock = function() {
						this._timeout && (clearTimeout(this._timeout), this._timeout = null),
						this._worker && (this._worker.terminate(), this._worker.onmessage = null, this._worker = null)
					},
					e.prototype.dispose = function() {
						this._disposeClock(),
						this._callback = null
					},
					t.getContext(function() {
						function e(e, n, o) {
							if (e.input) return o = t.defaultArg(o, 0),
							t.isArray(e.input) ? this.connect(e.input[o]) : this.connect(e.input, n, o);
							try {
								return e instanceof AudioNode ? (i.call(this, e, n, o), e) : (i.call(this, e, n), e)
							} catch(t) {
								throw new Error("error connecting to node: " + e + "\n" + t)
							}
						}
						var i = AudioNode.prototype.connect,
						n = AudioNode.prototype.disconnect;
						AudioNode.prototype.connect !== e && (AudioNode.prototype.connect = e, AudioNode.prototype.disconnect = function(e, i, o) {
							if (e && e.input && t.isArray(e.input)) o = t.defaultArg(o, 0),
							this.disconnect(e.input[o], i, 0);
							else if (e && e.input) this.disconnect(e.input, i, o);
							else try {
								e instanceof AudioParam ? n.call(this, e, i) : n.apply(this, arguments)
							} catch(t) {
								throw new Error("error disconnecting node: " + e + "\n" + t)
							}
						})
					}), t.supported && !t.initialized) {
						if (t.global.TONE_AUDIO_CONTEXT || (t.global.TONE_AUDIO_CONTEXT = new t.Context), t.context = t.global.TONE_AUDIO_CONTEXT, !t.global.TONE_SILENCE_VERSION_LOGGING) {
							var i = "v";
							"dev" === t.version && (i = "");
							var n = " * Tone.js " + i + t.version + " * ";
							console.log("%c" + n, "background: #000; color: #fff")
						}
					} else t.supported || console.warn("This browser does not support Tone.js");
					return t.Context
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(4), i(40)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Instrument = function(e) {
						e = t.defaultArg(e, t.Instrument.defaults),
						t.AudioNode.call(this),
						this._volume = this.output = new t.Volume(e.volume),
						this.volume = this._volume.volume,
						this._readOnly("volume"),
						this._scheduledEvents = []
					},
					t.extend(t.Instrument, t.AudioNode),
					t.Instrument.defaults = {
						volume: 0
					},
					t.Instrument.prototype.triggerAttack = t.noOp,
					t.Instrument.prototype.triggerRelease = t.noOp,
					t.Instrument.prototype.sync = function() {
						return this._syncMethod("triggerAttack", 1),
						this._syncMethod("triggerRelease", 0),
						this
					},
					t.Instrument.prototype._syncMethod = function(e, i) {
						var n = this["_original_" + e] = this[e];
						this[e] = function() {
							var e = Array.prototype.slice.call(arguments),
							o = e[i],
							s = t.Transport.schedule(function(t) {
								e[i] = t,
								n.apply(this, e)
							}.bind(this), o);
							this._scheduledEvents.push(s)
						}.bind(this)
					},
					t.Instrument.prototype.unsync = function() {
						return this._scheduledEvents.forEach(function(e) {
							t.Transport.clear(e)
						}),
						this._scheduledEvents = [],
						this._original_triggerAttack && (this.triggerAttack = this._original_triggerAttack, this.triggerRelease = this._original_triggerRelease),
						this
					},
					t.Instrument.prototype.triggerAttackRelease = function(t, e, i, n) {
						return i = this.toSeconds(i),
						e = this.toSeconds(e),
						this.triggerAttack(t, i, n),
						this.triggerRelease(i + e),
						this
					},
					t.Instrument.prototype.dispose = function() {
						return t.AudioNode.prototype.dispose.call(this),
						this._volume.dispose(),
						this._volume = null,
						this._writable(["volume"]),
						this.volume = null,
						this.unsync(),
						this._scheduledEvents = null,
						this
					},
					t.Instrument
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(7), i(1)],
				void 0 === (o = function(t) {
					"use strict";
					return t.AudioToGain = function() {
						t.SignalBase.call(this),
						this._norm = this.input = this.output = new t.WaveShaper(function(t) {
							return (t + 1) / 2
						})
					},
					t.extend(t.AudioToGain, t.SignalBase),
					t.AudioToGain.prototype.dispose = function() {
						return t.SignalBase.prototype.dispose.call(this),
						this._norm.dispose(),
						this._norm = null,
						this
					},
					t.AudioToGain
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(1), i(13), i(93), i(3), i(2)],
				void 0 === (o = function(t) {
					"use strict";
					return t.CrossFade = function(e) {
						t.AudioNode.call(this),
						this.createInsOuts(2, 1),
						this.a = this.input[0] = new t.Gain,
						this.b = this.input[1] = new t.Gain,
						this.fade = new t.Signal(t.defaultArg(e, .5), t.Type.NormalRange),
						this._equalPowerA = new t.EqualPowerGain,
						this._equalPowerB = new t.EqualPowerGain,
						this._one = this.context.getConstant(1),
						this._invert = new t.Subtract,
						this.a.connect(this.output),
						this.b.connect(this.output),
						this.fade.chain(this._equalPowerB, this.b.gain),
						this._one.connect(this._invert, 0, 0),
						this.fade.connect(this._invert, 0, 1),
						this._invert.chain(this._equalPowerA, this.a.gain),
						this._readOnly("fade")
					},
					t.extend(t.CrossFade, t.AudioNode),
					t.CrossFade.prototype.dispose = function() {
						return t.AudioNode.prototype.dispose.call(this),
						this._writable("fade"),
						this._equalPowerA.dispose(),
						this._equalPowerA = null,
						this._equalPowerB.dispose(),
						this._equalPowerB = null,
						this.fade.dispose(),
						this.fade = null,
						this._invert.dispose(),
						this._invert = null,
						this._one = null,
						this.a.dispose(),
						this.a = null,
						this.b.dispose(),
						this.b = null,
						this
					},
					t.CrossFade
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Timeline = function() {
						var e = t.defaults(arguments, ["memory"], t.Timeline);
						t.call(this),
						this._timeline = [],
						this.memory = e.memory
					},
					t.extend(t.Timeline),
					t.Timeline.defaults = {
						memory: 1 / 0
					},
					Object.defineProperty(t.Timeline.prototype, "length", {
						get: function() {
							return this._timeline.length
						}
					}),
					t.Timeline.prototype.add = function(e) {
						if (t.isUndef(e.time)) throw new Error("Tone.Timeline: events must have a time attribute");
						e.time = e.time.valueOf();
						var i = this._search(e.time);
						if (this._timeline.splice(i + 1, 0, e), this.length > this.memory) {
							var n = this.length - this.memory;
							this._timeline.splice(0, n)
						}
						return this
					},
					t.Timeline.prototype.remove = function(t) {
						var e = this._timeline.indexOf(t);
						return - 1 !== e && this._timeline.splice(e, 1),
						this
					},
					t.Timeline.prototype.get = function(e, i) {
						i = t.defaultArg(i, "time");
						var n = this._search(e, i);
						return - 1 !== n ? this._timeline[n] : null
					},
					t.Timeline.prototype.peek = function() {
						return this._timeline[0]
					},
					t.Timeline.prototype.shift = function() {
						return this._timeline.shift()
					},
					t.Timeline.prototype.getAfter = function(e, i) {
						i = t.defaultArg(i, "time");
						var n = this._search(e, i);
						return n + 1 < this._timeline.length ? this._timeline[n + 1] : null
					},
					t.Timeline.prototype.getBefore = function(e, i) {
						i = t.defaultArg(i, "time");
						var n = this._timeline.length;
						if (n > 0 && this._timeline[n - 1][i] < e) return this._timeline[n - 1];
						var o = this._search(e, i);
						return o - 1 >= 0 ? this._timeline[o - 1] : null
					},
					t.Timeline.prototype.cancel = function(t) {
						if (this._timeline.length > 1) {
							var e = this._search(t);
							if (e >= 0) if (this._timeline[e].time === t) {
								for (var i = e; i >= 0 && this._timeline[i].time === t; i--) e = i;
								this._timeline = this._timeline.slice(0, e)
							} else this._timeline = this._timeline.slice(0, e + 1);
							else this._timeline = []
						} else 1 === this._timeline.length && this._timeline[0].time >= t && (this._timeline = []);
						return this
					},
					t.Timeline.prototype.cancelBefore = function(t) {
						var e = this._search(t);
						return e >= 0 && (this._timeline = this._timeline.slice(e + 1)),
						this
					},
					t.Timeline.prototype.previousEvent = function(t) {
						var e = this._timeline.indexOf(t);
						return e > 0 ? this._timeline[e - 1] : null
					},
					t.Timeline.prototype._search = function(e, i) {
						if (0 === this._timeline.length) return - 1;
						i = t.defaultArg(i, "time");
						var n = 0,
						o = this._timeline.length,
						s = o;
						if (o > 0 && this._timeline[o - 1][i] <= e) return o - 1;
						for (; n < s;) {
							var r = Math.floor(n + (s - n) / 2),
							a = this._timeline[r],
							l = this._timeline[r + 1];
							if (a[i] === e) {
								for (var u = r; u < this._timeline.length; u++) this._timeline[u][i] === e && (r = u);
								return r
							}
							if (a[i] < e && l[i] > e) return r;
							a[i] > e ? s = r: n = r + 1
						}
						return - 1
					},
					t.Timeline.prototype._iterate = function(e, i, n) {
						i = t.defaultArg(i, 0),
						n = t.defaultArg(n, this._timeline.length - 1),
						this._timeline.slice(i, n + 1).forEach(function(t) {
							e.call(this, t)
						}.bind(this))
					},
					t.Timeline.prototype.forEach = function(t) {
						return this._iterate(t),
						this
					},
					t.Timeline.prototype.forEachBefore = function(t, e) {
						var i = this._search(t);
						return - 1 !== i && this._iterate(e, 0, i),
						this
					},
					t.Timeline.prototype.forEachAfter = function(t, e) {
						var i = this._search(t);
						return this._iterate(e, i + 1),
						this
					},
					t.Timeline.prototype.forEachBetween = function(t, e, i) {
						var n = this._search(t),
						o = this._search(e);
						return - 1 !== n && -1 !== o ? (this._timeline[n].time !== t && (n += 1), this._timeline[o].time === e && (o -= 1), this._iterate(i, n, o)) : -1 === n && this._iterate(i, 0, o),
						this
					},
					t.Timeline.prototype.forEachFrom = function(t, e) {
						for (var i = this._search(t); i >= 0 && this._timeline[i].time >= t;) i--;
						return this._iterate(e, i + 1),
						this
					},
					t.Timeline.prototype.forEachAtTime = function(t, e) {
						var i = this._search(t);
						return - 1 !== i && this._iterate(function(i) {
							i.time === t && e.call(this, i)
						},
						0, i),
						this
					},
					t.Timeline.prototype.dispose = function() {
						return t.prototype.dispose.call(this),
						this._timeline = null,
						this
					},
					t.Timeline
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(21), i(1)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Monophonic = function(e) {
						e = t.defaultArg(e, t.Monophonic.defaults),
						t.Instrument.call(this, e),
						this.portamento = e.portamento
					},
					t.extend(t.Monophonic, t.Instrument),
					t.Monophonic.defaults = {
						portamento: 0
					},
					t.Monophonic.prototype.triggerAttack = function(t, e, i) {
						return this.log("triggerAttack", t, e, i),
						e = this.toSeconds(e),
						this._triggerEnvelopeAttack(e, i),
						this.setNote(t, e),
						this
					},
					t.Monophonic.prototype.triggerRelease = function(t) {
						return this.log("triggerRelease", t),
						t = this.toSeconds(t),
						this._triggerEnvelopeRelease(t),
						this
					},
					t.Monophonic.prototype._triggerEnvelopeAttack = function() {},
					t.Monophonic.prototype._triggerEnvelopeRelease = function() {},
					t.Monophonic.prototype.getLevelAtTime = function(t) {
						return t = this.toSeconds(t),
						this.envelope.getValueAtTime(t)
					},
					t.Monophonic.prototype.setNote = function(t, e) {
						if (e = this.toSeconds(e), this.portamento > 0 && this.getLevelAtTime(e) > .05) {
							var i = this.toSeconds(this.portamento);
							this.frequency.exponentialRampTo(t, i, e)
						} else this.frequency.setValueAtTime(t, e);
						return this
					},
					t.Monophonic
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(29), i(5), i(1)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Scale = function(e, i) {
						t.SignalBase.call(this),
						this._outputMin = t.defaultArg(e, 0),
						this._outputMax = t.defaultArg(i, 1),
						this._scale = this.input = new t.Multiply(1),
						this._add = this.output = new t.Add(0),
						this._scale.connect(this._add),
						this._setRange()
					},
					t.extend(t.Scale, t.SignalBase),
					Object.defineProperty(t.Scale.prototype, "min", {
						get: function() {
							return this._outputMin
						},
						set: function(t) {
							this._outputMin = t,
							this._setRange()
						}
					}),
					Object.defineProperty(t.Scale.prototype, "max", {
						get: function() {
							return this._outputMax
						},
						set: function(t) {
							this._outputMax = t,
							this._setRange()
						}
					}),
					t.Scale.prototype._setRange = function() {
						this._add.value = this._outputMin,
						this._scale.value = this._outputMax - this._outputMin
					},
					t.Scale.prototype.dispose = function() {
						return t.SignalBase.prototype.dispose.call(this),
						this._add.dispose(),
						this._add = null,
						this._scale.dispose(),
						this._scale = null,
						this
					},
					t.Scale
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(1), i(3), i(2)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Volume = function() {
						var e = t.defaults(arguments, ["volume"], t.Volume);
						t.AudioNode.call(this, e),
						this.output = this.input = new t.Gain(e.volume, t.Type.Decibels),
						this._unmutedVolume = e.volume,
						this.volume = this.output.gain,
						this._readOnly("volume"),
						this.mute = e.mute
					},
					t.extend(t.Volume, t.AudioNode),
					t.Volume.defaults = {
						volume: 0,
						mute: !1
					},
					Object.defineProperty(t.Volume.prototype, "mute", {
						get: function() {
							return this.volume.value === -1 / 0
						},
						set: function(t) { ! this.mute && t ? (this._unmutedVolume = this.volume.value, this.volume.value = -1 / 0) : this.mute && !t && (this.volume.value = this._unmutedVolume)
						}
					}),
					t.Volume.prototype.dispose = function() {
						return this.input.dispose(),
						t.AudioNode.prototype.dispose.call(this),
						this._writable("volume"),
						this.volume.dispose(),
						this.volume = null,
						this
					},
					t.Volume
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(3), i(36)],
				void 0 === (o = function(t) {
					return t.Zero = function() {
						t.SignalBase.call(this),
						this._gain = this.input = this.output = new t.Gain,
						this.context.getConstant(0).connect(this._gain)
					},
					t.extend(t.Zero, t.SignalBase),
					t.Zero.prototype.dispose = function() {
						return t.SignalBase.prototype.dispose.call(this),
						this._gain.dispose(),
						this._gain = null,
						this
					},
					t.Zero
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(1), i(3)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Add = function(e) {
						t.Signal.call(this),
						this.createInsOuts(2, 0),
						this._sum = this.input[0] = this.input[1] = this.output = new t.Gain,
						this._param = this.input[1] = new t.Signal(e),
						this._param.connect(this._sum),
						this.proxy = !1
					},
					t.extend(t.Add, t.Signal),
					t.Add.prototype.dispose = function() {
						return t.Signal.prototype.dispose.call(this),
						this._sum.dispose(),
						this._sum = null,
						this
					},
					t.Add
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(47), i(3)],
				void 0 === (o = function(t) {
					"use strict";
					return t.AmplitudeEnvelope = function() {
						t.Envelope.apply(this, arguments),
						this.input = this.output = new t.Gain,
						this._sig.connect(this.output.gain)
					},
					t.extend(t.AmplitudeEnvelope, t.Envelope),
					t.AmplitudeEnvelope.prototype.dispose = function() {
						return t.Envelope.prototype.dispose.call(this),
						this
					},
					t.AmplitudeEnvelope
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(11), i(6), i(3), i(2), i(63)],
				void 0 === (o = function(t) {
					return t.BufferSource = function() {
						var e = t.defaults(arguments, ["buffer", "onload"], t.BufferSource);
						t.AudioNode.call(this, e),
						this.onended = e.onended,
						this._startTime = -1,
						this._sourceStarted = !1,
						this._sourceStopped = !1,
						this._stopTime = -1,
						this._gainNode = this.output = new t.Gain(0),
						this._source = this.context.createBufferSource(),
						this._source.connect(this._gainNode),
						this._source.onended = this._onended.bind(this),
						this._buffer = new t.Buffer(e.buffer, e.onload),
						this.playbackRate = new t.Param({
							param: this._source.playbackRate,
							units: t.Type.Positive,
							value: e.playbackRate
						}),
						this.fadeIn = e.fadeIn,
						this.fadeOut = e.fadeOut,
						this.curve = e.curve,
						this._onendedTimeout = -1,
						this.loop = e.loop,
						this.loopStart = e.loopStart,
						this.loopEnd = e.loopEnd
					},
					t.extend(t.BufferSource, t.AudioNode),
					t.BufferSource.defaults = {
						onended: t.noOp,
						onload: t.noOp,
						loop: !1,
						loopStart: 0,
						loopEnd: 0,
						fadeIn: 0,
						fadeOut: 0,
						curve: "linear",
						playbackRate: 1
					},
					Object.defineProperty(t.BufferSource.prototype, "state", {
						get: function() {
							return this.getStateAtTime(this.now())
						}
					}),
					t.BufferSource.prototype.getStateAtTime = function(e) {
						return e = this.toSeconds(e),
						-1 !== this._startTime && this._startTime <= e && ( - 1 === this._stopTime || e < this._stopTime) && !this._sourceStopped ? t.State.Started: t.State.Stopped
					},
					t.BufferSource.prototype.start = function(e, i, n, o) {
						this.log("start", e, i, n, o),
						this.assert( - 1 === this._startTime, "can only be started once"),
						this.assert(this.buffer.loaded, "buffer is either not set or not loaded"),
						this.assert(!this._sourceStopped, "source is already stopped"),
						e = this.toSeconds(e),
						i = this.loop ? t.defaultArg(i, this.loopStart) : t.defaultArg(i, 0),
						i = this.toSeconds(i),
						i = Math.max(i, 0),
						o = t.defaultArg(o, 1);
						var s = this.toSeconds(this.fadeIn);
						if (s > 0 ? (this._gainNode.gain.setValueAtTime(0, e), "linear" === this.curve ? this._gainNode.gain.linearRampToValueAtTime(o, e + s) : this._gainNode.gain.exponentialApproachValueAtTime(o, e, s)) : this._gainNode.gain.setValueAtTime(o, e), this._startTime = e, t.isDefined(n)) {
							var r = this.toSeconds(n);
							r = Math.max(r, 0),
							this.stop(e + r)
						}
						if (this.loop) {
							var a = this.loopEnd || this.buffer.duration,
							l = this.loopStart;
							i >= a && (i = (i - l) % (a - l) + l)
						}
						return this._source.buffer = this.buffer.get(),
						this._source.loopEnd = this.loopEnd || this.buffer.duration,
						i < this.buffer.duration && (this._sourceStarted = !0, this._source.start(e, i)),
						this
					},
					t.BufferSource.prototype.stop = function(e) {
						this.log("stop", e),
						this.assert(this.buffer.loaded, "buffer is either not set or not loaded"),
						this.assert(!this._sourceStopped, "source is already stopped"),
						e = this.toSeconds(e),
						-1 !== this._stopTime && this.cancelStop();
						var i = this.toSeconds(this.fadeOut);
						return this._stopTime = e + i,
						i > 0 ? "linear" === this.curve ? this._gainNode.gain.linearRampTo(0, i, e) : this._gainNode.gain.targetRampTo(0, i, e) : (this._gainNode.gain.cancelAndHoldAtTime(e), this._gainNode.gain.setValueAtTime(0, e)),
						t.context.clearTimeout(this._onendedTimeout),
						this._onendedTimeout = t.context.setTimeout(this._onended.bind(this), this._stopTime - this.now()),
						this
					},
					t.BufferSource.prototype.cancelStop = function() {
						if ( - 1 !== this._startTime && !this._sourceStopped) {
							var t = this.toSeconds(this.fadeIn);
							this._gainNode.gain.cancelScheduledValues(this._startTime + t + this.sampleTime),
							this.context.clearTimeout(this._onendedTimeout),
							this._stopTime = -1
						}
						return this
					},
					t.BufferSource.prototype._onended = function() {
						if (!this._sourceStopped) {
							this._sourceStopped = !0;
							var t = "exponential" === this.curve ? 2 * this.fadeOut: 0;
							this._sourceStarted && -1 !== this._stopTime && this._source.stop(this._stopTime + t),
							this.onended(this)
						}
					},
					Object.defineProperty(t.BufferSource.prototype, "loopStart", {
						get: function() {
							return this._source.loopStart
						},
						set: function(t) {
							this._source.loopStart = this.toSeconds(t)
						}
					}),
					Object.defineProperty(t.BufferSource.prototype, "loopEnd", {
						get: function() {
							return this._source.loopEnd
						},
						set: function(t) {
							this._source.loopEnd = this.toSeconds(t)
						}
					}),
					Object.defineProperty(t.BufferSource.prototype, "buffer", {
						get: function() {
							return this._buffer
						},
						set: function(t) {
							this._buffer.set(t)
						}
					}),
					Object.defineProperty(t.BufferSource.prototype, "loop", {
						get: function() {
							return this._source.loop
						},
						set: function(t) {
							this._source.loop = t,
							this.cancelStop()
						}
					}),
					t.BufferSource.prototype.dispose = function() {
						return t.AudioNode.prototype.dispose.call(this),
						this.onended = null,
						this._source.onended = null,
						this._source.disconnect(),
						this._source = null,
						this._gainNode.dispose(),
						this._gainNode = null,
						this._buffer.dispose(),
						this._buffer = null,
						this._startTime = -1,
						this.playbackRate = null,
						t.context.clearTimeout(this._onendedTimeout),
						this
					},
					t.BufferSource
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(8), i(1), i(5), i(3)],
				void 0 === (o = function(t) {
					"use strict";
					return t.FeedbackEffect = function() {
						var e = t.defaults(arguments, ["feedback"], t.FeedbackEffect);
						t.Effect.call(this, e),
						this._feedbackGain = new t.Gain(e.feedback, t.Type.NormalRange),
						this.feedback = this._feedbackGain.gain,
						this.effectReturn.chain(this._feedbackGain, this.effectSend),
						this._readOnly(["feedback"])
					},
					t.extend(t.FeedbackEffect, t.Effect),
					t.FeedbackEffect.defaults = {
						feedback: .125
					},
					t.FeedbackEffect.prototype.dispose = function() {
						return t.Effect.prototype.dispose.call(this),
						this._writable(["feedback"]),
						this._feedbackGain.dispose(),
						this._feedbackGain = null,
						this.feedback = null,
						this
					},
					t.FeedbackEffect
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(24), i(4)],
				void 0 === (o = function(t) {
					"use strict";
					return t.TimelineState = function(e) {
						t.Timeline.call(this),
						this._initial = e
					},
					t.extend(t.TimelineState, t.Timeline),
					t.TimelineState.prototype.getValueAtTime = function(t) {
						var e = this.get(t);
						return null !== e ? e.state: this._initial
					},
					t.TimelineState.prototype.setStateAtTime = function(t, e) {
						return this.add({
							state: t,
							time: e
						}),
						this
					},
					t.TimelineState.prototype.getLastState = function(t, e) {
						e = this.toSeconds(e);
						for (var i = this._search(e); i >= 0; i--) {
							var n = this._timeline[i];
							if (n.state === t) return n
						}
					},
					t.TimelineState.prototype.getNextState = function(t, e) {
						e = this.toSeconds(e);
						var i = this._search(e);
						if ( - 1 !== i) for (var n = i; n < this._timeline.length; n++) {
							var o = this._timeline[n];
							if (o.state === t) return o
						}
					},
					t.TimelineState
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(66)],
				void 0 === (o = function(t) {
					if (t.supported) { ! t.global.hasOwnProperty("AudioContext") && t.global.hasOwnProperty("webkitAudioContext") && (t.global.AudioContext = t.global.webkitAudioContext),
						AudioContext.prototype.close || (AudioContext.prototype.close = function() {
							return t.isFunction(this.suspend) && this.suspend(),
							Promise.resolve()
						}),
						AudioContext.prototype.resume || (AudioContext.prototype.resume = function() {
							var t = this.createBuffer(1, 1, this.sampleRate),
							e = this.createBufferSource();
							return e.buffer = t,
							e.connect(this.destination),
							e.start(0),
							Promise.resolve()
						}),
						!AudioContext.prototype.createGain && AudioContext.prototype.createGainNode && (AudioContext.prototype.createGain = AudioContext.prototype.createGainNode),
						!AudioContext.prototype.createDelay && AudioContext.prototype.createDelayNode && (AudioContext.prototype.createDelay = AudioContext.prototype.createDelayNode);
						var e = !1,
						i = new OfflineAudioContext(1, 1, 44100),
						n = new Uint32Array([1179011410, 48, 1163280727, 544501094, 16, 131073, 44100, 176400, 1048580, 1635017060, 8, 0, 0, 0, 0]).buffer;
						try {
							var o = i.decodeAudioData(n);
							o && t.isFunction(o.then) && (e = !0)
						} catch(t) {
							e = !1
						}
						e || (AudioContext.prototype._native_decodeAudioData = AudioContext.prototype.decodeAudioData, AudioContext.prototype.decodeAudioData = function(t) {
							return new Promise(function(e, i) {
								this._native_decodeAudioData(t, e, i)
							}.bind(this))
						})
					}
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Emitter = function() {
						t.call(this),
						this._events = {}
					},
					t.extend(t.Emitter),
					t.Emitter.prototype.on = function(t, e) {
						for (var i = t.split(/\W+/), n = 0; n < i.length; n++) {
							var o = i[n];
							this._events.hasOwnProperty(o) || (this._events[o] = []),
							this._events[o].push(e)
						}
						return this
					},
					t.Emitter.prototype.once = function(t, e) {
						var i = function() {
							e.apply(this, arguments),
							this.off(t, i)
						}.bind(this);
						return this.on(t, i),
						this
					},
					t.Emitter.prototype.off = function(e, i) {
						for (var n = e.split(/\W+/), o = 0; o < n.length; o++) if (e = n[o], this._events.hasOwnProperty(e)) if (t.isUndef(i)) this._events[e] = [];
						else for (var s = this._events[e], r = 0; r < s.length; r++) s[r] === i && s.splice(r, 1);
						return this
					},
					t.Emitter.prototype.emit = function(t) {
						if (this._events) {
							var e = Array.apply(null, arguments).slice(1);
							if (this._events.hasOwnProperty(t)) for (var i = this._events[t].slice(0), n = 0, o = i.length; n < o; n++) i[n].apply(this, e)
						}
						return this
					},
					t.Emitter.mixin = function(e) {
						var i = ["on", "once", "off", "emit"];
						e._events = {};
						for (var n = 0; n < i.length; n++) {
							var o = i[n],
							s = t.Emitter.prototype[o];
							e[o] = s
						}
						return t.Emitter
					},
					t.Emitter.prototype.dispose = function() {
						return t.prototype.dispose.call(this),
						this._events = null,
						this
					},
					t.Emitter
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(2)],
				void 0 === (o = function(t) {
					"use strict";
					return t.SignalBase = function() {
						t.AudioNode.call(this)
					},
					t.extend(t.SignalBase, t.AudioNode),
					t.SignalBase.prototype.connect = function(e, i, n) {
						return t.Signal && t.Signal === e.constructor || t.Param && t.Param === e.constructor ? (e._param.cancelScheduledValues(0), e._param.setValueAtTime(0, 0), e.overridden = !0) : e instanceof AudioParam && (e.cancelScheduledValues(0), e.setValueAtTime(0, 0)),
						t.AudioNode.prototype.connect.call(this, e, i, n),
						this
					},
					t.SignalBase
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(6), i(17), i(49), i(71), i(48), i(70), i(69)],
				void 0 === (o = function(t) {
					"use strict";
					t.OmniOscillator = function() {
						var e = t.defaults(arguments, ["frequency", "type"], t.OmniOscillator);
						t.Source.call(this, e),
						this.frequency = new t.Signal(e.frequency, t.Type.Frequency),
						this.detune = new t.Signal(e.detune, t.Type.Cents),
						this._sourceType = void 0,
						this._oscillator = null,
						this.type = e.type,
						this._readOnly(["frequency", "detune"]),
						this.set(e)
					},
					t.extend(t.OmniOscillator, t.Source),
					t.OmniOscillator.defaults = {
						frequency: 440,
						detune: 0,
						type: "sine",
						phase: 0
					};
					var e = "PulseOscillator",
					i = "PWMOscillator",
					n = "FMOscillator",
					o = "AMOscillator",
					s = "FatOscillator";
					t.OmniOscillator.prototype._start = function(t) {
						this._oscillator.start(t)
					},
					t.OmniOscillator.prototype._stop = function(t) {
						this._oscillator.stop(t)
					},
					t.OmniOscillator.prototype.restart = function(t) {
						this._oscillator.restart(t)
					},
					Object.defineProperty(t.OmniOscillator.prototype, "type", {
						get: function() {
							var t = "";
							return this._sourceType === n ? t = "fm": this._sourceType === o ? t = "am": this._sourceType === s && (t = "fat"),
							t + this._oscillator.type
						},
						set: function(t) {
							"fm" === t.substr(0, 2) ? (this._createNewOscillator(n), this._oscillator.type = t.substr(2)) : "am" === t.substr(0, 2) ? (this._createNewOscillator(o), this._oscillator.type = t.substr(2)) : "fat" === t.substr(0, 3) ? (this._createNewOscillator(s), this._oscillator.type = t.substr(3)) : "pwm" === t ? this._createNewOscillator(i) : "pulse" === t ? this._createNewOscillator(e) : (this._createNewOscillator("Oscillator"), this._oscillator.type = t)
						}
					}),
					Object.defineProperty(t.OmniOscillator.prototype, "partials", {
						get: function() {
							return this._oscillator.partials
						},
						set: function(t) {
							this._oscillator.partials = t
						}
					}),
					Object.defineProperty(t.OmniOscillator.prototype, "partialCount", {
						get: function() {
							return this._oscillator.partialCount
						},
						set: function(t) {
							this._oscillator.partialCount = t
						}
					}),
					t.OmniOscillator.prototype.set = function(e, i) {
						return "type" === e ? this.type = i: t.isObject(e) && e.hasOwnProperty("type") && (this.type = e.type),
						t.prototype.set.apply(this, arguments),
						this
					},
					t.OmniOscillator.prototype.get = function(t) {
						var e = this._oscillator.get(t);
						return e.type = this.type,
						e
					},
					t.OmniOscillator.prototype._createNewOscillator = function(e) {
						if (e !== this._sourceType) {
							this._sourceType = e;
							var i = t[e],
							n = this.now();
							if (null !== this._oscillator) {
								var o = this._oscillator;
								o.stop(n),
								this.context.setTimeout(function() {
									o.dispose(),
									o = null
								},
								this.blockTime)
							}
							this._oscillator = new i,
							this.frequency.connect(this._oscillator.frequency),
							this.detune.connect(this._oscillator.detune),
							this._oscillator.connect(this.output),
							this.state === t.State.Started && this._oscillator.start(n)
						}
					},
					Object.defineProperty(t.OmniOscillator.prototype, "phase", {
						get: function() {
							return this._oscillator.phase
						},
						set: function(t) {
							this._oscillator.phase = t
						}
					});
					var r = {
						PulseOscillator: "pulse",
						PWMOscillator: "pwm",
						Oscillator: "oscillator",
						FMOscillator: "fm",
						AMOscillator: "am",
						FatOscillator: "fat"
					};
					return Object.defineProperty(t.OmniOscillator.prototype, "sourceType", {
						get: function() {
							return r[this._sourceType]
						},
						set: function(t) {
							var e = "sine";
							"pwm" !== this._oscillator.type && "pulse" !== this._oscillator.type && (e = this._oscillator.type),
							t === r.FMOscillator ? this.type = "fm" + e: t === r.AMOscillator ? this.type = "am" + e: t === r.FatOscillator ? this.type = "fat" + e: t === r.Oscillator ? this.type = e: t === r.PulseOscillator ? this.type = "pulse": t === r.PWMOscillator && (this.type = "pwm")
						}
					}),
					Object.defineProperty(t.OmniOscillator.prototype, "baseType", {
						get: function() {
							return this._oscillator.baseType
						},
						set: function(t) {
							this.sourceType !== r.PulseOscillator && this.sourceType !== r.PWMOscillator && (this._oscillator.baseType = t)
						}
					}),
					Object.defineProperty(t.OmniOscillator.prototype, "width", {
						get: function() {
							if (this._sourceType === e) return this._oscillator.width
						}
					}),
					Object.defineProperty(t.OmniOscillator.prototype, "count", {
						get: function() {
							if (this._sourceType === s) return this._oscillator.count
						},
						set: function(t) {
							this._sourceType === s && (this._oscillator.count = t)
						}
					}),
					Object.defineProperty(t.OmniOscillator.prototype, "spread", {
						get: function() {
							if (this._sourceType === s) return this._oscillator.spread
						},
						set: function(t) {
							this._sourceType === s && (this._oscillator.spread = t)
						}
					}),
					Object.defineProperty(t.OmniOscillator.prototype, "modulationType", {
						get: function() {
							if (this._sourceType === n || this._sourceType === o) return this._oscillator.modulationType
						},
						set: function(t) {
							this._sourceType !== n && this._sourceType !== o || (this._oscillator.modulationType = t)
						}
					}),
					Object.defineProperty(t.OmniOscillator.prototype, "modulationIndex", {
						get: function() {
							if (this._sourceType === n) return this._oscillator.modulationIndex
						}
					}),
					Object.defineProperty(t.OmniOscillator.prototype, "harmonicity", {
						get: function() {
							if (this._sourceType === n || this._sourceType === o) return this._oscillator.harmonicity
						}
					}),
					Object.defineProperty(t.OmniOscillator.prototype, "modulationFrequency", {
						get: function() {
							if (this._sourceType === i) return this._oscillator.modulationFrequency
						}
					}),
					t.OmniOscillator.prototype.dispose = function() {
						return t.Source.prototype.dispose.call(this),
						this._writable(["frequency", "detune"]),
						this.detune.dispose(),
						this.detune = null,
						this.frequency.dispose(),
						this.frequency = null,
						this._oscillator.dispose(),
						this._oscillator = null,
						this._sourceType = null,
						this
					},
					t.OmniOscillator
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(30), i(37), i(1), i(25)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Synth = function(e) {
						e = t.defaultArg(e, t.Synth.defaults),
						t.Monophonic.call(this, e),
						this.oscillator = new t.OmniOscillator(e.oscillator),
						this.frequency = this.oscillator.frequency,
						this.detune = this.oscillator.detune,
						this.envelope = new t.AmplitudeEnvelope(e.envelope),
						this.oscillator.chain(this.envelope, this.output),
						this._readOnly(["oscillator", "frequency", "detune", "envelope"])
					},
					t.extend(t.Synth, t.Monophonic),
					t.Synth.defaults = {
						oscillator: {
							type: "triangle"
						},
						envelope: {
							attack: .005,
							decay: .1,
							sustain: .3,
							release: 1
						}
					},
					t.Synth.prototype._triggerEnvelopeAttack = function(t, e) {
						return this.envelope.triggerAttack(t, e),
						this.oscillator.start(t),
						0 === this.envelope.sustain && this.oscillator.stop(t + this.envelope.attack + this.envelope.decay),
						this
					},
					t.Synth.prototype._triggerEnvelopeRelease = function(t) {
						return t = this.toSeconds(t),
						this.envelope.triggerRelease(t),
						this.oscillator.stop(t + this.envelope.release),
						this
					},
					t.Synth.prototype.dispose = function() {
						return t.Monophonic.prototype.dispose.call(this),
						this._writable(["oscillator", "frequency", "detune", "envelope"]),
						this.oscillator.dispose(),
						this.oscillator = null,
						this.envelope.dispose(),
						this.envelope = null,
						this.frequency = null,
						this.detune = null,
						this
					},
					t.Synth
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(6), i(11), i(31)],
				void 0 === (o = function(t) {
					"use strict";
					t.Noise = function() {
						var e = t.defaults(arguments, ["type"], t.Noise);
						t.Source.call(this, e),
						this._source = null,
						this._type = e.type,
						this._playbackRate = e.playbackRate
					},
					t.extend(t.Noise, t.Source),
					t.Noise.defaults = {
						type: "white",
						playbackRate: 1
					},
					Object.defineProperty(t.Noise.prototype, "type", {
						get: function() {
							return this._type
						},
						set: function(i) {
							if (this._type !== i) {
								if (! (i in e)) throw new TypeError("Tone.Noise: invalid type: " + i);
								if (this._type = i, this.state === t.State.Started) {
									var n = this.now();
									this._stop(n),
									this._start(n)
								}
							}
						}
					}),
					Object.defineProperty(t.Noise.prototype, "playbackRate", {
						get: function() {
							return this._playbackRate
						},
						set: function(t) {
							this._playbackRate = t,
							this._source && (this._source.playbackRate.value = t)
						}
					}),
					t.Noise.prototype._start = function(i) {
						var n = e[this._type];
						this._source = new t.BufferSource(n).connect(this.output),
						this._source.loop = !0,
						this._source.playbackRate.value = this._playbackRate,
						this._source.start(this.toSeconds(i), Math.random() * (n.duration - .001))
					},
					t.Noise.prototype._stop = function(t) {
						this._source && (this._source.stop(this.toSeconds(t)), this._source = null)
					},
					t.Noise.prototype.restart = function(t) {
						return this._stop(t),
						this._start(t),
						this
					},
					t.Noise.prototype.dispose = function() {
						return t.Source.prototype.dispose.call(this),
						null !== this._source && (this._source.disconnect(), this._source = null),
						this._buffer = null,
						this
					};
					var e = {},
					i = {};
					return Object.defineProperty(e, "pink", {
						get: function() {
							if (!i.pink) {
								for (var e = [], n = 0; n < 2; n++) {
									var o, s, r, a, l, u, c, p = new Float32Array(220500);
									e[n] = p,
									o = s = r = a = l = u = c = 0;
									for (var h = 0; h < 220500; h++) {
										var f = 2 * Math.random() - 1;
										o = .99886 * o + .0555179 * f,
										s = .99332 * s + .0750759 * f,
										r = .969 * r + .153852 * f,
										a = .8665 * a + .3104856 * f,
										l = .55 * l + .5329522 * f,
										u = -.7616 * u - .016898 * f,
										p[h] = o + s + r + a + l + u + c + .5362 * f,
										p[h] *= .11,
										c = .115926 * f
									}
								}
								i.pink = (new t.Buffer).fromArray(e)
							}
							return i.pink
						}
					}),
					Object.defineProperty(e, "brown", {
						get: function() {
							if (!i.brown) {
								for (var e = [], n = 0; n < 2; n++) {
									var o = new Float32Array(220500);
									e[n] = o;
									for (var s = 0,
									r = 0; r < 220500; r++) {
										var a = 2 * Math.random() - 1;
										o[r] = (s + .02 * a) / 1.02,
										s = o[r],
										o[r] *= 3.5
									}
								}
								i.brown = (new t.Buffer).fromArray(e)
							}
							return i.brown
						}
					}),
					Object.defineProperty(e, "white", {
						get: function() {
							if (!i.white) {
								for (var e = [], n = 0; n < 2; n++) {
									var o = new Float32Array(220500);
									e[n] = o;
									for (var s = 0; s < 220500; s++) o[s] = 2 * Math.random() - 1
								}
								i.white = (new t.Buffer).fromArray(e)
							}
							return i.white
						}
					}),
					t.Noise
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(27), i(20), i(2)],
				void 0 === (o = function(t) {
					"use strict";
					t.Master = function() {
						t.AudioNode.call(this),
						t.getContext(function() {
							this.createInsOuts(1, 0),
							this._volume = this.output = new t.Volume,
							this.volume = this._volume.volume,
							this._readOnly("volume"),
							this.input.chain(this.output, this.context.destination),
							this.context.master = this
						}.bind(this))
					},
					t.extend(t.Master, t.AudioNode),
					t.Master.defaults = {
						volume: 0,
						mute: !1
					},
					t.Master.prototype.isMaster = !0,
					Object.defineProperty(t.Master.prototype, "mute", {
						get: function() {
							return this._volume.mute
						},
						set: function(t) {
							this._volume.mute = t
						}
					}),
					t.Master.prototype.chain = function() {
						this.input.disconnect(),
						this.input.chain.apply(this.input, arguments),
						arguments[arguments.length - 1].connect(this.output)
					},
					t.Master.prototype.dispose = function() {
						t.AudioNode.prototype.dispose.call(this),
						this._writable("volume"),
						this._volume.dispose(),
						this._volume = null,
						this.volume = null
					},
					t.AudioNode.prototype.toMaster = function() {
						return this.connect(this.context.master),
						this
					};
					var e = t.Master;
					return t.Master = new e,
					t.Context.on("init",
					function(i) {
						i.master && i.master.isMaster ? t.Master = i.master: t.Master = new e
					}),
					t.Context.on("close",
					function(t) {
						t.master && t.master.isMaster && t.master.dispose()
					}),
					t.Master
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(89), i(47)],
				void 0 === (o = function(t) {
					"use strict";
					return t.FrequencyEnvelope = function() {
						var e = t.defaults(arguments, ["attack", "decay", "sustain", "release"], t.Envelope);
						e = t.defaultArg(e, t.FrequencyEnvelope.defaults),
						t.ScaledEnvelope.call(this, e),
						this._octaves = e.octaves,
						this.baseFrequency = e.baseFrequency,
						this.octaves = e.octaves,
						this.exponent = e.exponent
					},
					t.extend(t.FrequencyEnvelope, t.Envelope),
					t.FrequencyEnvelope.defaults = {
						baseFrequency: 200,
						octaves: 4,
						exponent: 1
					},
					Object.defineProperty(t.FrequencyEnvelope.prototype, "baseFrequency", {
						get: function() {
							return this._scale.min
						},
						set: function(t) {
							this._scale.min = this.toFrequency(t),
							this.octaves = this._octaves
						}
					}),
					Object.defineProperty(t.FrequencyEnvelope.prototype, "octaves", {
						get: function() {
							return this._octaves
						},
						set: function(t) {
							this._octaves = t,
							this._scale.max = this.baseFrequency * Math.pow(2, t)
						}
					}),
					Object.defineProperty(t.FrequencyEnvelope.prototype, "exponent", {
						get: function() {
							return this._exp.value
						},
						set: function(t) {
							this._exp.value = t
						}
					}),
					t.FrequencyEnvelope.prototype.dispose = function() {
						return t.ScaledEnvelope.prototype.dispose.call(this),
						this
					},
					t.FrequencyEnvelope
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(26), i(61)],
				void 0 === (o = function(t) {
					return t.ScaleExp = function(e, i, n) {
						t.SignalBase.call(this),
						this._scale = this.output = new t.Scale(e, i),
						this._exp = this.input = new t.Pow(t.defaultArg(n, 2)),
						this._exp.connect(this._scale)
					},
					t.extend(t.ScaleExp, t.SignalBase),
					Object.defineProperty(t.ScaleExp.prototype, "exponent", {
						get: function() {
							return this._exp.value
						},
						set: function(t) {
							this._exp.value = t
						}
					}),
					Object.defineProperty(t.ScaleExp.prototype, "min", {
						get: function() {
							return this._scale.min
						},
						set: function(t) {
							this._scale.min = t
						}
					}),
					Object.defineProperty(t.ScaleExp.prototype, "max", {
						get: function() {
							return this._scale.max
						},
						set: function(t) {
							this._scale.max = t
						}
					}),
					t.ScaleExp.prototype.dispose = function() {
						return t.SignalBase.prototype.dispose.call(this),
						this._scale.dispose(),
						this._scale = null,
						this._exp.dispose(),
						this._exp = null,
						this
					},
					t.ScaleExp
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(14), i(2)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Compressor = function() {
						var e = t.defaults(arguments, ["threshold", "ratio"], t.Compressor);
						t.AudioNode.call(this),
						this._compressor = this.input = this.output = this.context.createDynamicsCompressor(),
						this.threshold = new t.Param({
							param: this._compressor.threshold,
							units: t.Type.Decibels,
							convert: !1
						}),
						this.attack = new t.Param(this._compressor.attack, t.Type.Time),
						this.release = new t.Param(this._compressor.release, t.Type.Time),
						this.knee = new t.Param({
							param: this._compressor.knee,
							units: t.Type.Decibels,
							convert: !1
						}),
						this.ratio = new t.Param({
							param: this._compressor.ratio,
							convert: !1
						}),
						this._readOnly(["knee", "release", "attack", "ratio", "threshold"]),
						this.set(e)
					},
					t.extend(t.Compressor, t.AudioNode),
					t.Compressor.defaults = {
						ratio: 12,
						threshold: -24,
						release: .25,
						attack: .003,
						knee: 30
					},
					t.Compressor.prototype.dispose = function() {
						return t.AudioNode.prototype.dispose.call(this),
						this._writable(["knee", "release", "attack", "ratio", "threshold"]),
						this._compressor.disconnect(),
						this._compressor = null,
						this.attack.dispose(),
						this.attack = null,
						this.release.dispose(),
						this.release = null,
						this.threshold.dispose(),
						this.threshold = null,
						this.ratio.dispose(),
						this.ratio = null,
						this.knee.dispose(),
						this.knee = null,
						this
					},
					t.Compressor
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(2), i(96)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Analyser = function() {
						var e = t.defaults(arguments, ["type", "size"], t.Analyser);
						t.AudioNode.call(this),
						this._analyser = this.input = this.output = this.context.createAnalyser(),
						this._type = e.type,
						this._buffer = null,
						this.size = e.size,
						this.type = e.type
					},
					t.extend(t.Analyser, t.AudioNode),
					t.Analyser.defaults = {
						size: 1024,
						type: "fft",
						smoothing: .8
					},
					t.Analyser.Type = {
						Waveform: "waveform",
						FFT: "fft"
					},
					t.Analyser.prototype.getValue = function() {
						return this._type === t.Analyser.Type.FFT ? this._analyser.getFloatFrequencyData(this._buffer) : this._type === t.Analyser.Type.Waveform && this._analyser.getFloatTimeDomainData(this._buffer),
						this._buffer
					},
					Object.defineProperty(t.Analyser.prototype, "size", {
						get: function() {
							return this._analyser.frequencyBinCount
						},
						set: function(t) {
							this._analyser.fftSize = 2 * t,
							this._buffer = new Float32Array(t)
						}
					}),
					Object.defineProperty(t.Analyser.prototype, "type", {
						get: function() {
							return this._type
						},
						set: function(e) {
							if (e !== t.Analyser.Type.Waveform && e !== t.Analyser.Type.FFT) throw new TypeError("Tone.Analyser: invalid type: " + e);
							this._type = e
						}
					}),
					Object.defineProperty(t.Analyser.prototype, "smoothing", {
						get: function() {
							return this._analyser.smoothingTimeConstant
						},
						set: function(t) {
							this._analyser.smoothingTimeConstant = t
						}
					}),
					t.Analyser.prototype.dispose = function() {
						t.AudioNode.prototype.dispose.call(this),
						this._analyser.disconnect(),
						this._analyser = null,
						this._buffer = null
					},
					t.Analyser
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(65)],
				void 0 === (o = function(t) {
					return t.TransportTime = function(e, i) {
						if (! (this instanceof t.TransportTime)) return new t.TransportTime(e, i);
						t.Time.call(this, e, i)
					},
					t.extend(t.TransportTime, t.Time),
					t.TransportTime.prototype._now = function() {
						return t.Transport.seconds
					},
					t.TransportTime
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(64)],
				void 0 === (o = function(t) {
					t.Frequency = function(e, i) {
						if (! (this instanceof t.Frequency)) return new t.Frequency(e, i);
						t.TimeBase.call(this, e, i)
					},
					t.extend(t.Frequency, t.TimeBase),
					t.Frequency.prototype._expressions = Object.assign({},
					t.TimeBase.prototype._expressions, {
						midi: {
							regexp: /^(\d+(?:\.\d+)?midi)/,
							method: function(e) {
								return "midi" === this._defaultUnits ? e: t.Frequency.mtof(e)
							}
						},
						note: {
							regexp: /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,
							method: function(i, n) {
								var o = e[i.toLowerCase()] + 12 * (parseInt(n) + 1);
								return "midi" === this._defaultUnits ? o: t.Frequency.mtof(o)
							}
						},
						tr: {
							regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,
							method: function(t, e, i) {
								var n = 1;
								return t && "0" !== t && (n *= this._beatsToUnits(this._getTimeSignature() * parseFloat(t))),
								e && "0" !== e && (n *= this._beatsToUnits(parseFloat(e))),
								i && "0" !== i && (n *= this._beatsToUnits(parseFloat(i) / 4)),
								n
							}
						}
					}),
					t.Frequency.prototype.transpose = function(e) {
						return new this.constructor(this.valueOf() * t.intervalToFrequencyRatio(e))
					},
					t.Frequency.prototype.harmonize = function(t) {
						return t.map(function(t) {
							return this.transpose(t)
						}.bind(this))
					},
					t.Frequency.prototype.toMidi = function() {
						return t.Frequency.ftom(this.valueOf())
					},
					t.Frequency.prototype.toNote = function() {
						var e = this.toFrequency(),
						n = Math.log2(e / t.Frequency.A4),
						o = Math.round(12 * n) + 57,
						s = Math.floor(o / 12);
						return s < 0 && (o += -12 * s),
						i[o % 12] + s.toString()
					},
					t.Frequency.prototype.toSeconds = function() {
						return 1 / t.TimeBase.prototype.toSeconds.call(this)
					},
					t.Frequency.prototype.toFrequency = function() {
						return t.TimeBase.prototype.toFrequency.call(this)
					},
					t.Frequency.prototype.toTicks = function() {
						var e = this._beatsToUnits(1),
						i = this.valueOf() / e;
						return Math.floor(i * t.Transport.PPQ)
					},
					t.Frequency.prototype._noArg = function() {
						return 0
					},
					t.Frequency.prototype._frequencyToUnits = function(t) {
						return t
					},
					t.Frequency.prototype._ticksToUnits = function(e) {
						return 1 / (60 * e / (t.Transport.bpm.value * t.Transport.PPQ))
					},
					t.Frequency.prototype._beatsToUnits = function(e) {
						return 1 / t.TimeBase.prototype._beatsToUnits.call(this, e)
					},
					t.Frequency.prototype._secondsToUnits = function(t) {
						return 1 / t
					},
					t.Frequency.prototype._defaultUnits = "hz";
					var e = {
						cbb: -2,
						cb: -1,
						c: 0,
						"c#": 1,
						cx: 2,
						dbb: 0,
						db: 1,
						d: 2,
						"d#": 3,
						dx: 4,
						ebb: 2,
						eb: 3,
						e: 4,
						"e#": 5,
						ex: 6,
						fbb: 3,
						fb: 4,
						f: 5,
						"f#": 6,
						fx: 7,
						gbb: 5,
						gb: 6,
						g: 7,
						"g#": 8,
						gx: 9,
						abb: 7,
						ab: 8,
						a: 9,
						"a#": 10,
						ax: 11,
						bbb: 9,
						bb: 10,
						b: 11,
						"b#": 12,
						bx: 13
					},
					i = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
					return t.Frequency.A4 = 440,
					t.Frequency.mtof = function(e) {
						return t.Frequency.A4 * Math.pow(2, (e - 69) / 12)
					},
					t.Frequency.ftom = function(e) {
						return 69 + Math.round(12 * Math.log2(e / t.Frequency.A4))
					},
					t.Frequency
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(1), i(61), i(4), i(2)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Envelope = function() {
						var e = t.defaults(arguments, ["attack", "decay", "sustain", "release"], t.Envelope);
						t.AudioNode.call(this),
						this.attack = e.attack,
						this.decay = e.decay,
						this.sustain = e.sustain,
						this.release = e.release,
						this._attackCurve = "linear",
						this._releaseCurve = "exponential",
						this._sig = this.output = new t.Signal(0),
						this.attackCurve = e.attackCurve,
						this.releaseCurve = e.releaseCurve,
						this.decayCurve = e.decayCurve
					},
					t.extend(t.Envelope, t.AudioNode),
					t.Envelope.defaults = {
						attack: .01,
						decay: .1,
						sustain: .5,
						release: 1,
						attackCurve: "linear",
						decayCurve: "exponential",
						releaseCurve: "exponential"
					},
					Object.defineProperty(t.Envelope.prototype, "value", {
						get: function() {
							return this.getValueAtTime(this.now())
						}
					}),
					t.Envelope.prototype._getCurve = function(e, i) {
						if (t.isString(e)) return e;
						if (t.isArray(e)) {
							for (var n in t.Envelope.Type) if (t.Envelope.Type[n][i] === e) return n;
							return e
						}
					},
					t.Envelope.prototype._setCurve = function(e, i, n) {
						if (t.Envelope.Type.hasOwnProperty(n)) {
							var o = t.Envelope.Type[n];
							t.isObject(o) ? this[e] = o[i] : this[e] = o
						} else {
							if (!t.isArray(n)) throw new Error("Tone.Envelope: invalid curve: " + n);
							this[e] = n
						}
					},
					Object.defineProperty(t.Envelope.prototype, "attackCurve", {
						get: function() {
							return this._getCurve(this._attackCurve, "In")
						},
						set: function(t) {
							this._setCurve("_attackCurve", "In", t)
						}
					}),
					Object.defineProperty(t.Envelope.prototype, "releaseCurve", {
						get: function() {
							return this._getCurve(this._releaseCurve, "Out")
						},
						set: function(t) {
							this._setCurve("_releaseCurve", "Out", t)
						}
					}),
					Object.defineProperty(t.Envelope.prototype, "decayCurve", {
						get: function() {
							return this._decayCurve
						},
						set: function(t) {
							if (! ["linear", "exponential"].includes(t)) throw new Error("Tone.Envelope: invalid curve: " + t);
							this._decayCurve = t
						}
					}),
					t.Envelope.prototype.triggerAttack = function(e, i) {
						this.log("triggerAttack", e, i),
						e = this.toSeconds(e);
						var n = this.toSeconds(this.attack),
						o = this.toSeconds(this.decay);
						i = t.defaultArg(i, 1);
						var s = this.getValueAtTime(e);
						if (s > 0 && (n = (1 - s) / (1 / n)), "linear" === this._attackCurve) this._sig.linearRampTo(i, n, e);
						else if ("exponential" === this._attackCurve) this._sig.targetRampTo(i, n, e);
						else if (n > 0) {
							this._sig.cancelAndHoldAtTime(e);
							for (var r = this._attackCurve,
							a = 1; a < r.length; a++) if (r[a - 1] <= s && s <= r[a]) { (r = this._attackCurve.slice(a))[0] = s;
								break
							}
							this._sig.setValueCurveAtTime(r, e, n, i)
						}
						if (o) {
							var l = i * this.sustain,
							u = e + n;
							this.log("decay", u),
							"linear" === this._decayCurve ? this._sig.linearRampTo(l, o, u + this.sampleTime) : "exponential" === this._decayCurve && this._sig.exponentialApproachValueAtTime(l, u, o)
						}
						return this
					},
					t.Envelope.prototype.triggerRelease = function(e) {
						this.log("triggerRelease", e),
						e = this.toSeconds(e);
						var i = this.getValueAtTime(e);
						if (i > 0) {
							var n = this.toSeconds(this.release);
							if ("linear" === this._releaseCurve) this._sig.linearRampTo(0, n, e);
							else if ("exponential" === this._releaseCurve) this._sig.targetRampTo(0, n, e);
							else {
								var o = this._releaseCurve;
								t.isArray(o) && (this._sig.cancelAndHoldAtTime(e), this._sig.setValueCurveAtTime(o, e, n, i))
							}
						}
						return this
					},
					t.Envelope.prototype.getValueAtTime = function(t) {
						return this._sig.getValueAtTime(t)
					},
					t.Envelope.prototype.triggerAttackRelease = function(t, e, i) {
						return e = this.toSeconds(e),
						this.triggerAttack(e, i),
						this.triggerRelease(e + this.toSeconds(t)),
						this
					},
					t.Envelope.prototype.cancel = function(t) {
						return this._sig.cancelScheduledValues(t),
						this
					},
					t.Envelope.prototype.connect = t.SignalBase.prototype.connect,
					function() {
						function e(t) {
							for (var e = new Array(t.length), i = 0; i < t.length; i++) e[i] = 1 - t[i];
							return e
						}
						var i, n, o = [];
						for (i = 0; i < 128; i++) o[i] = Math.sin(i / 127 * (Math.PI / 2));
						var s = [];
						for (i = 0; i < 127; i++) {
							n = i / 127;
							var r = Math.sin(n * (2 * Math.PI) * 6.4 - Math.PI / 2) + 1;
							s[i] = r / 10 + .83 * n
						}
						s[127] = 1;
						var a = [];
						for (i = 0; i < 128; i++) a[i] = Math.ceil(i / 127 * 5) / 5;
						var l = [];
						for (i = 0; i < 128; i++) n = i / 127,
						l[i] = .5 * (1 - Math.cos(Math.PI * n));
						var u, c = [];
						for (i = 0; i < 128; i++) {
							n = i / 127;
							var p = 4 * Math.pow(n, 3) + .2,
							h = Math.cos(p * Math.PI * 2 * n);
							c[i] = Math.abs(h * (1 - n))
						}
						t.Envelope.Type = {
							linear: "linear",
							exponential: "exponential",
							bounce: {
								In: e(c),
								Out: c
							},
							cosine: {
								In: o,
								Out: (u = o, u.slice(0).reverse())
							},
							step: {
								In: a,
								Out: e(a)
							},
							ripple: {
								In: s,
								Out: e(s)
							},
							sine: {
								In: l,
								Out: e(l)
							}
						}
					} (),
					t.Envelope.prototype.dispose = function() {
						return t.AudioNode.prototype.dispose.call(this),
						this._sig.dispose(),
						this._sig = null,
						this._attackCurve = null,
						this._releaseCurve = null,
						this
					},
					t.Envelope
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(6), i(17), i(5), i(3)],
				void 0 === (o = function(t) {
					"use strict";
					return t.FMOscillator = function() {
						var e = t.defaults(arguments, ["frequency", "type", "modulationType"], t.FMOscillator);
						t.Source.call(this, e),
						this._carrier = new t.Oscillator(e.frequency, e.type),
						this.frequency = new t.Signal(e.frequency, t.Type.Frequency),
						this.detune = this._carrier.detune,
						this.detune.value = e.detune,
						this.modulationIndex = new t.Multiply(e.modulationIndex),
						this.modulationIndex.units = t.Type.Positive,
						this._modulator = new t.Oscillator(e.frequency, e.modulationType),
						this.harmonicity = new t.Multiply(e.harmonicity),
						this.harmonicity.units = t.Type.Positive,
						this._modulationNode = new t.Gain(0),
						this.frequency.connect(this._carrier.frequency),
						this.frequency.chain(this.harmonicity, this._modulator.frequency),
						this.frequency.chain(this.modulationIndex, this._modulationNode),
						this._modulator.connect(this._modulationNode.gain),
						this._modulationNode.connect(this._carrier.frequency),
						this._carrier.connect(this.output),
						this.detune.connect(this._modulator.detune),
						this.phase = e.phase,
						this._readOnly(["modulationIndex", "frequency", "detune", "harmonicity"])
					},
					t.extend(t.FMOscillator, t.Source),
					t.FMOscillator.defaults = {
						frequency: 440,
						detune: 0,
						phase: 0,
						type: "sine",
						modulationIndex: 2,
						modulationType: "square",
						harmonicity: 1
					},
					t.FMOscillator.prototype._start = function(t) {
						this._modulator.start(t),
						this._carrier.start(t)
					},
					t.FMOscillator.prototype._stop = function(t) {
						this._modulator.stop(t),
						this._carrier.stop(t)
					},
					t.FMOscillator.prototype.restart = function(t) {
						this._modulator.restart(t),
						this._carrier.restart(t)
					},
					Object.defineProperty(t.FMOscillator.prototype, "type", {
						get: function() {
							return this._carrier.type
						},
						set: function(t) {
							this._carrier.type = t
						}
					}),
					Object.defineProperty(t.FMOscillator.prototype, "baseType", {
						get: function() {
							return this._carrier.baseType
						},
						set: function(t) {
							this._carrier.baseType = t
						}
					}),
					Object.defineProperty(t.FMOscillator.prototype, "partialCount", {
						get: function() {
							return this._carrier.partialCount
						},
						set: function(t) {
							this._carrier.partialCount = t
						}
					}),
					Object.defineProperty(t.FMOscillator.prototype, "modulationType", {
						get: function() {
							return this._modulator.type
						},
						set: function(t) {
							this._modulator.type = t
						}
					}),
					Object.defineProperty(t.FMOscillator.prototype, "phase", {
						get: function() {
							return this._carrier.phase
						},
						set: function(t) {
							this._carrier.phase = t,
							this._modulator.phase = t
						}
					}),
					Object.defineProperty(t.FMOscillator.prototype, "partials", {
						get: function() {
							return this._carrier.partials
						},
						set: function(t) {
							this._carrier.partials = t
						}
					}),
					t.FMOscillator.prototype.dispose = function() {
						return t.Source.prototype.dispose.call(this),
						this._writable(["modulationIndex", "frequency", "detune", "harmonicity"]),
						this.frequency.dispose(),
						this.frequency = null,
						this.detune = null,
						this.harmonicity.dispose(),
						this.harmonicity = null,
						this._carrier.dispose(),
						this._carrier = null,
						this._modulator.dispose(),
						this._modulator = null,
						this._modulationNode.dispose(),
						this._modulationNode = null,
						this.modulationIndex.dispose(),
						this.modulationIndex = null,
						this
					},
					t.FMOscillator
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(6), i(17), i(1), i(7), i(3)],
				void 0 === (o = function(t) {
					"use strict";
					return t.PulseOscillator = function() {
						var e = t.defaults(arguments, ["frequency", "width"], t.Oscillator);
						t.Source.call(this, e),
						this.width = new t.Signal(e.width, t.Type.NormalRange),
						this._widthGate = new t.Gain(0),
						this._sawtooth = new t.Oscillator({
							frequency: e.frequency,
							detune: e.detune,
							type: "sawtooth",
							phase: e.phase
						}),
						this.frequency = this._sawtooth.frequency,
						this.detune = this._sawtooth.detune,
						this._thresh = new t.WaveShaper(function(t) {
							return t < 0 ? -1 : 1
						}),
						this._sawtooth.chain(this._thresh, this.output),
						this.width.chain(this._widthGate, this._thresh),
						this._readOnly(["width", "frequency", "detune"])
					},
					t.extend(t.PulseOscillator, t.Source),
					t.PulseOscillator.defaults = {
						frequency: 440,
						detune: 0,
						phase: 0,
						width: .2
					},
					t.PulseOscillator.prototype._start = function(t) {
						t = this.toSeconds(t),
						this._sawtooth.start(t),
						this._widthGate.gain.setValueAtTime(1, t)
					},
					t.PulseOscillator.prototype._stop = function(t) {
						t = this.toSeconds(t),
						this._sawtooth.stop(t),
						this._widthGate.gain.setValueAtTime(0, t)
					},
					t.PulseOscillator.prototype.restart = function(t) {
						this._sawtooth.restart(t),
						this._widthGate.gain.cancelScheduledValues(t),
						this._widthGate.gain.setValueAtTime(1, t)
					},
					Object.defineProperty(t.PulseOscillator.prototype, "phase", {
						get: function() {
							return this._sawtooth.phase
						},
						set: function(t) {
							this._sawtooth.phase = t
						}
					}),
					Object.defineProperty(t.PulseOscillator.prototype, "type", {
						get: function() {
							return "pulse"
						}
					}),
					Object.defineProperty(t.PulseOscillator.prototype, "baseType", {
						get: function() {
							return "pulse"
						}
					}),
					Object.defineProperty(t.PulseOscillator.prototype, "partials", {
						get: function() {
							return []
						}
					}),
					t.PulseOscillator.prototype.dispose = function() {
						return t.Source.prototype.dispose.call(this),
						this._sawtooth.dispose(),
						this._sawtooth = null,
						this._writable(["width", "frequency", "detune"]),
						this.width.dispose(),
						this.width = null,
						this._widthGate.dispose(),
						this._widthGate = null,
						this._thresh.dispose(),
						this._thresh = null,
						this.frequency = null,
						this.detune = null,
						this
					},
					t.PulseOscillator
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(16), i(4), i(33)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Event = function() {
						var e = t.defaults(arguments, ["callback", "value"], t.Event);
						t.call(this),
						this._loop = e.loop,
						this.callback = e.callback,
						this.value = e.value,
						this._loopStart = this.toTicks(e.loopStart),
						this._loopEnd = this.toTicks(e.loopEnd),
						this._state = new t.TimelineState(t.State.Stopped),
						this._playbackRate = 1,
						this._startOffset = 0,
						this._probability = e.probability,
						this._humanize = e.humanize,
						this.mute = e.mute,
						this.playbackRate = e.playbackRate
					},
					t.extend(t.Event),
					t.Event.defaults = {
						callback: t.noOp,
						loop: !1,
						loopEnd: "1m",
						loopStart: 0,
						playbackRate: 1,
						value: null,
						probability: 1,
						mute: !1,
						humanize: !1
					},
					t.Event.prototype._rescheduleEvents = function(e) {
						return e = t.defaultArg(e, -1),
						this._state.forEachFrom(e,
						function(e) {
							var i;
							if (e.state === t.State.Started) {
								t.isDefined(e.id) && t.Transport.clear(e.id);
								var n = e.time + Math.round(this.startOffset / this._playbackRate);
								if (this._loop) {
									i = 1 / 0,
									t.isNumber(this._loop) && (i = this._loop * this._getLoopDuration());
									var o = this._state.getAfter(n);
									null !== o && (i = Math.min(i, o.time - n)),
									i !== 1 / 0 && (this._state.setStateAtTime(t.State.Stopped, n + i + 1), i = t.Ticks(i));
									var s = t.Ticks(this._getLoopDuration());
									e.id = t.Transport.scheduleRepeat(this._tick.bind(this), s, t.Ticks(n), i)
								} else e.id = t.Transport.schedule(this._tick.bind(this), t.Ticks(n))
							}
						}.bind(this)),
						this
					},
					Object.defineProperty(t.Event.prototype, "state", {
						get: function() {
							return this._state.getValueAtTime(t.Transport.ticks)
						}
					}),
					Object.defineProperty(t.Event.prototype, "startOffset", {
						get: function() {
							return this._startOffset
						},
						set: function(t) {
							this._startOffset = t
						}
					}),
					Object.defineProperty(t.Event.prototype, "probability", {
						get: function() {
							return this._probability
						},
						set: function(t) {
							this._probability = t
						}
					}),
					Object.defineProperty(t.Event.prototype, "humanize", {
						get: function() {
							return this._humanize
						},
						set: function(t) {
							this._humanize = t
						}
					}),
					t.Event.prototype.start = function(e) {
						return e = this.toTicks(e),
						this._state.getValueAtTime(e) === t.State.Stopped && (this._state.add({
							state: t.State.Started,
							time: e,
							id: void 0
						}), this._rescheduleEvents(e)),
						this
					},
					t.Event.prototype.stop = function(e) {
						if (this.cancel(e), e = this.toTicks(e), this._state.getValueAtTime(e) === t.State.Started) {
							this._state.setStateAtTime(t.State.Stopped, e);
							var i = this._state.getBefore(e),
							n = e;
							null !== i && (n = i.time),
							this._rescheduleEvents(n)
						}
						return this
					},
					t.Event.prototype.cancel = function(e) {
						return e = t.defaultArg(e, -1 / 0),
						e = this.toTicks(e),
						this._state.forEachFrom(e,
						function(e) {
							t.Transport.clear(e.id)
						}),
						this._state.cancel(e),
						this
					},
					t.Event.prototype._tick = function(e) {
						var i = t.Transport.getTicksAtTime(e);
						if (!this.mute && this._state.getValueAtTime(i) === t.State.Started) {
							if (this.probability < 1 && Math.random() > this.probability) return;
							if (this.humanize) {
								var n = .02;
								t.isBoolean(this.humanize) || (n = this.toSeconds(this.humanize)),
								e += (2 * Math.random() - 1) * n
							}
							this.callback(e, this.value)
						}
					},
					t.Event.prototype._getLoopDuration = function() {
						return Math.round((this._loopEnd - this._loopStart) / this._playbackRate)
					},
					Object.defineProperty(t.Event.prototype, "loop", {
						get: function() {
							return this._loop
						},
						set: function(t) {
							this._loop = t,
							this._rescheduleEvents()
						}
					}),
					Object.defineProperty(t.Event.prototype, "playbackRate", {
						get: function() {
							return this._playbackRate
						},
						set: function(t) {
							this._playbackRate = t,
							this._rescheduleEvents()
						}
					}),
					Object.defineProperty(t.Event.prototype, "loopEnd", {
						get: function() {
							return t.Ticks(this._loopEnd).toSeconds()
						},
						set: function(t) {
							this._loopEnd = this.toTicks(t),
							this._loop && this._rescheduleEvents()
						}
					}),
					Object.defineProperty(t.Event.prototype, "loopStart", {
						get: function() {
							return t.Ticks(this._loopStart).toSeconds()
						},
						set: function(t) {
							this._loopStart = this.toTicks(t),
							this._loop && this._rescheduleEvents()
						}
					}),
					Object.defineProperty(t.Event.prototype, "progress", {
						get: function() {
							if (this._loop) {
								var e = t.Transport.ticks,
								i = this._state.get(e);
								if (null !== i && i.state === t.State.Started) {
									var n = this._getLoopDuration();
									return (e - i.time) % n / n
								}
								return 0
							}
							return 0
						}
					}),
					t.Event.prototype.dispose = function() {
						this.cancel(),
						this._state.dispose(),
						this._state = null,
						this.callback = null,
						this.value = null
					},
					t.Event
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(1), i(13), i(29), i(10), i(3), i(2)],
				void 0 === (o = function(t) {
					"use strict";
					return t.MidSideMerge = function() {
						t.AudioNode.call(this),
						this.createInsOuts(2, 0),
						this.mid = this.input[0] = new t.Gain,
						this._left = new t.Add,
						this._timesTwoLeft = new t.Multiply(Math.SQRT1_2),
						this.side = this.input[1] = new t.Gain,
						this._right = new t.Subtract,
						this._timesTwoRight = new t.Multiply(Math.SQRT1_2),
						this._merge = this.output = new t.Merge,
						this.mid.connect(this._left, 0, 0),
						this.side.connect(this._left, 0, 1),
						this.mid.connect(this._right, 0, 0),
						this.side.connect(this._right, 0, 1),
						this._left.connect(this._timesTwoLeft),
						this._right.connect(this._timesTwoRight),
						this._timesTwoLeft.connect(this._merge, 0, 0),
						this._timesTwoRight.connect(this._merge, 0, 1)
					},
					t.extend(t.MidSideMerge, t.AudioNode),
					t.MidSideMerge.prototype.dispose = function() {
						return t.AudioNode.prototype.dispose.call(this),
						this.mid.dispose(),
						this.mid = null,
						this.side.dispose(),
						this.side = null,
						this._left.dispose(),
						this._left = null,
						this._timesTwoLeft.dispose(),
						this._timesTwoLeft = null,
						this._right.dispose(),
						this._right = null,
						this._timesTwoRight.dispose(),
						this._timesTwoRight = null,
						this._merge.dispose(),
						this._merge = null,
						this
					},
					t.MidSideMerge
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(29), i(13), i(1), i(19), i(2)],
				void 0 === (o = function(t) {
					"use strict";
					return t.MidSideSplit = function() {
						t.AudioNode.call(this),
						this.createInsOuts(0, 2),
						this._split = this.input = new t.Split,
						this._midAdd = new t.Add,
						this.mid = this.output[0] = new t.Multiply(Math.SQRT1_2),
						this._sideSubtract = new t.Subtract,
						this.side = this.output[1] = new t.Multiply(Math.SQRT1_2),
						this._split.connect(this._midAdd, 0, 0),
						this._split.connect(this._midAdd, 1, 1),
						this._split.connect(this._sideSubtract, 0, 0),
						this._split.connect(this._sideSubtract, 1, 1),
						this._midAdd.connect(this.mid),
						this._sideSubtract.connect(this.side)
					},
					t.extend(t.MidSideSplit, t.AudioNode),
					t.MidSideSplit.prototype.dispose = function() {
						return t.AudioNode.prototype.dispose.call(this),
						this.mid.dispose(),
						this.mid = null,
						this.side.dispose(),
						this.side = null,
						this._midAdd.dispose(),
						this._midAdd = null,
						this._sideSubtract.dispose(),
						this._sideSubtract = null,
						this._split.dispose(),
						this._split = null,
						this
					},
					t.MidSideSplit
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(1), i(9), i(2), i(58)],
				void 0 === (o = function(t) {
					"use strict";
					return t.LowpassCombFilter = function() {
						var e = t.defaults(arguments, ["delayTime", "resonance", "dampening"], t.LowpassCombFilter);
						t.AudioNode.call(this),
						this._combFilter = this.output = new t.FeedbackCombFilter(e.delayTime, e.resonance),
						this.delayTime = this._combFilter.delayTime,
						this._lowpass = this.input = new t.Filter({
							frequency: e.dampening,
							type: "lowpass",
							Q: 0,
							rolloff: -12
						}),
						this.dampening = this._lowpass.frequency,
						this.resonance = this._combFilter.resonance,
						this._lowpass.connect(this._combFilter),
						this._readOnly(["dampening", "resonance", "delayTime"])
					},
					t.extend(t.LowpassCombFilter, t.AudioNode),
					t.LowpassCombFilter.defaults = {
						delayTime: .1,
						resonance: .5,
						dampening: 3e3
					},
					t.LowpassCombFilter.prototype.dispose = function() {
						return t.AudioNode.prototype.dispose.call(this),
						this._writable(["dampening", "resonance", "delayTime"]),
						this._combFilter.dispose(),
						this._combFilter = null,
						this.resonance = null,
						this.delayTime = null,
						this._lowpass.dispose(),
						this._lowpass = null,
						this.dampening = null,
						this
					},
					t.LowpassCombFilter
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(45)],
				void 0 === (o = function(t) {
					return t.Ticks = function(e, i) {
						if (! (this instanceof t.Ticks)) return new t.Ticks(e, i);
						t.TransportTime.call(this, e, i)
					},
					t.extend(t.Ticks, t.TransportTime),
					t.Ticks.prototype._defaultUnits = "i",
					t.Ticks.prototype._now = function() {
						return t.Transport.ticks
					},
					t.Ticks.prototype._beatsToUnits = function(t) {
						return this._getPPQ() * t
					},
					t.Ticks.prototype._secondsToUnits = function(t) {
						return Math.floor(t / (60 / this._getBpm()) * this._getPPQ())
					},
					t.Ticks.prototype._ticksToUnits = function(t) {
						return t
					},
					t.Ticks.prototype.toTicks = function() {
						return this.valueOf()
					},
					t.Ticks.prototype.toSeconds = function() {
						return this.valueOf() / this._getPPQ() * (60 / this._getBpm())
					},
					t.Ticks
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(54)],
				void 0 === (o = function(t) {
					return t.TransportEvent = function(e, i) {
						i = t.defaultArg(i, t.TransportEvent.defaults),
						t.call(this),
						this.Transport = e,
						this.id = t.TransportEvent._eventId++,
						this.time = t.Ticks(i.time),
						this.callback = i.callback,
						this._once = i.once
					},
					t.extend(t.TransportEvent),
					t.TransportEvent.defaults = {
						once: !1,
						callback: t.noOp
					},
					t.TransportEvent._eventId = 0,
					t.TransportEvent.prototype.invoke = function(t) {
						this.callback && (this.callback(t), this._once && this.Transport && this.Transport.clear(this.id))
					},
					t.TransportEvent.prototype.dispose = function() {
						return t.prototype.dispose.call(this),
						this.Transport = null,
						this.callback = null,
						this.time = null,
						this
					},
					t.TransportEvent
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(85), i(33), i(24), i(14)],
				void 0 === (o = function(t) {
					"use strict";
					return t.TickSource = function() {
						var e = t.defaults(arguments, ["frequency"], t.TickSource);
						this.frequency = new t.TickSignal(e.frequency),
						this._readOnly("frequency"),
						this._state = new t.TimelineState(t.State.Stopped),
						this._state.setStateAtTime(t.State.Stopped, 0),
						this._tickOffset = new t.Timeline,
						this.setTicksAtTime(0, 0)
					},
					t.extend(t.TickSource),
					t.TickSource.defaults = {
						frequency: 1
					},
					Object.defineProperty(t.TickSource.prototype, "state", {
						get: function() {
							return this._state.getValueAtTime(this.now())
						}
					}),
					t.TickSource.prototype.start = function(e, i) {
						return e = this.toSeconds(e),
						this._state.getValueAtTime(e) !== t.State.Started && (this._state.setStateAtTime(t.State.Started, e), t.isDefined(i) && this.setTicksAtTime(i, e)),
						this
					},
					t.TickSource.prototype.stop = function(e) {
						if (e = this.toSeconds(e), this._state.getValueAtTime(e) === t.State.Stopped) {
							var i = this._state.get(e);
							i.time > 0 && (this._tickOffset.cancel(i.time), this._state.cancel(i.time))
						}
						return this._state.cancel(e),
						this._state.setStateAtTime(t.State.Stopped, e),
						this.setTicksAtTime(0, e),
						this
					},
					t.TickSource.prototype.pause = function(e) {
						return e = this.toSeconds(e),
						this._state.getValueAtTime(e) === t.State.Started && this._state.setStateAtTime(t.State.Paused, e),
						this
					},
					t.TickSource.prototype.cancel = function(t) {
						return t = this.toSeconds(t),
						this._state.cancel(t),
						this._tickOffset.cancel(t),
						this
					},
					t.TickSource.prototype.getTicksAtTime = function(e) {
						e = this.toSeconds(e);
						var i = this._state.getLastState(t.State.Stopped, e),
						n = {
							state: t.State.Paused,
							time: e
						};
						this._state.add(n);
						var o = i,
						s = 0;
						return this._state.forEachBetween(i.time, e + this.sampleTime,
						function(e) {
							var i = o.time,
							n = this._tickOffset.get(e.time);
							n.time >= o.time && (s = n.ticks, i = n.time),
							o.state === t.State.Started && e.state !== t.State.Started && (s += this.frequency.getTicksAtTime(e.time) - this.frequency.getTicksAtTime(i)),
							o = e
						}.bind(this)),
						this._state.remove(n),
						s
					},
					Object.defineProperty(t.TickSource.prototype, "ticks", {
						get: function() {
							return this.getTicksAtTime(this.now())
						},
						set: function(t) {
							this.setTicksAtTime(t, this.now())
						}
					}),
					Object.defineProperty(t.TickSource.prototype, "seconds", {
						get: function() {
							return this.getSecondsAtTime(this.now())
						},
						set: function(t) {
							var e = this.now(),
							i = this.frequency.timeToTicks(t, e);
							this.setTicksAtTime(i, e)
						}
					}),
					t.TickSource.prototype.getSecondsAtTime = function(e) {
						e = this.toSeconds(e);
						var i = this._state.getLastState(t.State.Stopped, e),
						n = {
							state: t.State.Paused,
							time: e
						};
						this._state.add(n);
						var o = i,
						s = 0;
						return this._state.forEachBetween(i.time, e + this.sampleTime,
						function(e) {
							var i = o.time,
							n = this._tickOffset.get(e.time);
							n.time >= o.time && (s = n.seconds, i = n.time),
							o.state === t.State.Started && e.state !== t.State.Started && (s += e.time - i),
							o = e
						}.bind(this)),
						this._state.remove(n),
						s
					},
					t.TickSource.prototype.setTicksAtTime = function(t, e) {
						return e = this.toSeconds(e),
						this._tickOffset.cancel(e),
						this._tickOffset.add({
							time: e,
							ticks: t,
							seconds: this.frequency.getDurationOfTicks(t, e)
						}),
						this
					},
					t.TickSource.prototype.getStateAtTime = function(t) {
						return t = this.toSeconds(t),
						this._state.getValueAtTime(t)
					},
					t.TickSource.prototype.getTimeOfTick = function(e, i) {
						i = t.defaultArg(i, this.now());
						var n = this._tickOffset.get(i),
						o = this._state.get(i),
						s = Math.max(n.time, o.time),
						r = this.frequency.getTicksAtTime(s) + e - n.ticks;
						return this.frequency.getTimeOfTick(r)
					},
					t.TickSource.prototype.forEachTickBetween = function(e, i, n) {
						var o = this._state.get(e);
						if (this._state.forEachBetween(e, i,
						function(i) {
							o.state === t.State.Started && i.state !== t.State.Started && this.forEachTickBetween(Math.max(o.time, e), i.time - this.sampleTime, n),
							o = i
						}.bind(this)), e = Math.max(o.time, e), o.state === t.State.Started && this._state) {
							var s = this.frequency.getTicksAtTime(e),
							r = (s - this.frequency.getTicksAtTime(o.time)) % 1;
							0 !== r && (r = 1 - r);
							for (var a = this.frequency.getTimeOfTick(s + r), l = null; a < i && this._state;) {
								try {
									n(a, Math.round(this.getTicksAtTime(a)))
								} catch(t) {
									l = t;
									break
								}
								this._state && (a += this.frequency.getDurationOfTicks(1, a))
							}
						}
						if (l) throw l;
						return this
					},
					t.TickSource.prototype.dispose = function() {
						return t.Param.prototype.dispose.call(this),
						this._state.dispose(),
						this._state = null,
						this._tickOffset.dispose(),
						this._tickOffset = null,
						this._writable("frequency"),
						this.frequency.dispose(),
						this.frequency = null,
						this
					},
					t.TickSource
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(90), i(13), i(1), i(4), i(18), i(2)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Follower = function() {
						var e = t.defaults(arguments, ["smoothing"], t.Follower);
						t.AudioNode.call(this),
						this.createInsOuts(1, 1),
						this._abs = new t.Abs,
						this._filter = this.context.createBiquadFilter(),
						this._filter.type = "lowpass",
						this._filter.frequency.value = 0,
						this._filter.Q.value = 0,
						this._sub = new t.Subtract,
						this._delay = new t.Delay(this.blockTime),
						this._smoothing = e.smoothing,
						this.input.connect(this._delay, this._sub),
						this.input.connect(this._sub, 0, 1),
						this._sub.chain(this._abs, this._filter, this.output),
						this.smoothing = e.smoothing
					},
					t.extend(t.Follower, t.AudioNode),
					t.Follower.defaults = {
						smoothing: .05
					},
					Object.defineProperty(t.Follower.prototype, "smoothing", {
						get: function() {
							return this._smoothing
						},
						set: function(e) {
							this._smoothing = e,
							this._filter.frequency.value = .5 * t.Time(e).toFrequency()
						}
					}),
					t.Follower.prototype.connect = t.SignalBase.prototype.connect,
					t.Follower.prototype.dispose = function() {
						return t.AudioNode.prototype.dispose.call(this),
						this._filter.disconnect(),
						this._filter = null,
						this._delay.dispose(),
						this._delay = null,
						this._sub.disconnect(),
						this._sub = null,
						this._abs.dispose(),
						this._abs = null,
						this
					},
					t.Follower
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(42), i(1), i(14), i(18), i(3), i(2)],
				void 0 === (o = function(t) {
					"use strict";
					return t.FeedbackCombFilter = function() {
						var e = t.defaults(arguments, ["delayTime", "resonance"], t.FeedbackCombFilter);
						t.AudioNode.call(this),
						this._delay = this.input = this.output = new t.Delay(e.delayTime),
						this.delayTime = this._delay.delayTime,
						this._feedback = new t.Gain(e.resonance, t.Type.NormalRange),
						this.resonance = this._feedback.gain,
						this._delay.chain(this._feedback, this._delay),
						this._readOnly(["resonance", "delayTime"])
					},
					t.extend(t.FeedbackCombFilter, t.AudioNode),
					t.FeedbackCombFilter.defaults = {
						delayTime: .1,
						resonance: .5
					},
					t.FeedbackCombFilter.prototype.dispose = function() {
						return t.AudioNode.prototype.dispose.call(this),
						this._writable(["resonance", "delayTime"]),
						this._delay.dispose(),
						this._delay = null,
						this.delayTime = null,
						this._feedback.dispose(),
						this._feedback = null,
						this.resonance = null,
						this
					},
					t.FeedbackCombFilter
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(9), i(1), i(3), i(2)],
				void 0 === (o = function(t) {
					"use strict";
					return t.MultibandSplit = function() {
						var e = t.defaults(arguments, ["lowFrequency", "highFrequency"], t.MultibandSplit);
						t.AudioNode.call(this),
						this.input = new t.Gain,
						this.output = new Array(3),
						this.low = this.output[0] = new t.Filter(0, "lowpass"),
						this._lowMidFilter = new t.Filter(0, "highpass"),
						this.mid = this.output[1] = new t.Filter(0, "lowpass"),
						this.high = this.output[2] = new t.Filter(0, "highpass"),
						this.lowFrequency = new t.Signal(e.lowFrequency, t.Type.Frequency),
						this.highFrequency = new t.Signal(e.highFrequency, t.Type.Frequency),
						this.Q = new t.Signal(e.Q),
						this.input.fan(this.low, this.high),
						this.input.chain(this._lowMidFilter, this.mid),
						this.lowFrequency.connect(this.low.frequency),
						this.lowFrequency.connect(this._lowMidFilter.frequency),
						this.highFrequency.connect(this.mid.frequency),
						this.highFrequency.connect(this.high.frequency),
						this.Q.connect(this.low.Q),
						this.Q.connect(this._lowMidFilter.Q),
						this.Q.connect(this.mid.Q),
						this.Q.connect(this.high.Q),
						this._readOnly(["high", "mid", "low", "highFrequency", "lowFrequency"])
					},
					t.extend(t.MultibandSplit, t.AudioNode),
					t.MultibandSplit.defaults = {
						lowFrequency: 400,
						highFrequency: 2500,
						Q: 1
					},
					t.MultibandSplit.prototype.dispose = function() {
						return t.AudioNode.prototype.dispose.call(this),
						this._writable(["high", "mid", "low", "highFrequency", "lowFrequency"]),
						this.low.dispose(),
						this.low = null,
						this._lowMidFilter.dispose(),
						this._lowMidFilter = null,
						this.mid.dispose(),
						this.mid = null,
						this.high.dispose(),
						this.high = null,
						this.lowFrequency.dispose(),
						this.lowFrequency = null,
						this.highFrequency.dispose(),
						this.highFrequency = null,
						this.Q.dispose(),
						this.Q = null,
						this
					},
					t.MultibandSplit
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(23), i(10), i(19), i(92), i(1), i(22), i(28), i(2)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Panner = function(e) {
						t.AudioNode.call(this),
						this._panner = this.input = this.output = this.context.createStereoPanner(),
						this.pan = this._panner.pan,
						this.pan.value = t.defaultArg(e, 0),
						this._readOnly("pan")
					},
					t.extend(t.Panner, t.AudioNode),
					t.Panner.prototype.dispose = function() {
						return t.AudioNode.prototype.dispose.call(this),
						this._writable("pan"),
						this._panner.disconnect(),
						this._panner = null,
						this.pan = null,
						this
					},
					t.Panner
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(7)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Pow = function(e) {
						t.SignalBase.call(this),
						this._exp = t.defaultArg(e, 1),
						this._expScaler = this.input = this.output = new t.WaveShaper(this._expFunc(this._exp), 8192)
					},
					t.extend(t.Pow, t.SignalBase),
					Object.defineProperty(t.Pow.prototype, "value", {
						get: function() {
							return this._exp
						},
						set: function(t) {
							this._exp = t,
							this._expScaler.setMap(this._expFunc(this._exp))
						}
					}),
					t.Pow.prototype._expFunc = function(t) {
						return function(e) {
							return Math.pow(Math.abs(e), t)
						}
					},
					t.Pow.prototype.dispose = function() {
						return t.SignalBase.prototype.dispose.call(this),
						this._expScaler.dispose(),
						this._expScaler = null,
						this
					},
					t.Pow
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(20), i(66)],
				void 0 === (o = function(t) {
					return t.OfflineContext = function(e, i, n) {
						var o = new OfflineAudioContext(e, i * n, n);
						t.Context.call(this, {
							context: o,
							clockSource: "offline",
							lookAhead: 0,
							updateInterval: 128 / n
						}),
						this._duration = i,
						this._currentTime = 0
					},
					t.extend(t.OfflineContext, t.Context),
					t.OfflineContext.prototype.now = function() {
						return this._currentTime
					},
					t.OfflineContext.prototype.resume = function() {
						return Promise.resolve()
					},
					t.OfflineContext.prototype.render = function() {
						for (; this._duration - this._currentTime >= 0;) this.emit("tick"),
						this._currentTime += this.blockTime;
						return this._context.startRendering()
					},
					t.OfflineContext.prototype.close = function() {
						return this._context = null,
						Promise.resolve()
					},
					t.OfflineContext
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(62)],
				void 0 === (o = function(t) {
					if (t.supported) {
						var e = navigator.userAgent.toLowerCase();
						e.includes("safari") && !e.includes("chrome") && e.includes("mobile") && (t.OfflineContext.prototype.createBufferSource = function() {
							var t = this._context.createBufferSource(),
							e = t.start;
							return t.start = function(i) {
								this.setTimeout(function() {
									e.call(t, i)
								}.bind(this), 0)
							}.bind(this),
							t
						})
					}
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0)],
				void 0 === (o = function(t) {
					return t.TimeBase = function(e, i) {
						if (! (this instanceof t.TimeBase)) return new t.TimeBase(e, i);
						if (this._val = e, this._units = i, t.isUndef(this._units) && t.isString(this._val) && parseFloat(this._val) == this._val && "+" !== this._val.charAt(0)) this._val = parseFloat(this._val),
						this._units = this._defaultUnits;
						else if (e && e.constructor === this.constructor) this._val = e._val,
						this._units = e._units;
						else if (e instanceof t.TimeBase) switch (this._defaultUnits) {
						case "s":
							this._val = e.toSeconds();
							break;
						case "i":
							this._val = e.toTicks();
							break;
						case "hz":
							this._val = e.toFrequency();
							break;
						case "midi":
							this._val = e.toMidi();
							break;
						default:
							throw new Error("Unrecognized default units " + this._defaultUnits)
						}
					},
					t.extend(t.TimeBase),
					t.TimeBase.prototype._expressions = {
						n: {
							regexp: /^(\d+)n(\.?)$/i,
							method: function(t, e) {
								t = parseInt(t);
								var i = "." === e ? 1.5 : 1;
								return 1 === t ? this._beatsToUnits(this._getTimeSignature()) * i: this._beatsToUnits(4 / t) * i
							}
						},
						t: {
							regexp: /^(\d+)t$/i,
							method: function(t) {
								return t = parseInt(t),
								this._beatsToUnits(8 / (3 * parseInt(t)))
							}
						},
						m: {
							regexp: /^(\d+)m$/i,
							method: function(t) {
								return this._beatsToUnits(parseInt(t) * this._getTimeSignature())
							}
						},
						i: {
							regexp: /^(\d+)i$/i,
							method: function(t) {
								return this._ticksToUnits(parseInt(t))
							}
						},
						hz: {
							regexp: /^(\d+(?:\.\d+)?)hz$/i,
							method: function(t) {
								return this._frequencyToUnits(parseFloat(t))
							}
						},
						tr: {
							regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/,
							method: function(t, e, i) {
								var n = 0;
								return t && "0" !== t && (n += this._beatsToUnits(this._getTimeSignature() * parseFloat(t))),
								e && "0" !== e && (n += this._beatsToUnits(parseFloat(e))),
								i && "0" !== i && (n += this._beatsToUnits(parseFloat(i) / 4)),
								n
							}
						},
						s: {
							regexp: /^(\d+(?:\.\d+)?)s$/,
							method: function(t) {
								return this._secondsToUnits(parseFloat(t))
							}
						},
						samples: {
							regexp: /^(\d+)samples$/,
							method: function(t) {
								return parseInt(t) / this.context.sampleRate
							}
						},
					default:
						{
							regexp:
							/^(\d+(?:\.\d+)?)$/,
							method: function(t) {
								return this._expressions[this._defaultUnits].method.call(this, t)
							}
						}
					},
					t.TimeBase.prototype._defaultUnits = "s",
					t.TimeBase.prototype._getBpm = function() {
						return t.Transport ? t.Transport.bpm.value: 120
					},
					t.TimeBase.prototype._getTimeSignature = function() {
						return t.Transport ? t.Transport.timeSignature: 4
					},
					t.TimeBase.prototype._getPPQ = function() {
						return t.Transport ? t.Transport.PPQ: 192
					},
					t.TimeBase.prototype._now = function() {
						return this.now()
					},
					t.TimeBase.prototype._frequencyToUnits = function(t) {
						return 1 / t
					},
					t.TimeBase.prototype._beatsToUnits = function(t) {
						return 60 / this._getBpm() * t
					},
					t.TimeBase.prototype._secondsToUnits = function(t) {
						return t
					},
					t.TimeBase.prototype._ticksToUnits = function(t) {
						return t * (this._beatsToUnits(1) / this._getPPQ())
					},
					t.TimeBase.prototype._noArg = function() {
						return this._now()
					},
					t.TimeBase.prototype.valueOf = function() {
						if (t.isUndef(this._val)) return this._noArg();
						if (t.isString(this._val) && t.isUndef(this._units)) {
							for (var e in this._expressions) if (this._expressions[e].regexp.test(this._val.trim())) {
								this._units = e;
								break
							}
						} else if (t.isObject(this._val)) {
							var i = 0;
							for (var n in this._val) {
								var o = this._val[n];
								i += new this.constructor(n).valueOf() * o
							}
							return i
						}
						if (t.isDefined(this._units)) {
							var s = this._expressions[this._units],
							r = this._val.toString().trim().match(s.regexp);
							return r ? s.method.apply(this, r.slice(1)) : s.method.call(this, parseFloat(this._val))
						}
						return this._val
					},
					t.TimeBase.prototype.toSeconds = function() {
						return this.valueOf()
					},
					t.TimeBase.prototype.toFrequency = function() {
						return 1 / this.toSeconds()
					},
					t.TimeBase.prototype.toSamples = function() {
						return this.toSeconds() * this.context.sampleRate
					},
					t.TimeBase.prototype.toMilliseconds = function() {
						return 1e3 * this.toSeconds()
					},
					t.TimeBase.prototype.dispose = function() {
						this._val = null,
						this._units = null
					},
					t.TimeBase
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(64), i(46)],
				void 0 === (o = function(t) {
					return t.Time = function(e, i) {
						if (! (this instanceof t.Time)) return new t.Time(e, i);
						t.TimeBase.call(this, e, i)
					},
					t.extend(t.Time, t.TimeBase),
					t.Time.prototype._expressions = Object.assign({},
					t.TimeBase.prototype._expressions, {
						quantize: {
							regexp: /^@(.+)/,
							method: function(e) {
								if (t.Transport) {
									var i = new this.constructor(e);
									return this._secondsToUnits(t.Transport.nextSubdivision(i))
								}
								return 0
							}
						},
						now: {
							regexp: /^\+(.+)/,
							method: function(t) {
								return this._now() + new this.constructor(t)
							}
						}
					}),
					t.Time.prototype.quantize = function(e, i) {
						i = t.defaultArg(i, 1);
						var n = new this.constructor(e),
						o = this.valueOf();
						return o + (Math.round(o / n) * n - o) * i
					},
					t.Time.prototype.toNotation = function() {
						for (var e = this.toSeconds(), i = ["1m"], n = 1; n < 8; n++) {
							var o = Math.pow(2, n);
							i.push(o + "n."),
							i.push(o + "n"),
							i.push(o + "t")
						}
						i.push("0");
						var s = i[0],
						r = t.Time(i[0]).toSeconds();
						return i.forEach(function(i) {
							var n = t.Time(i).toSeconds();
							Math.abs(n - e) < Math.abs(r - e) && (s = i, r = n)
						}),
						s
					},
					t.Time.prototype.toBarsBeatsSixteenths = function() {
						var t = this._beatsToUnits(1),
						e = this.valueOf() / t;
						e = parseFloat(e.toFixed(4));
						var i = Math.floor(e / this._getTimeSignature()),
						n = e % 1 * 4;
						return e = Math.floor(e) % this._getTimeSignature(),
						(n = n.toString()).length > 3 && (n = parseFloat(parseFloat(n).toFixed(3))),
						[i, e, n].join(":")
					},
					t.Time.prototype.toTicks = function() {
						var t = this._beatsToUnits(1),
						e = this.valueOf() / t;
						return Math.round(e * this._getPPQ())
					},
					t.Time.prototype.toSeconds = function() {
						return this.valueOf()
					},
					t.Time.prototype.toMidi = function() {
						return t.Frequency.ftom(this.toFrequency())
					},
					t.Time
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0)],
				void 0 === (o = function(t) {
					if (t.supported) { ! t.global.hasOwnProperty("OfflineAudioContext") && t.global.hasOwnProperty("webkitOfflineAudioContext") && (t.global.OfflineAudioContext = t.global.webkitOfflineAudioContext);
						var e = new OfflineAudioContext(1, 1, 44100).startRendering();
						e && t.isFunction(e.then) || (OfflineAudioContext.prototype._native_startRendering = OfflineAudioContext.prototype.startRendering, OfflineAudioContext.prototype.startRendering = function() {
							return new Promise(function(t) {
								this.oncomplete = function(e) {
									t(e.renderedBuffer)
								},
								this._native_startRendering()
							}.bind(this))
						})
					}
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(11), i(6), i(56), i(31)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Player = function(e) {
						var i;
						e instanceof t.Buffer && e.loaded ? (e = e.get(), i = t.Player.defaults) : i = t.defaults(arguments, ["url", "onload"], t.Player),
						t.Source.call(this, i),
						this.autostart = i.autostart,
						this._buffer = new t.Buffer({
							url: i.url,
							onload: this._onload.bind(this, i.onload),
							reverse: i.reverse
						}),
						e instanceof AudioBuffer && this._buffer.set(e),
						this._loop = i.loop,
						this._loopStart = i.loopStart,
						this._loopEnd = i.loopEnd,
						this._playbackRate = i.playbackRate,
						this._activeSources = [],
						this.fadeIn = i.fadeIn,
						this.fadeOut = i.fadeOut
					},
					t.extend(t.Player, t.Source),
					t.Player.defaults = {
						onload: t.noOp,
						playbackRate: 1,
						loop: !1,
						autostart: !1,
						loopStart: 0,
						loopEnd: 0,
						reverse: !1,
						fadeIn: 0,
						fadeOut: 0
					},
					t.Player.prototype.load = function(t, e) {
						return this._buffer.load(t, this._onload.bind(this, e))
					},
					t.Player.prototype._onload = function(e) { (e = t.defaultArg(e, t.noOp))(this),
						this.autostart && this.start()
					},
					t.Player.prototype._onSourceEnd = function(e) {
						var i = this._activeSources.indexOf(e);
						this._activeSources.splice(i, 1),
						0 !== this._activeSources.length || this._synced || this._state.setStateAtTime(t.State.Stopped, t.now())
					},
					t.Player.prototype._start = function(e, i, n) {
						i = this._loop ? t.defaultArg(i, this._loopStart) : t.defaultArg(i, 0),
						i = this.toSeconds(i);
						var o = t.defaultArg(n, Math.max(this._buffer.duration - i, 0));
						o = this.toSeconds(o),
						o /= this._playbackRate,
						e = this.toSeconds(e);
						var s = new t.BufferSource({
							buffer: this._buffer,
							loop: this._loop,
							loopStart: this._loopStart,
							loopEnd: this._loopEnd,
							onended: this._onSourceEnd.bind(this),
							playbackRate: this._playbackRate,
							fadeIn: this.fadeIn,
							fadeOut: this.fadeOut
						}).connect(this.output);
						return this._loop || this._synced || this._state.setStateAtTime(t.State.Stopped, e + o),
						this._activeSources.push(s),
						this._loop && t.isUndef(n) ? s.start(e, i) : s.start(e, i, o - this.toSeconds(this.fadeOut)),
						this
					},
					t.Player.prototype._stop = function(t) {
						return t = this.toSeconds(t),
						this._activeSources.forEach(function(e) {
							e.stop(t)
						}),
						this
					},
					t.Player.prototype.restart = function(t, e, i) {
						return this._stop(t),
						this._start(t, e, i),
						this
					},
					t.Player.prototype.seek = function(e, i) {
						return i = this.toSeconds(i),
						this._state.getValueAtTime(i) === t.State.Started && (e = this.toSeconds(e), this._stop(i), this._start(i, e)),
						this
					},
					t.Player.prototype.setLoopPoints = function(t, e) {
						return this.loopStart = t,
						this.loopEnd = e,
						this
					},
					Object.defineProperty(t.Player.prototype, "loopStart", {
						get: function() {
							return this._loopStart
						},
						set: function(t) {
							this._loopStart = t,
							this._activeSources.forEach(function(e) {
								e.loopStart = t
							})
						}
					}),
					Object.defineProperty(t.Player.prototype, "loopEnd", {
						get: function() {
							return this._loopEnd
						},
						set: function(t) {
							this._loopEnd = t,
							this._activeSources.forEach(function(e) {
								e.loopEnd = t
							})
						}
					}),
					Object.defineProperty(t.Player.prototype, "buffer", {
						get: function() {
							return this._buffer
						},
						set: function(t) {
							this._buffer.set(t)
						}
					}),
					Object.defineProperty(t.Player.prototype, "loop", {
						get: function() {
							return this._loop
						},
						set: function(e) {
							if (this._loop !== e && (this._loop = e, this._activeSources.forEach(function(t) {
								t.loop = e
							}), e)) {
								var i = this._state.getNextState(t.State.Stopped, this.now());
								i && this._state.cancel(i.time)
							}
						}
					}),
					Object.defineProperty(t.Player.prototype, "playbackRate", {
						get: function() {
							return this._playbackRate
						},
						set: function(e) {
							this._playbackRate = e;
							var i = this.now(),
							n = this._state.getNextState(t.State.Stopped, i);
							n && this._state.cancel(n.time),
							this._activeSources.forEach(function(t) {
								t.cancelStop(),
								t.playbackRate.setValueAtTime(e, i)
							})
						}
					}),
					Object.defineProperty(t.Player.prototype, "reverse", {
						get: function() {
							return this._buffer.reverse
						},
						set: function(t) {
							this._buffer.reverse = t
						}
					}),
					Object.defineProperty(t.Player.prototype, "loaded", {
						get: function() {
							return this._buffer.loaded
						}
					}),
					t.Player.prototype.dispose = function() {
						return this._activeSources.forEach(function(t) {
							t.dispose()
						}),
						this._activeSources = null,
						t.Source.prototype.dispose.call(this),
						this._buffer.dispose(),
						this._buffer = null,
						this
					},
					t.Player
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(30), i(41), i(37), i(1), i(9), i(25)],
				void 0 === (o = function(t) {
					"use strict";
					return t.MonoSynth = function(e) {
						e = t.defaultArg(e, t.MonoSynth.defaults),
						t.Monophonic.call(this, e),
						this.oscillator = new t.OmniOscillator(e.oscillator),
						this.frequency = this.oscillator.frequency,
						this.detune = this.oscillator.detune,
						this.filter = new t.Filter(e.filter),
						this.filter.frequency.value = 5e3,
						this.filterEnvelope = new t.FrequencyEnvelope(e.filterEnvelope),
						this.envelope = new t.AmplitudeEnvelope(e.envelope),
						this.oscillator.chain(this.filter, this.envelope, this.output),
						this.filterEnvelope.connect(this.filter.frequency),
						this._readOnly(["oscillator", "frequency", "detune", "filter", "filterEnvelope", "envelope"])
					},
					t.extend(t.MonoSynth, t.Monophonic),
					t.MonoSynth.defaults = {
						frequency: "C4",
						detune: 0,
						oscillator: {
							type: "square"
						},
						filter: {
							Q: 6,
							type: "lowpass",
							rolloff: -24
						},
						envelope: {
							attack: .005,
							decay: .1,
							sustain: .9,
							release: 1
						},
						filterEnvelope: {
							attack: .06,
							decay: .2,
							sustain: .5,
							release: 2,
							baseFrequency: 200,
							octaves: 7,
							exponent: 2
						}
					},
					t.MonoSynth.prototype._triggerEnvelopeAttack = function(t, e) {
						return t = this.toSeconds(t),
						this.envelope.triggerAttack(t, e),
						this.filterEnvelope.triggerAttack(t),
						this.oscillator.start(t),
						0 === this.envelope.sustain && this.oscillator.stop(t + this.envelope.attack + this.envelope.decay),
						this
					},
					t.MonoSynth.prototype._triggerEnvelopeRelease = function(t) {
						return this.envelope.triggerRelease(t),
						this.filterEnvelope.triggerRelease(t),
						this.oscillator.stop(t + this.envelope.release),
						this
					},
					t.MonoSynth.prototype.dispose = function() {
						return t.Monophonic.prototype.dispose.call(this),
						this._writable(["oscillator", "frequency", "detune", "filter", "filterEnvelope", "envelope"]),
						this.oscillator.dispose(),
						this.oscillator = null,
						this.envelope.dispose(),
						this.envelope = null,
						this.filterEnvelope.dispose(),
						this.filterEnvelope = null,
						this.filter.dispose(),
						this.filter = null,
						this.frequency = null,
						this.detune = null,
						this
					},
					t.MonoSynth
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(6), i(17), i(5), i(3)],
				void 0 === (o = function(t) {
					"use strict";
					return t.FatOscillator = function() {
						var e = t.defaults(arguments, ["frequency", "type", "spread"], t.FatOscillator);
						t.Source.call(this, e),
						this.frequency = new t.Signal(e.frequency, t.Type.Frequency),
						this.detune = new t.Signal(e.detune, t.Type.Cents),
						this._oscillators = [],
						this._spread = e.spread,
						this._type = e.type,
						this._phase = e.phase,
						this._partials = e.partials,
						this._partialCount = e.partialCount,
						this.count = e.count,
						this._readOnly(["frequency", "detune"])
					},
					t.extend(t.FatOscillator, t.Source),
					t.FatOscillator.defaults = {
						frequency: 440,
						detune: 0,
						phase: 0,
						spread: 20,
						count: 3,
						type: "sawtooth",
						partials: [],
						partialCount: 0
					},
					t.FatOscillator.prototype._start = function(t) {
						t = this.toSeconds(t),
						this._forEach(function(e) {
							e.start(t)
						})
					},
					t.FatOscillator.prototype._stop = function(t) {
						t = this.toSeconds(t),
						this._forEach(function(e) {
							e.stop(t)
						})
					},
					t.FatOscillator.prototype.restart = function(t) {
						t = this.toSeconds(t),
						this._forEach(function(e) {
							e.restart(t)
						})
					},
					t.FatOscillator.prototype._forEach = function(t) {
						for (var e = 0; e < this._oscillators.length; e++) t.call(this, this._oscillators[e], e)
					},
					Object.defineProperty(t.FatOscillator.prototype, "type", {
						get: function() {
							return this._type
						},
						set: function(t) {
							this._type = t,
							this._forEach(function(e) {
								e.type = t
							})
						}
					}),
					Object.defineProperty(t.FatOscillator.prototype, "spread", {
						get: function() {
							return this._spread
						},
						set: function(t) {
							if (this._spread = t, this._oscillators.length > 1) {
								var e = -t / 2,
								i = t / (this._oscillators.length - 1);
								this._forEach(function(t, n) {
									t.detune.value = e + i * n
								})
							}
						}
					}),
					Object.defineProperty(t.FatOscillator.prototype, "count", {
						get: function() {
							return this._oscillators.length
						},
						set: function(e) {
							if (e = Math.max(e, 1), this._oscillators.length !== e) {
								this._forEach(function(t) {
									t.dispose()
								}),
								this._oscillators = [];
								for (var i = 0; i < e; i++) {
									var n = new t.Oscillator;
									this.type === t.Oscillator.Type.Custom ? n.partials = this._partials: n.type = this._type,
									n.partialCount = this._partialCount,
									n.phase = this._phase + i / e * 360,
									n.volume.value = -6 - 1.1 * e,
									this.frequency.connect(n.frequency),
									this.detune.connect(n.detune),
									n.connect(this.output),
									this._oscillators[i] = n
								}
								this.spread = this._spread,
								this.state === t.State.Started && this._forEach(function(t) {
									t.start()
								})
							}
						}
					}),
					Object.defineProperty(t.FatOscillator.prototype, "phase", {
						get: function() {
							return this._phase
						},
						set: function(t) {
							this._phase = t,
							this._forEach(function(e) {
								e.phase = t
							})
						}
					}),
					Object.defineProperty(t.FatOscillator.prototype, "baseType", {
						get: function() {
							return this._oscillators[0].baseType
						},
						set: function(t) {
							this._forEach(function(e) {
								e.baseType = t
							}),
							this._type = this._oscillators[0].type
						}
					}),
					Object.defineProperty(t.FatOscillator.prototype, "partials", {
						get: function() {
							return this._oscillators[0].partials
						},
						set: function(e) {
							this._partials = e,
							this._type = t.Oscillator.Type.Custom,
							this._forEach(function(t) {
								t.partials = e
							})
						}
					}),
					Object.defineProperty(t.FatOscillator.prototype, "partialCount", {
						get: function() {
							return this._oscillators[0].partialCount
						},
						set: function(t) {
							this._partialCount = t,
							this._forEach(function(e) {
								e.partialCount = t
							}),
							this._type = this._oscillators[0].type
						}
					}),
					t.FatOscillator.prototype.dispose = function() {
						return t.Source.prototype.dispose.call(this),
						this._writable(["frequency", "detune"]),
						this.frequency.dispose(),
						this.frequency = null,
						this.detune.dispose(),
						this.detune = null,
						this._forEach(function(t) {
							t.dispose()
						}),
						this._oscillators = null,
						this._partials = null,
						this
					},
					t.FatOscillator
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(6), i(17), i(5), i(3), i(22)],
				void 0 === (o = function(t) {
					"use strict";
					return t.AMOscillator = function() {
						var e = t.defaults(arguments, ["frequency", "type", "modulationType"], t.AMOscillator);
						t.Source.call(this, e),
						this._carrier = new t.Oscillator(e.frequency, e.type),
						this.frequency = this._carrier.frequency,
						this.detune = this._carrier.detune,
						this.detune.value = e.detune,
						this._modulator = new t.Oscillator(e.frequency, e.modulationType),
						this._modulationScale = new t.AudioToGain,
						this.harmonicity = new t.Multiply(e.harmonicity),
						this.harmonicity.units = t.Type.Positive,
						this._modulationNode = new t.Gain(0),
						this.frequency.chain(this.harmonicity, this._modulator.frequency),
						this.detune.connect(this._modulator.detune),
						this._modulator.chain(this._modulationScale, this._modulationNode.gain),
						this._carrier.chain(this._modulationNode, this.output),
						this.phase = e.phase,
						this._readOnly(["frequency", "detune", "harmonicity"])
					},
					t.extend(t.AMOscillator, t.Oscillator),
					t.AMOscillator.defaults = {
						frequency: 440,
						detune: 0,
						phase: 0,
						type: "sine",
						modulationType: "square",
						harmonicity: 1
					},
					t.AMOscillator.prototype._start = function(t) {
						this._modulator.start(t),
						this._carrier.start(t)
					},
					t.AMOscillator.prototype._stop = function(t) {
						this._modulator.stop(t),
						this._carrier.stop(t)
					},
					t.AMOscillator.prototype.restart = function(t) {
						this._modulator.restart(t),
						this._carrier.restart(t)
					},
					Object.defineProperty(t.AMOscillator.prototype, "type", {
						get: function() {
							return this._carrier.type
						},
						set: function(t) {
							this._carrier.type = t
						}
					}),
					Object.defineProperty(t.AMOscillator.prototype, "baseType", {
						get: function() {
							return this._carrier.baseType
						},
						set: function(t) {
							this._carrier.baseType = t
						}
					}),
					Object.defineProperty(t.AMOscillator.prototype, "partialCount", {
						get: function() {
							return this._carrier.partialCount
						},
						set: function(t) {
							this._carrier.partialCount = t
						}
					}),
					Object.defineProperty(t.AMOscillator.prototype, "modulationType", {
						get: function() {
							return this._modulator.type
						},
						set: function(t) {
							this._modulator.type = t
						}
					}),
					Object.defineProperty(t.AMOscillator.prototype, "phase", {
						get: function() {
							return this._carrier.phase
						},
						set: function(t) {
							this._carrier.phase = t,
							this._modulator.phase = t
						}
					}),
					Object.defineProperty(t.AMOscillator.prototype, "partials", {
						get: function() {
							return this._carrier.partials
						},
						set: function(t) {
							this._carrier.partials = t
						}
					}),
					t.AMOscillator.prototype.dispose = function() {
						return t.Source.prototype.dispose.call(this),
						this._writable(["frequency", "detune", "harmonicity"]),
						this.frequency = null,
						this.detune = null,
						this.harmonicity.dispose(),
						this.harmonicity = null,
						this._carrier.dispose(),
						this._carrier = null,
						this._modulator.dispose(),
						this._modulator = null,
						this._modulationNode.dispose(),
						this._modulationNode = null,
						this._modulationScale.dispose(),
						this._modulationScale = null,
						this
					},
					t.AMOscillator
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(6), i(49), i(17), i(5)],
				void 0 === (o = function(t) {
					"use strict";
					return t.PWMOscillator = function() {
						var e = t.defaults(arguments, ["frequency", "modulationFrequency"], t.PWMOscillator);
						t.Source.call(this, e),
						this._pulse = new t.PulseOscillator(e.modulationFrequency),
						this._pulse._sawtooth.type = "sine",
						this._modulator = new t.Oscillator({
							frequency: e.frequency,
							detune: e.detune,
							phase: e.phase
						}),
						this._scale = new t.Multiply(2),
						this.frequency = this._modulator.frequency,
						this.detune = this._modulator.detune,
						this.modulationFrequency = this._pulse.frequency,
						this._modulator.chain(this._scale, this._pulse.width),
						this._pulse.connect(this.output),
						this._readOnly(["modulationFrequency", "frequency", "detune"])
					},
					t.extend(t.PWMOscillator, t.Source),
					t.PWMOscillator.defaults = {
						frequency: 440,
						detune: 0,
						phase: 0,
						modulationFrequency: .4
					},
					t.PWMOscillator.prototype._start = function(t) {
						t = this.toSeconds(t),
						this._modulator.start(t),
						this._pulse.start(t)
					},
					t.PWMOscillator.prototype._stop = function(t) {
						t = this.toSeconds(t),
						this._modulator.stop(t),
						this._pulse.stop(t)
					},
					t.PWMOscillator.prototype.restart = function(t) {
						this._modulator.restart(t),
						this._pulse.restart(t)
					},
					Object.defineProperty(t.PWMOscillator.prototype, "type", {
						get: function() {
							return "pwm"
						}
					}),
					Object.defineProperty(t.PWMOscillator.prototype, "baseType", {
						get: function() {
							return "pwm"
						}
					}),
					Object.defineProperty(t.PWMOscillator.prototype, "partials", {
						get: function() {
							return []
						}
					}),
					Object.defineProperty(t.PWMOscillator.prototype, "phase", {
						get: function() {
							return this._modulator.phase
						},
						set: function(t) {
							this._modulator.phase = t
						}
					}),
					t.PWMOscillator.prototype.dispose = function() {
						return t.Source.prototype.dispose.call(this),
						this._pulse.dispose(),
						this._pulse = null,
						this._scale.dispose(),
						this._scale = null,
						this._modulator.dispose(),
						this._modulator = null,
						this._writable(["modulationFrequency", "frequency", "detune"]),
						this.frequency = null,
						this.detune = null,
						this.modulationFrequency = null,
						this
					},
					t.PWMOscillator
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(50), i(4), i(16)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Part = function() {
						var e = t.defaults(arguments, ["callback", "events"], t.Part);
						t.Event.call(this, e),
						this._events = [];
						for (var i = 0; i < e.events.length; i++) Array.isArray(e.events[i]) ? this.add(e.events[i][0], e.events[i][1]) : this.add(e.events[i])
					},
					t.extend(t.Part, t.Event),
					t.Part.defaults = {
						callback: t.noOp,
						loop: !1,
						loopEnd: "1m",
						loopStart: 0,
						playbackRate: 1,
						probability: 1,
						humanize: !1,
						mute: !1,
						events: []
					},
					t.Part.prototype.start = function(e, i) {
						var n = this.toTicks(e);
						return this._state.getValueAtTime(n) !== t.State.Started && (i = this._loop ? t.defaultArg(i, this._loopStart) : t.defaultArg(i, 0), i = this.toTicks(i), this._state.add({
							state: t.State.Started,
							time: n,
							offset: i
						}), this._forEach(function(t) {
							this._startNote(t, n, i)
						})),
						this
					},
					t.Part.prototype._startNote = function(e, i, n) {
						i -= n,
						this._loop ? e.startOffset >= this._loopStart && e.startOffset < this._loopEnd ? (e.startOffset < n && (i += this._getLoopDuration()), e.start(t.Ticks(i))) : e.startOffset < this._loopStart && e.startOffset >= n && (e.loop = !1, e.start(t.Ticks(i))) : e.startOffset >= n && e.start(t.Ticks(i))
					},
					Object.defineProperty(t.Part.prototype, "startOffset", {
						get: function() {
							return this._startOffset
						},
						set: function(t) {
							this._startOffset = t,
							this._forEach(function(t) {
								t.startOffset += this._startOffset
							})
						}
					}),
					t.Part.prototype.stop = function(e) {
						var i = this.toTicks(e);
						return this._state.cancel(i),
						this._state.setStateAtTime(t.State.Stopped, i),
						this._forEach(function(t) {
							t.stop(e)
						}),
						this
					},
					t.Part.prototype.at = function(e, i) {
						e = t.TransportTime(e);
						for (var n = t.Ticks(1).toSeconds(), o = 0; o < this._events.length; o++) {
							var s = this._events[o];
							if (Math.abs(e.toTicks() - s.startOffset) < n) return t.isDefined(i) && (s.value = i),
							s
						}
						return t.isDefined(i) ? (this.add(e, i), this._events[this._events.length - 1]) : null
					},
					t.Part.prototype.add = function(e, i) {
						var n;
						return e.hasOwnProperty("time") && (e = (i = e).time),
						e = this.toTicks(e),
						i instanceof t.Event ? (n = i).callback = this._tick.bind(this) : n = new t.Event({
							callback: this._tick.bind(this),
							value: i
						}),
						n.startOffset = e,
						n.set({
							loopEnd: this.loopEnd,
							loopStart: this.loopStart,
							loop: this.loop,
							humanize: this.humanize,
							playbackRate: this.playbackRate,
							probability: this.probability
						}),
						this._events.push(n),
						this._restartEvent(n),
						this
					},
					t.Part.prototype._restartEvent = function(e) {
						this._state.forEach(function(i) {
							i.state === t.State.Started ? this._startNote(e, i.time, i.offset) : e.stop(t.Ticks(i.time))
						}.bind(this))
					},
					t.Part.prototype.remove = function(e, i) {
						e.hasOwnProperty("time") && (e = (i = e).time),
						e = this.toTicks(e);
						for (var n = this._events.length - 1; n >= 0; n--) {
							var o = this._events[n];
							o.startOffset === e && (t.isUndef(i) || t.isDefined(i) && o.value === i) && (this._events.splice(n, 1), o.dispose())
						}
						return this
					},
					t.Part.prototype.removeAll = function() {
						return this._forEach(function(t) {
							t.dispose()
						}),
						this._events = [],
						this
					},
					t.Part.prototype.cancel = function(t) {
						return this._forEach(function(e) {
							e.cancel(t)
						}),
						this._state.cancel(this.toTicks(t)),
						this
					},
					t.Part.prototype._forEach = function(e, i) {
						if (this._events) {
							i = t.defaultArg(i, this);
							for (var n = this._events.length - 1; n >= 0; n--) {
								var o = this._events[n];
								o instanceof t.Part ? o._forEach(e, i) : e.call(i, o)
							}
						}
						return this
					},
					t.Part.prototype._setAll = function(t, e) {
						this._forEach(function(i) {
							i[t] = e
						})
					},
					t.Part.prototype._tick = function(t, e) {
						this.mute || this.callback(t, e)
					},
					t.Part.prototype._testLoopBoundries = function(e) {
						e.startOffset < this._loopStart || e.startOffset >= this._loopEnd ? e.cancel(0) : e.state === t.State.Stopped && this._restartEvent(e)
					},
					Object.defineProperty(t.Part.prototype, "probability", {
						get: function() {
							return this._probability
						},
						set: function(t) {
							this._probability = t,
							this._setAll("probability", t)
						}
					}),
					Object.defineProperty(t.Part.prototype, "humanize", {
						get: function() {
							return this._humanize
						},
						set: function(t) {
							this._humanize = t,
							this._setAll("humanize", t)
						}
					}),
					Object.defineProperty(t.Part.prototype, "loop", {
						get: function() {
							return this._loop
						},
						set: function(t) {
							this._loop = t,
							this._forEach(function(e) {
								e._loopStart = this._loopStart,
								e._loopEnd = this._loopEnd,
								e.loop = t,
								this._testLoopBoundries(e)
							})
						}
					}),
					Object.defineProperty(t.Part.prototype, "loopEnd", {
						get: function() {
							return t.Ticks(this._loopEnd).toSeconds()
						},
						set: function(t) {
							this._loopEnd = this.toTicks(t),
							this._loop && this._forEach(function(e) {
								e.loopEnd = t,
								this._testLoopBoundries(e)
							})
						}
					}),
					Object.defineProperty(t.Part.prototype, "loopStart", {
						get: function() {
							return t.Ticks(this._loopStart).toSeconds()
						},
						set: function(t) {
							this._loopStart = this.toTicks(t),
							this._loop && this._forEach(function(t) {
								t.loopStart = this.loopStart,
								this._testLoopBoundries(t)
							})
						}
					}),
					Object.defineProperty(t.Part.prototype, "playbackRate", {
						get: function() {
							return this._playbackRate
						},
						set: function(t) {
							this._playbackRate = t,
							this._setAll("playbackRate", t)
						}
					}),
					Object.defineProperty(t.Part.prototype, "length", {
						get: function() {
							return this._events.length
						}
					}),
					t.Part.prototype.dispose = function() {
						return t.Event.prototype.dispose.call(this),
						this.removeAll(),
						this.callback = null,
						this._events = null,
						this
					},
					t.Part
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(50)],
				void 0 === (o = function(t) {
					return t.Loop = function() {
						var e = t.defaults(arguments, ["callback", "interval"], t.Loop);
						t.call(this),
						this._event = new t.Event({
							callback: this._tick.bind(this),
							loop: !0,
							loopEnd: e.interval,
							playbackRate: e.playbackRate,
							probability: e.probability
						}),
						this.callback = e.callback,
						this.iterations = e.iterations
					},
					t.extend(t.Loop),
					t.Loop.defaults = {
						interval: "4n",
						callback: t.noOp,
						playbackRate: 1,
						iterations: 1 / 0,
						probability: !0,
						mute: !1
					},
					t.Loop.prototype.start = function(t) {
						return this._event.start(t),
						this
					},
					t.Loop.prototype.stop = function(t) {
						return this._event.stop(t),
						this
					},
					t.Loop.prototype.cancel = function(t) {
						return this._event.cancel(t),
						this
					},
					t.Loop.prototype._tick = function(t) {
						this.callback(t)
					},
					Object.defineProperty(t.Loop.prototype, "state", {
						get: function() {
							return this._event.state
						}
					}),
					Object.defineProperty(t.Loop.prototype, "progress", {
						get: function() {
							return this._event.progress
						}
					}),
					Object.defineProperty(t.Loop.prototype, "interval", {
						get: function() {
							return this._event.loopEnd
						},
						set: function(t) {
							this._event.loopEnd = t
						}
					}),
					Object.defineProperty(t.Loop.prototype, "playbackRate", {
						get: function() {
							return this._event.playbackRate
						},
						set: function(t) {
							this._event.playbackRate = t
						}
					}),
					Object.defineProperty(t.Loop.prototype, "humanize", {
						get: function() {
							return this._event.humanize
						},
						set: function(t) {
							this._event.humanize = t
						}
					}),
					Object.defineProperty(t.Loop.prototype, "probability", {
						get: function() {
							return this._event.probability
						},
						set: function(t) {
							this._event.probability = t
						}
					}),
					Object.defineProperty(t.Loop.prototype, "mute", {
						get: function() {
							return this._event.mute
						},
						set: function(t) {
							this._event.mute = t
						}
					}),
					Object.defineProperty(t.Loop.prototype, "iterations", {
						get: function() {
							return ! 0 === this._event.loop ? 1 / 0 : this._event.loop
						},
						set: function(t) {
							this._event.loop = t === 1 / 0 || t
						}
					}),
					t.Loop.prototype.dispose = function() {
						this._event.dispose(),
						this._event = null,
						this.callback = null
					},
					t.Loop
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(15), i(32)],
				void 0 === (o = function(t) {
					"use strict";
					return t.StereoXFeedbackEffect = function() {
						var e = t.defaults(arguments, ["feedback"], t.FeedbackEffect);
						t.StereoEffect.call(this, e),
						this.feedback = new t.Signal(e.feedback, t.Type.NormalRange),
						this._feedbackLR = new t.Gain,
						this._feedbackRL = new t.Gain,
						this.effectReturnL.chain(this._feedbackLR, this.effectSendR),
						this.effectReturnR.chain(this._feedbackRL, this.effectSendL),
						this.feedback.fan(this._feedbackLR.gain, this._feedbackRL.gain),
						this._readOnly(["feedback"])
					},
					t.extend(t.StereoXFeedbackEffect, t.StereoEffect),
					t.StereoXFeedbackEffect.prototype.dispose = function() {
						return t.StereoEffect.prototype.dispose.call(this),
						this._writable(["feedback"]),
						this.feedback.dispose(),
						this.feedback = null,
						this._feedbackLR.dispose(),
						this._feedbackLR = null,
						this._feedbackRL.dispose(),
						this._feedbackRL = null,
						this
					},
					t.StereoXFeedbackEffect
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(8), i(52), i(51)],
				void 0 === (o = function(t) {
					"use strict";
					return t.MidSideEffect = function() {
						t.Effect.apply(this, arguments),
						this._midSideSplit = new t.MidSideSplit,
						this._midSideMerge = new t.MidSideMerge,
						this.midSend = this._midSideSplit.mid,
						this.sideSend = this._midSideSplit.side,
						this.midReturn = this._midSideMerge.mid,
						this.sideReturn = this._midSideMerge.side,
						this.effectSend.connect(this._midSideSplit),
						this._midSideMerge.connect(this.effectReturn)
					},
					t.extend(t.MidSideEffect, t.Effect),
					t.MidSideEffect.prototype.dispose = function() {
						return t.Effect.prototype.dispose.call(this),
						this._midSideSplit.dispose(),
						this._midSideSplit = null,
						this._midSideMerge.dispose(),
						this._midSideMerge = null,
						this.midSend = null,
						this.sideSend = null,
						this.midReturn = null,
						this.sideReturn = null,
						this
					},
					t.MidSideEffect
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(11), i(8)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Convolver = function() {
						var e = t.defaults(arguments, ["url", "onload"], t.Convolver);
						t.Effect.call(this, e),
						this._convolver = this.context.createConvolver(),
						this._buffer = new t.Buffer(e.url,
						function(t) {
							this.buffer = t.get(),
							e.onload()
						}.bind(this)),
						this._buffer.loaded && (this.buffer = this._buffer),
						this.normalize = e.normalize,
						this.connectEffect(this._convolver)
					},
					t.extend(t.Convolver, t.Effect),
					t.Convolver.defaults = {
						onload: t.noOp,
						normalize: !0
					},
					Object.defineProperty(t.Convolver.prototype, "buffer", {
						get: function() {
							return this._buffer.length ? this._buffer: null
						},
						set: function(t) {
							this._buffer.set(t),
							this._convolver.buffer && (this.effectSend.disconnect(), this._convolver.disconnect(), this._convolver = this.context.createConvolver(), this.connectEffect(this._convolver)),
							this._convolver.buffer = this._buffer.get()
						}
					}),
					Object.defineProperty(t.Convolver.prototype, "normalize", {
						get: function() {
							return this._convolver.normalize
						},
						set: function(t) {
							this._convolver.normalize = t
						}
					}),
					t.Convolver.prototype.load = function(t, e) {
						return this._buffer.load(t,
						function(t) {
							this.buffer = t,
							e && e()
						}.bind(this))
					},
					t.Convolver.prototype.dispose = function() {
						return t.Effect.prototype.dispose.call(this),
						this._buffer.dispose(),
						this._buffer = null,
						this._convolver.disconnect(),
						this._convolver = null,
						this
					},
					t.Convolver
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(7), i(5), i(13)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Modulo = function(e) {
						t.SignalBase.call(this),
						this.createInsOuts(1, 0),
						this._shaper = new t.WaveShaper(Math.pow(2, 16)),
						this._multiply = new t.Multiply,
						this._subtract = this.output = new t.Subtract,
						this._modSignal = new t.Signal(e),
						this.input.fan(this._shaper, this._subtract),
						this._modSignal.connect(this._multiply, 0, 0),
						this._shaper.connect(this._multiply, 0, 1),
						this._multiply.connect(this._subtract, 0, 1),
						this._setWaveShaper(e)
					},
					t.extend(t.Modulo, t.SignalBase),
					t.Modulo.prototype._setWaveShaper = function(t) {
						this._shaper.setMap(function(e) {
							return Math.floor((e + 1e-4) / t)
						})
					},
					Object.defineProperty(t.Modulo.prototype, "value", {
						get: function() {
							return this._modSignal.value
						},
						set: function(t) {
							this._modSignal.value = t,
							this._setWaveShaper(t)
						}
					}),
					t.Modulo.prototype.dispose = function() {
						return t.SignalBase.prototype.dispose.call(this),
						this._shaper.dispose(),
						this._shaper = null,
						this._multiply.dispose(),
						this._multiply = null,
						this._subtract.dispose(),
						this._subtract = null,
						this._modSignal.dispose(),
						this._modSignal = null,
						this
					},
					t.Modulo
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(16), i(11), i(62), i(40)],
				void 0 === (o = function(t) {
					return t.Offline = function(e, i) {
						var n = t.context.sampleRate,
						o = t.context,
						s = new t.OfflineContext(2, i, n);
						t.context = s;
						var r = e(t.Transport),
						a = null;
						return a = r && t.isFunction(r.then) ? r.then(function() {
							return s.render()
						}) : s.render(),
						t.context = o,
						a.then(function(e) {
							return new t.Buffer(e)
						})
					},
					t.Offline
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(11)],
				void 0 === (o = function(t) {
					return t.Buffers = function(e) {
						var i = Array.prototype.slice.call(arguments);
						i.shift();
						var n = t.defaults(i, ["onload", "baseUrl"], t.Buffers);
						for (var o in t.call(this), this._buffers = {},
						this.baseUrl = n.baseUrl, this._loadingCount = 0, e) this._loadingCount++,
						this.add(o, e[o], this._bufferLoaded.bind(this, n.onload))
					},
					t.extend(t.Buffers),
					t.Buffers.defaults = {
						onload: t.noOp,
						baseUrl: ""
					},
					t.Buffers.prototype.has = function(t) {
						return this._buffers.hasOwnProperty(t)
					},
					t.Buffers.prototype.get = function(t) {
						if (this.has(t)) return this._buffers[t];
						throw new Error("Tone.Buffers: no buffer named " + t)
					},
					t.Buffers.prototype._bufferLoaded = function(t) {
						0 === --this._loadingCount && t && t(this)
					},
					Object.defineProperty(t.Buffers.prototype, "loaded", {
						get: function() {
							var t = !0;
							for (var e in this._buffers) {
								var i = this.get(e);
								t = t && i.loaded
							}
							return t
						}
					}),
					t.Buffers.prototype.add = function(e, i, n) {
						return n = t.defaultArg(n, t.noOp),
						i instanceof t.Buffer ? (this._buffers[e] = i, n(this)) : i instanceof AudioBuffer ? (this._buffers[e] = new t.Buffer(i), n(this)) : t.isString(i) && (this._buffers[e] = new t.Buffer(this.baseUrl + i, n)),
						this
					},
					t.Buffers.prototype.dispose = function() {
						for (var e in t.prototype.dispose.call(this), this._buffers) this._buffers[e].dispose();
						return this._buffers = null,
						this
					},
					t.Buffers
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0)],
				void 0 === (o = function(t) {
					"use strict";
					return t.CtrlPattern = function() {
						var e = t.defaults(arguments, ["values", "type"], t.CtrlPattern);
						t.call(this),
						this.values = e.values,
						this.index = 0,
						this._type = null,
						this._shuffled = null,
						this._direction = null,
						this.type = e.type
					},
					t.extend(t.CtrlPattern),
					t.CtrlPattern.Type = {
						Up: "up",
						Down: "down",
						UpDown: "upDown",
						DownUp: "downUp",
						AlternateUp: "alternateUp",
						AlternateDown: "alternateDown",
						Random: "random",
						RandomWalk: "randomWalk",
						RandomOnce: "randomOnce"
					},
					t.CtrlPattern.defaults = {
						type: t.CtrlPattern.Type.Up,
						values: []
					},
					Object.defineProperty(t.CtrlPattern.prototype, "value", {
						get: function() {
							if (0 !== this.values.length) {
								if (1 === this.values.length) return this.values[0];
								this.index = Math.min(this.index, this.values.length - 1);
								var e = this.values[this.index];
								return this.type === t.CtrlPattern.Type.RandomOnce && (this.values.length !== this._shuffled.length && this._shuffleValues(), e = this.values[this._shuffled[this.index]]),
								e
							}
						}
					}),
					Object.defineProperty(t.CtrlPattern.prototype, "type", {
						get: function() {
							return this._type
						},
						set: function(e) {
							this._type = e,
							this._shuffled = null,
							this._type === t.CtrlPattern.Type.Up || this._type === t.CtrlPattern.Type.UpDown || this._type === t.CtrlPattern.Type.RandomOnce || this._type === t.CtrlPattern.Type.AlternateUp ? this.index = 0 : this._type !== t.CtrlPattern.Type.Down && this._type !== t.CtrlPattern.Type.DownUp && this._type !== t.CtrlPattern.Type.AlternateDown || (this.index = this.values.length - 1),
							this._type === t.CtrlPattern.Type.UpDown || this._type === t.CtrlPattern.Type.AlternateUp ? this._direction = t.CtrlPattern.Type.Up: this._type !== t.CtrlPattern.Type.DownUp && this._type !== t.CtrlPattern.Type.AlternateDown || (this._direction = t.CtrlPattern.Type.Down),
							this._type === t.CtrlPattern.Type.RandomOnce ? this._shuffleValues() : this._type === t.CtrlPattern.Random && (this.index = Math.floor(Math.random() * this.values.length))
						}
					}),
					t.CtrlPattern.prototype.next = function() {
						var e = this.type;
						return e === t.CtrlPattern.Type.Up ? ++this.index >= this.values.length && (this.index = 0) : e === t.CtrlPattern.Type.Down ? --this.index < 0 && (this.index = this.values.length - 1) : e === t.CtrlPattern.Type.UpDown || e === t.CtrlPattern.Type.DownUp ? (this._direction === t.CtrlPattern.Type.Up ? this.index++:this.index--, this.index < 0 ? (this.index = 1, this._direction = t.CtrlPattern.Type.Up) : this.index >= this.values.length && (this.index = this.values.length - 2, this._direction = t.CtrlPattern.Type.Down)) : e === t.CtrlPattern.Type.Random ? this.index = Math.floor(Math.random() * this.values.length) : e === t.CtrlPattern.Type.RandomWalk ? Math.random() < .5 ? (this.index--, this.index = Math.max(this.index, 0)) : (this.index++, this.index = Math.min(this.index, this.values.length - 1)) : e === t.CtrlPattern.Type.RandomOnce ? ++this.index >= this.values.length && (this.index = 0, this._shuffleValues()) : e === t.CtrlPattern.Type.AlternateUp ? (this._direction === t.CtrlPattern.Type.Up ? (this.index += 2, this._direction = t.CtrlPattern.Type.Down) : (this.index -= 1, this._direction = t.CtrlPattern.Type.Up), this.index >= this.values.length && (this.index = 0, this._direction = t.CtrlPattern.Type.Up)) : e === t.CtrlPattern.Type.AlternateDown && (this._direction === t.CtrlPattern.Type.Up ? (this.index += 1, this._direction = t.CtrlPattern.Type.Down) : (this.index -= 2, this._direction = t.CtrlPattern.Type.Up), this.index < 0 && (this.index = this.values.length - 1, this._direction = t.CtrlPattern.Type.Down)),
						this.value
					},
					t.CtrlPattern.prototype._shuffleValues = function() {
						var t = [];
						this._shuffled = [];
						for (var e = 0; e < this.values.length; e++) t[e] = e;
						for (; t.length > 0;) {
							var i = t.splice(Math.floor(t.length * Math.random()), 1);
							this._shuffled.push(i[0])
						}
					},
					t.CtrlPattern.prototype.dispose = function() {
						this._shuffled = null,
						this.values = null
					},
					t.CtrlPattern
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0)],
				void 0 === (o = function(t) {
					t.supported && (AudioBuffer.prototype.copyToChannel || (AudioBuffer.prototype.copyToChannel = function(t, e, i) {
						var n = this.getChannelData(e);
						i = i || 0;
						for (var o = 0; o < n.length; o++) n[o + i] = t[o]
					},
					AudioBuffer.prototype.copyFromChannel = function(t, e, i) {
						var n = this.getChannelData(e);
						i = i || 0;
						for (var o = 0; o < t.length; o++) t[o] = n[o + i]
					}))
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(11), i(6), i(3), i(2)],
				void 0 === (o = function(t) {
					return t.OscillatorNode = function() {
						var e = t.defaults(arguments, ["frequency", "type"], t.OscillatorNode);
						t.AudioNode.call(this, e),
						this.onended = e.onended,
						this._startTime = -1,
						this._stopTime = -1,
						this._gainNode = this.output = new t.Gain(0),
						this._oscillator = this.context.createOscillator(),
						this._oscillator.connect(this._gainNode),
						this.type = e.type,
						this.frequency = new t.Param({
							param: this._oscillator.frequency,
							units: t.Type.Frequency,
							value: e.frequency
						}),
						this.detune = new t.Param({
							param: this._oscillator.detune,
							units: t.Type.Cents,
							value: e.detune
						}),
						this._gain = 1
					},
					t.extend(t.OscillatorNode, t.AudioNode),
					t.OscillatorNode.defaults = {
						frequency: 440,
						detune: 0,
						type: "sine",
						onended: t.noOp
					},
					Object.defineProperty(t.OscillatorNode.prototype, "state", {
						get: function() {
							return this.getStateAtTime(this.now())
						}
					}),
					t.OscillatorNode.prototype.getStateAtTime = function(e) {
						return e = this.toSeconds(e),
						-1 !== this._startTime && e >= this._startTime && ( - 1 === this._stopTime || e <= this._stopTime) ? t.State.Started: t.State.Stopped
					},
					t.OscillatorNode.prototype.start = function(t) {
						if (this.log("start", t), -1 !== this._startTime) throw new Error("cannot call OscillatorNode.start more than once");
						return this._startTime = this.toSeconds(t),
						this._oscillator.start(this._startTime),
						this._gainNode.gain.setValueAtTime(1, this._startTime),
						this
					},
					t.OscillatorNode.prototype.setPeriodicWave = function(t) {
						return this._oscillator.setPeriodicWave(t),
						this
					},
					t.OscillatorNode.prototype.stop = function(t) {
						return this.log("stop", t),
						this.assert( - 1 !== this._startTime, "'start' must be called before 'stop'"),
						this.cancelStop(),
						this._stopTime = this.toSeconds(t),
						this._stopTime > this._startTime ? (this._gainNode.gain.setValueAtTime(0, this._stopTime), this.context.clearTimeout(this._timeout), this._timeout = this.context.setTimeout(function() {
							this._oscillator.stop(this.now()),
							this.onended()
						}.bind(this), this._stopTime - this.context.currentTime)) : this._gainNode.gain.cancelScheduledValues(this._startTime),
						this
					},
					t.OscillatorNode.prototype.cancelStop = function() {
						return - 1 !== this._startTime && (this._gainNode.gain.cancelScheduledValues(this._startTime + this.sampleTime), this.context.clearTimeout(this._timeout), this._stopTime = -1),
						this
					},
					Object.defineProperty(t.OscillatorNode.prototype, "type", {
						get: function() {
							return this._oscillator.type
						},
						set: function(t) {
							this._oscillator.type = t
						}
					}),
					t.OscillatorNode.prototype.dispose = function() {
						return this.context.clearTimeout(this._timeout),
						t.AudioNode.prototype.dispose.call(this),
						this.onended = null,
						this._oscillator.disconnect(),
						this._oscillator = null,
						this._gainNode.dispose(),
						this._gainNode = null,
						this.frequency.dispose(),
						this.frequency = null,
						this.detune.dispose(),
						this.detune = null,
						this
					},
					t.OscillatorNode
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(55), i(54)],
				void 0 === (o = function(t) {
					return t.TransportRepeatEvent = function(e, i) {
						t.TransportEvent.call(this, e, i),
						i = t.defaultArg(i, t.TransportRepeatEvent.defaults),
						this.duration = t.Ticks(i.duration),
						this._interval = t.Ticks(i.interval),
						this._currentId = -1,
						this._nextId = -1,
						this._nextTick = this.time,
						this._boundRestart = this._restart.bind(this),
						this.Transport.on("start loopStart", this._boundRestart),
						this._restart()
					},
					t.extend(t.TransportRepeatEvent, t.TransportEvent),
					t.TransportRepeatEvent.defaults = {
						duration: 1 / 0,
						interval: 1
					},
					t.TransportRepeatEvent.prototype.invoke = function(e) {
						this._createEvents(e),
						t.TransportEvent.prototype.invoke.call(this, e)
					},
					t.TransportRepeatEvent.prototype._createEvents = function(e) {
						var i = this.Transport.getTicksAtTime(e);
						i >= this.time && i >= this._nextTick && this._nextTick + this._interval < this.time + this.duration && (this._nextTick += this._interval, this._currentId = this._nextId, this._nextId = this.Transport.scheduleOnce(this.invoke.bind(this), t.Ticks(this._nextTick)))
					},
					t.TransportRepeatEvent.prototype._restart = function(e) {
						this.Transport.clear(this._currentId),
						this.Transport.clear(this._nextId),
						this._nextTick = this.time;
						var i = this.Transport.getTicksAtTime(e);
						i > this.time && (this._nextTick = this.time + Math.ceil((i - this.time) / this._interval) * this._interval),
						this._currentId = this.Transport.scheduleOnce(this.invoke.bind(this), t.Ticks(this._nextTick)),
						this._nextTick += this._interval,
						this._nextId = this.Transport.scheduleOnce(this.invoke.bind(this), t.Ticks(this._nextTick))
					},
					t.TransportRepeatEvent.prototype.dispose = function() {
						return this.Transport.clear(this._currentId),
						this.Transport.clear(this._nextId),
						this.Transport.off("start loopStart", this._boundRestart),
						this._boundCreateEvents = null,
						t.TransportEvent.prototype.dispose.call(this),
						this.duration = null,
						this._interval = null,
						this
					},
					t.TransportRepeatEvent
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(4)],
				void 0 === (o = function(t) {
					"use strict";
					t.IntervalTimeline = function() {
						t.call(this),
						this._root = null,
						this._length = 0
					},
					t.extend(t.IntervalTimeline),
					t.IntervalTimeline.prototype.add = function(i) {
						if (t.isUndef(i.time) || t.isUndef(i.duration)) throw new Error("Tone.IntervalTimeline: events must have time and duration parameters");
						i.time = i.time.valueOf();
						var n = new e(i.time, i.time + i.duration, i);
						for (null === this._root ? this._root = n: this._root.insert(n), this._length++; null !== n;) n.updateHeight(),
						n.updateMax(),
						this._rebalance(n),
						n = n.parent;
						return this
					},
					t.IntervalTimeline.prototype.remove = function(t) {
						if (null !== this._root) {
							var e = [];
							this._root.search(t.time, e);
							for (var i = 0; i < e.length; i++) {
								var n = e[i];
								if (n.event === t) {
									this._removeNode(n),
									this._length--;
									break
								}
							}
						}
						return this
					},
					Object.defineProperty(t.IntervalTimeline.prototype, "length", {
						get: function() {
							return this._length
						}
					}),
					t.IntervalTimeline.prototype.cancel = function(t) {
						return this.forEachFrom(t,
						function(t) {
							this.remove(t)
						}.bind(this)),
						this
					},
					t.IntervalTimeline.prototype._setRoot = function(t) {
						this._root = t,
						null !== this._root && (this._root.parent = null)
					},
					t.IntervalTimeline.prototype._replaceNodeInParent = function(t, e) {
						null !== t.parent ? (t.isLeftChild() ? t.parent.left = e: t.parent.right = e, this._rebalance(t.parent)) : this._setRoot(e)
					},
					t.IntervalTimeline.prototype._removeNode = function(t) {
						if (null === t.left && null === t.right) this._replaceNodeInParent(t, null);
						else if (null === t.right) this._replaceNodeInParent(t, t.left);
						else if (null === t.left) this._replaceNodeInParent(t, t.right);
						else {
							var e, i;
							if (t.getBalance() > 0) if (null === t.left.right)(e = t.left).right = t.right,
							i = e;
							else {
								for (e = t.left.right; null !== e.right;) e = e.right;
								e.parent.right = e.left,
								i = e.parent,
								e.left = t.left,
								e.right = t.right
							} else if (null === t.right.left)(e = t.right).left = t.left,
							i = e;
							else {
								for (e = t.right.left; null !== e.left;) e = e.left;
								e.parent = e.parent,
								e.parent.left = e.right,
								i = e.parent,
								e.left = t.left,
								e.right = t.right
							}
							null !== t.parent ? t.isLeftChild() ? t.parent.left = e: t.parent.right = e: this._setRoot(e),
							this._rebalance(i)
						}
						t.dispose()
					},
					t.IntervalTimeline.prototype._rotateLeft = function(t) {
						var e = t.parent,
						i = t.isLeftChild(),
						n = t.right;
						t.right = n.left,
						n.left = t,
						null !== e ? i ? e.left = n: e.right = n: this._setRoot(n)
					},
					t.IntervalTimeline.prototype._rotateRight = function(t) {
						var e = t.parent,
						i = t.isLeftChild(),
						n = t.left;
						t.left = n.right,
						n.right = t,
						null !== e ? i ? e.left = n: e.right = n: this._setRoot(n)
					},
					t.IntervalTimeline.prototype._rebalance = function(t) {
						var e = t.getBalance();
						e > 1 ? t.left.getBalance() < 0 ? this._rotateLeft(t.left) : this._rotateRight(t) : e < -1 && (t.right.getBalance() > 0 ? this._rotateRight(t.right) : this._rotateLeft(t))
					},
					t.IntervalTimeline.prototype.get = function(t) {
						if (null !== this._root) {
							var e = [];
							if (this._root.search(t, e), e.length > 0) {
								for (var i = e[0], n = 1; n < e.length; n++) e[n].low > i.low && (i = e[n]);
								return i.event
							}
						}
						return null
					},
					t.IntervalTimeline.prototype.forEach = function(t) {
						if (null !== this._root) {
							var e = [];
							this._root.traverse(function(t) {
								e.push(t)
							});
							for (var i = 0; i < e.length; i++) {
								var n = e[i].event;
								n && t(n)
							}
						}
						return this
					},
					t.IntervalTimeline.prototype.forEachAtTime = function(t, e) {
						if (null !== this._root) {
							var i = [];
							this._root.search(t, i);
							for (var n = i.length - 1; n >= 0; n--) {
								var o = i[n].event;
								o && e(o)
							}
						}
						return this
					},
					t.IntervalTimeline.prototype.forEachFrom = function(t, e) {
						if (null !== this._root) {
							var i = [];
							this._root.searchAfter(t, i);
							for (var n = i.length - 1; n >= 0; n--) e(i[n].event)
						}
						return this
					},
					t.IntervalTimeline.prototype.dispose = function() {
						var t = [];
						null !== this._root && this._root.traverse(function(e) {
							t.push(e)
						});
						for (var e = 0; e < t.length; e++) t[e].dispose();
						return t = null,
						this._root = null,
						this
					};
					var e = function(t, e, i) {
						this.event = i,
						this.low = t,
						this.high = e,
						this.max = this.high,
						this._left = null,
						this._right = null,
						this.parent = null,
						this.height = 0
					};
					return e.prototype.insert = function(t) {
						t.low <= this.low ? null === this.left ? this.left = t: this.left.insert(t) : null === this.right ? this.right = t: this.right.insert(t)
					},
					e.prototype.search = function(t, e) {
						t > this.max || (null !== this.left && this.left.search(t, e), this.low <= t && this.high > t && e.push(this), this.low > t || null !== this.right && this.right.search(t, e))
					},
					e.prototype.searchAfter = function(t, e) {
						this.low >= t && (e.push(this), null !== this.left && this.left.searchAfter(t, e)),
						null !== this.right && this.right.searchAfter(t, e)
					},
					e.prototype.traverse = function(t) {
						t(this),
						null !== this.left && this.left.traverse(t),
						null !== this.right && this.right.traverse(t)
					},
					e.prototype.updateHeight = function() {
						null !== this.left && null !== this.right ? this.height = Math.max(this.left.height, this.right.height) + 1 : null !== this.right ? this.height = this.right.height + 1 : null !== this.left ? this.height = this.left.height + 1 : this.height = 0
					},
					e.prototype.updateMax = function() {
						this.max = this.high,
						null !== this.left && (this.max = Math.max(this.max, this.left.max)),
						null !== this.right && (this.max = Math.max(this.max, this.right.max))
					},
					e.prototype.getBalance = function() {
						var t = 0;
						return null !== this.left && null !== this.right ? t = this.left.height - this.right.height: null !== this.left ? t = this.left.height + 1 : null !== this.right && (t = -(this.right.height + 1)),
						t
					},
					e.prototype.isLeftChild = function() {
						return null !== this.parent && this.parent.left === this
					},
					Object.defineProperty(e.prototype, "left", {
						get: function() {
							return this._left
						},
						set: function(t) {
							this._left = t,
							null !== t && (t.parent = this),
							this.updateHeight(),
							this.updateMax()
						}
					}),
					Object.defineProperty(e.prototype, "right", {
						get: function() {
							return this._right
						},
						set: function(t) {
							this._right = t,
							null !== t && (t.parent = this),
							this.updateHeight(),
							this.updateMax()
						}
					}),
					e.prototype.dispose = function() {
						this.parent = null,
						this._left = null,
						this._right = null,
						this.event = null
					},
					t.IntervalTimeline
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(1)],
				void 0 === (o = function(t) {
					function e(t) {
						return function(e, i) {
							i = this.toSeconds(i),
							t.apply(this, arguments);
							var n = this._events.get(i),
							o = this._events.previousEvent(n),
							s = this._getTicksUntilEvent(o, i);
							return n.ticks = Math.max(s, 0),
							this
						}
					}
					return t.TickSignal = function(e) {
						e = t.defaultArg(e, 1),
						t.Signal.call(this, {
							units: t.Type.Ticks,
							value: e
						}),
						this._events.memory = 1 / 0,
						this.cancelScheduledValues(0),
						this._events.add({
							type: t.Param.AutomationType.SetValue,
							time: 0,
							value: e
						})
					},
					t.extend(t.TickSignal, t.Signal),
					t.TickSignal.prototype.setValueAtTime = e(t.Signal.prototype.setValueAtTime),
					t.TickSignal.prototype.linearRampToValueAtTime = e(t.Signal.prototype.linearRampToValueAtTime),
					t.TickSignal.prototype.setTargetAtTime = function(t, e, i) {
						e = this.toSeconds(e),
						this.setRampPoint(e),
						t = this._fromUnits(t);
						for (var n = this._events.get(e), o = Math.round(Math.max(1 / i, 1)), s = 0; s <= o; s++) {
							var r = i * s + e,
							a = this._exponentialApproach(n.time, n.value, t, i, r);
							this.linearRampToValueAtTime(this._toUnits(a), r)
						}
						return this
					},
					t.TickSignal.prototype.exponentialRampToValueAtTime = function(t, e) {
						e = this.toSeconds(e),
						t = this._fromUnits(t);
						var i = this._events.get(e);
						null === i && (i = {
							value: this._initialValue,
							time: 0
						});
						for (var n = Math.round(Math.max(10 * (e - i.time), 1)), o = (e - i.time) / n, s = 0; s <= n; s++) {
							var r = o * s + i.time,
							a = this._exponentialInterpolate(i.time, i.value, e, t, r);
							this.linearRampToValueAtTime(this._toUnits(a), r)
						}
						return this
					},
					t.TickSignal.prototype._getTicksUntilEvent = function(e, i) {
						if (null === e) e = {
							ticks: 0,
							time: 0
						};
						else if (t.isUndef(e.ticks)) {
							var n = this._events.previousEvent(e);
							e.ticks = this._getTicksUntilEvent(n, e.time)
						}
						var o = this.getValueAtTime(e.time),
						s = this.getValueAtTime(i);
						return this._events.get(i).time === i && this._events.get(i).type === t.Param.AutomationType.SetValue && (s = this.getValueAtTime(i - this.sampleTime)),
						.5 * (i - e.time) * (o + s) + e.ticks
					},
					t.TickSignal.prototype.getTicksAtTime = function(t) {
						t = this.toSeconds(t);
						var e = this._events.get(t);
						return Math.max(this._getTicksUntilEvent(e, t), 0)
					},
					t.TickSignal.prototype.getDurationOfTicks = function(t, e) {
						e = this.toSeconds(e);
						var i = this.getTicksAtTime(e);
						return this.getTimeOfTick(i + t) - e
					},
					t.TickSignal.prototype.getTimeOfTick = function(e) {
						var i = this._events.get(e, "ticks"),
						n = this._events.getAfter(e, "ticks");
						if (i && i.ticks === e) return i.time;
						if (i && n && n.type === t.Param.AutomationType.Linear && i.value !== n.value) {
							var o = this.getValueAtTime(i.time),
							s = (this.getValueAtTime(n.time) - o) / (n.time - i.time),
							r = Math.sqrt(Math.pow(o, 2) - 2 * s * (i.ticks - e)),
							a = ( - o + r) / s;
							return (a > 0 ? a: ( - o - r) / s) + i.time
						}
						return i ? 0 === i.value ? 1 / 0 : i.time + (e - i.ticks) / i.value: e / this._initialValue
					},
					t.TickSignal.prototype.ticksToTime = function(e, i) {
						return i = this.toSeconds(i),
						new t.Time(this.getDurationOfTicks(e, i))
					},
					t.TickSignal.prototype.timeToTicks = function(e, i) {
						i = this.toSeconds(i),
						e = this.toSeconds(e);
						var n = this.getTicksAtTime(i),
						o = this.getTicksAtTime(i + e);
						return new t.Ticks(o - n)
					},
					t.TickSignal
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(56), i(33), i(35), i(20)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Clock = function() {
						var e = t.defaults(arguments, ["callback", "frequency"], t.Clock);
						t.Emitter.call(this),
						this.callback = e.callback,
						this._nextTick = 0,
						this._tickSource = new t.TickSource(e.frequency),
						this._lastUpdate = 0,
						this.frequency = this._tickSource.frequency,
						this._readOnly("frequency"),
						this._state = new t.TimelineState(t.State.Stopped),
						this._state.setStateAtTime(t.State.Stopped, 0),
						this._boundLoop = this._loop.bind(this),
						this.context.on("tick", this._boundLoop)
					},
					t.extend(t.Clock, t.Emitter),
					t.Clock.defaults = {
						callback: t.noOp,
						frequency: 1
					},
					Object.defineProperty(t.Clock.prototype, "state", {
						get: function() {
							return this._state.getValueAtTime(this.now())
						}
					}),
					t.Clock.prototype.start = function(e, i) {
						return this.context.resume(),
						e = this.toSeconds(e),
						this._state.getValueAtTime(e) !== t.State.Started && (this._state.setStateAtTime(t.State.Started, e), this._tickSource.start(e, i), e < this._lastUpdate && this.emit("start", e, i)),
						this
					},
					t.Clock.prototype.stop = function(e) {
						return e = this.toSeconds(e),
						this._state.cancel(e),
						this._state.setStateAtTime(t.State.Stopped, e),
						this._tickSource.stop(e),
						e < this._lastUpdate && this.emit("stop", e),
						this
					},
					t.Clock.prototype.pause = function(e) {
						return e = this.toSeconds(e),
						this._state.getValueAtTime(e) === t.State.Started && (this._state.setStateAtTime(t.State.Paused, e), this._tickSource.pause(e), e < this._lastUpdate && this.emit("pause", e)),
						this
					},
					Object.defineProperty(t.Clock.prototype, "ticks", {
						get: function() {
							return Math.ceil(this.getTicksAtTime(this.now()))
						},
						set: function(t) {
							this._tickSource.ticks = t
						}
					}),
					Object.defineProperty(t.Clock.prototype, "seconds", {
						get: function() {
							return this._tickSource.seconds
						},
						set: function(t) {
							this._tickSource.seconds = t
						}
					}),
					t.Clock.prototype.getSecondsAtTime = function(t) {
						return this._tickSource.getSecondsAtTime(t)
					},
					t.Clock.prototype.setTicksAtTime = function(t, e) {
						return this._tickSource.setTicksAtTime(t, e),
						this
					},
					t.Clock.prototype.getTicksAtTime = function(t) {
						return this._tickSource.getTicksAtTime(t)
					},
					t.Clock.prototype.nextTickTime = function(t, e) {
						e = this.toSeconds(e);
						var i = this.getTicksAtTime(e);
						return this._tickSource.getTimeOfTick(i + t, e)
					},
					t.Clock.prototype._loop = function() {
						var e = this._lastUpdate,
						i = this.now();
						this._lastUpdate = i,
						e !== i && (this._state.forEachBetween(e, i,
						function(e) {
							switch (e.state) {
							case t.State.Started:
								var i = this._tickSource.getTicksAtTime(e.time);
								this.emit("start", e.time, i);
								break;
							case t.State.Stopped:
								0 !== e.time && this.emit("stop", e.time);
								break;
							case t.State.Paused:
								this.emit("pause", e.time)
							}
						}.bind(this)), this._tickSource.forEachTickBetween(e, i,
						function(t, e) {
							this.callback(t, e)
						}.bind(this)))
					},
					t.Clock.prototype.getStateAtTime = function(t) {
						return t = this.toSeconds(t),
						this._state.getValueAtTime(t)
					},
					t.Clock.prototype.dispose = function() {
						t.Emitter.prototype.dispose.call(this),
						this.context.off("tick", this._boundLoop),
						this._writable("frequency"),
						this._tickSource.dispose(),
						this._tickSource = null,
						this.frequency = null,
						this._boundLoop = null,
						this._nextTick = 1 / 0,
						this.callback = null,
						this._state.dispose(),
						this._state = null
					},
					t.Clock
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(1), i(5), i(7)],
				void 0 === (o = function(t) {
					"use strict";
					return t.GreaterThanZero = function() {
						t.SignalBase.call(this),
						this._thresh = this.output = new t.WaveShaper(function(t) {
							return t <= 0 ? 0 : 1
						},
						127),
						this._scale = this.input = new t.Multiply(1e4),
						this._scale.connect(this._thresh)
					},
					t.extend(t.GreaterThanZero, t.SignalBase),
					t.GreaterThanZero.prototype.dispose = function() {
						return t.SignalBase.prototype.dispose.call(this),
						this._scale.dispose(),
						this._scale = null,
						this._thresh.dispose(),
						this._thresh = null,
						this
					},
					t.GreaterThanZero
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(87), i(13), i(1)],
				void 0 === (o = function(t) {
					"use strict";
					return t.GreaterThan = function(e) {
						t.Signal.call(this),
						this.createInsOuts(2, 0),
						this._param = this.input[0] = new t.Subtract(e),
						this.input[1] = this._param.input[1],
						this._gtz = this.output = new t.GreaterThanZero,
						this._param.connect(this._gtz),
						this.proxy = !1
					},
					t.extend(t.GreaterThan, t.Signal),
					t.GreaterThan.prototype.dispose = function() {
						return t.Signal.prototype.dispose.call(this),
						this._gtz.dispose(),
						this._gtz = null,
						this
					},
					t.GreaterThan
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(47), i(26)],
				void 0 === (o = function(t) {
					"use strict";
					return t.ScaledEnvelope = function() {
						var e = t.defaults(arguments, ["attack", "decay", "sustain", "release"], t.Envelope);
						t.Envelope.call(this, e),
						e = t.defaultArg(e, t.ScaledEnvelope.defaults),
						this._exp = this.output = new t.Pow(e.exponent),
						this._scale = this.output = new t.Scale(e.min, e.max),
						this._sig.chain(this._exp, this._scale)
					},
					t.extend(t.ScaledEnvelope, t.Envelope),
					t.ScaledEnvelope.defaults = {
						min: 0,
						max: 1,
						exponent: 1
					},
					Object.defineProperty(t.ScaledEnvelope.prototype, "min", {
						get: function() {
							return this._scale.min
						},
						set: function(t) {
							this._scale.min = t
						}
					}),
					Object.defineProperty(t.ScaledEnvelope.prototype, "max", {
						get: function() {
							return this._scale.max
						},
						set: function(t) {
							this._scale.max = t
						}
					}),
					Object.defineProperty(t.ScaledEnvelope.prototype, "exponent", {
						get: function() {
							return this._exp.value
						},
						set: function(t) {
							this._exp.value = t
						}
					}),
					t.ScaledEnvelope.prototype.dispose = function() {
						return t.Envelope.prototype.dispose.call(this),
						this._scale.dispose(),
						this._scale = null,
						this._exp.dispose(),
						this._exp = null,
						this
					},
					t.ScaledEnvelope
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(7), i(36)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Abs = function() {
						t.SignalBase.call(this),
						this._abs = this.input = this.output = new t.WaveShaper(function(t) {
							return Math.abs(t) < .001 ? 0 : Math.abs(t)
						},
						1024)
					},
					t.extend(t.Abs, t.SignalBase),
					t.Abs.prototype.dispose = function() {
						return t.SignalBase.prototype.dispose.call(this),
						this._abs.dispose(),
						this._abs = null,
						this
					},
					t.Abs
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(3), i(2)],
				void 0 === (o = function(t) {
					return t.Solo = function() {
						var e = t.defaults(arguments, ["solo"], t.Solo);
						t.AudioNode.call(this),
						this.input = this.output = new t.Gain,
						this._soloBind = this._soloed.bind(this),
						this.context.on("solo", this._soloBind),
						this.solo = e.solo
					},
					t.extend(t.Solo, t.AudioNode),
					t.Solo.defaults = {
						solo: !1
					},
					Object.defineProperty(t.Solo.prototype, "solo", {
						get: function() {
							return this._isSoloed()
						},
						set: function(t) {
							t ? this._addSolo() : this._removeSolo(),
							this.context.emit("solo", this)
						}
					}),
					Object.defineProperty(t.Solo.prototype, "muted", {
						get: function() {
							return 0 === this.input.gain.value
						}
					}),
					t.Solo.prototype._addSolo = function() {
						t.isArray(this.context._currentSolo) || (this.context._currentSolo = []),
						this._isSoloed() || this.context._currentSolo.push(this)
					},
					t.Solo.prototype._removeSolo = function() {
						if (this._isSoloed()) {
							var t = this.context._currentSolo.indexOf(this);
							this.context._currentSolo.splice(t, 1)
						}
					},
					t.Solo.prototype._isSoloed = function() {
						return !! t.isArray(this.context._currentSolo) && 0 !== this.context._currentSolo.length && -1 !== this.context._currentSolo.indexOf(this)
					},
					t.Solo.prototype._noSolos = function() {
						return ! t.isArray(this.context._currentSolo) || 0 === this.context._currentSolo.length
					},
					t.Solo.prototype._soloed = function() {
						this._isSoloed() ? this.input.gain.value = 1 : this._noSolos() ? this.input.gain.value = 1 : this.input.gain.value = 0
					},
					t.Solo.prototype.dispose = function() {
						return this.context.off("solo", this._soloBind),
						this._removeSolo(),
						this._soloBind = null,
						t.AudioNode.prototype.dispose.call(this),
						this
					},
					t.Solo
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(7), i(10), i(28), i(19), i(3), i(1), i(20)],
				void 0 === (o = function(t) {
					if (t.supported && !t.global.AudioContext.prototype.createStereoPanner) {
						var e = function(e) {
							this.context = e,
							this.pan = new t.Signal(0, t.Type.AudioRange);
							var i = new t.WaveShaper(function(e) {
								return t.equalPowerScale((e + 1) / 2)
							},
							4096),
							n = new t.WaveShaper(function(e) {
								return t.equalPowerScale(1 - (e + 1) / 2)
							},
							4096),
							o = new t.Gain,
							s = new t.Gain,
							r = this.input = new t.Split;
							r._splitter.channelCountMode = "explicit",
							(new t.Zero).fan(i, n);
							var a = this.output = new t.Merge;
							r.left.chain(o, a.left),
							r.right.chain(s, a.right),
							this.pan.chain(n, o.gain),
							this.pan.chain(i, s.gain)
						};
						e.prototype.disconnect = function() {
							this.output.disconnect.apply(this.output, arguments)
						},
						e.prototype.connect = function() {
							this.output.connect.apply(this.output, arguments)
						},
						AudioContext.prototype.createStereoPanner = function() {
							return new e(this)
						},
						t.Context.prototype.createStereoPanner = function() {
							return new e(this)
						}
					}
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(7)],
				void 0 === (o = function(t) {
					"use strict";
					return t.EqualPowerGain = function() {
						t.SignalBase.call(this),
						this._eqPower = this.input = this.output = new t.WaveShaper(function(e) {
							return Math.abs(e) < .001 ? 0 : t.equalPowerScale(e)
						}.bind(this), 4096)
					},
					t.extend(t.EqualPowerGain, t.SignalBase),
					t.EqualPowerGain.prototype.dispose = function() {
						return t.SignalBase.prototype.dispose.call(this),
						this._eqPower.dispose(),
						this._eqPower = null,
						this
					},
					t.EqualPowerGain
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(5), i(1)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Negate = function() {
						t.SignalBase.call(this),
						this._multiply = this.input = this.output = new t.Multiply( - 1)
					},
					t.extend(t.Negate, t.SignalBase),
					t.Negate.prototype.dispose = function() {
						return t.SignalBase.prototype.dispose.call(this),
						this._multiply.dispose(),
						this._multiply = null,
						this
					},
					t.Negate
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(60), i(27), i(2)],
				void 0 === (o = function(t) {
					"use strict";
					return t.PanVol = function() {
						var e = t.defaults(arguments, ["pan", "volume"], t.PanVol);
						t.AudioNode.call(this),
						this._panner = this.input = new t.Panner(e.pan),
						this.pan = this._panner.pan,
						this._volume = this.output = new t.Volume(e.volume),
						this.volume = this._volume.volume,
						this._panner.connect(this._volume),
						this.mute = e.mute,
						this._readOnly(["pan", "volume"])
					},
					t.extend(t.PanVol, t.AudioNode),
					t.PanVol.defaults = {
						pan: 0,
						volume: 0,
						mute: !1
					},
					Object.defineProperty(t.PanVol.prototype, "mute", {
						get: function() {
							return this._volume.mute
						},
						set: function(t) {
							this._volume.mute = t
						}
					}),
					t.PanVol.prototype.dispose = function() {
						return t.AudioNode.prototype.dispose.call(this),
						this._writable(["pan", "volume"]),
						this._panner.dispose(),
						this._panner = null,
						this.pan = null,
						this._volume.dispose(),
						this._volume = null,
						this.volume = null,
						this
					},
					t.PanVol
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(34)],
				void 0 === (o = function(t) {
					t.supported && (AnalyserNode.prototype.getFloatTimeDomainData || (AnalyserNode.prototype.getFloatTimeDomainData = function(t) {
						var e = new Uint8Array(t.length);
						this.getByteTimeDomainData(e);
						for (var i = 0; i < e.length; i++) t[i] = (e[i] - 128) / 128
					}))
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(34), i(63), i(20), i(3)],
				void 0 === (o = function(t) {
					if (t.supported && !t.global.AudioContext.prototype.createConstantSource) {
						var e = function(t) {
							this.context = t;
							for (var e = t.createBuffer(1, 128, t.sampleRate), i = e.getChannelData(0), n = 0; n < i.length; n++) i[n] = 1;
							this._bufferSource = t.createBufferSource(),
							this._bufferSource.channelCount = 1,
							this._bufferSource.channelCountMode = "explicit",
							this._bufferSource.buffer = e,
							this._bufferSource.loop = !0;
							var o = this._output = t.createGain();
							this.offset = o.gain,
							this._bufferSource.connect(o)
						};
						e.prototype.start = function(t) {
							return this._bufferSource.start(t),
							this
						},
						e.prototype.stop = function(t) {
							return this._bufferSource.stop(t),
							this
						},
						e.prototype.connect = function() {
							return this._output.connect.apply(this._output, arguments),
							this
						},
						e.prototype.disconnect = function() {
							return this._output.disconnect.apply(this._output, arguments),
							this
						},
						AudioContext.prototype.createConstantSource = function() {
							return new e(this)
						},
						t.Context.prototype.createConstantSource = function() {
							return new e(this)
						}
					}
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(34)],
				void 0 === (o = function(t) {
					if (t.supported && !t.global.AudioContext.prototype._native_createWaveShaper) {
						var e = navigator.userAgent.toLowerCase();
						if (e.includes("safari") && !e.includes("chrome")) {
							var i = function(t) {
								for (var e in this._internalNode = this.input = this.output = t._native_createWaveShaper(), this._curve = null, this._internalNode) this._defineProperty(this._internalNode, e)
							};
							Object.defineProperty(i.prototype, "curve", {
								get: function() {
									return this._curve
								},
								set: function(t) {
									this._curve = t;
									var e = new Float32Array(t.length + 1);
									e.set(t, 1),
									e[0] = t[0],
									this._internalNode.curve = e
								}
							}),
							i.prototype._defineProperty = function(e, i) {
								t.isUndef(this[i]) && Object.defineProperty(this, i, {
									get: function() {
										return "function" == typeof e[i] ? e[i].bind(e) : e[i]
									},
									set: function(t) {
										e[i] = t
									}
								})
							},
							t.global.AudioContext.prototype._native_createWaveShaper = t.global.AudioContext.prototype.createWaveShaper,
							t.global.AudioContext.prototype.createWaveShaper = function() {
								return new i(this)
							}
						}
					}
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(46)],
				void 0 === (o = function(t) {
					return t.Midi = function(e, i) {
						if (! (this instanceof t.Midi)) return new t.Midi(e, i);
						t.Frequency.call(this, e, i)
					},
					t.extend(t.Midi, t.Frequency),
					t.Midi.prototype._defaultUnits = "midi",
					t.Midi.prototype._frequencyToUnits = function(e) {
						return t.Frequency.ftom(t.Frequency.prototype._frequencyToUnits.call(this, e))
					},
					t.Midi.prototype._ticksToUnits = function(e) {
						return t.Frequency.ftom(t.Frequency.prototype._ticksToUnits.call(this, e))
					},
					t.Midi.prototype._beatsToUnits = function(e) {
						return t.Frequency.ftom(t.Frequency.prototype._beatsToUnits.call(this, e))
					},
					t.Midi.prototype._secondsToUnits = function(e) {
						return t.Frequency.ftom(t.Frequency.prototype._secondsToUnits.call(this, e))
					},
					t.Midi.prototype.toMidi = function() {
						return this.valueOf()
					},
					t.Midi.prototype.toFrequency = function() {
						return t.Frequency.mtof(this.toMidi())
					},
					t.Midi.prototype.transpose = function(t) {
						return new this.constructor(this.toMidi() + t)
					},
					t.Midi
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(27), i(2)],
				void 0 === (o = function(t) {
					"use strict";
					return t.UserMedia = function() {
						var e = t.defaults(arguments, ["volume"], t.UserMedia);
						t.AudioNode.call(this),
						this._mediaStream = null,
						this._stream = null,
						this._device = null,
						this._volume = this.output = new t.Volume(e.volume),
						this.volume = this._volume.volume,
						this._readOnly("volume"),
						this.mute = e.mute
					},
					t.extend(t.UserMedia, t.AudioNode),
					t.UserMedia.defaults = {
						volume: 0,
						mute: !1
					},
					t.UserMedia.prototype.open = function(e) {
						return this.state === t.State.Started && this.close(),
						t.UserMedia.enumerateDevices().then(function(i) {
							var n;
							if (t.isNumber(e)) n = i[e];
							else if (! (n = i.find(function(t) {
								return t.label === e || t.deviceId === e
							})) && i.length > 0) n = i[0];
							else if (!n && t.isDefined(e)) throw new Error("Tone.UserMedia: no matching device: " + e);
							this._device = n;
							var o = {
								audio: {
									echoCancellation: !1,
									sampleRate: this.context.sampleRate,
									noiseSuppression: !1,
									mozNoiseSuppression: !1
								}
							};
							return n && (o.audio.deviceId = n.deviceId),
							navigator.mediaDevices.getUserMedia(o).then(function(t) {
								return this._stream || (this._stream = t, this._mediaStream = this.context.createMediaStreamSource(t), this._mediaStream.connect(this.output)),
								this
							}.bind(this))
						}.bind(this))
					},
					t.UserMedia.prototype.close = function() {
						return this._stream && (this._stream.getAudioTracks().forEach(function(t) {
							t.stop()
						}), this._stream = null, this._mediaStream.disconnect(), this._mediaStream = null),
						this._device = null,
						this
					},
					t.UserMedia.enumerateDevices = function() {
						return navigator.mediaDevices.enumerateDevices().then(function(t) {
							return t.filter(function(t) {
								return "audioinput" === t.kind
							})
						})
					},
					Object.defineProperty(t.UserMedia.prototype, "state", {
						get: function() {
							return this._stream && this._stream.active ? t.State.Started: t.State.Stopped
						}
					}),
					Object.defineProperty(t.UserMedia.prototype, "deviceId", {
						get: function() {
							if (this._device) return this._device.deviceId
						}
					}),
					Object.defineProperty(t.UserMedia.prototype, "groupId", {
						get: function() {
							if (this._device) return this._device.groupId
						}
					}),
					Object.defineProperty(t.UserMedia.prototype, "label", {
						get: function() {
							if (this._device) return this._device.label
						}
					}),
					Object.defineProperty(t.UserMedia.prototype, "mute", {
						get: function() {
							return this._volume.mute
						},
						set: function(t) {
							this._volume.mute = t
						}
					}),
					t.UserMedia.prototype.dispose = function() {
						return t.AudioNode.prototype.dispose.call(this),
						this.close(),
						this._writable("volume"),
						this._volume.dispose(),
						this._volume = null,
						this.volume = null,
						this
					},
					Object.defineProperty(t.UserMedia, "supported", {
						get: function() {
							return t.isDefined(navigator.mediaDevices) && t.isFunction(navigator.mediaDevices.getUserMedia)
						}
					}),
					t.UserMedia
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(67), i(27), i(2)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Players = function(e) {
						var i = Array.prototype.slice.call(arguments);
						i.shift();
						var n = t.defaults(i, ["onload"], t.Players);
						for (var o in t.AudioNode.call(this, n), this._volume = this.output = new t.Volume(n.volume), this.volume = this._volume.volume, this._readOnly("volume"), this._volume.output.output.channelCount = 2, this._volume.output.output.channelCountMode = "explicit", this.mute = n.mute, this._players = {},
						this._loadingCount = 0, this._fadeIn = n.fadeIn, this._fadeOut = n.fadeOut, e) this._loadingCount++,
						this.add(o, e[o], this._bufferLoaded.bind(this, n.onload))
					},
					t.extend(t.Players, t.AudioNode),
					t.Players.defaults = {
						volume: 0,
						mute: !1,
						onload: t.noOp,
						fadeIn: 0,
						fadeOut: 0
					},
					t.Players.prototype._bufferLoaded = function(t) {
						0 === --this._loadingCount && t && t(this)
					},
					Object.defineProperty(t.Players.prototype, "mute", {
						get: function() {
							return this._volume.mute
						},
						set: function(t) {
							this._volume.mute = t
						}
					}),
					Object.defineProperty(t.Players.prototype, "fadeIn", {
						get: function() {
							return this._fadeIn
						},
						set: function(t) {
							this._fadeIn = t,
							this._forEach(function(e) {
								e.fadeIn = t
							})
						}
					}),
					Object.defineProperty(t.Players.prototype, "fadeOut", {
						get: function() {
							return this._fadeOut
						},
						set: function(t) {
							this._fadeOut = t,
							this._forEach(function(e) {
								e.fadeOut = t
							})
						}
					}),
					Object.defineProperty(t.Players.prototype, "state", {
						get: function() {
							var e = !1;
							return this._forEach(function(i) {
								e = e || i.state === t.State.Started
							}),
							e ? t.State.Started: t.State.Stopped
						}
					}),
					t.Players.prototype.has = function(t) {
						return this._players.hasOwnProperty(t)
					},
					t.Players.prototype.get = function(t) {
						if (this.has(t)) return this._players[t];
						throw new Error("Tone.Players: no player named " + t)
					},
					t.Players.prototype._forEach = function(t) {
						for (var e in this._players) t(this._players[e], e);
						return this
					},
					Object.defineProperty(t.Players.prototype, "loaded", {
						get: function() {
							var t = !0;
							return this._forEach(function(e) {
								t = t && e.loaded
							}),
							t
						}
					}),
					t.Players.prototype.add = function(e, i, n) {
						return this._players[e] = new t.Player(i, n).connect(this.output),
						this._players[e].fadeIn = this._fadeIn,
						this._players[e].fadeOut = this._fadeOut,
						this
					},
					t.Players.prototype.stopAll = function(t) {
						this._forEach(function(e) {
							e.stop(t)
						})
					},
					t.Players.prototype.dispose = function() {
						return t.AudioNode.prototype.dispose.call(this),
						this._volume.dispose(),
						this._volume = null,
						this._writable("volume"),
						this.volume = null,
						this.output = null,
						this._forEach(function(t) {
							t.dispose()
						}),
						this._players = null,
						this
					},
					t.Players
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(6), i(11), i(31)],
				void 0 === (o = function(t) {
					return t.GrainPlayer = function() {
						var e = t.defaults(arguments, ["url", "onload"], t.GrainPlayer);
						t.Source.call(this, e),
						this.buffer = new t.Buffer(e.url, e.onload),
						this._clock = new t.Clock(this._tick.bind(this), e.grainSize),
						this._loopStart = 0,
						this._loopEnd = 0,
						this._activeSources = [],
						this._playbackRate = e.playbackRate,
						this._grainSize = e.grainSize,
						this._overlap = e.overlap,
						this.detune = e.detune,
						this.overlap = e.overlap,
						this.loop = e.loop,
						this.playbackRate = e.playbackRate,
						this.grainSize = e.grainSize,
						this.loopStart = e.loopStart,
						this.loopEnd = e.loopEnd,
						this.reverse = e.reverse,
						this._clock.on("stop", this._onstop.bind(this))
					},
					t.extend(t.GrainPlayer, t.Source),
					t.GrainPlayer.defaults = {
						onload: t.noOp,
						overlap: .1,
						grainSize: .2,
						playbackRate: 1,
						detune: 0,
						loop: !1,
						loopStart: 0,
						loopEnd: 0,
						reverse: !1
					},
					t.GrainPlayer.prototype._start = function(e, i, n) {
						i = t.defaultArg(i, 0),
						i = this.toSeconds(i),
						e = this.toSeconds(e),
						this._offset = i,
						this._clock.start(e),
						n && this.stop(e + this.toSeconds(n))
					},
					t.GrainPlayer.prototype._stop = function(t) {
						this._clock.stop(t)
					},
					t.GrainPlayer.prototype._onstop = function(t) {
						this._activeSources.forEach(function(e) {
							e.fadeOut = 0,
							e.stop(t)
						})
					},
					t.GrainPlayer.prototype._tick = function(e) {
						if (!this.loop && this._offset > this.buffer.duration) this.stop(e);
						else {
							var i = this._offset < this._overlap ? 0 : this._overlap,
							n = new t.BufferSource({
								buffer: this.buffer,
								fadeIn: i,
								fadeOut: this._overlap,
								loop: this.loop,
								loopStart: this._loopStart,
								loopEnd: this._loopEnd,
								playbackRate: t.intervalToFrequencyRatio(this.detune / 100)
							}).connect(this.output);
							n.start(e, this._offset),
							this._offset += this.grainSize,
							n.stop(e + this.grainSize / this.playbackRate),
							this._activeSources.push(n),
							n.onended = function() {
								var t = this._activeSources.indexOf(n); - 1 !== t && this._activeSources.splice(t, 1)
							}.bind(this)
						}
					},
					Object.defineProperty(t.GrainPlayer.prototype, "playbackRate", {
						get: function() {
							return this._playbackRate
						},
						set: function(t) {
							this._playbackRate = t,
							this.grainSize = this._grainSize
						}
					}),
					Object.defineProperty(t.GrainPlayer.prototype, "loopStart", {
						get: function() {
							return this._loopStart
						},
						set: function(t) {
							this._loopStart = this.toSeconds(t)
						}
					}),
					Object.defineProperty(t.GrainPlayer.prototype, "loopEnd", {
						get: function() {
							return this._loopEnd
						},
						set: function(t) {
							this._loopEnd = this.toSeconds(t)
						}
					}),
					Object.defineProperty(t.GrainPlayer.prototype, "reverse", {
						get: function() {
							return this.buffer.reverse
						},
						set: function(t) {
							this.buffer.reverse = t
						}
					}),
					Object.defineProperty(t.GrainPlayer.prototype, "grainSize", {
						get: function() {
							return this._grainSize
						},
						set: function(t) {
							this._grainSize = this.toSeconds(t),
							this._clock.frequency.value = this._playbackRate / this._grainSize
						}
					}),
					Object.defineProperty(t.GrainPlayer.prototype, "overlap", {
						get: function() {
							return this._overlap
						},
						set: function(t) {
							this._overlap = this.toSeconds(t)
						}
					}),
					Object.defineProperty(t.GrainPlayer.prototype, "loaded", {
						get: function() {
							return this.buffer.loaded
						}
					}),
					t.GrainPlayer.prototype.dispose = function() {
						return t.Source.prototype.dispose.call(this),
						this.buffer.dispose(),
						this.buffer = null,
						this._clock.dispose(),
						this._clock = null,
						this._activeSources.forEach(function(t) {
							t.dispose()
						}),
						this._activeSources = null,
						this
					},
					t.GrainPlayer
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(16), i(1), i(45)],
				void 0 === (o = function(t) {
					return t.TransportTimelineSignal = function() {
						t.Signal.apply(this, arguments),
						this.output = this._outputSig = new t.Signal(this._initialValue),
						this._lastVal = this.value,
						this._synced = t.Transport.scheduleRepeat(this._onTick.bind(this), "1i"),
						this._bindAnchorValue = this._anchorValue.bind(this),
						t.Transport.on("start stop pause", this._bindAnchorValue),
						this._events.memory = 1 / 0
					},
					t.extend(t.TransportTimelineSignal, t.Signal),
					t.TransportTimelineSignal.prototype._onTick = function(e) {
						var i = this.getValueAtTime(t.Transport.seconds);
						this._lastVal !== i && (this._lastVal = i, this._outputSig.linearRampToValueAtTime(i, e))
					},
					t.TransportTimelineSignal.prototype._anchorValue = function(e) {
						var i = this.getValueAtTime(t.Transport.seconds);
						return this._lastVal = i,
						this._outputSig.cancelScheduledValues(e),
						this._outputSig.setValueAtTime(i, e),
						this
					},
					t.TransportTimelineSignal.prototype.getValueAtTime = function(e) {
						return e = t.TransportTime(e),
						t.Signal.prototype.getValueAtTime.call(this, e)
					},
					t.TransportTimelineSignal.prototype.setValueAtTime = function(e, i) {
						return i = t.TransportTime(i),
						t.Signal.prototype.setValueAtTime.call(this, e, i),
						this
					},
					t.TransportTimelineSignal.prototype.linearRampToValueAtTime = function(e, i) {
						return i = t.TransportTime(i),
						t.Signal.prototype.linearRampToValueAtTime.call(this, e, i),
						this
					},
					t.TransportTimelineSignal.prototype.exponentialRampToValueAtTime = function(e, i) {
						return i = t.TransportTime(i),
						t.Signal.prototype.exponentialRampToValueAtTime.call(this, e, i),
						this
					},
					t.TransportTimelineSignal.prototype.setTargetAtTime = function(e, i, n) {
						return i = t.TransportTime(i),
						t.Signal.prototype.setTargetAtTime.call(this, e, i, n),
						this
					},
					t.TransportTimelineSignal.prototype.cancelScheduledValues = function(e) {
						return e = t.TransportTime(e),
						t.Signal.prototype.cancelScheduledValues.call(this, e),
						this
					},
					t.TransportTimelineSignal.prototype.setValueCurveAtTime = function(e, i, n, o) {
						return i = t.TransportTime(i),
						n = t.TransportTime(n),
						t.Signal.prototype.setValueCurveAtTime.call(this, e, i, n, o),
						this
					},
					t.TransportTimelineSignal.prototype.cancelAndHoldAtTime = function(e) {
						return t.Signal.prototype.cancelAndHoldAtTime.call(this, t.TransportTime(e))
					},
					t.TransportTimelineSignal.prototype.dispose = function() {
						t.Transport.clear(this._synced),
						t.Transport.off("start stop pause", this._syncedCallback),
						this._events.cancel(0),
						t.Signal.prototype.dispose.call(this),
						this._outputSig.dispose(),
						this._outputSig = null
					},
					t.TransportTimelineSignal
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(29), i(5)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Normalize = function(e, i) {
						t.SignalBase.call(this),
						this._inputMin = t.defaultArg(e, 0),
						this._inputMax = t.defaultArg(i, 1),
						this._sub = this.input = new t.Add(0),
						this._div = this.output = new t.Multiply(1),
						this._sub.connect(this._div),
						this._setRange()
					},
					t.extend(t.Normalize, t.SignalBase),
					Object.defineProperty(t.Normalize.prototype, "min", {
						get: function() {
							return this._inputMin
						},
						set: function(t) {
							this._inputMin = t,
							this._setRange()
						}
					}),
					Object.defineProperty(t.Normalize.prototype, "max", {
						get: function() {
							return this._inputMax
						},
						set: function(t) {
							this._inputMax = t,
							this._setRange()
						}
					}),
					t.Normalize.prototype._setRange = function() {
						this._sub.value = -this._inputMin,
						this._div.value = 1 / (this._inputMax - this._inputMin)
					},
					t.Normalize.prototype.dispose = function() {
						return t.SignalBase.prototype.dispose.call(this),
						this._sub.dispose(),
						this._sub = null,
						this._div.dispose(),
						this._div = null,
						this
					},
					t.Normalize
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(7), i(1)],
				void 0 === (o = function(t) {
					"use strict";
					return t.GainToAudio = function() {
						t.SignalBase.call(this),
						this._norm = this.input = this.output = new t.WaveShaper(function(t) {
							return 2 * Math.abs(t) - 1
						})
					},
					t.extend(t.GainToAudio, t.SignalBase),
					t.GainToAudio.prototype.dispose = function() {
						return t.SignalBase.prototype.dispose.call(this),
						this._norm.dispose(),
						this._norm = null,
						this
					},
					t.GainToAudio
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0)],
				void 0 === (o = function(t) {
					t.supported && (OscillatorNode.prototype.setPeriodicWave || (OscillatorNode.prototype.setPeriodicWave = OscillatorNode.prototype.setWaveTable), AudioContext.prototype.createPeriodicWave || (AudioContext.prototype.createPeriodicWave = AudioContext.prototype.createWaveTable))
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(21), i(79), i(31)],
				void 0 === (o = function(t) {
					return t.Sampler = function(e) {
						var i = Array.prototype.slice.call(arguments);
						i.shift();
						var n = t.defaults(i, ["onload", "baseUrl"], t.Sampler);
						t.Instrument.call(this, n);
						var o = {};
						for (var s in e) if (t.isNote(s)) o[t.Frequency(s).toMidi()] = e[s];
						else {
							if (isNaN(parseFloat(s))) throw new Error("Tone.Sampler: url keys must be the note's pitch");
							o[s] = e[s]
						}
						this._buffers = new t.Buffers(o, n.onload, n.baseUrl),
						this._activeSources = {},
						this.attack = n.attack,
						this.release = n.release,
						this.curve = n.curve
					},
					t.extend(t.Sampler, t.Instrument),
					t.Sampler.defaults = {
						attack: 0,
						release: .1,
						onload: t.noOp,
						baseUrl: "",
						curve: "exponential"
					},
					t.Sampler.prototype._findClosest = function(t) {
						for (var e = 0; e < 96;) {
							if (this._buffers.has(t + e)) return - e;
							if (this._buffers.has(t - e)) return e;
							e++
						}
						return null
					},
					t.Sampler.prototype.triggerAttack = function(e, i, n) {
						this.log("triggerAttack", e, i, n),
						Array.isArray(e) || (e = [e]);
						for (var o = 0; o < e.length; o++) {
							var s = t.Frequency(e[o]).toMidi(),
							r = this._findClosest(s);
							if (null !== r) {
								var a = s - r,
								l = this._buffers.get(a),
								u = t.intervalToFrequencyRatio(r),
								c = new t.BufferSource({
									buffer: l,
									playbackRate: u,
									fadeIn: this.attack,
									fadeOut: this.release,
									curve: this.curve
								}).connect(this.output);
								c.start(i, 0, l.duration / u, n),
								t.isArray(this._activeSources[s]) || (this._activeSources[s] = []),
								this._activeSources[s].push(c),
								c.onended = function() {
									if (this._activeSources && this._activeSources[s]) {
										var t = this._activeSources[s].indexOf(c); - 1 !== t && this._activeSources[s].splice(t, 1)
									}
								}.bind(this)
							}
						}
						return this
					},
					t.Sampler.prototype.triggerRelease = function(e, i) {
						this.log("triggerRelease", e, i),
						Array.isArray(e) || (e = [e]);
						for (var n = 0; n < e.length; n++) {
							var o = t.Frequency(e[n]).toMidi();
							if (this._activeSources[o] && this._activeSources[o].length) {
								var s = this._activeSources[o].shift();
								i = this.toSeconds(i),
								s.stop(i)
							}
						}
						return this
					},
					t.Sampler.prototype.releaseAll = function(t) {
						for (var e in t = this.toSeconds(t), this._activeSources) for (var i = this._activeSources[e]; i.length;) i.shift().stop(t);
						return this
					},
					t.Sampler.prototype.sync = function() {
						return this._syncMethod("triggerAttack", 1),
						this._syncMethod("triggerRelease", 1),
						this
					},
					t.Sampler.prototype.triggerAttackRelease = function(e, i, n, o) {
						if (n = this.toSeconds(n), this.triggerAttack(e, n, o), t.isArray(i) && t.isArray(e)) for (var s = 0; s < e.length; s++) {
							var r = i[Math.min(s, i.length - 1)];
							this.triggerRelease(e[s], n + this.toSeconds(r))
						} else this.triggerRelease(e, n + this.toSeconds(i));
						return this
					},
					t.Sampler.prototype.add = function(e, i, n) {
						if (t.isNote(e)) {
							var o = t.Frequency(e).toMidi();
							this._buffers.add(o, i, n)
						} else {
							if (isNaN(parseFloat(e))) throw new Error("Tone.Sampler: note must be the note's pitch. Instead got " + e);
							this._buffers.add(e, i, n)
						}
					},
					Object.defineProperty(t.Sampler.prototype, "loaded", {
						get: function() {
							return this._buffers.loaded
						}
					}),
					t.Sampler.prototype.dispose = function() {
						for (var e in t.Instrument.prototype.dispose.call(this), this._buffers.dispose(), this._buffers = null, this._activeSources) this._activeSources[e].forEach(function(t) {
							t.dispose()
						});
						return this._activeSources = null,
						this
					},
					t.Sampler
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(38), i(6)],
				void 0 === (o = function(t) {
					"use strict";
					return t.PolySynth = function() {
						var e = t.defaults(arguments, ["polyphony", "voice"], t.PolySynth);
						t.Instrument.call(this, e),
						(e = t.defaultArg(e, t.Instrument.defaults)).polyphony = Math.min(t.PolySynth.MAX_POLYPHONY, e.polyphony),
						this.voices = new Array(e.polyphony),
						this.assert(e.polyphony > 0, "polyphony must be greater than 0"),
						this.detune = new t.Signal(e.detune, t.Type.Cents),
						this._readOnly("detune");
						for (var i = 0; i < e.polyphony; i++) {
							var n = new e.voice(arguments[2], arguments[3]);
							if (! (n instanceof t.Monophonic)) throw new Error("Synth constructor must be instance of Tone.Monophonic");
							this.voices[i] = n,
							n.index = i,
							n.connect(this.output),
							n.hasOwnProperty("detune") && this.detune.connect(n.detune)
						}
					},
					t.extend(t.PolySynth, t.Instrument),
					t.PolySynth.defaults = {
						polyphony: 4,
						volume: 0,
						detune: 0,
						voice: t.Synth
					},
					t.PolySynth.prototype._getClosestVoice = function(e, i) {
						return this.voices.find(function(n) {
							if (Math.abs(n.frequency.getValueAtTime(e) - t.Frequency(i)) < 1e-4 && n.getLevelAtTime(e) > 1e-5) return n
						}) || this.voices.slice().sort(function(t, i) {
							var n = t.getLevelAtTime(e + this.blockTime),
							o = i.getLevelAtTime(e + this.blockTime);
							return n < 1e-5 && (n = 0),
							o < 1e-5 && (o = 0),
							n - o
						}.bind(this))[0]
					},
					t.PolySynth.prototype.triggerAttack = function(t, e, i) {
						return Array.isArray(t) || (t = [t]),
						e = this.toSeconds(e),
						t.forEach(function(t) {
							var n = this._getClosestVoice(e, t);
							n.triggerAttack(t, e, i),
							this.log("triggerAttack", n.index, t)
						}.bind(this)),
						this
					},
					t.PolySynth.prototype.triggerRelease = function(t, e) {
						return Array.isArray(t) || (t = [t]),
						e = this.toSeconds(e),
						t.forEach(function(t) {
							var i = this._getClosestVoice(e, t);
							this.log("triggerRelease", i.index, t),
							i.triggerRelease(e)
						}.bind(this)),
						this
					},
					t.PolySynth.prototype.triggerAttackRelease = function(e, i, n, o) {
						if (n = this.toSeconds(n), this.triggerAttack(e, n, o), t.isArray(i) && t.isArray(e)) for (var s = 0; s < e.length; s++) {
							var r = i[Math.min(s, i.length - 1)];
							this.triggerRelease(e[s], n + this.toSeconds(r))
						} else this.triggerRelease(e, n + this.toSeconds(i));
						return this
					},
					t.PolySynth.prototype.sync = function() {
						return this._syncMethod("triggerAttack", 1),
						this._syncMethod("triggerRelease", 1),
						this
					},
					t.PolySynth.prototype.set = function(t, e, i) {
						for (var n = 0; n < this.voices.length; n++) this.voices[n].set(t, e, i);
						return this
					},
					t.PolySynth.prototype.get = function(t) {
						return this.voices[0].get(t)
					},
					t.PolySynth.prototype.releaseAll = function(t) {
						return t = this.toSeconds(t),
						this.voices.forEach(function(e) {
							e.triggerRelease(t)
						}),
						this
					},
					t.PolySynth.prototype.dispose = function() {
						return t.Instrument.prototype.dispose.call(this),
						this.voices.forEach(function(t) {
							t.dispose()
						}),
						this._writable("detune"),
						this.detune.dispose(),
						this.detune = null,
						this.voices = null,
						this
					},
					t.PolySynth.MAX_POLYPHONY = 20,
					t.PolySynth
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(21), i(39), i(53)],
				void 0 === (o = function(t) {
					"use strict";
					return t.PluckSynth = function(e) {
						e = t.defaultArg(e, t.PluckSynth.defaults),
						t.Instrument.call(this, e),
						this._noise = new t.Noise("pink"),
						this.attackNoise = e.attackNoise,
						this._lfcf = new t.LowpassCombFilter({
							resonance: e.resonance,
							dampening: e.dampening
						}),
						this.resonance = this._lfcf.resonance,
						this.dampening = this._lfcf.dampening,
						this._noise.connect(this._lfcf),
						this._lfcf.connect(this.output),
						this._readOnly(["resonance", "dampening"])
					},
					t.extend(t.PluckSynth, t.Instrument),
					t.PluckSynth.defaults = {
						attackNoise: 1,
						dampening: 4e3,
						resonance: .7
					},
					t.PluckSynth.prototype.triggerAttack = function(t, e) {
						t = this.toFrequency(t),
						e = this.toSeconds(e);
						var i = 1 / t;
						return this._lfcf.delayTime.setValueAtTime(i, e),
						this._noise.start(e),
						this._noise.stop(e + i * this.attackNoise),
						this
					},
					t.PluckSynth.prototype.dispose = function() {
						return t.Instrument.prototype.dispose.call(this),
						this._noise.dispose(),
						this._lfcf.dispose(),
						this._noise = null,
						this._lfcf = null,
						this._writable(["resonance", "dampening"]),
						this.dampening = null,
						this.resonance = null,
						this
					},
					t.PluckSynth
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(30), i(41), i(39), i(1), i(9), i(21)],
				void 0 === (o = function(t) {
					"use strict";
					return t.NoiseSynth = function(e) {
						e = t.defaultArg(e, t.NoiseSynth.defaults),
						t.Instrument.call(this, e),
						this.noise = new t.Noise(e.noise),
						this.envelope = new t.AmplitudeEnvelope(e.envelope),
						this.noise.chain(this.envelope, this.output),
						this._readOnly(["noise", "envelope"])
					},
					t.extend(t.NoiseSynth, t.Instrument),
					t.NoiseSynth.defaults = {
						noise: {
							type: "white"
						},
						envelope: {
							attack: .005,
							decay: .1,
							sustain: 0
						}
					},
					t.NoiseSynth.prototype.triggerAttack = function(t, e) {
						return t = this.toSeconds(t),
						this.envelope.triggerAttack(t, e),
						this.noise.start(t),
						0 === this.envelope.sustain && this.noise.stop(t + this.envelope.attack + this.envelope.decay),
						this
					},
					t.NoiseSynth.prototype.triggerRelease = function(t) {
						return this.envelope.triggerRelease(t),
						this.noise.stop(t + this.envelope.release),
						this
					},
					t.NoiseSynth.prototype.sync = function() {
						return this._syncMethod("triggerAttack", 0),
						this._syncMethod("triggerRelease", 0),
						this
					},
					t.NoiseSynth.prototype.triggerAttackRelease = function(t, e, i) {
						return e = this.toSeconds(e),
						t = this.toSeconds(t),
						this.triggerAttack(e, i),
						this.triggerRelease(e + t),
						this
					},
					t.NoiseSynth.prototype.dispose = function() {
						return t.Instrument.prototype.dispose.call(this),
						this._writable(["noise", "envelope"]),
						this.noise.dispose(),
						this.noise = null,
						this.envelope.dispose(),
						this.envelope = null,
						this
					},
					t.NoiseSynth
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(21), i(48), i(9), i(41), i(30), i(3), i(26), i(5)],
				void 0 === (o = function(t) {
					var e = [1, 1.483, 1.932, 2.546, 2.63, 3.897];
					return t.MetalSynth = function(i) {
						i = t.defaultArg(i, t.MetalSynth.defaults),
						t.Instrument.call(this, i),
						this.frequency = new t.Signal(i.frequency, t.Type.Frequency),
						this._oscillators = [],
						this._freqMultipliers = [],
						this._amplitue = new t.Gain(0).connect(this.output),
						this._highpass = new t.Filter({
							type: "highpass",
							Q: -3.0102999566398125
						}).connect(this._amplitue),
						this._octaves = i.octaves,
						this._filterFreqScaler = new t.Scale(i.resonance, 7e3),
						this.envelope = new t.Envelope({
							attack: i.envelope.attack,
							attackCurve: "linear",
							decay: i.envelope.decay,
							sustain: 0,
							release: i.envelope.release
						}).chain(this._filterFreqScaler, this._highpass.frequency),
						this.envelope.connect(this._amplitue.gain);
						for (var n = 0; n < e.length; n++) {
							var o = new t.FMOscillator({
								type: "square",
								modulationType: "square",
								harmonicity: i.harmonicity,
								modulationIndex: i.modulationIndex
							});
							o.connect(this._highpass),
							this._oscillators[n] = o;
							var s = new t.Multiply(e[n]);
							this._freqMultipliers[n] = s,
							this.frequency.chain(s, o.frequency)
						}
						this.octaves = i.octaves
					},
					t.extend(t.MetalSynth, t.Instrument),
					t.MetalSynth.defaults = {
						frequency: 200,
						envelope: {
							attack: .001,
							decay: 1.4,
							release: .2
						},
						harmonicity: 5.1,
						modulationIndex: 32,
						resonance: 4e3,
						octaves: 1.5
					},
					t.MetalSynth.prototype.triggerAttack = function(e, i) {
						return e = this.toSeconds(e),
						i = t.defaultArg(i, 1),
						this.envelope.triggerAttack(e, i),
						this._oscillators.forEach(function(t) {
							t.start(e)
						}),
						0 === this.envelope.sustain && this._oscillators.forEach(function(t) {
							t.stop(e + this.envelope.attack + this.envelope.decay)
						}.bind(this)),
						this
					},
					t.MetalSynth.prototype.triggerRelease = function(t) {
						return t = this.toSeconds(t),
						this.envelope.triggerRelease(t),
						this._oscillators.forEach(function(e) {
							e.stop(t + this.envelope.release)
						}.bind(this)),
						this
					},
					t.MetalSynth.prototype.sync = function() {
						return this._syncMethod("triggerAttack", 0),
						this._syncMethod("triggerRelease", 0),
						this
					},
					t.MetalSynth.prototype.triggerAttackRelease = function(t, e, i) {
						return e = this.toSeconds(e),
						t = this.toSeconds(t),
						this.triggerAttack(e, i),
						this.triggerRelease(e + t),
						this
					},
					Object.defineProperty(t.MetalSynth.prototype, "modulationIndex", {
						get: function() {
							return this._oscillators[0].modulationIndex.value
						},
						set: function(t) {
							for (var e = 0; e < this._oscillators.length; e++) this._oscillators[e].modulationIndex.value = t
						}
					}),
					Object.defineProperty(t.MetalSynth.prototype, "harmonicity", {
						get: function() {
							return this._oscillators[0].harmonicity.value
						},
						set: function(t) {
							for (var e = 0; e < this._oscillators.length; e++) this._oscillators[e].harmonicity.value = t
						}
					}),
					Object.defineProperty(t.MetalSynth.prototype, "resonance", {
						get: function() {
							return this._filterFreqScaler.min
						},
						set: function(t) {
							this._filterFreqScaler.min = t,
							this.octaves = this._octaves
						}
					}),
					Object.defineProperty(t.MetalSynth.prototype, "octaves", {
						get: function() {
							return this._octaves
						},
						set: function(t) {
							this._octaves = t,
							this._filterFreqScaler.max = this._filterFreqScaler.min * Math.pow(2, t)
						}
					}),
					t.MetalSynth.prototype.dispose = function() {
						t.Instrument.prototype.dispose.call(this);
						for (var e = 0; e < this._oscillators.length; e++) this._oscillators[e].dispose(),
						this._freqMultipliers[e].dispose();
						this._oscillators = null,
						this._freqMultipliers = null,
						this.frequency.dispose(),
						this.frequency = null,
						this._filterFreqScaler.dispose(),
						this._filterFreqScaler = null,
						this._amplitue.dispose(),
						this._amplitue = null,
						this.envelope.dispose(),
						this.envelope = null,
						this._highpass.dispose(),
						this._highpass = null
					},
					t.MetalSynth
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(37), i(21), i(30)],
				void 0 === (o = function(t) {
					"use strict";
					return t.MembraneSynth = function(e) {
						e = t.defaultArg(e, t.MembraneSynth.defaults),
						t.Instrument.call(this, e),
						this.oscillator = new t.OmniOscillator(e.oscillator),
						this.envelope = new t.AmplitudeEnvelope(e.envelope),
						this.octaves = e.octaves,
						this.pitchDecay = e.pitchDecay,
						this.oscillator.chain(this.envelope, this.output),
						this._readOnly(["oscillator", "envelope"])
					},
					t.extend(t.MembraneSynth, t.Instrument),
					t.MembraneSynth.defaults = {
						pitchDecay: .05,
						octaves: 10,
						oscillator: {
							type: "sine"
						},
						envelope: {
							attack: .001,
							decay: .4,
							sustain: .01,
							release: 1.4,
							attackCurve: "exponential"
						}
					},
					t.MembraneSynth.prototype.triggerAttack = function(t, e, i) {
						e = this.toSeconds(e);
						var n = (t = this.toFrequency(t)) * this.octaves;
						return this.oscillator.frequency.setValueAtTime(n, e),
						this.oscillator.frequency.exponentialRampToValueAtTime(t, e + this.toSeconds(this.pitchDecay)),
						this.envelope.triggerAttack(e, i),
						this.oscillator.start(e),
						0 === this.envelope.sustain && this.oscillator.stop(e + this.envelope.attack + this.envelope.decay),
						this
					},
					t.MembraneSynth.prototype.triggerRelease = function(t) {
						return t = this.toSeconds(t),
						this.envelope.triggerRelease(t),
						this.oscillator.stop(t + this.envelope.release),
						this
					},
					t.MembraneSynth.prototype.dispose = function() {
						return t.Instrument.prototype.dispose.call(this),
						this._writable(["oscillator", "envelope"]),
						this.oscillator.dispose(),
						this.oscillator = null,
						this.envelope.dispose(),
						this.envelope = null,
						this
					},
					t.MembraneSynth
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(38), i(1), i(5), i(25)],
				void 0 === (o = function(t) {
					"use strict";
					return t.FMSynth = function(e) {
						e = t.defaultArg(e, t.FMSynth.defaults),
						t.Monophonic.call(this, e),
						this._carrier = new t.Synth(e.carrier),
						this._carrier.volume.value = -10,
						this.oscillator = this._carrier.oscillator,
						this.envelope = this._carrier.envelope.set(e.envelope),
						this._modulator = new t.Synth(e.modulator),
						this._modulator.volume.value = -10,
						this.modulation = this._modulator.oscillator.set(e.modulation),
						this.modulationEnvelope = this._modulator.envelope.set(e.modulationEnvelope),
						this.frequency = new t.Signal(440, t.Type.Frequency),
						this.detune = new t.Signal(e.detune, t.Type.Cents),
						this.harmonicity = new t.Multiply(e.harmonicity),
						this.harmonicity.units = t.Type.Positive,
						this.modulationIndex = new t.Multiply(e.modulationIndex),
						this.modulationIndex.units = t.Type.Positive,
						this._modulationNode = new t.Gain(0),
						this.frequency.connect(this._carrier.frequency),
						this.frequency.chain(this.harmonicity, this._modulator.frequency),
						this.frequency.chain(this.modulationIndex, this._modulationNode),
						this.detune.fan(this._carrier.detune, this._modulator.detune),
						this._modulator.connect(this._modulationNode.gain),
						this._modulationNode.connect(this._carrier.frequency),
						this._carrier.connect(this.output),
						this._readOnly(["frequency", "harmonicity", "modulationIndex", "oscillator", "envelope", "modulation", "modulationEnvelope", "detune"])
					},
					t.extend(t.FMSynth, t.Monophonic),
					t.FMSynth.defaults = {
						harmonicity: 3,
						modulationIndex: 10,
						detune: 0,
						oscillator: {
							type: "sine"
						},
						envelope: {
							attack: .01,
							decay: .01,
							sustain: 1,
							release: .5
						},
						modulation: {
							type: "square"
						},
						modulationEnvelope: {
							attack: .5,
							decay: 0,
							sustain: 1,
							release: .5
						}
					},
					t.FMSynth.prototype._triggerEnvelopeAttack = function(t, e) {
						return t = this.toSeconds(t),
						this._carrier._triggerEnvelopeAttack(t, e),
						this._modulator._triggerEnvelopeAttack(t),
						this
					},
					t.FMSynth.prototype._triggerEnvelopeRelease = function(t) {
						return t = this.toSeconds(t),
						this._carrier._triggerEnvelopeRelease(t),
						this._modulator._triggerEnvelopeRelease(t),
						this
					},
					t.FMSynth.prototype.dispose = function() {
						return t.Monophonic.prototype.dispose.call(this),
						this._writable(["frequency", "harmonicity", "modulationIndex", "oscillator", "envelope", "modulation", "modulationEnvelope", "detune"]),
						this._carrier.dispose(),
						this._carrier = null,
						this._modulator.dispose(),
						this._modulator = null,
						this.frequency.dispose(),
						this.frequency = null,
						this.detune.dispose(),
						this.detune = null,
						this.modulationIndex.dispose(),
						this.modulationIndex = null,
						this.harmonicity.dispose(),
						this.harmonicity = null,
						this._modulationNode.dispose(),
						this._modulationNode = null,
						this.oscillator = null,
						this.envelope = null,
						this.modulationEnvelope = null,
						this.modulation = null,
						this
					},
					t.FMSynth
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(68), i(12), i(1), i(5), i(25), i(14)],
				void 0 === (o = function(t) {
					"use strict";
					return t.DuoSynth = function(e) {
						e = t.defaultArg(e, t.DuoSynth.defaults),
						t.Monophonic.call(this, e),
						this.voice0 = new t.MonoSynth(e.voice0),
						this.voice0.volume.value = -10,
						this.voice1 = new t.MonoSynth(e.voice1),
						this.voice1.volume.value = -10,
						this._vibrato = new t.LFO(e.vibratoRate, -50, 50),
						this._vibrato.start(),
						this.vibratoRate = this._vibrato.frequency,
						this._vibratoGain = new t.Gain(e.vibratoAmount, t.Type.Positive),
						this.vibratoAmount = this._vibratoGain.gain,
						this.frequency = new t.Signal(440, t.Type.Frequency),
						this.harmonicity = new t.Multiply(e.harmonicity),
						this.harmonicity.units = t.Type.Positive,
						this.frequency.connect(this.voice0.frequency),
						this.frequency.chain(this.harmonicity, this.voice1.frequency),
						this._vibrato.connect(this._vibratoGain),
						this._vibratoGain.fan(this.voice0.detune, this.voice1.detune),
						this.voice0.connect(this.output),
						this.voice1.connect(this.output),
						this._readOnly(["voice0", "voice1", "frequency", "vibratoAmount", "vibratoRate"])
					},
					t.extend(t.DuoSynth, t.Monophonic),
					t.DuoSynth.defaults = {
						vibratoAmount: .5,
						vibratoRate: 5,
						harmonicity: 1.5,
						voice0: {
							volume: -10,
							portamento: 0,
							oscillator: {
								type: "sine"
							},
							filterEnvelope: {
								attack: .01,
								decay: 0,
								sustain: 1,
								release: .5
							},
							envelope: {
								attack: .01,
								decay: 0,
								sustain: 1,
								release: .5
							}
						},
						voice1: {
							volume: -10,
							portamento: 0,
							oscillator: {
								type: "sine"
							},
							filterEnvelope: {
								attack: .01,
								decay: 0,
								sustain: 1,
								release: .5
							},
							envelope: {
								attack: .01,
								decay: 0,
								sustain: 1,
								release: .5
							}
						}
					},
					t.DuoSynth.prototype._triggerEnvelopeAttack = function(t, e) {
						return t = this.toSeconds(t),
						this.voice0._triggerEnvelopeAttack(t, e),
						this.voice1._triggerEnvelopeAttack(t, e),
						this
					},
					t.DuoSynth.prototype._triggerEnvelopeRelease = function(t) {
						return this.voice0._triggerEnvelopeRelease(t),
						this.voice1._triggerEnvelopeRelease(t),
						this
					},
					t.DuoSynth.prototype.getLevelAtTime = function(t) {
						return (this.voice0.getLevelAtTime(t) + this.voice1.getLevelAtTime(t)) / 2
					},
					t.DuoSynth.prototype.dispose = function() {
						return t.Monophonic.prototype.dispose.call(this),
						this._writable(["voice0", "voice1", "frequency", "vibratoAmount", "vibratoRate"]),
						this.voice0.dispose(),
						this.voice0 = null,
						this.voice1.dispose(),
						this.voice1 = null,
						this.frequency.dispose(),
						this.frequency = null,
						this._vibratoGain.dispose(),
						this._vibratoGain = null,
						this._vibrato = null,
						this.harmonicity.dispose(),
						this.harmonicity = null,
						this.vibratoAmount.dispose(),
						this.vibratoAmount = null,
						this.vibratoRate = null,
						this
					},
					t.DuoSynth
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(38), i(1), i(5), i(25), i(22), i(3)],
				void 0 === (o = function(t) {
					"use strict";
					return t.AMSynth = function(e) {
						e = t.defaultArg(e, t.AMSynth.defaults),
						t.Monophonic.call(this, e),
						this._carrier = new t.Synth,
						this._carrier.volume.value = -10,
						this.oscillator = this._carrier.oscillator.set(e.oscillator),
						this.envelope = this._carrier.envelope.set(e.envelope),
						this._modulator = new t.Synth,
						this._modulator.volume.value = -10,
						this.modulation = this._modulator.oscillator.set(e.modulation),
						this.modulationEnvelope = this._modulator.envelope.set(e.modulationEnvelope),
						this.frequency = new t.Signal(440, t.Type.Frequency),
						this.detune = new t.Signal(e.detune, t.Type.Cents),
						this.harmonicity = new t.Multiply(e.harmonicity),
						this.harmonicity.units = t.Type.Positive,
						this._modulationScale = new t.AudioToGain,
						this._modulationNode = new t.Gain,
						this.frequency.connect(this._carrier.frequency),
						this.frequency.chain(this.harmonicity, this._modulator.frequency),
						this.detune.fan(this._carrier.detune, this._modulator.detune),
						this._modulator.chain(this._modulationScale, this._modulationNode.gain),
						this._carrier.chain(this._modulationNode, this.output),
						this._readOnly(["frequency", "harmonicity", "oscillator", "envelope", "modulation", "modulationEnvelope", "detune"])
					},
					t.extend(t.AMSynth, t.Monophonic),
					t.AMSynth.defaults = {
						harmonicity: 3,
						detune: 0,
						oscillator: {
							type: "sine"
						},
						envelope: {
							attack: .01,
							decay: .01,
							sustain: 1,
							release: .5
						},
						modulation: {
							type: "square"
						},
						modulationEnvelope: {
							attack: .5,
							decay: 0,
							sustain: 1,
							release: .5
						}
					},
					t.AMSynth.prototype._triggerEnvelopeAttack = function(t, e) {
						return t = this.toSeconds(t),
						this._carrier._triggerEnvelopeAttack(t, e),
						this._modulator._triggerEnvelopeAttack(t),
						this
					},
					t.AMSynth.prototype._triggerEnvelopeRelease = function(t) {
						return this._carrier._triggerEnvelopeRelease(t),
						this._modulator._triggerEnvelopeRelease(t),
						this
					},
					t.AMSynth.prototype.dispose = function() {
						return t.Monophonic.prototype.dispose.call(this),
						this._writable(["frequency", "harmonicity", "oscillator", "envelope", "modulation", "modulationEnvelope", "detune"]),
						this._carrier.dispose(),
						this._carrier = null,
						this._modulator.dispose(),
						this._modulator = null,
						this.frequency.dispose(),
						this.frequency = null,
						this.detune.dispose(),
						this.detune = null,
						this.harmonicity.dispose(),
						this.harmonicity = null,
						this._modulationScale.dispose(),
						this._modulationScale = null,
						this._modulationNode.dispose(),
						this._modulationNode = null,
						this.oscillator = null,
						this.envelope = null,
						this.modulationEnvelope = null,
						this.modulation = null,
						this
					},
					t.AMSynth
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(72), i(16)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Sequence = function() {
						var e = t.defaults(arguments, ["callback", "events", "subdivision"], t.Sequence),
						i = e.events;
						if (delete e.events, t.Part.call(this, e), this._subdivision = this.toTicks(e.subdivision), t.isUndef(e.loopEnd) && t.isDefined(i) && (this._loopEnd = i.length * this._subdivision), this._loop = !0, t.isDefined(i)) for (var n = 0; n < i.length; n++) this.add(n, i[n])
					},
					t.extend(t.Sequence, t.Part),
					t.Sequence.defaults = {
						subdivision: "4n"
					},
					Object.defineProperty(t.Sequence.prototype, "subdivision", {
						get: function() {
							return t.Ticks(this._subdivision).toSeconds()
						}
					}),
					t.Sequence.prototype.at = function(e, i) {
						return t.isArray(i) && this.remove(e),
						t.Part.prototype.at.call(this, this._indexTime(e), i)
					},
					t.Sequence.prototype.add = function(e, i) {
						if (null === i) return this;
						if (t.isArray(i)) {
							var n = Math.round(this._subdivision / i.length);
							i = new t.Sequence(this._tick.bind(this), i, t.Ticks(n))
						}
						return t.Part.prototype.add.call(this, this._indexTime(e), i),
						this
					},
					t.Sequence.prototype.remove = function(e, i) {
						return t.Part.prototype.remove.call(this, this._indexTime(e), i),
						this
					},
					t.Sequence.prototype._indexTime = function(e) {
						return e instanceof t.TransportTime ? e: t.Ticks(e * this._subdivision + this.startOffset).toSeconds()
					},
					t.Sequence.prototype.dispose = function() {
						return t.Part.prototype.dispose.call(this),
						this
					},
					t.Sequence
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(73), i(80)],
				void 0 === (o = function(t) {
					return t.Pattern = function() {
						var e = t.defaults(arguments, ["callback", "values", "pattern"], t.Pattern);
						t.Loop.call(this, e),
						this._pattern = new t.CtrlPattern({
							values: e.values,
							type: e.pattern,
							index: e.index
						})
					},
					t.extend(t.Pattern, t.Loop),
					t.Pattern.defaults = {
						pattern: t.CtrlPattern.Type.Up,
						callback: t.noOp,
						values: []
					},
					t.Pattern.prototype._tick = function(t) {
						this.callback(t, this._pattern.value),
						this._pattern.next()
					},
					Object.defineProperty(t.Pattern.prototype, "index", {
						get: function() {
							return this._pattern.index
						},
						set: function(t) {
							this._pattern.index = t
						}
					}),
					Object.defineProperty(t.Pattern.prototype, "values", {
						get: function() {
							return this._pattern.values
						},
						set: function(t) {
							this._pattern.values = t
						}
					}),
					Object.defineProperty(t.Pattern.prototype, "value", {
						get: function() {
							return this._pattern.value
						}
					}),
					Object.defineProperty(t.Pattern.prototype, "pattern", {
						get: function() {
							return this._pattern.type
						},
						set: function(t) {
							this._pattern.type = t
						}
					}),
					t.Pattern.prototype.dispose = function() {
						t.Loop.prototype.dispose.call(this),
						this._pattern.dispose(),
						this._pattern = null
					},
					t.Pattern
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(8), i(18), i(12)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Vibrato = function() {
						var e = t.defaults(arguments, ["frequency", "depth"], t.Vibrato);
						t.Effect.call(this, e),
						this._delayNode = new t.Delay(0, e.maxDelay),
						this._lfo = new t.LFO({
							type: e.type,
							min: 0,
							max: e.maxDelay,
							frequency: e.frequency,
							phase: -90
						}).start().connect(this._delayNode.delayTime),
						this.frequency = this._lfo.frequency,
						this.depth = this._lfo.amplitude,
						this.depth.value = e.depth,
						this._readOnly(["frequency", "depth"]),
						this.effectSend.chain(this._delayNode, this.effectReturn)
					},
					t.extend(t.Vibrato, t.Effect),
					t.Vibrato.defaults = {
						maxDelay: .005,
						frequency: 5,
						depth: .1,
						type: "sine"
					},
					Object.defineProperty(t.Vibrato.prototype, "type", {
						get: function() {
							return this._lfo.type
						},
						set: function(t) {
							this._lfo.type = t
						}
					}),
					t.Vibrato.prototype.dispose = function() {
						t.Effect.prototype.dispose.call(this),
						this._delayNode.dispose(),
						this._delayNode = null,
						this._lfo.dispose(),
						this._lfo = null,
						this._writable(["frequency", "depth"]),
						this.frequency = null,
						this.depth = null
					},
					t.Vibrato
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(12), i(15)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Tremolo = function() {
						var e = t.defaults(arguments, ["frequency", "depth"], t.Tremolo);
						t.StereoEffect.call(this, e),
						this._lfoL = new t.LFO({
							phase: e.spread,
							min: 1,
							max: 0
						}),
						this._lfoR = new t.LFO({
							phase: e.spread,
							min: 1,
							max: 0
						}),
						this._amplitudeL = new t.Gain,
						this._amplitudeR = new t.Gain,
						this.frequency = new t.Signal(e.frequency, t.Type.Frequency),
						this.depth = new t.Signal(e.depth, t.Type.NormalRange),
						this._readOnly(["frequency", "depth"]),
						this.effectSendL.chain(this._amplitudeL, this.effectReturnL),
						this.effectSendR.chain(this._amplitudeR, this.effectReturnR),
						this._lfoL.connect(this._amplitudeL.gain),
						this._lfoR.connect(this._amplitudeR.gain),
						this.frequency.fan(this._lfoL.frequency, this._lfoR.frequency),
						this.depth.fan(this._lfoR.amplitude, this._lfoL.amplitude),
						this.type = e.type,
						this.spread = e.spread
					},
					t.extend(t.Tremolo, t.StereoEffect),
					t.Tremolo.defaults = {
						frequency: 10,
						type: "sine",
						depth: .5,
						spread: 180
					},
					t.Tremolo.prototype.start = function(t) {
						return this._lfoL.start(t),
						this._lfoR.start(t),
						this
					},
					t.Tremolo.prototype.stop = function(t) {
						return this._lfoL.stop(t),
						this._lfoR.stop(t),
						this
					},
					t.Tremolo.prototype.sync = function(e) {
						return this._lfoL.sync(e),
						this._lfoR.sync(e),
						t.Transport.syncSignal(this.frequency),
						this
					},
					t.Tremolo.prototype.unsync = function() {
						return this._lfoL.unsync(),
						this._lfoR.unsync(),
						t.Transport.unsyncSignal(this.frequency),
						this
					},
					Object.defineProperty(t.Tremolo.prototype, "type", {
						get: function() {
							return this._lfoL.type
						},
						set: function(t) {
							this._lfoL.type = t,
							this._lfoR.type = t
						}
					}),
					Object.defineProperty(t.Tremolo.prototype, "spread", {
						get: function() {
							return this._lfoR.phase - this._lfoL.phase
						},
						set: function(t) {
							this._lfoL.phase = 90 - t / 2,
							this._lfoR.phase = t / 2 + 90
						}
					}),
					t.Tremolo.prototype.dispose = function() {
						return t.StereoEffect.prototype.dispose.call(this),
						this._writable(["frequency", "depth"]),
						this._lfoL.dispose(),
						this._lfoL = null,
						this._lfoR.dispose(),
						this._lfoR = null,
						this._amplitudeL.dispose(),
						this._amplitudeL = null,
						this._amplitudeR.dispose(),
						this._amplitudeR = null,
						this.frequency = null,
						this.depth = null,
						this
					},
					t.Tremolo
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(75), i(1), i(5), i(13)],
				void 0 === (o = function(t) {
					"use strict";
					return t.StereoWidener = function() {
						var e = t.defaults(arguments, ["width"], t.StereoWidener);
						t.MidSideEffect.call(this, e),
						this.width = new t.Signal(e.width, t.Type.NormalRange),
						this._readOnly(["width"]),
						this._twoTimesWidthMid = new t.Multiply(2),
						this._twoTimesWidthSide = new t.Multiply(2),
						this._midMult = new t.Multiply,
						this._twoTimesWidthMid.connect(this._midMult, 0, 1),
						this.midSend.chain(this._midMult, this.midReturn),
						this._oneMinusWidth = new t.Subtract,
						this._oneMinusWidth.connect(this._twoTimesWidthMid),
						this.context.getConstant(1).connect(this._oneMinusWidth, 0, 0),
						this.width.connect(this._oneMinusWidth, 0, 1),
						this._sideMult = new t.Multiply,
						this.width.connect(this._twoTimesWidthSide),
						this._twoTimesWidthSide.connect(this._sideMult, 0, 1),
						this.sideSend.chain(this._sideMult, this.sideReturn)
					},
					t.extend(t.StereoWidener, t.MidSideEffect),
					t.StereoWidener.defaults = {
						width: .5
					},
					t.StereoWidener.prototype.dispose = function() {
						return t.MidSideEffect.prototype.dispose.call(this),
						this._writable(["width"]),
						this.width.dispose(),
						this.width = null,
						this._midMult.dispose(),
						this._midMult = null,
						this._sideMult.dispose(),
						this._sideMult = null,
						this._twoTimesWidthMid.dispose(),
						this._twoTimesWidthMid = null,
						this._twoTimesWidthSide.dispose(),
						this._twoTimesWidthSide = null,
						this._oneMinusWidth.dispose(),
						this._oneMinusWidth = null,
						this
					},
					t.StereoWidener
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(15), i(32), i(3)],
				void 0 === (o = function(t) {
					"use strict";
					return t.StereoFeedbackEffect = function() {
						var e = t.defaults(arguments, ["feedback"], t.FeedbackEffect);
						t.StereoEffect.call(this, e),
						this.feedback = new t.Signal(e.feedback, t.Type.NormalRange),
						this._feedbackL = new t.Gain,
						this._feedbackR = new t.Gain,
						this.effectReturnL.chain(this._feedbackL, this.effectSendL),
						this.effectReturnR.chain(this._feedbackR, this.effectSendR),
						this.feedback.fan(this._feedbackL.gain, this._feedbackR.gain),
						this._readOnly(["feedback"])
					},
					t.extend(t.StereoFeedbackEffect, t.StereoEffect),
					t.StereoFeedbackEffect.prototype.dispose = function() {
						return t.StereoEffect.prototype.dispose.call(this),
						this._writable(["feedback"]),
						this.feedback.dispose(),
						this.feedback = null,
						this._feedbackL.dispose(),
						this._feedbackL = null,
						this._feedbackR.dispose(),
						this._feedbackR = null,
						this
					},
					t.StereoFeedbackEffect
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(78), i(9), i(10), i(39), i(3), i(76)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Reverb = function() {
						var e = t.defaults(arguments, ["decay"], t.Reverb);
						t.Effect.call(this, e),
						this._convolver = this.context.createConvolver(),
						this.decay = e.decay,
						this.preDelay = e.preDelay,
						this.connectEffect(this._convolver)
					},
					t.extend(t.Reverb, t.Effect),
					t.Reverb.defaults = {
						decay: 1.5,
						preDelay: .01
					},
					t.Reverb.prototype.generate = function() {
						return t.Offline(function() {
							var e = new t.Noise,
							i = new t.Noise,
							n = new t.Merge;
							e.connect(n.left),
							i.connect(n.right);
							var o = (new t.Gain).toMaster();
							n.connect(o),
							e.start(0),
							i.start(0),
							o.gain.setValueAtTime(0, 0),
							o.gain.linearRampToValueAtTime(1, this.preDelay),
							o.gain.exponentialApproachValueAtTime(0, this.preDelay, this.decay - this.preDelay)
						}.bind(this), this.decay).then(function(t) {
							return this._convolver.buffer = t.get(),
							this
						}.bind(this))
					},
					t.Reverb.prototype.dispose = function() {
						return t.Effect.prototype.dispose.call(this),
						this._convolver.disconnect(),
						this._convolver = null,
						this
					},
					t.Reverb
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(12), i(23), i(1), i(32), i(18)],
				void 0 === (o = function(t) {
					"use strict";
					return t.PitchShift = function() {
						var e = t.defaults(arguments, ["pitch"], t.PitchShift);
						t.FeedbackEffect.call(this, e),
						this._frequency = new t.Signal(0),
						this._delayA = new t.Delay(0, 1),
						this._lfoA = new t.LFO({
							min: 0,
							max: .1,
							type: "sawtooth"
						}).connect(this._delayA.delayTime),
						this._delayB = new t.Delay(0, 1),
						this._lfoB = new t.LFO({
							min: 0,
							max: .1,
							type: "sawtooth",
							phase: 180
						}).connect(this._delayB.delayTime),
						this._crossFade = new t.CrossFade,
						this._crossFadeLFO = new t.LFO({
							min: 0,
							max: 1,
							type: "triangle",
							phase: 90
						}).connect(this._crossFade.fade),
						this._feedbackDelay = new t.Delay(e.delayTime),
						this.delayTime = this._feedbackDelay.delayTime,
						this._readOnly("delayTime"),
						this._pitch = e.pitch,
						this._windowSize = e.windowSize,
						this._delayA.connect(this._crossFade.a),
						this._delayB.connect(this._crossFade.b),
						this._frequency.fan(this._lfoA.frequency, this._lfoB.frequency, this._crossFadeLFO.frequency),
						this.effectSend.fan(this._delayA, this._delayB),
						this._crossFade.chain(this._feedbackDelay, this.effectReturn);
						var i = this.now();
						this._lfoA.start(i),
						this._lfoB.start(i),
						this._crossFadeLFO.start(i),
						this.windowSize = this._windowSize
					},
					t.extend(t.PitchShift, t.FeedbackEffect),
					t.PitchShift.defaults = {
						pitch: 0,
						windowSize: .1,
						delayTime: 0,
						feedback: 0
					},
					Object.defineProperty(t.PitchShift.prototype, "pitch", {
						get: function() {
							return this._pitch
						},
						set: function(e) {
							this._pitch = e;
							var i = 0;
							e < 0 ? (this._lfoA.min = 0, this._lfoA.max = this._windowSize, this._lfoB.min = 0, this._lfoB.max = this._windowSize, i = t.intervalToFrequencyRatio(e - 1) + 1) : (this._lfoA.min = this._windowSize, this._lfoA.max = 0, this._lfoB.min = this._windowSize, this._lfoB.max = 0, i = t.intervalToFrequencyRatio(e) - 1),
							this._frequency.value = i * (1.2 / this._windowSize)
						}
					}),
					Object.defineProperty(t.PitchShift.prototype, "windowSize", {
						get: function() {
							return this._windowSize
						},
						set: function(t) {
							this._windowSize = this.toSeconds(t),
							this.pitch = this._pitch
						}
					}),
					t.PitchShift.prototype.dispose = function() {
						return t.FeedbackEffect.prototype.dispose.call(this),
						this._frequency.dispose(),
						this._frequency = null,
						this._delayA.disconnect(),
						this._delayA = null,
						this._delayB.disconnect(),
						this._delayB = null,
						this._lfoA.dispose(),
						this._lfoA = null,
						this._lfoB.dispose(),
						this._lfoB = null,
						this._crossFade.dispose(),
						this._crossFade = null,
						this._crossFadeLFO.dispose(),
						this._crossFadeLFO = null,
						this._writable("delayTime"),
						this._feedbackDelay.dispose(),
						this._feedbackDelay = null,
						this.delayTime = null,
						this
					},
					t.PitchShift
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(74), i(1), i(18)],
				void 0 === (o = function(t) {
					"use strict";
					return t.PingPongDelay = function() {
						var e = t.defaults(arguments, ["delayTime", "feedback"], t.PingPongDelay);
						t.StereoXFeedbackEffect.call(this, e),
						this._leftDelay = new t.Delay(0, e.maxDelayTime),
						this._rightDelay = new t.Delay(0, e.maxDelayTime),
						this._rightPreDelay = new t.Delay(0, e.maxDelayTime),
						this.delayTime = new t.Signal(e.delayTime, t.Type.Time),
						this.effectSendL.chain(this._leftDelay, this.effectReturnL),
						this.effectSendR.chain(this._rightPreDelay, this._rightDelay, this.effectReturnR),
						this.delayTime.fan(this._leftDelay.delayTime, this._rightDelay.delayTime, this._rightPreDelay.delayTime),
						this._feedbackLR.disconnect(),
						this._feedbackLR.connect(this._rightDelay),
						this._readOnly(["delayTime"])
					},
					t.extend(t.PingPongDelay, t.StereoXFeedbackEffect),
					t.PingPongDelay.defaults = {
						delayTime: .25,
						maxDelayTime: 1
					},
					t.PingPongDelay.prototype.dispose = function() {
						return t.StereoXFeedbackEffect.prototype.dispose.call(this),
						this._leftDelay.dispose(),
						this._leftDelay = null,
						this._rightDelay.dispose(),
						this._rightDelay = null,
						this._rightPreDelay.dispose(),
						this._rightPreDelay = null,
						this._writable(["delayTime"]),
						this.delayTime.dispose(),
						this.delayTime = null,
						this
					},
					t.PingPongDelay
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(12), i(9), i(15)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Phaser = function() {
						var e = t.defaults(arguments, ["frequency", "octaves", "baseFrequency"], t.Phaser);
						t.StereoEffect.call(this, e),
						this._lfoL = new t.LFO(e.frequency, 0, 1),
						this._lfoR = new t.LFO(e.frequency, 0, 1),
						this._lfoR.phase = 180,
						this._baseFrequency = e.baseFrequency,
						this._octaves = e.octaves,
						this.Q = new t.Signal(e.Q, t.Type.Positive),
						this._filtersL = this._makeFilters(e.stages, this._lfoL, this.Q),
						this._filtersR = this._makeFilters(e.stages, this._lfoR, this.Q),
						this.frequency = this._lfoL.frequency,
						this.frequency.value = e.frequency,
						this.effectSendL.connect(this._filtersL[0]),
						this.effectSendR.connect(this._filtersR[0]),
						this._filtersL[e.stages - 1].connect(this.effectReturnL),
						this._filtersR[e.stages - 1].connect(this.effectReturnR),
						this._lfoL.frequency.connect(this._lfoR.frequency),
						this.baseFrequency = e.baseFrequency,
						this.octaves = e.octaves,
						this._lfoL.start(),
						this._lfoR.start(),
						this._readOnly(["frequency", "Q"])
					},
					t.extend(t.Phaser, t.StereoEffect),
					t.Phaser.defaults = {
						frequency: .5,
						octaves: 3,
						stages: 10,
						Q: 10,
						baseFrequency: 350
					},
					t.Phaser.prototype._makeFilters = function(e, i, n) {
						for (var o = new Array(e), s = 0; s < e; s++) {
							var r = this.context.createBiquadFilter();
							r.type = "allpass",
							n.connect(r.Q),
							i.connect(r.frequency),
							o[s] = r
						}
						return t.connectSeries.apply(t, o),
						o
					},
					Object.defineProperty(t.Phaser.prototype, "octaves", {
						get: function() {
							return this._octaves
						},
						set: function(t) {
							this._octaves = t;
							var e = this._baseFrequency * Math.pow(2, t);
							this._lfoL.max = e,
							this._lfoR.max = e
						}
					}),
					Object.defineProperty(t.Phaser.prototype, "baseFrequency", {
						get: function() {
							return this._baseFrequency
						},
						set: function(t) {
							this._baseFrequency = t,
							this._lfoL.min = t,
							this._lfoR.min = t,
							this.octaves = this._octaves
						}
					}),
					t.Phaser.prototype.dispose = function() {
						t.StereoEffect.prototype.dispose.call(this),
						this._writable(["frequency", "Q"]),
						this.Q.dispose(),
						this.Q = null,
						this._lfoL.dispose(),
						this._lfoL = null,
						this._lfoR.dispose(),
						this._lfoR = null;
						for (var e = 0; e < this._filtersL.length; e++) this._filtersL[e].disconnect(),
						this._filtersL[e] = null;
						this._filtersL = null;
						for (var i = 0; i < this._filtersR.length; i++) this._filtersR[i].disconnect(),
						this._filtersR[i] = null;
						return this._filtersR = null,
						this.frequency = null,
						this
					},
					t.Phaser
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(58), i(15), i(26)],
				void 0 === (o = function(t) {
					"use strict";
					var e = [.06748, .06404, .08212, .09004],
					i = [.773, .802, .753, .733],
					n = [347, 113, 37];
					return t.JCReverb = function() {
						var o = t.defaults(arguments, ["roomSize"], t.JCReverb);
						t.StereoEffect.call(this, o),
						this.roomSize = new t.Signal(o.roomSize, t.Type.NormalRange),
						this._scaleRoomSize = new t.Scale( - .733, .197),
						this._allpassFilters = [],
						this._feedbackCombFilters = [];
						for (var s = 0; s < n.length; s++) {
							var r = this.context.createBiquadFilter();
							r.type = "allpass",
							r.frequency.value = n[s],
							this._allpassFilters.push(r)
						}
						for (var a = 0; a < e.length; a++) {
							var l = new t.FeedbackCombFilter(e[a], .1);
							this._scaleRoomSize.connect(l.resonance),
							l.resonance.value = i[a],
							this._allpassFilters[this._allpassFilters.length - 1].connect(l),
							a < e.length / 2 ? l.connect(this.effectReturnL) : l.connect(this.effectReturnR),
							this._feedbackCombFilters.push(l)
						}
						this.roomSize.connect(this._scaleRoomSize),
						t.connectSeries.apply(t, this._allpassFilters),
						this.effectSendL.connect(this._allpassFilters[0]),
						this.effectSendR.connect(this._allpassFilters[0]),
						this._readOnly(["roomSize"])
					},
					t.extend(t.JCReverb, t.StereoEffect),
					t.JCReverb.defaults = {
						roomSize: .5
					},
					t.JCReverb.prototype.dispose = function() {
						t.StereoEffect.prototype.dispose.call(this);
						for (var e = 0; e < this._allpassFilters.length; e++) this._allpassFilters[e].disconnect(),
						this._allpassFilters[e] = null;
						this._allpassFilters = null;
						for (var i = 0; i < this._feedbackCombFilters.length; i++) this._feedbackCombFilters[i].dispose(),
						this._feedbackCombFilters[i] = null;
						return this._feedbackCombFilters = null,
						this._writable(["roomSize"]),
						this.roomSize.dispose(),
						this.roomSize = null,
						this._scaleRoomSize.dispose(),
						this._scaleRoomSize = null,
						this
					},
					t.JCReverb
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(53), i(15), i(1), i(19), i(10), i(42)],
				void 0 === (o = function(t) {
					"use strict";
					var e = [1557 / 44100, 1617 / 44100, 1491 / 44100, 1422 / 44100, 1277 / 44100, 1356 / 44100, 1188 / 44100, 1116 / 44100],
					i = [225, 556, 441, 341];
					return t.Freeverb = function() {
						var n = t.defaults(arguments, ["roomSize", "dampening"], t.Freeverb);
						t.StereoEffect.call(this, n),
						this.roomSize = new t.Signal(n.roomSize, t.Type.NormalRange),
						this.dampening = new t.Signal(n.dampening, t.Type.Frequency),
						this._combFilters = [],
						this._allpassFiltersL = [],
						this._allpassFiltersR = [];
						for (var o = 0; o < i.length; o++) {
							var s = this.context.createBiquadFilter();
							s.type = "allpass",
							s.frequency.value = i[o],
							this._allpassFiltersL.push(s)
						}
						for (var r = 0; r < i.length; r++) {
							var a = this.context.createBiquadFilter();
							a.type = "allpass",
							a.frequency.value = i[r],
							this._allpassFiltersR.push(a)
						}
						for (var l = 0; l < e.length; l++) {
							var u = new t.LowpassCombFilter(e[l]);
							l < e.length / 2 ? this.effectSendL.chain(u, this._allpassFiltersL[0]) : this.effectSendR.chain(u, this._allpassFiltersR[0]),
							this.roomSize.connect(u.resonance),
							this.dampening.connect(u.dampening),
							this._combFilters.push(u)
						}
						t.connectSeries.apply(t, this._allpassFiltersL),
						t.connectSeries.apply(t, this._allpassFiltersR),
						this._allpassFiltersL[this._allpassFiltersL.length - 1].connect(this.effectReturnL),
						this._allpassFiltersR[this._allpassFiltersR.length - 1].connect(this.effectReturnR),
						this._readOnly(["roomSize", "dampening"])
					},
					t.extend(t.Freeverb, t.StereoEffect),
					t.Freeverb.defaults = {
						roomSize: .7,
						dampening: 3e3
					},
					t.Freeverb.prototype.dispose = function() {
						t.StereoEffect.prototype.dispose.call(this);
						for (var e = 0; e < this._allpassFiltersL.length; e++) this._allpassFiltersL[e].disconnect(),
						this._allpassFiltersL[e] = null;
						this._allpassFiltersL = null;
						for (var i = 0; i < this._allpassFiltersR.length; i++) this._allpassFiltersR[i].disconnect(),
						this._allpassFiltersR[i] = null;
						this._allpassFiltersR = null;
						for (var n = 0; n < this._combFilters.length; n++) this._combFilters[n].dispose(),
						this._combFilters[n] = null;
						return this._combFilters = null,
						this._writable(["roomSize", "dampening"]),
						this.roomSize.dispose(),
						this.roomSize = null,
						this.dampening.dispose(),
						this.dampening = null,
						this
					},
					t.Freeverb
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(32), i(1), i(18)],
				void 0 === (o = function(t) {
					"use strict";
					return t.FeedbackDelay = function() {
						var e = t.defaults(arguments, ["delayTime", "feedback"], t.FeedbackDelay);
						t.FeedbackEffect.call(this, e),
						this._delayNode = new t.Delay(e.delayTime, e.maxDelay),
						this.delayTime = this._delayNode.delayTime,
						this.connectEffect(this._delayNode),
						this._readOnly(["delayTime"])
					},
					t.extend(t.FeedbackDelay, t.FeedbackEffect),
					t.FeedbackDelay.defaults = {
						delayTime: .25,
						maxDelay: 1
					},
					t.FeedbackDelay.prototype.dispose = function() {
						return t.FeedbackEffect.prototype.dispose.call(this),
						this._delayNode.dispose(),
						this._delayNode = null,
						this._writable(["delayTime"]),
						this.delayTime = null,
						this
					},
					t.FeedbackDelay
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(8), i(7)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Distortion = function() {
						var e = t.defaults(arguments, ["distortion"], t.Distortion);
						t.Effect.call(this, e),
						this._shaper = new t.WaveShaper(4096),
						this._distortion = e.distortion,
						this.connectEffect(this._shaper),
						this.distortion = e.distortion,
						this.oversample = e.oversample
					},
					t.extend(t.Distortion, t.Effect),
					t.Distortion.defaults = {
						distortion: .4,
						oversample: "none"
					},
					Object.defineProperty(t.Distortion.prototype, "distortion", {
						get: function() {
							return this._distortion
						},
						set: function(t) {
							this._distortion = t;
							var e = 100 * t,
							i = Math.PI / 180;
							this._shaper.setMap(function(t) {
								return Math.abs(t) < .001 ? 0 : (3 + e) * t * 20 * i / (Math.PI + e * Math.abs(t))
							})
						}
					}),
					Object.defineProperty(t.Distortion.prototype, "oversample", {
						get: function() {
							return this._shaper.oversample
						},
						set: function(t) {
							this._shaper.oversample = t
						}
					}),
					t.Distortion.prototype.dispose = function() {
						return t.Effect.prototype.dispose.call(this),
						this._shaper.dispose(),
						this._shaper = null,
						this
					},
					t.Distortion
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(12), i(15), i(18)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Chorus = function() {
						var e = t.defaults(arguments, ["frequency", "delayTime", "depth"], t.Chorus);
						t.StereoEffect.call(this, e),
						this._depth = e.depth,
						this._delayTime = e.delayTime / 1e3,
						this._lfoL = new t.LFO({
							frequency: e.frequency,
							min: 0,
							max: 1
						}),
						this._lfoR = new t.LFO({
							frequency: e.frequency,
							min: 0,
							max: 1,
							phase: 180
						}),
						this._delayNodeL = new t.Delay,
						this._delayNodeR = new t.Delay,
						this.frequency = this._lfoL.frequency,
						this.effectSendL.chain(this._delayNodeL, this.effectReturnL),
						this.effectSendR.chain(this._delayNodeR, this.effectReturnR),
						this.effectSendL.connect(this.effectReturnL),
						this.effectSendR.connect(this.effectReturnR),
						this._lfoL.connect(this._delayNodeL.delayTime),
						this._lfoR.connect(this._delayNodeR.delayTime),
						this._lfoL.start(),
						this._lfoR.start(),
						this._lfoL.frequency.connect(this._lfoR.frequency),
						this.depth = this._depth,
						this.frequency.value = e.frequency,
						this.type = e.type,
						this._readOnly(["frequency"]),
						this.spread = e.spread
					},
					t.extend(t.Chorus, t.StereoEffect),
					t.Chorus.defaults = {
						frequency: 1.5,
						delayTime: 3.5,
						depth: .7,
						type: "sine",
						spread: 180
					},
					Object.defineProperty(t.Chorus.prototype, "depth", {
						get: function() {
							return this._depth
						},
						set: function(t) {
							this._depth = t;
							var e = this._delayTime * t;
							this._lfoL.min = Math.max(this._delayTime - e, 0),
							this._lfoL.max = this._delayTime + e,
							this._lfoR.min = Math.max(this._delayTime - e, 0),
							this._lfoR.max = this._delayTime + e
						}
					}),
					Object.defineProperty(t.Chorus.prototype, "delayTime", {
						get: function() {
							return 1e3 * this._delayTime
						},
						set: function(t) {
							this._delayTime = t / 1e3,
							this.depth = this._depth
						}
					}),
					Object.defineProperty(t.Chorus.prototype, "type", {
						get: function() {
							return this._lfoL.type
						},
						set: function(t) {
							this._lfoL.type = t,
							this._lfoR.type = t
						}
					}),
					Object.defineProperty(t.Chorus.prototype, "spread", {
						get: function() {
							return this._lfoR.phase - this._lfoL.phase
						},
						set: function(t) {
							this._lfoL.phase = 90 - t / 2,
							this._lfoR.phase = t / 2 + 90
						}
					}),
					t.Chorus.prototype.dispose = function() {
						return t.StereoEffect.prototype.dispose.call(this),
						this._lfoL.dispose(),
						this._lfoL = null,
						this._lfoR.dispose(),
						this._lfoR = null,
						this._delayNodeL.dispose(),
						this._delayNodeL = null,
						this._delayNodeR.dispose(),
						this._delayNodeR = null,
						this._writable("frequency"),
						this.frequency = null,
						this
					},
					t.Chorus
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(8), i(7)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Chebyshev = function() {
						var e = t.defaults(arguments, ["order"], t.Chebyshev);
						t.Effect.call(this, e),
						this._shaper = new t.WaveShaper(4096),
						this._order = e.order,
						this.connectEffect(this._shaper),
						this.order = e.order,
						this.oversample = e.oversample
					},
					t.extend(t.Chebyshev, t.Effect),
					t.Chebyshev.defaults = {
						order: 1,
						oversample: "none"
					},
					t.Chebyshev.prototype._getCoefficient = function(t, e, i) {
						return i.hasOwnProperty(e) ? i[e] : (i[e] = 0 === e ? 0 : 1 === e ? t: 2 * t * this._getCoefficient(t, e - 1, i) - this._getCoefficient(t, e - 2, i), i[e])
					},
					Object.defineProperty(t.Chebyshev.prototype, "order", {
						get: function() {
							return this._order
						},
						set: function(t) {
							this._order = t;
							for (var e = new Array(4096), i = e.length, n = 0; n < i; ++n) {
								var o = 2 * n / i - 1;
								e[n] = 0 === o ? 0 : this._getCoefficient(o, t, {})
							}
							this._shaper.curve = e
						}
					}),
					Object.defineProperty(t.Chebyshev.prototype, "oversample", {
						get: function() {
							return this._shaper.oversample
						},
						set: function(t) {
							this._shaper.oversample = t
						}
					}),
					t.Chebyshev.prototype.dispose = function() {
						return t.Effect.prototype.dispose.call(this),
						this._shaper.dispose(),
						this._shaper = null,
						this
					},
					t.Chebyshev
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(8), i(13), i(77)],
				void 0 === (o = function(t) {
					"use strict";
					return t.BitCrusher = function() {
						var e = t.defaults(arguments, ["bits"], t.BitCrusher);
						t.Effect.call(this, e);
						var i = 1 / Math.pow(2, e.bits - 1);
						this._subtract = new t.Subtract,
						this._modulo = new t.Modulo(i),
						this._bits = e.bits,
						this.effectSend.fan(this._subtract, this._modulo),
						this._modulo.connect(this._subtract, 0, 1),
						this._subtract.connect(this.effectReturn)
					},
					t.extend(t.BitCrusher, t.Effect),
					t.BitCrusher.defaults = {
						bits: 4
					},
					Object.defineProperty(t.BitCrusher.prototype, "bits", {
						get: function() {
							return this._bits
						},
						set: function(t) {
							this._bits = t;
							var e = 1 / Math.pow(2, t - 1);
							this._modulo.value = e
						}
					}),
					t.BitCrusher.prototype.dispose = function() {
						return t.Effect.prototype.dispose.call(this),
						this._subtract.dispose(),
						this._subtract = null,
						this._modulo.dispose(),
						this._modulo = null,
						this
					},
					t.BitCrusher
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(57), i(42), i(8), i(9)],
				void 0 === (o = function(t) {
					"use strict";
					return t.AutoWah = function() {
						var e = t.defaults(arguments, ["baseFrequency", "octaves", "sensitivity"], t.AutoWah);
						t.Effect.call(this, e),
						this.follower = new t.Follower(e.follower),
						this._sweepRange = new t.ScaleExp(0, 1, .5),
						this._baseFrequency = e.baseFrequency,
						this._octaves = e.octaves,
						this._inputBoost = new t.Gain,
						this._bandpass = new t.Filter({
							rolloff: -48,
							frequency: 0,
							Q: e.Q
						}),
						this._peaking = new t.Filter(0, "peaking"),
						this._peaking.gain.value = e.gain,
						this.gain = this._peaking.gain,
						this.Q = this._bandpass.Q,
						this.effectSend.chain(this._inputBoost, this.follower, this._sweepRange),
						this._sweepRange.connect(this._bandpass.frequency),
						this._sweepRange.connect(this._peaking.frequency),
						this.effectSend.chain(this._bandpass, this._peaking, this.effectReturn),
						this._setSweepRange(),
						this.sensitivity = e.sensitivity,
						this._readOnly(["gain", "Q"])
					},
					t.extend(t.AutoWah, t.Effect),
					t.AutoWah.defaults = {
						baseFrequency: 100,
						octaves: 6,
						sensitivity: 0,
						Q: 2,
						gain: 2,
						follower: {
							attack: .3,
							release: .5
						}
					},
					Object.defineProperty(t.AutoWah.prototype, "octaves", {
						get: function() {
							return this._octaves
						},
						set: function(t) {
							this._octaves = t,
							this._setSweepRange()
						}
					}),
					Object.defineProperty(t.AutoWah.prototype, "baseFrequency", {
						get: function() {
							return this._baseFrequency
						},
						set: function(t) {
							this._baseFrequency = t,
							this._setSweepRange()
						}
					}),
					Object.defineProperty(t.AutoWah.prototype, "sensitivity", {
						get: function() {
							return t.gainToDb(1 / this._inputBoost.gain.value)
						},
						set: function(e) {
							this._inputBoost.gain.value = 1 / t.dbToGain(e)
						}
					}),
					t.AutoWah.prototype._setSweepRange = function() {
						this._sweepRange.min = this._baseFrequency,
						this._sweepRange.max = Math.min(this._baseFrequency * Math.pow(2, this._octaves), this.context.sampleRate / 2)
					},
					t.AutoWah.prototype.dispose = function() {
						return t.Effect.prototype.dispose.call(this),
						this.follower.dispose(),
						this.follower = null,
						this._sweepRange.dispose(),
						this._sweepRange = null,
						this._bandpass.dispose(),
						this._bandpass = null,
						this._peaking.dispose(),
						this._peaking = null,
						this._inputBoost.dispose(),
						this._inputBoost = null,
						this._writable(["gain", "Q"]),
						this.gain = null,
						this.Q = null,
						this
					},
					t.AutoWah
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(8), i(12), i(60)],
				void 0 === (o = function(t) {
					"use strict";
					return t.AutoPanner = function() {
						var e = t.defaults(arguments, ["frequency"], t.AutoPanner);
						t.Effect.call(this, e),
						this._lfo = new t.LFO({
							frequency: e.frequency,
							amplitude: e.depth,
							min: -1,
							max: 1
						}),
						this.depth = this._lfo.amplitude,
						this._panner = new t.Panner,
						this.frequency = this._lfo.frequency,
						this.connectEffect(this._panner),
						this._lfo.connect(this._panner.pan),
						this.type = e.type,
						this._readOnly(["depth", "frequency"])
					},
					t.extend(t.AutoPanner, t.Effect),
					t.AutoPanner.defaults = {
						frequency: 1,
						type: "sine",
						depth: 1
					},
					t.AutoPanner.prototype.start = function(t) {
						return this._lfo.start(t),
						this
					},
					t.AutoPanner.prototype.stop = function(t) {
						return this._lfo.stop(t),
						this
					},
					t.AutoPanner.prototype.sync = function(t) {
						return this._lfo.sync(t),
						this
					},
					t.AutoPanner.prototype.unsync = function() {
						return this._lfo.unsync(),
						this
					},
					Object.defineProperty(t.AutoPanner.prototype, "type", {
						get: function() {
							return this._lfo.type
						},
						set: function(t) {
							this._lfo.type = t
						}
					}),
					t.AutoPanner.prototype.dispose = function() {
						return t.Effect.prototype.dispose.call(this),
						this._lfo.dispose(),
						this._lfo = null,
						this._panner.dispose(),
						this._panner = null,
						this._writable(["depth", "frequency"]),
						this.frequency = null,
						this.depth = null,
						this
					},
					t.AutoPanner
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(8), i(12), i(9)],
				void 0 === (o = function(t) {
					"use strict";
					return t.AutoFilter = function() {
						var e = t.defaults(arguments, ["frequency", "baseFrequency", "octaves"], t.AutoFilter);
						t.Effect.call(this, e),
						this._lfo = new t.LFO({
							frequency: e.frequency,
							amplitude: e.depth
						}),
						this.depth = this._lfo.amplitude,
						this.frequency = this._lfo.frequency,
						this.filter = new t.Filter(e.filter),
						this._octaves = 0,
						this.connectEffect(this.filter),
						this._lfo.connect(this.filter.frequency),
						this.type = e.type,
						this._readOnly(["frequency", "depth"]),
						this.octaves = e.octaves,
						this.baseFrequency = e.baseFrequency
					},
					t.extend(t.AutoFilter, t.Effect),
					t.AutoFilter.defaults = {
						frequency: 1,
						type: "sine",
						depth: 1,
						baseFrequency: 200,
						octaves: 2.6,
						filter: {
							type: "lowpass",
							rolloff: -12,
							Q: 1
						}
					},
					t.AutoFilter.prototype.start = function(t) {
						return this._lfo.start(t),
						this
					},
					t.AutoFilter.prototype.stop = function(t) {
						return this._lfo.stop(t),
						this
					},
					t.AutoFilter.prototype.sync = function(t) {
						return this._lfo.sync(t),
						this
					},
					t.AutoFilter.prototype.unsync = function() {
						return this._lfo.unsync(),
						this
					},
					Object.defineProperty(t.AutoFilter.prototype, "type", {
						get: function() {
							return this._lfo.type
						},
						set: function(t) {
							this._lfo.type = t
						}
					}),
					Object.defineProperty(t.AutoFilter.prototype, "baseFrequency", {
						get: function() {
							return this._lfo.min
						},
						set: function(t) {
							this._lfo.min = this.toFrequency(t),
							this.octaves = this._octaves
						}
					}),
					Object.defineProperty(t.AutoFilter.prototype, "octaves", {
						get: function() {
							return this._octaves
						},
						set: function(t) {
							this._octaves = t,
							this._lfo.max = this.baseFrequency * Math.pow(2, t)
						}
					}),
					t.AutoFilter.prototype.dispose = function() {
						return t.Effect.prototype.dispose.call(this),
						this._lfo.dispose(),
						this._lfo = null,
						this.filter.dispose(),
						this.filter = null,
						this._writable(["frequency", "depth"]),
						this.frequency = null,
						this.depth = null,
						this
					},
					t.AutoFilter
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(23), i(10), i(19), i(1), i(22), i(28)],
				void 0 === (o = function(t) {
					"use strict";
					t.Listener = function() {
						t.call(this),
						this._orientation = [0, 0, 0, 0, 0, 0],
						this._position = [0, 0, 0],
						t.getContext(function() {
							this.set(e.defaults),
							this.context.listener = this
						}.bind(this))
					},
					t.extend(t.Listener),
					t.Listener.defaults = {
						positionX: 0,
						positionY: 0,
						positionZ: 0,
						forwardX: 0,
						forwardY: 0,
						forwardZ: 1,
						upX: 0,
						upY: 1,
						upZ: 0
					},
					t.Listener.prototype.isListener = !0,
					t.Listener.prototype._rampTimeConstant = .01,
					t.Listener.prototype.setPosition = function(t, e, i) {
						if (this.context.rawContext.listener.positionX) {
							var n = this.now();
							this.context.rawContext.listener.positionX.setTargetAtTime(t, n, this._rampTimeConstant),
							this.context.rawContext.listener.positionY.setTargetAtTime(e, n, this._rampTimeConstant),
							this.context.rawContext.listener.positionZ.setTargetAtTime(i, n, this._rampTimeConstant)
						} else this.context.rawContext.listener.setPosition(t, e, i);
						return this._position = Array.prototype.slice.call(arguments),
						this
					},
					t.Listener.prototype.setOrientation = function(t, e, i, n, o, s) {
						if (this.context.rawContext.listener.forwardX) {
							var r = this.now();
							this.context.rawContext.listener.forwardX.setTargetAtTime(t, r, this._rampTimeConstant),
							this.context.rawContext.listener.forwardY.setTargetAtTime(e, r, this._rampTimeConstant),
							this.context.rawContext.listener.forwardZ.setTargetAtTime(i, r, this._rampTimeConstant),
							this.context.rawContext.listener.upX.setTargetAtTime(n, r, this._rampTimeConstant),
							this.context.rawContext.listener.upY.setTargetAtTime(o, r, this._rampTimeConstant),
							this.context.rawContext.listener.upZ.setTargetAtTime(s, r, this._rampTimeConstant)
						} else this.context.rawContext.listener.setOrientation(t, e, i, n, o, s);
						return this._orientation = Array.prototype.slice.call(arguments),
						this
					},
					Object.defineProperty(t.Listener.prototype, "positionX", {
						set: function(t) {
							this._position[0] = t,
							this.setPosition.apply(this, this._position)
						},
						get: function() {
							return this._position[0]
						}
					}),
					Object.defineProperty(t.Listener.prototype, "positionY", {
						set: function(t) {
							this._position[1] = t,
							this.setPosition.apply(this, this._position)
						},
						get: function() {
							return this._position[1]
						}
					}),
					Object.defineProperty(t.Listener.prototype, "positionZ", {
						set: function(t) {
							this._position[2] = t,
							this.setPosition.apply(this, this._position)
						},
						get: function() {
							return this._position[2]
						}
					}),
					Object.defineProperty(t.Listener.prototype, "forwardX", {
						set: function(t) {
							this._orientation[0] = t,
							this.setOrientation.apply(this, this._orientation)
						},
						get: function() {
							return this._orientation[0]
						}
					}),
					Object.defineProperty(t.Listener.prototype, "forwardY", {
						set: function(t) {
							this._orientation[1] = t,
							this.setOrientation.apply(this, this._orientation)
						},
						get: function() {
							return this._orientation[1]
						}
					}),
					Object.defineProperty(t.Listener.prototype, "forwardZ", {
						set: function(t) {
							this._orientation[2] = t,
							this.setOrientation.apply(this, this._orientation)
						},
						get: function() {
							return this._orientation[2]
						}
					}),
					Object.defineProperty(t.Listener.prototype, "upX", {
						set: function(t) {
							this._orientation[3] = t,
							this.setOrientation.apply(this, this._orientation)
						},
						get: function() {
							return this._orientation[3]
						}
					}),
					Object.defineProperty(t.Listener.prototype, "upY", {
						set: function(t) {
							this._orientation[4] = t,
							this.setOrientation.apply(this, this._orientation)
						},
						get: function() {
							return this._orientation[4]
						}
					}),
					Object.defineProperty(t.Listener.prototype, "upZ", {
						set: function(t) {
							this._orientation[5] = t,
							this.setOrientation.apply(this, this._orientation)
						},
						get: function() {
							return this._orientation[5]
						}
					}),
					t.Listener.prototype.dispose = function() {
						return this._orientation = null,
						this._position = null,
						this
					};
					var e = t.Listener;
					return t.Listener = new e,
					t.Context.on("init",
					function(i) {
						i.listener && i.listener.isListener ? t.Listener = i.listener: t.Listener = new e
					}),
					t.Listener
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(24)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Draw = function() {
						t.call(this),
						this._events = new t.Timeline,
						this.expiration = .25,
						this.anticipation = .008,
						this._boundDrawLoop = this._drawLoop.bind(this)
					},
					t.extend(t.Draw),
					t.Draw.prototype.schedule = function(t, e) {
						return this._events.add({
							callback: t,
							time: this.toSeconds(e)
						}),
						1 === this._events.length && requestAnimationFrame(this._boundDrawLoop),
						this
					},
					t.Draw.prototype.cancel = function(t) {
						return this._events.cancel(this.toSeconds(t)),
						this
					},
					t.Draw.prototype._drawLoop = function() {
						for (var e = t.context.currentTime; this._events.length && this._events.peek().time - this.anticipation <= e;) {
							var i = this._events.shift();
							e - i.time <= this.expiration && i.callback()
						}
						this._events.length > 0 && requestAnimationFrame(this._boundDrawLoop)
					},
					t.Draw = new t.Draw,
					t.Draw
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(3)],
				void 0 === (o = function(t) {
					"use strict";
					var e = {};
					return t.prototype.send = function(i, n) {
						e.hasOwnProperty(i) || (e[i] = this.context.createGain()),
						n = t.defaultArg(n, 0);
						var o = new t.Gain(n, t.Type.Decibels);
						return this.connect(o),
						o.connect(e[i]),
						o
					},
					t.prototype.receive = function(t, i) {
						return e.hasOwnProperty(t) || (e[t] = this.context.createGain()),
						e[t].connect(this, 0, i),
						this
					},
					t.Context.on("init",
					function(t) {
						t.buses ? e = t.buses: (e = {},
						t.buses = e)
					}),
					t
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(4)],
				void 0 === (o = function(t) {
					"use strict";
					return t.CtrlRandom = function() {
						var e = t.defaults(arguments, ["min", "max"], t.CtrlRandom);
						t.call(this),
						this.min = e.min,
						this.max = e.max,
						this.integer = e.integer
					},
					t.extend(t.CtrlRandom),
					t.CtrlRandom.defaults = {
						min: 0,
						max: 1,
						integer: !1
					},
					Object.defineProperty(t.CtrlRandom.prototype, "value", {
						get: function() {
							var t = this.toSeconds(this.min),
							e = this.toSeconds(this.max),
							i = Math.random(),
							n = i * t + (1 - i) * e;
							return this.integer && (n = Math.floor(n)),
							n
						}
					}),
					t.CtrlRandom
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0)],
				void 0 === (o = function(t) {
					"use strict";
					return t.CtrlMarkov = function(e, i) {
						t.call(this),
						this.values = t.defaultArg(e, {}),
						this.value = t.defaultArg(i, Object.keys(this.values)[0])
					},
					t.extend(t.CtrlMarkov),
					t.CtrlMarkov.prototype.next = function() {
						if (this.values.hasOwnProperty(this.value)) {
							var e = this.values[this.value];
							if (t.isArray(e)) for (var i = this._getProbDistribution(e), n = Math.random(), o = 0, s = 0; s < i.length; s++) {
								var r = i[s];
								if (n > o && n < o + r) {
									var a = e[s];
									t.isObject(a) ? this.value = a.value: this.value = a
								}
								o += r
							} else this.value = e
						}
						return this.value
					},
					t.CtrlMarkov.prototype._getProbDistribution = function(e) {
						for (var i = [], n = 0, o = !1, s = 0; s < e.length; s++) {
							var r = e[s];
							t.isObject(r) ? (o = !0, i[s] = r.probability) : i[s] = 1 / e.length,
							n += i[s]
						}
						if (o) for (var a = 0; a < i.length; a++) i[a] = i[a] / n;
						return i
					},
					t.CtrlMarkov.prototype.dispose = function() {
						this.values = null
					},
					t.CtrlMarkov
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(4)],
				void 0 === (o = function(t) {
					"use strict";
					return t.CtrlInterpolate = function() {
						var e = t.defaults(arguments, ["values", "index"], t.CtrlInterpolate);
						t.call(this),
						this.values = e.values,
						this.index = e.index
					},
					t.extend(t.CtrlInterpolate),
					t.CtrlInterpolate.defaults = {
						index: 0,
						values: []
					},
					Object.defineProperty(t.CtrlInterpolate.prototype, "value", {
						get: function() {
							var t = this.index;
							t = Math.min(t, this.values.length - 1);
							var e = Math.floor(t),
							i = this.values[e],
							n = this.values[Math.ceil(t)];
							return this._interpolate(t - e, i, n)
						}
					}),
					t.CtrlInterpolate.prototype._interpolate = function(e, i, n) {
						if (t.isArray(i)) {
							for (var o = [], s = 0; s < i.length; s++) o[s] = this._interpolate(e, i[s], n[s]);
							return o
						}
						if (t.isObject(i)) {
							var r = {};
							for (var a in i) r[a] = this._interpolate(e, i[a], n[a]);
							return r
						}
						return (1 - e) * (i = this._toNumber(i)) + e * (n = this._toNumber(n))
					},
					t.CtrlInterpolate.prototype._toNumber = function(e) {
						return t.isNumber(e) ? e: this.toSeconds(e)
					},
					t.CtrlInterpolate.prototype.dispose = function() {
						this.values = null
					},
					t.CtrlInterpolate
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(44), i(2)],
				void 0 === (o = function(t) {
					return t.Waveform = function() {
						var e = t.defaults(arguments, ["size"], t.Waveform);
						e.type = t.Analyser.Type.Waveform,
						t.AudioNode.call(this),
						this._analyser = this.input = this.output = new t.Analyser(e)
					},
					t.extend(t.Waveform, t.AudioNode),
					t.Waveform.defaults = {
						size: 1024
					},
					t.Waveform.prototype.getValue = function() {
						return this._analyser.getValue()
					},
					Object.defineProperty(t.Waveform.prototype, "size", {
						get: function() {
							return this._analyser.size
						},
						set: function(t) {
							this._analyser.size = t
						}
					}),
					t.Waveform.prototype.dispose = function() {
						t.AudioNode.prototype.dispose.call(this),
						this._analyser.dispose(),
						this._analyser = null
					},
					t.Waveform
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(23), i(10), i(19), i(1), i(22), i(28), i(2)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Panner3D = function() {
						var e = t.defaults(arguments, ["positionX", "positionY", "positionZ"], t.Panner3D);
						t.AudioNode.call(this),
						this._panner = this.input = this.output = this.context.createPanner(),
						this._panner.panningModel = e.panningModel,
						this._panner.maxDistance = e.maxDistance,
						this._panner.distanceModel = e.distanceModel,
						this._panner.coneOuterGain = e.coneOuterGain,
						this._panner.coneOuterAngle = e.coneOuterAngle,
						this._panner.coneInnerAngle = e.coneInnerAngle,
						this._panner.refDistance = e.refDistance,
						this._panner.rolloffFactor = e.rolloffFactor,
						this._orientation = [e.orientationX, e.orientationY, e.orientationZ],
						this._position = [e.positionX, e.positionY, e.positionZ],
						this.orientationX = e.orientationX,
						this.orientationY = e.orientationY,
						this.orientationZ = e.orientationZ,
						this.positionX = e.positionX,
						this.positionY = e.positionY,
						this.positionZ = e.positionZ
					},
					t.extend(t.Panner3D, t.AudioNode),
					t.Panner3D.defaults = {
						positionX: 0,
						positionY: 0,
						positionZ: 0,
						orientationX: 0,
						orientationY: 0,
						orientationZ: 0,
						panningModel: "equalpower",
						maxDistance: 1e4,
						distanceModel: "inverse",
						coneOuterGain: 0,
						coneOuterAngle: 360,
						coneInnerAngle: 360,
						refDistance: 1,
						rolloffFactor: 1
					},
					t.Panner3D.prototype._rampTimeConstant = .01,
					t.Panner3D.prototype.setPosition = function(t, e, i) {
						if (this._panner.positionX) {
							var n = this.now();
							this._panner.positionX.setTargetAtTime(t, n, this._rampTimeConstant),
							this._panner.positionY.setTargetAtTime(e, n, this._rampTimeConstant),
							this._panner.positionZ.setTargetAtTime(i, n, this._rampTimeConstant)
						} else this._panner.setPosition(t, e, i);
						return this._position = Array.prototype.slice.call(arguments),
						this
					},
					t.Panner3D.prototype.setOrientation = function(t, e, i) {
						if (this._panner.orientationX) {
							var n = this.now();
							this._panner.orientationX.setTargetAtTime(t, n, this._rampTimeConstant),
							this._panner.orientationY.setTargetAtTime(e, n, this._rampTimeConstant),
							this._panner.orientationZ.setTargetAtTime(i, n, this._rampTimeConstant)
						} else this._panner.setOrientation(t, e, i);
						return this._orientation = Array.prototype.slice.call(arguments),
						this
					},
					Object.defineProperty(t.Panner3D.prototype, "positionX", {
						set: function(t) {
							this._position[0] = t,
							this.setPosition.apply(this, this._position)
						},
						get: function() {
							return this._position[0]
						}
					}),
					Object.defineProperty(t.Panner3D.prototype, "positionY", {
						set: function(t) {
							this._position[1] = t,
							this.setPosition.apply(this, this._position)
						},
						get: function() {
							return this._position[1]
						}
					}),
					Object.defineProperty(t.Panner3D.prototype, "positionZ", {
						set: function(t) {
							this._position[2] = t,
							this.setPosition.apply(this, this._position)
						},
						get: function() {
							return this._position[2]
						}
					}),
					Object.defineProperty(t.Panner3D.prototype, "orientationX", {
						set: function(t) {
							this._orientation[0] = t,
							this.setOrientation.apply(this, this._orientation)
						},
						get: function() {
							return this._orientation[0]
						}
					}),
					Object.defineProperty(t.Panner3D.prototype, "orientationY", {
						set: function(t) {
							this._orientation[1] = t,
							this.setOrientation.apply(this, this._orientation)
						},
						get: function() {
							return this._orientation[1]
						}
					}),
					Object.defineProperty(t.Panner3D.prototype, "orientationZ", {
						set: function(t) {
							this._orientation[2] = t,
							this.setOrientation.apply(this, this._orientation)
						},
						get: function() {
							return this._orientation[2]
						}
					}),
					t.Panner3D._aliasProperty = function(e) {
						Object.defineProperty(t.Panner3D.prototype, e, {
							set: function(t) {
								this._panner[e] = t
							},
							get: function() {
								return this._panner[e]
							}
						})
					},
					t.Panner3D._aliasProperty("panningModel"),
					t.Panner3D._aliasProperty("refDistance"),
					t.Panner3D._aliasProperty("rolloffFactor"),
					t.Panner3D._aliasProperty("distanceModel"),
					t.Panner3D._aliasProperty("coneInnerAngle"),
					t.Panner3D._aliasProperty("coneOuterAngle"),
					t.Panner3D._aliasProperty("coneOuterGain"),
					t.Panner3D._aliasProperty("maxDistance"),
					t.Panner3D.prototype.dispose = function() {
						return t.AudioNode.prototype.dispose.call(this),
						this._panner.disconnect(),
						this._panner = null,
						this._orientation = null,
						this._position = null,
						this
					},
					t.Panner3D
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(59), i(43), i(2)],
				void 0 === (o = function(t) {
					"use strict";
					return t.MultibandCompressor = function(e) {
						t.AudioNode.call(this),
						e = t.defaultArg(arguments, t.MultibandCompressor.defaults),
						this._splitter = this.input = new t.MultibandSplit({
							lowFrequency: e.lowFrequency,
							highFrequency: e.highFrequency
						}),
						this.lowFrequency = this._splitter.lowFrequency,
						this.highFrequency = this._splitter.highFrequency,
						this.output = new t.Gain,
						this.low = new t.Compressor(e.low),
						this.mid = new t.Compressor(e.mid),
						this.high = new t.Compressor(e.high),
						this._splitter.low.chain(this.low, this.output),
						this._splitter.mid.chain(this.mid, this.output),
						this._splitter.high.chain(this.high, this.output),
						this._readOnly(["high", "mid", "low", "highFrequency", "lowFrequency"])
					},
					t.extend(t.MultibandCompressor, t.AudioNode),
					t.MultibandCompressor.defaults = {
						low: t.Compressor.defaults,
						mid: t.Compressor.defaults,
						high: t.Compressor.defaults,
						lowFrequency: 250,
						highFrequency: 2e3
					},
					t.MultibandCompressor.prototype.dispose = function() {
						return t.AudioNode.prototype.dispose.call(this),
						this._splitter.dispose(),
						this._writable(["high", "mid", "low", "highFrequency", "lowFrequency"]),
						this.low.dispose(),
						this.mid.dispose(),
						this.high.dispose(),
						this._splitter = null,
						this.low = null,
						this.mid = null,
						this.high = null,
						this.lowFrequency = null,
						this.highFrequency = null,
						this
					},
					t.MultibandCompressor
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(10), i(2)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Mono = function() {
						t.AudioNode.call(this),
						this.createInsOuts(1, 0),
						this._merge = this.output = new t.Merge,
						this.input.connect(this._merge, 0, 0),
						this.input.connect(this._merge, 0, 1)
					},
					t.extend(t.Mono, t.AudioNode),
					t.Mono.prototype.dispose = function() {
						return t.AudioNode.prototype.dispose.call(this),
						this._merge.dispose(),
						this._merge = null,
						this
					},
					t.Mono
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(52), i(51), i(43), i(2)],
				void 0 === (o = function(t) {
					"use strict";
					return t.MidSideCompressor = function(e) {
						t.AudioNode.call(this),
						e = t.defaultArg(e, t.MidSideCompressor.defaults),
						this._midSideSplit = this.input = new t.MidSideSplit,
						this._midSideMerge = this.output = new t.MidSideMerge,
						this.mid = new t.Compressor(e.mid),
						this.side = new t.Compressor(e.side),
						this._midSideSplit.mid.chain(this.mid, this._midSideMerge.mid),
						this._midSideSplit.side.chain(this.side, this._midSideMerge.side),
						this._readOnly(["mid", "side"])
					},
					t.extend(t.MidSideCompressor, t.AudioNode),
					t.MidSideCompressor.defaults = {
						mid: {
							ratio: 3,
							threshold: -24,
							release: .03,
							attack: .02,
							knee: 16
						},
						side: {
							ratio: 6,
							threshold: -30,
							release: .25,
							attack: .03,
							knee: 10
						}
					},
					t.MidSideCompressor.prototype.dispose = function() {
						return t.AudioNode.prototype.dispose.call(this),
						this._writable(["mid", "side"]),
						this.mid.dispose(),
						this.mid = null,
						this.side.dispose(),
						this.side = null,
						this._midSideSplit.dispose(),
						this._midSideSplit = null,
						this._midSideMerge.dispose(),
						this._midSideMerge = null,
						this
					},
					t.MidSideCompressor
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(44), i(2)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Meter = function() {
						var e = t.defaults(arguments, ["smoothing"], t.Meter);
						t.AudioNode.call(this),
						this.smoothing = e.smoothing,
						this._rms = 0,
						this.input = this.output = this._analyser = new t.Analyser("waveform", 256)
					},
					t.extend(t.Meter, t.AudioNode),
					t.Meter.defaults = {
						smoothing: .8
					},
					t.Meter.prototype.getLevel = function() {
						for (var e = this._analyser.getValue(), i = 0, n = 0; n < e.length; n++) {
							var o = e[n];
							i += o * o
						}
						var s = Math.sqrt(i / e.length);
						return this._rms = Math.max(s, this._rms * this.smoothing),
						t.gainToDb(this._rms)
					},
					t.Meter.prototype.getValue = function() {
						return this._analyser.getValue()[0]
					},
					t.Meter.prototype.dispose = function() {
						return t.AudioNode.prototype.dispose.call(this),
						this._analyser.dispose(),
						this._analyser = null,
						this
					},
					t.Meter
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(43), i(2)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Limiter = function() {
						var e = t.defaults(arguments, ["threshold"], t.Limiter);
						t.AudioNode.call(this),
						this._compressor = this.input = this.output = new t.Compressor({
							attack: .001,
							decay: .001,
							threshold: e.threshold
						}),
						this.threshold = this._compressor.threshold,
						this._readOnly("threshold")
					},
					t.extend(t.Limiter, t.AudioNode),
					t.Limiter.defaults = {
						threshold: -12
					},
					t.Limiter.prototype.dispose = function() {
						return t.AudioNode.prototype.dispose.call(this),
						this._compressor.dispose(),
						this._compressor = null,
						this._writable("threshold"),
						this.threshold = null,
						this
					},
					t.Limiter
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(57), i(88), i(2)],
				void 0 === (o = function(t) {
					"use strict";
					return t.Gate = function() {
						var e = t.defaults(arguments, ["threshold", "smoothing"], t.Gate);
						t.AudioNode.call(this),
						this.createInsOuts(1, 1),
						this._follower = new t.Follower(e.smoothing),
						this._gt = new t.GreaterThan(t.dbToGain(e.threshold)),
						this.input.connect(this.output),
						this.input.chain(this._follower, this._gt, this.output.gain)
					},
					t.extend(t.Gate, t.AudioNode),
					t.Gate.defaults = {
						smoothing: .1,
						threshold: -40
					},
					Object.defineProperty(t.Gate.prototype, "threshold", {
						get: function() {
							return t.gainToDb(this._gt.value)
						},
						set: function(e) {
							this._gt.value = t.dbToGain(e)
						}
					}),
					Object.defineProperty(t.Gate.prototype, "smoothing", {
						get: function() {
							return this._follower.smoothing
						},
						set: function(t) {
							this._follower.smoothing = t
						}
					}),
					t.Gate.prototype.dispose = function() {
						return t.AudioNode.prototype.dispose.call(this),
						this._follower.dispose(),
						this._gt.dispose(),
						this._follower = null,
						this._gt = null,
						this
					},
					t.Gate
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(44), i(2)],
				void 0 === (o = function(t) {
					return t.FFT = function() {
						var e = t.defaults(arguments, ["size"], t.FFT);
						e.type = t.Analyser.Type.FFT,
						t.AudioNode.call(this),
						this._analyser = this.input = this.output = new t.Analyser(e)
					},
					t.extend(t.FFT, t.AudioNode),
					t.FFT.defaults = {
						size: 1024
					},
					t.FFT.prototype.getValue = function() {
						return this._analyser.getValue()
					},
					Object.defineProperty(t.FFT.prototype, "size", {
						get: function() {
							return this._analyser.size
						},
						set: function(t) {
							this._analyser.size = t
						}
					}),
					t.FFT.prototype.dispose = function() {
						t.AudioNode.prototype.dispose.call(this),
						this._analyser.dispose(),
						this._analyser = null
					},
					t.FFT
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(59), i(3), i(2)],
				void 0 === (o = function(t) {
					"use strict";
					return t.EQ3 = function() {
						var e = t.defaults(arguments, ["low", "mid", "high"], t.EQ3);
						t.AudioNode.call(this),
						this.output = new t.Gain,
						this._multibandSplit = this.input = new t.MultibandSplit({
							lowFrequency: e.lowFrequency,
							highFrequency: e.highFrequency
						}),
						this._lowGain = new t.Gain(e.low, t.Type.Decibels),
						this._midGain = new t.Gain(e.mid, t.Type.Decibels),
						this._highGain = new t.Gain(e.high, t.Type.Decibels),
						this.low = this._lowGain.gain,
						this.mid = this._midGain.gain,
						this.high = this._highGain.gain,
						this.Q = this._multibandSplit.Q,
						this.lowFrequency = this._multibandSplit.lowFrequency,
						this.highFrequency = this._multibandSplit.highFrequency,
						this._multibandSplit.low.chain(this._lowGain, this.output),
						this._multibandSplit.mid.chain(this._midGain, this.output),
						this._multibandSplit.high.chain(this._highGain, this.output),
						this._readOnly(["low", "mid", "high", "lowFrequency", "highFrequency"])
					},
					t.extend(t.EQ3, t.AudioNode),
					t.EQ3.defaults = {
						low: 0,
						mid: 0,
						high: 0,
						lowFrequency: 400,
						highFrequency: 2500
					},
					t.EQ3.prototype.dispose = function() {
						return t.AudioNode.prototype.dispose.call(this),
						this._writable(["low", "mid", "high", "lowFrequency", "highFrequency"]),
						this._multibandSplit.dispose(),
						this._multibandSplit = null,
						this.lowFrequency = null,
						this.highFrequency = null,
						this._lowGain.dispose(),
						this._lowGain = null,
						this._midGain.dispose(),
						this._midGain = null,
						this._highGain.dispose(),
						this._highGain = null,
						this.low = null,
						this.mid = null,
						this.high = null,
						this.Q = null,
						this
					},
					t.EQ3
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e, i) {
				var n, o;
				n = [i(0), i(95), i(91), i(2)],
				void 0 === (o = function(t) {
					return t.Channel = function() {
						var e = t.defaults(arguments, ["volume", "pan"], t.PanVol);
						t.AudioNode.call(this, e),
						this._solo = this.input = new t.Solo(e.solo),
						this._panVol = this.output = new t.PanVol({
							pan: e.pan,
							volume: e.volume,
							mute: e.mute
						}),
						this.pan = this._panVol.pan,
						this.volume = this._panVol.volume,
						this._solo.connect(this._panVol),
						this._readOnly(["pan", "volume"])
					},
					t.extend(t.Channel, t.AudioNode),
					t.Channel.defaults = {
						pan: 0,
						volume: 0,
						mute: !1,
						solo: !1
					},
					Object.defineProperty(t.Channel.prototype, "solo", {
						get: function() {
							return this._solo.solo
						},
						set: function(t) {
							this._solo.solo = t
						}
					}),
					Object.defineProperty(t.Channel.prototype, "muted", {
						get: function() {
							return this._solo.muted || this.mute
						}
					}),
					Object.defineProperty(t.Channel.prototype, "mute", {
						get: function() {
							return this._panVol.mute
						},
						set: function(t) {
							this._panVol.mute = t
						}
					}),
					t.Channel.prototype.dispose = function() {
						return t.AudioNode.prototype.dispose.call(this),
						this._writable(["pan", "volume"]),
						this._panVol.dispose(),
						this._panVol = null,
						this.pan = null,
						this.volume = null,
						this._solo.dispose(),
						this._solo = null,
						this
					},
					t.Channel
				}.apply(e, n)) || (t.exports = o)
			},
			function(t, e) {
				t.exports = "13.4.9"
			},
			function(t, e) {
				var i;
				i = function() {
					return this
				} ();
				try {
					i = i || Function("return this")() || (0, eval)("this")
				} catch(t) {
					"object" == typeof window && (i = window)
				}
				t.exports = i
			},
			function(t, e, i) {
				i(30),
				i(44),
				i(152),
				i(43),
				i(23),
				i(47),
				i(151),
				i(58),
				i(150),
				i(9),
				i(57),
				i(41),
				i(149),
				i(12),
				i(148),
				i(53),
				i(10),
				i(147),
				i(146),
				i(51),
				i(52),
				i(145),
				i(144),
				i(59),
				i(60),
				i(143),
				i(95),
				i(89),
				i(91),
				i(19),
				i(27),
				i(142),
				i(141),
				i(140),
				i(80),
				i(139),
				i(2),
				i(11),
				i(79),
				i(138),
				i(86),
				i(20),
				i(18),
				i(137),
				i(35),
				i(3),
				i(84),
				i(136),
				i(40),
				i(78),
				i(62),
				i(14),
				i(24),
				i(33),
				i(16),
				i(55),
				i(83),
				i(135),
				i(134),
				i(133),
				i(132),
				i(131),
				i(130),
				i(76),
				i(129),
				i(8),
				i(128),
				i(32),
				i(127),
				i(126),
				i(75),
				i(125),
				i(124),
				i(123),
				i(122),
				i(15),
				i(121),
				i(120),
				i(74),
				i(119),
				i(118),
				i(50),
				i(73),
				i(72),
				i(117),
				i(116),
				i(115),
				i(114),
				i(113),
				i(21),
				i(112),
				i(111),
				i(25),
				i(68),
				i(110),
				i(109),
				i(108),
				i(107),
				i(38),
				i(96),
				i(81),
				i(34),
				i(63),
				i(97),
				i(66),
				i(106),
				i(92),
				i(98),
				i(90),
				i(29),
				i(22),
				i(93),
				i(105),
				i(88),
				i(87),
				i(77),
				i(5),
				i(94),
				i(104),
				i(61),
				i(26),
				i(42),
				i(1),
				i(36),
				i(13),
				i(85),
				i(103),
				i(7),
				i(28),
				i(70),
				i(31),
				i(69),
				i(48),
				i(102),
				i(39),
				i(37),
				i(17),
				i(82),
				i(67),
				i(101),
				i(49),
				i(71),
				i(6),
				i(56),
				i(100),
				i(46),
				i(99),
				i(54),
				i(65),
				i(64),
				i(45),
				i(4),
				t.exports = i(0)
			}])
		})
	},
	Zx67: function(t, e, i) {
		t.exports = {
		default:
			i("fS6E"),
			__esModule: !0
		}
	},
	Zzip: function(t, e, i) {
		t.exports = {
		default:
			i("/n6Q"),
			__esModule: !0
		}
	},
	aOM9: function(t, e, i) {
		"use strict";
		var n = [{
			title: "",
			desc: "",
			url: "/"
		},
		{
			title: "",
			desc: "",
			url: "/"//标记
		}];
		e.a = n
	},
	ax3d: function(t, e, i) {
		var n = i("e8AB")("keys"),
		o = i("3Eo+");
		t.exports = function(t) {
			return n[t] || (n[t] = o(t))
		}
	},
	b56o: function(t, e, i) {
		"use strict";
		var n = ["bg_default.jpg", "bg_eiffel.jpg", "bg_girl.jpg"];
		n = n.map(function(t) {
			return "/i/pianosimulatoronline/" + t
		}),
		e.a = n
	},
	bIJo: function(t, e, i) {
		"use strict";
		var n = function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				staticClass: "component-page-footer clearfix"
			},
			[t._m(0), t._v(" "), i("ul", {
				staticClass: "footer-ul right-section"
			},
			[t._m(1), t._v("\n      \n    "), t._m(2), t._v("\n      \n    "), i("li", {
				staticClass: "footer-item"
			},
			[i("a", {
				staticClass: "support-txt em",
				attrs: {
					href: "javascript:;"
				},
				on: {
					click: function(e) {
						t.toggleSupportShow()
					}
				}
			},
			/*[t._v("赞赏支持")]), t._v(" "), i("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: t.supportShow,
					expression: "supportShow"
				}],
				staticClass: "popup-container"
			},*/
			[i("div", {
				staticClass: "tab-wrap"
			},
			[i("div", {
				staticClass: "tab",
				class: {
					"active-tab": "WXPAY" == t.payType
				},
				on: {
					click: function(e) {
						t.togglePayType("WXPAY")
					}
				}
			},
			[i("i", {
				staticClass: "icon icon-wxpay"
			})]), t._v(" "), i("div", {
				staticClass: "tab",
				class: {
					"active-tab": "ALIPAY" == t.payType
				},
				on: {
					click: function(e) {
						t.togglePayType("ALIPAY")
					}
				}
			},
			[i("i", {
				staticClass: "icon icon-alipay"
			})])]), t._v(" "), i("div", {
				staticClass: "qrcode-wrap"
			},
			[i("div", {
				staticClass: "money"
			},
			[t._v("¥6.66 鼓励我们")]), t._v(" "), i("img", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: "WXPAY" == t.payType,
					expression: "payType=='WXPAY'"
				}],
				staticClass: "qrcode wxpay",
				attrs: {
					src: t.wxPaySrc
				}
			}), t._v(" "), i("img", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: "ALIPAY" == t.payType,
					expression: "payType=='ALIPAY'"
				}],
				staticClass: "qrcode alipay",
				attrs: {
					src: t.aliPaySrc
				}
			})])])]), t._v("\n     | \n    "), t._m(3)])])
		},
		o = [function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("ul", {
				staticClass: "footer-ul left-section"
			},
			[i("li", {
				staticClass: "footer-item"
			},
			[i("a", {
				attrs: {
					target: "_blank",
					href: "/"//标记
				}
			},
			[i("span", {
				staticStyle: {
					"font-weight": "bold"
				}
			},
			[t._v("")]), t._v("")])]), t._v(""), i("li", {//标记
				staticClass: "footer-item"
			},
			[i("a", {
				attrs: {
					target: "_blank",
					href: "/"
				}
			},
			[t._v("")])])])//标记
		},
		function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("li", {
				staticClass: "footer-item"
			},
			[i("a", {
			},
			[t._v("")])])
		},
		function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("li", {
				staticClass: "footer-item"
			},
			[i("a", {
				staticClass: "info-txt em",
				attrs: {
					target: "_blank",
					href: "/"
				}
			},
			[t._v("")])])
		},
		function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("li", {
				staticClass: "footer-item"
			},
			[i("a", {
				staticClass: "info-txt",
				attrs: {
					target: "_blank",
					href: "/"
				}
			},
			[t._v("")])])//标记
		}],
		s = {
			render: n,
			staticRenderFns: o
		};
		e.a = s
	},
	bRrM: function(t, e, i) {
		"use strict";
		var n = i("7KvD"),
		o = i("FeBl"),
		s = i("evD5"),
		r = i("+E39"),
		a = i("dSzd")("species");
		t.exports = function(t) {
			var e = "function" == typeof o[t] ? o[t] : n[t];
			r && e && !e[a] && s.f(e, a, {
				configurable: !0,
				get: function() {
					return this
				}
			})
		}
	},
	crlp: function(t, e, i) {
		var n = i("7KvD"),
		o = i("FeBl"),
		s = i("O4g8"),
		r = i("Kh4W"),
		a = i("evD5").f;
		t.exports = function(t) {
			var e = o.Symbol || (o.Symbol = s ? {}: n.Symbol || {});
			"_" == t.charAt(0) || t in e || a(e, t, {
				value: r.f(t)
			})
		}
	},
	dNDb: function(t, e) {
		t.exports = function(t) {
			try {
				return {
					e: !1,
					v: t()
				}
			} catch(t) {
				return {
					e: !0,
					v: t
				}
			}
		}
	},
	dSzd: function(t, e, i) {
		var n = i("e8AB")("wks"),
		o = i("3Eo+"),
		s = i("7KvD").Symbol,
		r = "function" == typeof s; (t.exports = function(t) {
			return n[t] || (n[t] = r && s[t] || (r ? s: o)("Symbol." + t))
		}).store = n
	},
	dUU9: function(t, e, i) {
		"use strict";
		function n(t) {
			i("p0jC")
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = i("uLa1"),
		s = i("DJ6k"),
		r = i("VU/8"),
		a = n,
		l = r(o.a, s.a, !1, a, null, null);
		e.
	default = l.exports
	},
	dY0y: function(t, e, i) {
		var n = i("dSzd")("iterator"),
		o = !1;
		try {
			var s = [7][n]();
			s.
			return = function() {
				o = !0
			},
			Array.from(s,
			function() {
				throw 2
			})
		} catch(t) {}
		t.exports = function(t, e) {
			if (!e && !o) return ! 1;
			var i = !1;
			try {
				var s = [7],
				r = s[n]();
				r.next = function() {
					return {
						done: i = !0
					}
				},
				s[n] = function() {
					return r
				},
				t(s)
			} catch(t) {}
			return i
		}
	},
	e6n0: function(t, e, i) {
		var n = i("evD5").f,
		o = i("D2L2"),
		s = i("dSzd")("toStringTag");
		t.exports = function(t, e, i) {
			t && !o(t = i ? t: t.prototype, s) && n(t, s, {
				configurable: !0,
				value: e
			})
		}
	},
	e8AB: function(t, e, i) {
		var n = i("FeBl"),
		o = i("7KvD"),
		s = o["__core-js_shared__"] || (o["__core-js_shared__"] = {}); (t.exports = function(t, e) {
			return s[t] || (s[t] = void 0 !== e ? e: {})
		})("versions", []).push({
			version: n.version,
			mode: i("O4g8") ? "pure": "global",
			copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
		})
	},
	exGp: function(t, e, i) {
		"use strict";
		e.__esModule = !0;
		var n = i("//Fk"),
		o = function(t) {
			return t && t.__esModule ? t: {
			default:
				t
			}
		} (n);
		e.
	default = function(t) {
			return function() {
				var e = t.apply(this, arguments);
				return new o.
			default(function(t, i) {
					function n(s, r) {
						try {
							var a = e[s](r),
							l = a.value
						} catch(t) {
							return void i(t)
						}
						if (!a.done) return o.
					default.resolve(l).then(function(t) {
							n("next", t)
						},
						function(t) {
							n("throw", t)
						});
						t(l)
					}
					return n("next")
				})
			}
		}
	},
	fJUb: function(t, e, i) {
		var n = i("77Pl"),
		o = i("EqjI"),
		s = i("qARP");
		t.exports = function(t, e) {
			if (n(t), o(e) && e.constructor === t) return e;
			var i = s.f(t);
			return (0, i.resolve)(e),
			i.promise
		}
	},
	fS6E: function(t, e, i) {
		i("Kh5d"),
		t.exports = i("FeBl").Object.getPrototypeOf
	},
	fWfb: function(t, e, i) {
		"use strict";
		var n = i("7KvD"),
		o = i("D2L2"),
		s = i("+E39"),
		r = i("kM2E"),
		a = i("880/"),
		l = i("06OY").KEY,
		u = i("S82l"),
		c = i("e8AB"),
		p = i("e6n0"),
		h = i("3Eo+"),
		f = i("dSzd"),
		d = i("Kh4W"),
		y = i("crlp"),
		m = i("Xc4G"),
		g = i("7UMu"),
		_ = i("77Pl"),
		v = i("EqjI"),
		b = i("TcQ7"),
		S = i("MmMw"),
		T = i("X8DO"),
		w = i("Yobk"),
		A = i("Rrel"),
		x = i("LKZe"),
		O = i("evD5"),
		P = i("lktj"),
		k = x.f,
		F = O.f,
		C = A.f,
		D = n.Symbol,
		E = n.JSON,
		U = E && E.stringify,
		M = f("_hidden"),
		R = f("toPrimitive"),
		L = {}.propertyIsEnumerable,
		I = c("symbol-registry"),
		N = c("symbols"),
		q = c("op-symbols"),
		j = Object.prototype,
		G = "function" == typeof D,
		Y = n.QObject,
		B = !Y || !Y.prototype || !Y.prototype.findChild,
		H = s && u(function() {
			return 7 != w(F({},
			"a", {
				get: function() {
					return F(this, "a", {
						value: 7
					}).a
				}
			})).a
		}) ?
		function(t, e, i) {
			var n = k(j, e);
			n && delete j[e],
			F(t, e, i),
			n && t !== j && F(j, e, n)
		}: F,
		W = function(t) {
			var e = N[t] = w(D.prototype);
			return e._k = t,
			e
		},
		V = G && "symbol" == typeof D.iterator ?
		function(t) {
			return "symbol" == typeof t
		}: function(t) {
			return t instanceof D
		},
		z = function(t, e, i) {
			return t === j && z(q, e, i),
			_(t),
			e = S(e, !0),
			_(i),
			o(N, e) ? (i.enumerable ? (o(t, M) && t[M][e] && (t[M][e] = !1), i = w(i, {
				enumerable: T(0, !1)
			})) : (o(t, M) || F(t, M, T(1, {})), t[M][e] = !0), H(t, e, i)) : F(t, e, i)
		},
		J = function(t, e) {
			_(t);
			for (var i, n = m(e = b(e)), o = 0, s = n.length; s > o;) z(t, i = n[o++], e[i]);
			return t
		},
		Q = function(t, e) {
			return void 0 === e ? w(t) : J(w(t), e)
		},
		K = function(t) {
			var e = L.call(this, t = S(t, !0));
			return ! (this === j && o(N, t) && !o(q, t)) && (!(e || !o(this, t) || !o(N, t) || o(this, M) && this[M][t]) || e)
		},
		Z = function(t, e) {
			if (t = b(t), e = S(e, !0), t !== j || !o(N, e) || o(q, e)) {
				var i = k(t, e);
				return ! i || !o(N, e) || o(t, M) && t[M][e] || (i.enumerable = !0),
				i
			}
		},
		X = function(t) {
			for (var e, i = C(b(t)), n = [], s = 0; i.length > s;) o(N, e = i[s++]) || e == M || e == l || n.push(e);
			return n
		},
		$ = function(t) {
			for (var e, i = t === j,
			n = C(i ? q: b(t)), s = [], r = 0; n.length > r;) ! o(N, e = n[r++]) || i && !o(j, e) || s.push(N[e]);
			return s
		};
		G || (D = function() {
			if (this instanceof D) throw TypeError("Symbol is not a constructor!");
			var t = h(arguments.length > 0 ? arguments[0] : void 0),
			e = function(i) {
				this === j && e.call(q, i),
				o(this, M) && o(this[M], t) && (this[M][t] = !1),
				H(this, t, T(1, i))
			};
			return s && B && H(j, t, {
				configurable: !0,
				set: e
			}),
			W(t)
		},
		a(D.prototype, "toString",
		function() {
			return this._k
		}), x.f = Z, O.f = z, i("n0T6").f = A.f = X, i("NpIQ").f = K, i("1kS7").f = $, s && !i("O4g8") && a(j, "propertyIsEnumerable", K, !0), d.f = function(t) {
			return W(f(t))
		}),
		r(r.G + r.W + r.F * !G, {
			Symbol: D
		});
		for (var tt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), et = 0; tt.length > et;) f(tt[et++]);
		for (var it = P(f.store), nt = 0; it.length > nt;) y(it[nt++]);
		r(r.S + r.F * !G, "Symbol", {
			for: function(t) {
				return o(I, t += "") ? I[t] : I[t] = D(t)
			},
			keyFor: function(t) {
				if (!V(t)) throw TypeError(t + " is not a symbol!");
				for (var e in I) if (I[e] === t) return e
			},
			useSetter: function() {
				B = !0
			},
			useSimple: function() {
				B = !1
			}
		}),
		r(r.S + r.F * !G, "Object", {
			create: Q,
			defineProperty: z,
			defineProperties: J,
			getOwnPropertyDescriptor: Z,
			getOwnPropertyNames: X,
			getOwnPropertySymbols: $
		}),
		E && r(r.S + r.F * (!G || u(function() {
			var t = D();
			return "[null]" != U([t]) || "{}" != U({
				a: t
			}) || "{}" != U(Object(t))
		})), "JSON", {
			stringify: function(t) {
				for (var e, i, n = [t], o = 1; arguments.length > o;) n.push(arguments[o++]);
				if (i = e = n[1], (v(e) || void 0 !== t) && !V(t)) return g(e) || (e = function(t, e) {
					if ("function" == typeof i && (e = i.call(this, t, e)), !V(e)) return e
				}),
				n[1] = e,
				U.apply(E, n)
			}
		}),
		D.prototype[R] || i("hJx8")(D.prototype, R, D.prototype.valueOf),
		p(D, "Symbol"),
		p(Math, "Math", !0),
		p(n.JSON, "JSON", !0)
	},
	fZjL: function(t, e, i) {
		t.exports = {
		default:
			i("jFbC"),
			__esModule: !0
		}
	},
	fkB2: function(t, e, i) {
		var n = i("UuGF"),
		o = Math.max,
		s = Math.min;
		t.exports = function(t, e) {
			return t = n(t),
			t < 0 ? o(t + e, 0) : s(t, e)
		}
	},
	gYYM: function(t, e, i) {
		"use strict";
		var n = function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				staticClass: "score-container component-auto-list"
			},
			[i("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: "LIST" == t.currentView,
					expression: "currentView=='LIST'"
				}],
				staticClass: "list-view"
			},
			[t._m(0), t._v(" "), i("ol", {
				staticClass: "list score-list"
			},
			t._l(t.ScoreNum,
			function(e, n) {
				return i("li", {
					key: n,
					staticClass: "list-item score-item"
				},
				[i("span", {
					staticClass: "num"
				},
				[t._v(t._s(n + 1))]), t._v(" "), i("a", {
					attrs: {
						href: "javascript:;"
					},
					on: {
						click: function(i) {
							t.clickScoreItem(e)
						}
					}
				},
				[t._v("\n          " + t._s(e.name) + "\n        ")]), t._v(" "), i("i", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: e.playing,
						expression: "item.playing"
					}],
					staticClass: "pause icon-pause",
					on: {
						click: function(i) {
							t.pauseAutoPlay(e)
						}
					}
				}), t._v(" "), i("span", {
					staticClass: "difficulty-degree"
				},
				t._l(new Array(e.degree),
				function(t, e) {
					return i("i", {
						key: e,
						staticClass: "icon-heartbeat"
					})
				}))])
			})), t._v(" "), t._m(1), t._v(" "), i("ol", {
				staticClass: "list score-list"
			},
			t._l(t.ScoreXml,
			function(e, n) {
				return i("li", {
					key: n,
					staticClass: "list-item score-item"
				},
				[i("span", {
					staticClass: "num"
				},
				[t._v(t._s(n + 1))]), t._v(" "), i("a", {
					attrs: {
						href: "javascript:;"
					},
					on: {
						click: function(i) {
							t.clickXMLScoreItem(e)
						}
					}
				},
				[t._v("\n          " + t._s(e.name) + "\n        ")]), t._v(" "), i("i", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: e.playing,
						expression: "item.playing"
					}],
					staticClass: "pause icon-pause",
					on: {
						click: function(i) {
							t.pauseAutoPlay(e)
						}
					}
				}), t._v(" "), i("span", {
					staticClass: "difficulty-degree"
				},
				t._l(new Array(e.degree),
				function(t, e) {
					return i("i", {
						key: e,
						staticClass: "icon-heartbeat"
					})
				}))])
			}))]), t._v(" "), i("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: "PLAYER" == t.currentView,
					expression: "currentView=='PLAYER'"
				}],
				staticClass: "player-view"
			},
			[t._m(2), t._v(" "), t._m(3), t._v(" "), i("h2", {
				staticClass: "music-name"
			},
			[t._v(t._s(t.playingItem.name))]), t._v(" "), i("div", {
				staticClass: "control-bar"
			},
			[i("a", {
				staticClass: "stop-btn",
				on: {
					click: function(e) {
						e.stopPropagation(),
						t.pauseAutoPlay()
					}
				}
			},
			[t._v("停止")])])])])
		},
		o = [function() {
			var t = this,
			e = t.$createElement,
			n = t._self._c || e;
			return n("p", {
				staticClass: "component-title"
			},
			[n("img", {
				staticClass: "music-img",
				attrs: {
					src: i("EuRD"),
					alt: ""
				}
			}), t._v(" "), n("span", {
				staticClass: "title"
			},
			[t._v("演奏示例")]), t._v(" "), n("span", {
				staticClass: "degree"
			},
			[t._v("热度")])])
		},
		function() {
			var t = this,
			e = t.$createElement,
			n = t._self._c || e;
			return n("p", {
				staticClass: "component-title"
			},
			[n("img", {
				staticClass: "music-img",
				attrs: {
					src: i("LAuN"),
					alt: ""
				}
			}), t._v(" "), n("span", {
				staticClass: "title"
			},
			[t._v("MusicXML实验室"), n("span", {
				staticStyle: {
					"font-size": "12px"
				}
			},
			[t._v(" beta")])])])
		},
		function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				staticClass: "top-bar"
			},
			[i("h2", [t._v("AutoPlayer正在播放")])])
		},
		function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				staticClass: "cd-box"
			},
			[i("div", {
				staticClass: "cd"
			},
			[i("div", {
				staticClass: "cd-inner"
			},
			[t._v("AutoPiano")])])])
		}],
		s = {
			render: n,
			staticRenderFns: o
		};
		e.a = s
	},
	goro: function(t, e, i) {
		var n = i("txxU");
		"string" == typeof n && (n = [[t.i, n, ""]]),
		n.locals && (t.exports = n.locals);
		i("rjj0")("d9749c0e", n, !0, {})
	},
	gsBj: function(t, e, i) {
		e = t.exports = i("FZ+f")(!1),
		e.push([t.i, ".component-random-lyric{width:100%;min-height:40px;padding:5px 0;margin:0 auto;text-align:center}.component-random-lyric .lyric{display:inline;line-height:30px;font-size:18px;font-style:italic;color:#1f6fb5;cursor:pointer;text-shadow:2px 2px 8px #fff}.component-random-lyric .lyric:hover{color:#1295db}", ""])
	},
	h65t: function(t, e, i) {
		var n = i("UuGF"),
		o = i("52gC");
		t.exports = function(t) {
			return function(e, i) {
				var s, r, a = String(o(e)),
				l = n(i),
				u = a.length;
				return l < 0 || l >= u ? t ? "": void 0 : (s = a.charCodeAt(l), s < 55296 || s > 56319 || l + 1 === u || (r = a.charCodeAt(l + 1)) < 56320 || r > 57343 ? t ? a.charAt(l) : s: t ? a.slice(l, l + 2) : r - 56320 + (s - 55296 << 10) + 65536)
			}
		}
	},
	iUbK: function(t, e, i) {
		var n = i("7KvD"),
		o = n.navigator;
		t.exports = o && o.userAgent || ""
	},
	jFbC: function(t, e, i) {
		i("Cdx3"),
		t.exports = i("FeBl").Object.keys
	},
	"jKW+": function(t, e, i) {
		"use strict";
		var n = i("kM2E"),
		o = i("qARP"),
		s = i("dNDb");
		n(n.S, "Promise", {
			try: function(t) {
				var e = o.f(this),
				i = s(t);
				return (i.e ? e.reject: e.resolve)(i.v),
				e.promise
			}
		})
	},
	ja8J: function(t, e, i) {
		"use strict";//演奏示例列表
		var n = [{
			name: "小星星",
			step: "C",
			speed: "100",
			degree: 4,
			playing: !1,
			mainTrack: ["1(1)", " 1(1)", " 5(1)", " 5(1)", " 6(1)", " 6(1)", " 5(2)", " 4(1)", " 4(1)", " 3(1)", " 3(1)", " 2(1)", " 2(1)", " 1(2)", " 5(1)", " 5(1)", " 4(1)", " 4(1)", " 3(1)", " 3(1)", " 2(2)", " 5(1)", " 5(1)", " 4(1)", " 4(1)", " 3(1)", " 3(1)", " 2(2)", " 1(1)", " 1(1)", " 5(1)", " 5(1)", " 6(1)", " 6(1)", " 5(2)", " 4(1)", " 4(1)", " 3(1)", " 3(1)", " 2(1)", " 2(1)", " 1(2)", "1<(1)", "1<(1)", "5<(1)", "5<(1)", "6<(1)", "6<(1)", "5<(2)", "4<(1)", "4<(1)", "3<(1)", "3<(1)", "2<(1)", "2<(1)", "1<(2)", "5<(1)", "5<(1)", "4<(1)", "4<(1)", "3<(1)", "3<(1)", "2<(2)", "5<(1)", "5<(1)", "4<(1)", "4<(1)", "3<(1)", "3<(1)", "2<(2)", "1<(1)", "1<(1)", "5<(1)", "5<(1)", "6<(1)", "6<(1)", "5<(2)", "4<(1)", "4<(1)", "3<(1)", "3<(1)", "2<(1)", "2<(1)", "1<(2)"],
			backingTrack: ["1>(0.5)", "5>(0.5)", "3>(0.5)", "5>(0.5)", "1>(0.5)", "5>(0.5)", "3>(0.5)", "5>(0.5)", "1>(0.5)", "6>(0.5)", "4>(0.5)", "6>(0.5)", "1>(0.5)", "5>(0.5)", "3>(0.5)", "5>(0.5)", "1>(0.5)", "6>(0.5)", "4>(0.5)", "6>(0.5)", "1>(0.5)", "5>(0.5)", "3>(0.5)", "5>(0.5)", "7>>(0.5)", "5>(0.5)", "2>(0.5)", "5>(0.5)", "1>(0.5)", "5>(0.5)", "3>(0.5)", "5>(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", " 1(0.5)", "1>(0.5)", "4>(0.5)", "6>(0.5)", " 1(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", " 1(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", " 1(0.5)", "1>(0.5)", "4>(0.5)", "6>(0.5)", " 1(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", " 1(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "1>(0.5)", "5>(0.5)", "3>(0.5)", "5>(0.5)", "1>(0.5)", "5>(0.5)", "3>(0.5)", "5>(0.5)", "1>(0.5)", "6>(0.5)", "4>(0.5)", "6>(0.5)", "1>(0.5)", "5>(0.5)", "3>(0.5)", "5>(0.5)", "1>(0.5)", "6>(0.5)", "4>(0.5)", "6>(0.5)", "1>(0.5)", "5>(0.5)", "3>(0.5)", "5>(0.5)", "7>>(0.5)", "5>(0.5)", "2>(0.5)", "5>(0.5)", "1>(0.5)", "5>(0.5)", "3>(0.5)", "5>(0.5)", "1(0.75)", "5(0.25)", "3(0.5)", "5(0.5)", "1(0.75)", "5(0.25)", "3(0.5)", "5(0.5)", "1(0.75)", "6(0.25)", "4(0.5)", "6(0.5)", "1(0.75)", "5(0.25)", "3(0.5)", "5(0.5)", "1(0.75)", "6(0.25)", "4(0.5)", "6(0.5)", "1(0.75)", "5(0.25)", "3(0.5)", "5(0.5)", "7>(0.75)", "5(0.25)", "2(0.5)", "5(0.5)", "1(0.75)", "5(0.25)", "3(0.5)", "5(0.5)", "1(0.75)", "3(0.25)", "5(0.5)", "1<(0.5)", "1(0.75)", "4(0.25)", "6(0.5)", "1<(0.5)", "1(0.75)", "3(0.25)", "5(0.5)", "1<(0.5)", "5>(0.75)", "7>(0.25)", "2(0.5)", "5(0.5)", "1(0.75)", "3(0.25)", "5(0.5)", "1<(0.5)", "1(0.75)", "4(0.25)", "6(0.5)", "1<(0.5)", "1(0.75)", "3(0.25)", "5(0.5)", "1<(0.5)", "5>(0.75)", "7>(0.25)", "2(0.5)", "5(0.5)", "1(0.75)", "5(0.25)", "3(0.5)", "5(0.5)", "1(0.75)", "5(0.25)", "3(0.5)", "5(0.5)", "1(0.75)", "6(0.25)", "4(0.5)", "6(0.5)", "1(0.75)", "5(0.25)", "3(0.5)", "5(0.5)", "1(0.75)", "6(0.25)", "4(0.5)", "6(0.5)", "1(0.75)", "5(0.25)", "3(0.5)", "5(0.5)", "7>(0.75)", "5(0.25)", "2(0.5)", "5(0.5)", "1>(2)"]
		},
		{
			name: "童话镇",
			step: "C",
			speed: "80",
			degree: 2,
			playing: !1,
			mainTrack: ["0(0.5)", "7(0.25)", "1<(0.25)", "7(0.75)", "6(2)", "0(0.5)", "7(0.25)", "1<(0.25)", "7(0.75)", "6(0.75)", "5(0.5)", "3(1)", "7(0.25)", "1<(0.25)", "7(0.75)", "6(2)", "0(0.5)", "7(0.25)", "1<(0.25)", "2<(1)", "0(0.5)", "1<(0.5)", "7(1)", "0(0.5)", "6(0.25)", "7(0.25)", "1<(0.25)", "7(0.25)", "1<(0.25)", "7(0.25)", "6(0.5)", "3<(0.25)", "2<(1.25)", "0(0.5)", "6(0.25)", "7(0.25)", "1<(0.25)", "7(0.25)", "1<(0.25)", "7(0.25)", "6(0.5)", "7(0.25)", "3(1.25)", "0(0.5)", "6(0.25)", "7(0.25)", "1<(0.25)", "7(0.25)", "1<(0.25)", "7(0.25)", "6(0.5)", "3<(0.25)", "5<(1.25)", "0(0.5)", "3<(0.25)", "3<(0.25)", "2<(0.25)", "1<(0.25)", "2<(0.25)", "1<(0.25)", "2<(0.5)", "1<(0.25)", "7(1.25)", "0(0.5)", "6(0.25)", "7(0.25)", "1<(0.25)", "7(0.25)", "1<(0.25)", "7(0.25)", "6(0.5)", "3<(0.25)", "2<(1.25)", "0(0.5)", "6(0.25)", "7(0.25)", "1<(0.25)", "7(0.25)", "1<(0.25)", "7(0.25)", "6(0.5)", "7(0.25)", "3(1.25)", "0(0.5)", "6(0.25)", "7(0.25)", "1<(0.25)", "7(0.25)", "1<(0.25)", "7(0.25)", "6(0.5)", "3<(0.25)", "5<(1.25)", "0(0.25)", "3<(0.25)", "3<(0.25)", "5<(0.25)", "4<(0.25)", "4<(0.25)", "4<(0.25)", "4<(0.5)", "3<(0.25)", "4<(0.25)", "4<(0.5)", "3<(0.75)", "0(0.25)", "3<(0.25)", "3<(0.25)", "6<(0.25)", "5<(0.25)", "6<(0.25)", "5<(0.25)", "4<(0.5)", "6<(0.25)", "5<(1.25)", "0(0.25)", "3<(0.25)", "3<(0.25)", "3<(0.25)", "4<(0.25)", "4<(0.25)", "4<(0.25)", "3<(0.25)", "4<(0.25)", "3<(0.25)", "2<(0.25)", "4<(0.5)", "3<(0.75)", "0(0.25)", "3<(0.25)", "3<(0.25)", "6<(0.25)", "5<(0.25)", "6<(0.25)", "5<(0.25)", "4<(0.5)", "6<(0.25)", "5<(1.25)", "0(0.25)", "3<(0.25)", "3<(0.25)", "2<(0.5)", "2<(0.5)", "2<(0.5)", "1<(0.5)", "7(1)", "3<(0.5)", "2<(0.5)", "1<(0.5)", "6(0.5)", "1<(0.5)", "2<(0.5)", "3<(0.5)", "5<(0.5)", "3<(0.5)", "2<(0.5)", "1<(0.5)", "6(0.5)", "6(0.5)", "5(0.5)", "3(1)", "0(0.5)", "1<(0.25)", "7(0.25)", "6(0.5)", "5(0.5)", "6(0.5)", "1<(0.5)", "1<(0.5)", "5<(0.5)", "3<(0.5)", "3<(0.25)", "2<(0.25)", "1<(0.5)", "1<(0.5)", "1<(0.5)", "6(0.5)", "7(1)", "0(0.5)", "3<(0.25)", "2<(0.25)", "3<(0.5)", "2<(0.5)", "3<(0.5)", "5<(0.5)", "6<(0.5)", "5<(0.5)", "5<(0.25)", "5<(0.5)", "3<(0.25)", "6<(0.25)", "5<(0.5)", "4<(0.25)", "5<(0.25)", "4<(0.25)", "5<(0.25)", "4<(0.25)", "3<(0.5)", "0(0.5)", "2<(0.25)", "3<(0.25)", "4<(0.5)", "3<(0.5)", "2<(0.5).", "6(0.25)", "3<(0.5)", "2<(0.25)", "1<(0.5)", "1<(0.25)", "1<(0.25)", "2<(0.25)", "7(0.25)", "7(0.5)", "7(0.25)", "7(0.25)", "7(0.5)", "6(0.5)", "7(0.75)", "3<(0.5)", "2<(0.5)", "1<(0.5)", "6(0.5)", "1<(0.5)", "2<(0.5)", "3<(0.5)", "5<(0.5)", "3<(0.5)", "2<(0.5)", "1<(0.5)", "6(0.5)", "6(0.5)", "5(0.5)", "3(1)", "0(0.5)", "1<(0.25)", "7(0.25)", "6(0.5)", "5(0.5)", "6(0.5)", "1<(0.5)", "1<(0.5)", "5<(0.5)", "3<(0.5)", "3<(0.25)", "2<(0.25)", "0(0.25)", "1<(0.25)", "2<(0.25)", "1<(0.25)", "2<(0.25)", "1<(0.25)", "6(0.25)", "0(0.25)", "7(1)", "3<(0.25)", "2<(0.25)", "3<(0.5)", "2<(0.5)", "3<(0.5)", "5<(0.5)", "6<(0.5)", "5<(0.5)", "5<(0.25)", "5<(0.5)", "3<(0.25)", "6<(0.25)", "5<(0.5)", "4<(0.25)", "5<(0.25)", "4<(0.25)", "5<(0.25)", "4<(0.25)", "3<(0.5)", "0(0.5)", "2<(0.25)", "3<(0.25)", "4<(0.5)", "3<(0.5)", "2<(0.5).", "6(0.25)", "3<(0.5)", "2<(0.25)", "1<(0.5)", "1<(0.25)", "1<(0.25)", "2<(0.25)", "7(0.25)", "7(0.5)", "7(0.25)", "7(0.25)", "7(0.5)", "6(0.5)", "7(0.75)", "5(0.5)", "7(0.5)", "6(1)", "1<(0.5)", "2<(0.5)", "3<(1)", "0(0.5)", "3<(0.25)", "5<(0.25)", "6<(0.25)", "5<(0.25)", "3<(0.25)", "5<(0.25)", "5<(0.25)", "3<(0.25)", "2<(0.25)", "5<(0.25)", "3<(0.25)", "5<(0.25)", "3<(1)", "0(0.5)", "4<(0.75)", "3<(0.25)", "2<(0.5)", "4<(0.5)", "3<(0.5)", "2<(0.5)", "1<(1)", "7(0.75)", "6(0.25)", "7(0.5)", "1<(0.5)", "7(2)"]
		},
		{
			name: "Cannon in D (D大调卡农)",
			step: "D",
			speed: "75",
			degree: 5,
			playing: !1,
			mainTrack: ["0(0.5)", "3(0.5)", "5(0.5)", "1<(0.5)", "0(0.5)", "2(0.5)", "5(0.5)", "7(0.5)", "0(0.5)", "1(0.5)", "3(0.5)", "6(0.5)", "0(0.5)", "7>(0.5)", "3(0.5)", "5(0.5)", "0(0.5)", "6>(0.5)", "1(0.5)", "4(0.5)", "0(0.5)", "5>(0.5)", "1(0.5)", "3(0.5)", "0(0.5)", "6>(0.5)", "1(0.5)", "4(0.5)", "0(0.5)", "7>(0.5)", "2(0.5)", "5(0.5)", "3<(2)", "2<(2)", "1<(2)", "7(2)", "6(2)", "5(2)", "6(2)", "7(2)", "1<(2)", "7(2)", "6(2)", "5(2)", "4(2)", "3(2)", "4(2)", "2(2)", "1<(0.5)", "7(0.5)", "1<(0.5)", "1(0.5)", "7>(0.5)", "5(0.5)", "2(0.5)", "3(0.5)", "1(0.5)", "1<(0.5)", "7(0.5)", "6(0.5)", "7(0.5)", "3<(0.5)", "5<(0.5)", "6<(0.5)", "4<(0.5)", "3<(0.5)", "2<(0.5)", "4<(0.5)", "3<(0.5)", "2<(0.5)", "1<(0.5)", "7(0.5)", "6(0.5)", "5(0.5)", "4(0.5)", "3(0.5)", "2(0.5)", "4(0.5)", "3(0.5)", "2(0.5)", "1(0.5)", "2(0.5)", "3(0.5)", "4(0.5)", "5(0.5)", "2(0.5)", "5(0.5)", "4(0.5)", "3(0.5)", "6(0.5)", "5(0.5)", "4(0.5)", "5(0.5)", "4(0.5)", "3(0.5)", "2(0.5)", "1(0.5)", "6>(0.5)", "6(0.5)", "7(0.5)", "1<(0.5)", "7(0.5)", "6(0.5)", "5(0.5)", "4(0.5)", "3(0.5)", "2(0.5)", "6(0.5)", "5(0.5)", "6(0.5)", "5(0.5)", "4(0.5)", "3(1)", "3<(1)", "2<(2)", "0(1)", "1<(1)", "3<(2)", "1<(1.5)", "1<(0.5)", "0(1)", "0(1)", "1<(1)", "4<(1)", "2<(1)", "5<(1)", "5<(0.5)", "3<(0.25)", "4<(0.25)", "5<(0.5)", "3<(0.25)", "4<(0.25)", "5<(0.25)", "5(0.25)", "6(0.25)", "7(0.25)", "1<(0.25)", "2<(0.25)", "3<(0.25)", "4<(0.25)", "3<(0.5)", "1<(0.25)", "2<(0.25)", "3<(0.5)", "3(0.25)", "4(0.25)", "5(0.25)", "6(0.25)", "5(0.25)", "4(0.25)", "5(0.25)", "3(0.25)", "4(0.25)", "5(0.25)", "4(0.5)", "6(0.25)", "5(0.25)", "4(0.5)", "3(0.25)", "2(0.25)", "3(0.25)", "2(0.25)", "1(0.25)", "2(0.25)", "3(0.25)", "4(0.25)", "5(0.25)", "6(0.25)", "4(0.5)", "6(0.25)", "5(0.25)", "6(0.5)", "7(0.25)", "1<(0.25)", "5(0.25)", "6(0.25)", "7(0.25)", "1<(0.25)", "2<(0.25)", "3<(0.25)", "4<(0.25)", "5<(0.25)", "5<(0.5)", "3<(0.25)", "4<(0.25)", "5<(0.5)", "3<(0.25)", "4<(0.25)", "5<(0.25)", "5(0.25)", "6(0.25)", "7(0.25)", "1<(0.25)", "2<(0.25)", "3<(0.25)", "4<(0.25)", "3<(0.5)", "1<(0.25)", "2<(0.25)", "3<(0.5)", "3(0.25)", "4(0.25)", "5(0.25)", "6(0.25)", "5(0.25)", "4(0.25)", "5(0.25)", "3(0.25)", "4(0.25)", "5(0.25)", "4(0.5)", "6(0.25)", "5(0.25)", "4(0.5)", "3(0.25)", "2(0.25)", "3(0.25)", "2(0.25)", "1(0.25)", "2(0.25)", "3(0.25)", "4(0.25)", "5(0.25)", "6(0.25)", "4(0.5)", "6(0.25)", "5(0.25)", "6(0.5)", "7(0.25)", "1<(0.25)", "5(0.25)", "6(0.25)", "7(0.25)", "1<(0.25)", "2<(0.25)", "3<(0.25)", "4<(0.25)", "5<(0.25)", "3<(0.5)", "1<(0.25)", "2<(0.25)", "3<(0.5)", "2<(0.25)", "1<(0.25)", "2<(0.25)", "7(0.25)", "1<(0.25)", "2<(0.25)", "3<(0.25)", "2<(0.25)", "1<(0.25)", "7(0.25)", "1<(0.5)", "6(0.25)", "7(0.25)", "1<(0.5)", "1(0.25)", "2(0.25)", "3(0.25)", "4(0.25)", "3(0.25)", "2(0.25)", "3(0.25)", "1<(0.25)", "7(0.25)", "1<(0.25)", "6(0.5)", "1<(0.25)", "7(0.25)", "6(0.5)", "5(0.25)", "4(0.25)", "5(0.25)", "4(0.25)", "3(0.25)", "4(0.25)", "5(0.25)", "6(0.25)", "7(0.25)", "1<(0.25)", "6(0.5)", "1<(0.25)", "7(0.25)", "1<(0.5)", "7(0.25)", "6(0.25)", "7(0.25)", "1<(0.25)", "2<(0.25)", "1<(0.25)", "7(0.25)", "1<(0.25)", "6(0.25)", "7(0.25)", "3<(0.5)", "3(0.5)", "4(0.5)", "3(0.5)", "2(0.5)", "2<(0.5)", "3<(0.5)", "2<(0.5)", "1<(0.5)", "3(0.5)", "1(0.5)", "6(0.5)", "5(0.5)", "5>(0.5)", "4>(0.5)", "5>(0.5)", "6>(0.5)", "6(0.5)", "7(0.5)", "6(0.5)", "5(0.5)", "5>(0.5)", "4>(0.5)", "5>(0.5)", "6>(0.5)", "6(0.5)", "5(0.5)", "6(0.5)", "7(0.5)", "7>(0.5)", "6>(0.5)", "7>(0.5)", "3(0.5)", "1<(0.25)", "7(0.25)", "1<(0.5)", "3(0.5)", "5(0.5)", "5(0.25)", "6(0.25)", "7(0.5)", "5(0.5)", "3(0.5)", "1<(0.25)", "2<(0.25)", "3<(0.5)", "1<(0.5)", "3<(0.5)", "3<(0.25)", "2<(0.25)", "1<(0.5)", "7(0.5)", "6(0.5)", "6(0.25)", "5(0.25)", "6(0.5)", "7(0.5)", "1<(0.5)", "3<(0.25)", "2<(0.25)", "1<(0.5)", "3<(0.5)", "4<(0.5)", "1<(0.25)", "7(0.25)", "6(0.5)", "6(0.5)", "5(1)", "5(0.5)", "4(0.5)", "3(1.5)", "3<(0.5)", "3<(0.5)", "4<(0.5)", "3<(0.5)", "2<(0.5)", "1<(1.5)", "1<(0.5)", "1<(0.5)", "2<(0.5)", "1<(0.5)", "7(0.5)", "6(2)", "1<(2)", "1<(0.5)", "7(0.5)", "6(0.5)", "7(0.5)", "5(1.5)", "5(0.5)", "5(1.5)", "5<(0.5)", "5<(0.5)", "6<(0.5)", "5<(0.5)", "4<(0.5)", "3<(1.5)", "3<(0.5)", "3<(0.5)", "4<(0.5)", "3<(0.5)", "2<(0.5)", "1<(0.5)", "7(0.5)", "6(0.5)", "7(0.5)", "5(1.5)", "5(0.5)", "4(1)", "1<(1)", "7(1.5)", "7(0.5)", "1<(1)", "1(1)", "7>(1)", "7(1)", "6(1)", "6>(1)", "5>(1)", "5(1)", "4(1)", "4<(1)", "3<(1)", "3(1)", "2(1)", "6(1)", "2(1)", "2<(1)", "3<(1)", "3(1)", "2(1)", "2<(1)", "1<(1)", "1(1)", "7>(1)", "7(1)", "6(1)", "6<(1)", "5<(1)", "5(1)", "4(1)", "1<(0.5)", "2<(0.5)", "6(1)", "7(1)", "1<(4)"],
			backingTrack: ["1(2)", "5>(2)", "6>(2)", "3>(2)", "4>(2)", "1>(2)", "4>(2)", "5>(2)", "1(0.5)", "3(0.5)", "5(0.5)", "1<(0.5)", "5>(0.5)", "7>(0.5)", "2(0.5)", "5(0.5)", "6>(0.5)", "1(0.5)", "3(0.5)", "6(0.5)", "3>(0.5)", "5>(0.5)", "7>(0.5)", "3(0.5)", "4>(0.5)", "6>(0.5)", "1(0.5)", "4(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", "1(0.5)", "4>(0.5)", "6>(0.5)", "1(0.5)", "4(0.5)", "5>(0.5)", "7>(0.5)", "2(0.5)", "5(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", "1(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "6>>(0.5)", "1>(0.5)", "3>(0.5)", "6>(0.5)", "3>>(0.5)", "5>>(0.5)", "7>>(0.5)", "3>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "1>>(0.5)", "3>>(0.5)", "5>>(0.5)", "1>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", "1(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "6>>(0.5)", "1>(0.5)", "3>(0.5)", "6>(0.5)", "3>>(0.5)", "5>>(0.5)", "7>>(0.5)", "3>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "1>>(0.5)", "3>>(0.5)", "5>>(0.5)", "1>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", "1(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "6>>(0.5)", "1>(0.5)", "3>(0.5)", "6>(0.5)", "3>>(0.5)", "5>>(0.5)", "7>>(0.5)", "3>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "1>>(0.5)", "3>>(0.5)", "5>>(0.5)", "1>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", "1(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "6>>(0.5)", "1>(0.5)", "3>(0.5)", "6>(0.5)", "3>>(0.5)", "5>>(0.5)", "7>>(0.5)", "3>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "0(1)", "0(1)", "1>>(0.5)", "3>>(0.5)", "5>>(0.5)", "1>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", "1(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "6>>(0.5)", "1>(0.5)", "3>(0.5)", "6>(0.5)", "3>>(0.5)", "5>>(0.5)", "7>>(0.5)", "3>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "1>>(0.5)", "3>>(0.5)", "5>>(0.5)", "1>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", "1(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "6>>(0.5)", "1>(0.5)", "3>(0.5)", "6>(0.5)", "3>>(0.5)", "5>>(0.5)", "7>>(0.5)", "3>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "1>>(0.5)", "3>>(0.5)", "5>>(0.5)", "1>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", "1(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "6>>(0.5)", "1>(0.5)", "3>(0.5)", "6>(0.5)", "3>>(0.5)", "5>>(0.5)", "7>>(0.5)", "3>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "1>>(0.5)", "3>>(0.5)", "5>>(0.5)", "1>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", "1(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "6>>(0.5)", "1>(0.5)", "3>(0.5)", "6>(0.5)", "3>>(0.5)", "5>>(0.5)", "7>>(0.5)", "3>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "1>>(0.5)", "3>>(0.5)", "5>>(0.5)", "1>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", "1(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "6>>(0.5)", "1>(0.5)", "3>(0.5)", "6>(0.5)", "3>>(0.5)", "5>>(0.5)", "7>>(0.5)", "3>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "1>>(0.5)", "3>>(0.5)", "5>>(0.5)", "1>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", "1(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "6>>(0.5)", "1>(0.5)", "3>(0.5)", "6>(0.5)", "3>>(0.5)", "5>>(0.5)", "7>>(0.5)", "3>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "1>>(0.5)", "3>>(0.5)", "5>>(0.5)", "1>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", "1(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "6>>(0.5)", "1>(0.5)", "3>(0.5)", "6>(0.5)", "3>>(0.5)", "5>>(0.5)", "7>>(0.5)", "3>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "1>>(0.5)", "3>>(0.5)", "5>>(0.5)", "1>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", "1(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "6>>(0.5)", "1>(0.5)", "3>(0.5)", "6>(0.5)", "3>>(0.5)", "5>>(0.5)", "7>>(0.5)", "3>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "1>>(0.5)", "3>>(0.5)", "5>>(0.5)", "1>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "1>(0.5)", "3>(0.5)", "5>(0.5)", "1(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "6>>(0.5)", "1>(0.5)", "3>(0.5)", "6>(0.5)", "3>>(0.5)", "5>>(0.5)", "7>>(0.5)", "3>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "1>>(0.5)", "3>>(0.5)", "5>>(0.5)", "1>(0.5)", "4>>(0.5)", "6>>(0.5)", "1>(0.5)", "4>(0.5)", "5>>(0.5)", "7>>(0.5)", "2>(0.5)", "5>(0.5)", "1(4)"]
		},
		{
			name: "天空之城",
			step: "D",
			speed: "95",
			degree: 5,
			playing: !1,
			mainTrack: ["6(0.5)", "7(0.5)", "1<(1.5)", "7(0.5)", "1<(1)", "3<(1)", "7(2)", "0(1)", "3(1)", "6(1.5)", "5(0.5)", "6(1)", "1<(1)", "5(2)", "0(1)", "4(0.5)", "3(0.5)", "4(1.5)", "3(0.5)", "4(1)", "1<(1)", "3(2)", "0(0.5)", "1<(0.5)", "1<(0.5)", "1<(0.5)", "7(1.5)", "3(0.5)", "4(1)", "7(1)", "7(2)", "0(1)", "6(0.5)", "7(0.5)", "1<(1.5)", "7(0.5)", "1<(1)", "3<(1)", "7(2)", "0(1)", "3(0.5)", "3(0.5)", "6(1.5)", "5(0.5)", "6(1)", "1<(1)", "5(2)", "0(1)", "3(1)", "4(1)", "1<(0.5)", "7(1.5)", "1<(1)", "2<(1)", "3<(0.5)", "1<(2.5)", "1<(0.5)", "7(0.5)", "6(1)", "7(1)", "5(1)", "6(3)", "1<(0.5)", "2<(0.5)", "3<(1.5)", "2<(0.5)", "3<(1)", "5<(1)", "2<(2)", "0(1)", "5(0.5)", "5(0.5)", "1<(1.5)", "7(0.5)", "1<(1)", "3<(1)", "3<(3)", "0(1)", "6(0.5)", "7(0.5)", "1<(1)", "7(0.5)", "1<(0.5)", "2<(1)", "1<(1.5)", "5(0.5)", "5(2)", "4<(1)", "3<(1)", "2<(1)", "1<(1)", "3<(4)", "3<(3)", "3<(1)", "6<(2)", "5<(2)", "3<(1)", "2<(0.5)", "1<(2.5)", "2<(1)", "1<(0.5)", "2<(1.5)", "5<(1)", "3<(3)", "3<(1)", "6<(2)", "5<(2)", "3<(1)", "2<(0.5)", "1<(2.5)", "2<(1)", "1<(0.5)", "2<(1.5)", "7(1)", "6(3)", "6(0.5)", "7(0.5)", "1<(1.5)", "7(0.5)", "1<(1)", "3<(1)", "7(2)", "0(1)", "3(1)", "6(1.5)", "5(0.5)", "6(1)", "1<(1)", "5(2)", "0(1)", "4(0.5)", "3(0.5)", "4(1.5)", "3(0.5)", "4(1)", "1<(1)", "3(2)", "0(0.5)", "1<(0.5)", "1<(0.5)", "1<(0.5)", "7(1.5)", "3(0.5)", "4(1)", "7(1)", "7(2)", "0(1)", "6(0.5)", "7(0.5)", "1<(1.5)", "7(0.5)", "1<(1)", "3<(1)", "7(2)", "0(1)", "3(0.5)", "3(0.5)", "6(1.5)", "5(0.5)", "6(1)", "1<(1)", "5(2)", "0(1)", "3(1)", "4(1)", "1<(0.5)", "7(1.5)", "1<(1)", "2<(1)", "3<(0.5)", "1<(2.5)", "1<(0.5)", "7(0.5)", "6(1)", "7(1)", "5(1)", "6(4)"],
			backingTrack: ["0(1)", "6>>(0.5)", "3>(0.5)", "6>(0.5)", "1(0.5)", "3(2)", "3>>(0.5)", "7>>(0.5)", "3>(0.5)", "5>(0.5)", "7>(2)", "4>>(0.5)", "1>(0.5)", "4>(0.5)", "6>(0.5)", "1(2)", "1>(0.5)", "5>(0.5)", "1(0.5)", "3(0.5)", "5(2)", "2>>(0.5)", "6>>(0.5)", "2>(0.5)", "4>(0.5)", "6>(2)", "6>>(0.5)", "3>(0.5)", "6>(0.5)", "1(0.5)", "3(2)", "3>>(0.5)", "7>>(0.5)", "3>(0.5)", "5>(0.5)", "7>(2)", "3>>(0.5)", "7>>(0.5)", "3>(0.5)", "5>(0.5)", "7>(2)", "6>>(0.5)", "3>(0.5)", "6>(0.5)", "1(0.5)", "3(2)", "3>>(0.5)", "7>>(0.5)", "3>(0.5)", "5>(0.5)", "7>(2)", "4>>(0.5)", "1>(0.5)", "4>(0.5)", "6>(0.5)", "1(2)", "1>(0.5)", "5>(0.5)", "1(0.5)", "3(0.5)", "5(2)", "2>>(0.5)", "6>>(0.5)", "2>(0.5)", "4>(0.5)", "6>(2)", "6>>(0.5)", "3>(0.5)", "6>(0.5)", "1(0.5)", "3(2)", "4>>(0.5)", "1>(0.5)", "4>(0.5)", "6>(0.5)", "1(2)", "6>>(0.5)", "3>(0.5)", "6>(0.5)", "1(0.5)", "3(2)", "1>(0.5)", "5>(0.5)", "1(0.5)", "3(0.5)", "5(2)", "5>>(0.5)", "2>(0.5)", "5>(0.5)", "7>(0.5)", "2(2)", "6>>(0.5)", "3>(0.5)", "6>(0.5)", "1(0.5)", "3(2)", "3>>(0.5)", "7>>(0.5)", "3>(0.5)", "5>(0.5)", "7>(2)", "4>>(0.5)", "1>(0.5)", "4>(0.5)", "1>(0.5)", "5>>(0.5)", "2>(0.5)", "5>(0.5)", "2>(0.5)", "1>(0.5)", "5>(0.5)", "1(0.5)", "3(0.5)", "5(2)", "2>>(0.5)", "6>>(0.5)", "2>(0.5)", "4>(0.5)", "6>(2)", "3>>(0.5)", "7>>(0.5)", "3>(0.5)", "5>(0.5)", "7>(2)", "3>>(0.5)", "7>>(0.5)", "3>(0.5)", "5>(0.5)", "7>(2)", "6>>(0.5)", "3>(0.5)", "6>(0.5)", "3>(0.5)", "5>>(0.5)", "2>(0.5)", "5>(0.5)", "2>(0.5)", "4>>(0.5)", "1>(0.5)", "4>(0.5)", "6>(0.5)", "1(2)", "5>>(0.5)", "2>(0.5)", "5>(0.5)", "7>(0.5)", "2(2)", "1>(0.5)", "5>(0.5)", "1(0.5)", "3(0.5)", "5(2)", "6>>(0.5)", "3>(0.5)", "6>(0.5)", "3>(0.5)", "5>>(0.5)", "2>(0.5)", "5>(0.5)", "2>(0.5)", "4>>(0.5)", "1>(0.5)", "4>(0.5)", "6>(0.5)", "1(2)", "5>>(0.5)", "2>(0.5)", "5>(0.5)", "7>(0.5)", "2(2)", "6>>(0.5)", "3>(0.5)", "6>(0.5)", "1(0.5)", "3(2)", "6>>(0.5)", "3>(0.5)", "6>(0.5)", "1(0.5)", "3(2)", "3>>(0.5)", "7>>(0.5)", "3>(0.5)", "5>(0.5)", "7>(2)", "4>>(0.5)", "1>(0.5)", "4>(0.5)", "6>(0.5)", "1(2)", "1>(0.5)", "5>(0.5)", "1(0.5)", "3(0.5)", "5(2)", "2>>(0.5)", "6>>(0.5)", "2>(0.5)", "4>(0.5)", "6>(2)", "6>>(0.5)", "3>(0.5)", "6>(0.5)", "1(0.5)", "3(2)", "7>>(0.5)", "4>(0.5)", "7>(0.5)", "2>(0.5)", "4>(2)", "3>>(0.5)", "7>>(0.5)", "3>(0.5)", "5>(0.5)", "7>(2)", "6>>(0.5)", "3>(0.5)", "6>(0.5)", "1(0.5)", "3(2)", "3>>(0.5)", "7>>(0.5)", "3>(0.5)", "5>(0.5)", "7>(2)", "4>>(0.5)", "1>(0.5)", "4>(0.5)", "6>(0.5)", "1(2)", "1>(0.5)", "5>(0.5)", "1(0.5)", "3(0.5)", "5(2)", "2>>(0.5)", "6>>(0.5)", "2>(0.5)", "4>(0.5)", "6>(2)", "6>>(0.5)", "3>(0.5)", "6>(0.5)", "1(0.5)", "3(2)", "4>>(0.5)", "1>(0.5)", "4>>(0.5)", "1>(0.5)", "3>>(0.5)", "7>>(0.5)", "3>>(0.5)", "7>>(0.5)", "6>>(4)"]
		}];
		e.a = n
	},
	knuC: function(t, e) {
		t.exports = function(t, e, i) {
			var n = void 0 === i;
			switch (e.length) {
			case 0:
				return n ? t() : t.call(i);
			case 1:
				return n ? t(e[0]) : t.call(i, e[0]);
			case 2:
				return n ? t(e[0], e[1]) : t.call(i, e[0], e[1]);
			case 3:
				return n ? t(e[0], e[1], e[2]) : t.call(i, e[0], e[1], e[2]);
			case 4:
				return n ? t(e[0], e[1], e[2], e[3]) : t.call(i, e[0], e[1], e[2], e[3])
			}
			return t.apply(i, e)
		}
	},
	lktj: function(t, e, i) {
		var n = i("Ibhu"),
		o = i("xnc9");
		t.exports = Object.keys ||
		function(t) {
			return n(t, o)
		}
	},
	msXi: function(t, e, i) {
		var n = i("77Pl");
		t.exports = function(t, e, i, o) {
			try {
				return o ? e(n(i)[0], i[1]) : e(i)
			} catch(e) {
				var s = t.
				return;
				throw void 0 !== s && n(s.call(t)),
				e
			}
		}
	},
	n0T6: function(t, e, i) {
		var n = i("Ibhu"),
		o = i("xnc9").concat("length", "prototype");
		e.f = Object.getOwnPropertyNames ||
		function(t) {
			return n(t, o)
		}
	},
	nyna: function(t, e, i) {
		"use strict";
		var n = function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				staticClass: "score-container component-manual-list"
			},
			[i("div", {
				staticClass: "list-view"
			},
			[i("p", {
				staticClass: "component-title"
			},
			[i("span", {
				staticClass: "title"
			},
			[t._v(t._s(t.sectionTitle))]), t._v(" "), i("a", {
				staticClass: "join",
				attrs: {
					href: ""
				}
			},
			[t._v("")]), t._v(" "), i("span", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: t.listShow,
					expression: "listShow"
				}],
				staticClass: "degree"
			},
			[t._v("困难度")])]), t._v(" "), i("ol", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: t.listShow,
					expression: "listShow"
				}],
				staticClass: "list score-list"
			},
			t._l(t.scores,
			function(e, n) {
				return i("li", {
					key: n,
					staticClass: "list-item score-item"
				},
				[i("span", {
					staticClass: "num"
				},
				[t._v(t._s(n + 1))]), t._v(" "), i("a", {
					attrs: {
						href: "javascript:;"
					},
					on: {
						click: function(i) {
							t.clickScoreItem(e)
						}
					}
				},
				[t._v(t._s(e.name))]), t._v(" "), i("span", {
					staticClass: "difficulty-degree"
				},
				t._l(new Array(e.degree),
				function(t, e) {
					return i("i", {
						key: e,
						staticClass: "icon-star"
					})
				}))])
			})), t._v(" "), i("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: !t.listShow,
					expression: "!listShow"
				}],
				staticClass: "content-wrap"
			},
			[i("div", {
				staticClass: "section"
			},
			[i("a", {
				staticClass: "return-btn",
				attrs: {
					href: "javascript:;"
				},
				on: {
					click: function(e) {
						t.toggleListShow()
					}
				}
			},
			[t._v("<< 返回列表")]), t._v(" "), i("span", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: t.showItem.author,
					expression: "showItem.author"
				}],
				staticClass: "author-info"
			},
			[i("a", {
				attrs: {
					target: "_blank",
					href: t.showItem.authorLink || "javascript:;"
				}
			},
			[t._v(" " + t._s(t.showItem.author))]), t._v("提供")])]), t._v(" "), i("p", {
				staticClass: "info"
			},
			[t._v("在键盘上依次按以下键进行演奏，注意控制节奏。")]), t._v(" "), i("div", {
				staticClass: "score-item-content",
				domProps: {
					innerHTML: t._s(t.showItem.content || "")
				}
			}), t._v(" "), i("div", {
				staticClass: "score-item-lyrics",
				domProps: {
					innerHTML: t._s(t.showItem.lyrics || "")
				}
			})])])])
		},
		o = [],
		s = {
			render: n,
			staticRenderFns: o
		};
		e.a = s
	},
	oHzg: function(t, e, i) {
		var n = i("6Uk1");
		"string" == typeof n && (n = [[t.i, n, ""]]),
		n.locals && (t.exports = n.locals);
		i("rjj0")("327164a4", n, !0, {})
	},
	p0jC: function(t, e, i) {
		var n = i("LAmw");
		"string" == typeof n && (n = [[t.i, n, ""]]),
		n.locals && (t.exports = n.locals);
		i("rjj0")("faf6ffc6", n, !0, {})
	},
	pFYg: function(t, e, i) {
		"use strict";
		function n(t) {
			return t && t.__esModule ? t: {
			default:
				t
			}
		}
		e.__esModule = !0;
		var o = i("Zzip"),
		s = n(o),
		r = i("5QVw"),
		a = n(r),
		l = "function" == typeof a.
	default && "symbol" == typeof s.
	default ?
		function(t) {
			return typeof t
		}: function(t) {
			return t && "function" == typeof a.
		default && t.constructor === a.
		default && t !== a.
		default.prototype ? "symbol": typeof t
		};
		e.
	default = "function" == typeof a.
	default && "symbol" === l(s.
	default) ?
		function(t) {
			return void 0 === t ? "undefined": l(t)
		}: function(t) {
			return t && "function" == typeof a.
		default && t.constructor === a.
		default && t !== a.
		default.prototype ? "symbol": void 0 === t ? "undefined": l(t)
		}
	},
	qARP: function(t, e, i) {
		"use strict";
		function n(t) {
			var e, i;
			this.promise = new t(function(t, n) {
				if (void 0 !== e || void 0 !== i) throw TypeError("Bad Promise constructor");
				e = t,
				i = n
			}),
			this.resolve = o(e),
			this.reject = o(i)
		}
		var o = i("lOnJ");
		t.exports.f = function(t) {
			return new n(t)
		}
	},
	qio6: function(t, e, i) {
		var n = i("evD5"),
		o = i("77Pl"),
		s = i("lktj");
		t.exports = i("+E39") ? Object.defineProperties: function(t, e) {
			o(t);
			for (var i, r = s(e), a = r.length, l = 0; a > l;) n.f(t, i = r[l++], e[i]);
			return t
		}
	},
	sB3e: function(t, e, i) {
		var n = i("52gC");
		t.exports = function(t) {
			return Object(n(t))
		}
	},
	t8x9: function(t, e, i) {
		var n = i("77Pl"),
		o = i("lOnJ"),
		s = i("dSzd")("species");
		t.exports = function(t, e) {
			var i, r = n(t).constructor;
			return void 0 === r || void 0 == (i = n(r)[s]) ? e: o(i)
		}
	},
	txxU: function(t, e, i) {
		e = t.exports = i("FZ+f")(!1),
		e.push([t.i, '.component-autopiano{width:100%;position:relative;color:#000}.component-autopiano #audioEffectCanvas{display:none}.component-autopiano .piano-scroll-wrap{width:100%;overflow:scroll}.component-autopiano .piano-wrap.visible{opacity:1}.component-autopiano .piano-wrap{width:90%;margin:20px auto;-webkit-box-shadow:5px 5px 20px 5px #888;box-shadow:5px 5px 20px 5px #888;border-radius:5px;position:relative;overflow:hidden;opacity:0}.component-autopiano .piano-wrap .piano-band{width:100%;height:40px;line-height:40px;background:#000;-webkit-box-shadow:inset 0 -1px 2px hsla(0,0%,100%,.4),0 2px 3px rgba(0,0,0,.4);box-shadow:inset 0 -1px 2px hsla(0,0%,100%,.4),0 2px 3px rgba(0,0,0,.4);border-width:3px 2px 2px;border-style:solid;border-color:#555 #222 #111 #777;position:relative}.component-autopiano .piano-wrap .piano-band .piano-band-img{width:130px;height:100%;position:absolute;top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.component-autopiano .piano-wrap .piano-band .piano-tip{position:absolute;top:50%;right:20px;-webkit-transform:translateY(-50%);transform:translateY(-50%);color:#fff;font-size:14px}.component-autopiano .piano-wrap .piano-key-wrap{width:100%;background:#373737;overflow:hidden;position:relative}.component-autopiano .piano-wrap .piano-key-wrap .piano-key:hover{cursor:pointer}.component-autopiano .piano-wrap .piano-key-wrap .wkey{display:inline-block;width:2.775%;height:100%;margin:0 auto;background:#fff;background:linear-gradient(-30deg,#f5f5f5,#fff);border:1px solid #ccc;-webkit-box-shadow:inset 0 1px 0 #fff,inset 0 -1px 0 #fff,inset 1px 0 0 #fff,inset -1px 0 0 #fff,0 4px 3px rgba(0,0,0,.7);box-shadow:inset 0 1px 0 #fff,inset 0 -1px 0 #fff,inset 1px 0 0 #fff,inset -1px 0 0 #fff,0 4px 3px rgba(0,0,0,.7);border-radius:0 0 5px 5px;position:relative}.component-autopiano .piano-wrap .piano-key-wrap .wkey:active{-webkit-box-shadow:0 2px 2px rgba(0,0,0,.4);box-shadow:0 2px 2px rgba(0,0,0,.4);top:-1%;height:99%;background:#efefef}.component-autopiano .piano-wrap .piano-key-wrap .wkey:active:before{content:"";border-width:250px 5px 0;border-style:solid;border-color:transparent transparent transparent rgba(0,0,0,.1);position:absolute;left:0;bottom:0}.component-autopiano .piano-wrap .piano-key-wrap .wkey:active:after{content:"";border-width:250px 5px 0;border-style:solid;border-color:transparent rgba(0,0,0,.1) transparent transparent;position:absolute;right:0;bottom:0}.component-autopiano .piano-wrap .piano-key-wrap .wkey .keytip{width:100%;color:#373737;text-align:center;font-size:14px;position:absolute;bottom:5%}.component-autopiano .piano-wrap .piano-key-wrap .wkey .keytip .keyname{margin-bottom:5px}.component-autopiano .piano-wrap .piano-key-wrap .wkey .keytip .notename{color:#1295db;font-weight:700}.component-autopiano .piano-wrap .piano-key-wrap .wkey-active{-webkit-box-shadow:0 2px 2px rgba(0,0,0,.4);box-shadow:0 2px 2px rgba(0,0,0,.4);top:-1%;height:99%;background:#efefef}.component-autopiano .piano-wrap .piano-key-wrap .wkey-active:before{content:"";border-width:250px 5px 0;border-style:solid;border-color:transparent transparent transparent rgba(0,0,0,.1);position:absolute;left:0;bottom:0}.component-autopiano .piano-wrap .piano-key-wrap .wkey-active:after{content:"";border-width:250px 5px 0;border-style:solid;border-color:transparent rgba(0,0,0,.1) transparent transparent;position:absolute;right:0;bottom:0}.component-autopiano .piano-wrap .piano-key-wrap .bkey{display:inline-block;width:10%;height:70%;background:linear-gradient(-20deg,#333,#000,#333);border-width:1px 2px 7px;border-style:solid;border-color:#666 #222 #111 #555;border-radius:0 0 2px 2px;-webkit-box-shadow:inset 0 -1px 2px hsla(0,0%,100%,.4),0 2px 3px rgba(0,0,0,.4);box-shadow:inset 0 -1px 2px hsla(0,0%,100%,.4),0 2px 3px rgba(0,0,0,.4);position:absolute;top:0;overflow:hidden}.component-autopiano .piano-wrap .piano-key-wrap .bkey:active{height:101%;border-bottom-width:2px;-webkit-box-shadow:inset 0 -1px 1px hsla(0,0%,100%,.4),0 1px 0 rgba(0,0,0,.8),0 2px 2px rgba(0,0,0,.4),0 -1px 0 #000;box-shadow:inset 0 -1px 1px hsla(0,0%,100%,.4),0 1px 0 rgba(0,0,0,.8),0 2px 2px rgba(0,0,0,.4),0 -1px 0 #000}.component-autopiano .piano-wrap .piano-key-wrap .bkey .keytip{width:100%;color:#fff;position:absolute;left:0;bottom:5%;font-size:14px;overflow:hidden}.component-autopiano .piano-wrap .piano-key-wrap .bkey .keytip .keyname{width:100%;text-align:center}.component-autopiano .piano-wrap .piano-key-wrap .bkey-active{height:101%;border-bottom-width:2px;-webkit-box-shadow:inset 0 -1px 1px hsla(0,0%,100%,.4),0 1px 0 rgba(0,0,0,.8),0 2px 2px rgba(0,0,0,.4),0 -1px 0 #000;box-shadow:inset 0 -1px 1px hsla(0,0%,100%,.4),0 1px 0 rgba(0,0,0,.8),0 2px 2px rgba(0,0,0,.4),0 -1px 0 #000}.component-autopiano .piano-wrap .piano-key-wrap .wkey.auto-key-active{-webkit-box-shadow:0 2px 2px rgba(0,0,0,.4);box-shadow:0 2px 2px rgba(0,0,0,.4);top:0;height:100%;background:#facc94!important}.component-autopiano .piano-wrap .piano-key-wrap .wkey.auto-key-active:before{content:"";border-width:250px 5px 0;border-style:solid;border-color:transparent transparent transparent rgba(0,0,0,.1);position:absolute;top:0;left:0}.component-autopiano .piano-wrap .piano-key-wrap .wkey.auto-key-active:after{content:"";border-width:250px 5px 0;border-style:solid;border-color:transparent rgba(0,0,0,.1) transparent transparent;position:absolute;right:0;left:0}.component-autopiano .piano-wrap .piano-key-wrap .bkey.auto-key-active{height:101%;border-bottom-width:2px;-webkit-box-shadow:inset 0 -1px 1px hsla(0,0%,100%,.4),0 1px 0 rgba(0,0,0,.8),0 2px 2px rgba(0,0,0,.4),0 -1px 0 #000;box-shadow:inset 0 -1px 1px hsla(0,0%,100%,.4),0 1px 0 rgba(0,0,0,.8),0 2px 2px rgba(0,0,0,.4),0 -1px 0 #000;background:#facc94!important}.component-autopiano .piano-wrap .piano-key-wrap .bkey:first-child{left:9%}.component-autopiano .piano-wrap .piano-key-wrap .bkey:nth-child(2){left:23%}.component-autopiano .piano-wrap .piano-key-wrap .bkey:nth-child(3){left:50%}.component-autopiano .piano-wrap .piano-key-wrap .bkey:nth-child(4){left:65%}.component-autopiano .piano-wrap .piano-key-wrap .bkey:nth-child(5){left:79%}.component-autopiano .piano-wrap .piano-key-wrap .bkey-wrap{width:20%;height:0;position:absolute;top:0}.component-autopiano .piano-wrap .piano-key-wrap .bkey-wrap1{left:0}.component-autopiano .piano-wrap .piano-key-wrap .bkey-wrap2{left:19.5%}.component-autopiano .piano-wrap .piano-key-wrap .bkey-wrap3{left:39%}.component-autopiano .piano-wrap .piano-key-wrap .bkey-wrap4{left:58.3%}.component-autopiano .piano-wrap .piano-key-wrap .bkey-wrap5{left:77.7%}.component-autopiano .piano-options{width:90%;height:50px;margin:10px auto 15px;padding:0;position:relative}.component-autopiano .piano-options .option-item-wrap{position:absolute;right:1%}.component-autopiano .piano-options .option-item{display:inline-block;height:50px;line-height:50px;margin:0 15px}.component-autopiano .piano-options .option-item .label>input{display:none}.component-autopiano .piano-options .option-item .label i{display:inline-block;margin-left:5px;padding:2px;width:40px;height:20px;border-radius:13px;vertical-align:middle;-webkit-transition:.25s .09s;transition:.25s .09s;position:relative;background:#d8d9db;-webkit-box-sizing:initial;box-sizing:initial}.component-autopiano .piano-options .option-item .label i:after{content:" ";display:block;width:20px;height:20px;border-radius:50%;background:#fff;position:absolute;left:2px;-webkit-transition:.25s;transition:.25s}.component-autopiano .piano-options .option-item .label>input:checked+i{background:#07e26d}.component-autopiano .piano-options .option-item .label>input:checked+i:after{-webkit-transform:translateX(20px);transform:translateX(20px)}.component-autopiano .piano-options .option-item .label:hover{cursor:pointer}', ""])
	},
	u2KI: function(t, e, i) {
		t.exports = {
		default:
			i("O4R0"),
			__esModule: !0
		}
	},
	uHpY: function(t, e, i) {
		var n = i("gsBj");
		"string" == typeof n && (n = [[t.i, n, ""]]),
		n.locals && (t.exports = n.locals);
		i("rjj0")("2a5c5ec6", n, !0, {})
	},
	uLa1: function(t, e, i) {
		"use strict";
		var n = i("Dd8w"),
		o = i.n(n),
		s = (i("VSxz"), i("+ZRt")),
		r = i("TVmP"),
		a = i("5JHN"),
		l = i("vlkY"),
		u = i("Z2zZ"),
		c = i("CjT/"),
		p = i("NYxO");
		i("2uFj");
		e.a = {
			name: "AutoPianoPC",
			components: {
				PageHeader: s.a,
				PageFooter: r.a,
				RandomLyric: a.a,
				Piano: l.a,
				ManualPlayScoreList: u.a,
				AutoPlayScoreList: c.a
			},
			data: function() {
				return {
					percent: 0,
					rightDrawerShow: !1
				}
			},
			computed: o()({},
			i.i(p.b)(["$currentWallpaper"]), {
				appBgStyle: function() {
					return "background-image: url(" + this.$currentWallpaper + ");"
				}
			}),
			mounted: function() {},
			methods: {
				toggleRightDrawer: function() {
					this.rightDrawerShow = !this.rightDrawerShow
				},
				hideRightDrawer: function() {
					this.rightDrawerShow = !1
				}
			}
		}
	},
	uTwv: function(t, e, i) {
		t.exports = /*i.p + */"/i/warning.jpg"//标记
	},
	uqUo: function(t, e, i) {
		var n = i("kM2E"),
		o = i("FeBl"),
		s = i("S82l");
		t.exports = function(t, e) {
			var i = (o.Object || {})[t] || Object[t],
			r = {};
			r[t] = e(i),
			n(n.S + n.F * s(function() {
				i(1)
			}), "Object", r)
		}
	},
	"vFc/": function(t, e, i) {
		var n = i("TcQ7"),
		o = i("QRG4"),
		s = i("fkB2");
		t.exports = function(t) {
			return function(e, i, r) {
				var a, l = n(e),
				u = o(l.length),
				c = s(r, u);
				if (t && i != i) {
					for (; u > c;) if ((a = l[c++]) != a) return ! 0
				} else for (; u > c; c++) if ((t || c in l) && l[c] === i) return t || c || 0;
				return ! t && -1
			}
		}
	},
	"vIB/": function(t, e, i) {
		"use strict";
		var n = i("O4g8"),
		o = i("kM2E"),
		s = i("880/"),
		r = i("hJx8"),
		a = i("/bQp"),
		l = i("94VQ"),
		u = i("e6n0"),
		c = i("PzxK"),
		p = i("dSzd")("iterator"),
		h = !([].keys && "next" in [].keys()),
		f = function() {
			return this
		};
		t.exports = function(t, e, i, d, y, m, g) {
			l(i, e, d);
			var _, v, b, S = function(t) {
				if (!h && t in x) return x[t];
				switch (t) {
				case "keys":
				case "values":
					return function() {
						return new i(this, t)
					}
				}
				return function() {
					return new i(this, t)
				}
			},
			T = e + " Iterator",
			w = "values" == y,
			A = !1,
			x = t.prototype,
			O = x[p] || x["@@iterator"] || y && x[y],
			P = O || S(y),
			k = y ? w ? S("entries") : P: void 0,
			F = "Array" == e ? x.entries || O: O;
			if (F && (b = c(F.call(new t))) !== Object.prototype && b.next && (u(b, T, !0), n || "function" == typeof b[p] || r(b, p, f)), w && O && "values" !== O.name && (A = !0, P = function() {
				return O.call(this)
			}), n && !g || !h && !A && x[p] || r(x, p, P), a[e] = P, a[T] = f, y) if (_ = {
				values: w ? P: S("values"),
				keys: m ? P: S("keys"),
				entries: k
			},
			g) for (v in _) v in x || s(x, v, _[v]);
			else o(o.P + o.F * (h || A), e, _);
			return _
		}
	},
	vYTo: function(t, e, i) {
		"use strict";
		function n(t, e) {
			t.hasOwnProperty("className") ? t.className = e: t.setAttribute("class", e)
		}
		function o(t, e) {
			return new RegExp("(\\s|^)" + e + "(\\s|$)").test(t.className)
		}
		function s(t, e) {
			if (t.classList) {
				e.split(" ").map(function(e) {
					return t.classList.add(e)
				})
			} else {
				var i = " " + (t.getAttribute("class") || "") + " ";
				i.indexOf(" " + e + " ") < 0 && n(t, (i + e).trim())
			}
		}
		function r(t, e) {
			if (t.classList) t.classList.remove(e);
			else {
				for (var i = " " + (t.getAttribute("class") || "") + " ", o = " " + e + " "; i.indexOf(o) >= 0;) i = i.replace(o, " ");
				n(t, i.trim())
			}
			t.className || t.removeAttribute("class")
		}
		function a(t) {
			return (a = "function" == typeof x.a && "symbol" === w()(S.a) ?
			function(t) {
				return void 0 === t ? "undefined": w()(t)
			}: function(t) {
				return t && "function" == typeof x.a && t.constructor === x.a && t !== x.a.prototype ? "symbol": void 0 === t ? "undefined": w()(t)
			})(t)
		}
		function l(t, e, i) {
			function n(e) {
				var i = m,
				n = g;
				return m = g = void 0,
				T = e,
				v = t.apply(n, i)
			}
			function o(t, e) {
				return O ? requestAnimationFrame(t) : setTimeout(t, e)
			}
			function s(t) {
				if (O) return cancelAnimationFrame(t);
				clearTimeout(t)
			}
			function r(t) {
				return T = t,
				b = o(c, e),
				w ? n(t) : v
			}
			function l(t) {
				var i = t - S,
				n = t - T,
				o = e - i;
				return A ? Math.min(o, _ - n) : o
			}
			function u(t) {
				var i = t - S,
				n = t - T;
				return void 0 === S || i >= e || i < 0 || A && n >= _
			}
			function c() {
				var t = Date.now();
				if (u(t)) return p(t);
				b = o(c, l(t))
			}
			function p(t) {
				return b = void 0,
				x && m ? n(t) : (m = g = void 0, v)
			}
			function h() {
				void 0 !== b && s(b),
				T = 0,
				m = S = g = b = void 0
			}
			function f() {
				return void 0 === b ? v: p(Date.now())
			}
			function d() {
				return void 0 !== b
			}
			function y() {
				for (var t = Date.now(), i = u(t), s = arguments.length, a = new Array(s), l = 0; l < s; l++) a[l] = arguments[l];
				if (m = a, g = this, S = t, i) {
					if (void 0 === b) return r(S);
					if (A) return b = o(c, e),
					n(S)
				}
				return void 0 === b && (b = o(c, e)),
				v
			}
			var m, g, _, v, b, S, T = 0,
			w = !1,
			A = !1,
			x = !0,
			O = !e && 0 !== e && "function" == typeof requestAnimationFrame;
			if ("function" != typeof t) throw new TypeError("Expected a function");
			return e = +e || 0,
			"object" === a(i) && (w = !!i.leading, A = "maxWait" in i, _ = A ? Math.max( + i.maxWait || 0, e) : _, x = "trailing" in i ? !!i.trailing: x),
			y.cancel = h,
			y.flush = f,
			y.pending = d,
			y
		}
		function u(t, e, i) {
			var n = !0,
			o = !0;
			if ("function" != typeof t) throw new TypeError("Expected a function");
			return "object" === a(i) && (n = "leading" in i ? !!i.leading: n, o = "trailing" in i ? !!i.trailing: o),
			l(t, e, {
				leading: n,
				maxWait: e,
				trailing: o
			})
		}
		function c(t) {
			var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2e3,
			i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
			return new P.a(function(n, o) {
				"function" != typeof t && o(new Error(t + " is not a function"));
				var s = +new Date + e(function e() {
					if (t()) n(t());
					else {
						if ( + new Date < s) return setTimeout(e, i);
						o(new Error("timed out for " + fn + ": " + arguments))
					}
				})()
			})
		}
		function p() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
			e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
			i = void 0,
			n = t;
			return function() {
				return n && (i = n.apply(e || this, arguments), n = void 0),
				i
			}
		}
		function h(t) {
			return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(t)
		}
		function f(t) {
			return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(t)
		}
		function d(t) {
			return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(t)
		}
		function y(t) {
			return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/i.test(t)
		}
		var m = i("woOf"),
		g = i.n(m),
		_ = i("Zx67"),
		v = i.n(_),
		b = i("Zzip"),
		S = i.n(b),
		T = i("pFYg"),
		w = i.n(T),
		A = i("5QVw"),
		x = i.n(A),
		O = i("//Fk"),
		P = i.n(O),
		k = i("fZjL"),
		F = i.n(k),
		C = i("u2KI"),
		D = i.n(C),
		E = function(t) {
			var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "green";
			t = toString(t) || "",
			console.log("%c" + t, "font-weight: bold; color: ".concat(e))
		},
		U = D()({
			chalkPrint: E
		}),
		M = function() {
			return "#" + ("00000" + (16777216 * Math.random() << 0).toString(16)).slice( - 6)
		},
		R = function(t, e) {
			return Math.floor(t + Math.random() * (e - t))
		},
		L = function(t) {
			for (var e = "abcdefghijklmnopqrstuvwxyz0123456789",
			i = "",
			n = 0; n < t; n++) i += e.charAt(Math.round(Math.random() * e.length));
			return i
		},
		I = D()({
			randomColor: M,
			randomInt: R,
			randomString: L
		}),
		N = function() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
			return Array.isArray ? Array.isArray(t) : "[object Array]" === Object.prototype.toString.call(t)
		},
		q = function t() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
			i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
			if (N(e)) {
				if (e.length <= 1) return e;
				for (var n = Math.floor(e.length / 2), o = e.splice(n, 1)[0], s = [], r = [], a = 0; a < e.length; a++) i && o.hasOwnProperty(i) ? e[a][i] < o[i] ? s.push(e[a]) : r.push(e[a]) : e[a] < o ? s.push(e[a]) : r.push(e[a]);
				return t(s, i).concat([o], t(r, i))
			}
			return E("[quickSortArr] argument is not Array.", "red"),
			[]
		},
		j = function() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
			if (N(t)) {
				if (t.length <= 1) return t;
				for (var e = [], i = {},
				n = 0; n < t.length; n++) {
					var o = t[n],
					s = !1;
					F()(i).forEach(function(t) {
						if (o === i[t]) return void(s = !0)
					}),
					s || (i[n] = o, e.push(o))
				}
				return e
			}
			return E("[uniqueArr] argument is not Array.", "red"),
			[]
		},
		G = function() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
			if (!N(t)) return E("[shuffleArr] argument is not Array.", "red"),
			[];
			for (var e = t.slice(), i = 0, n = e.length; i < n; i++) {
				var o = R(0, i),
				s = e[i];
				e[i] = e[o],
				e[o] = s
			}
			return e
		},
		Y = function() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
			e = arguments.length > 1 ? arguments[1] : void 0;
			if (!N(t)) return E("[binarySearchArr] argument is not Array.", "red"),
			-1;
			t = q(t);
			for (var i, n = 0,
			o = t.length - 1; n < o;) {
				var s = Math.floor((n + o) / 2);
				if (t[s] === e) return i = s;
				t[s] < e ? n = s + 1 : t[s] > e && (o = s)
			}
			return i
		},
		B = D()({
			isArr: N,
			quickSortArr: q,
			uniqueArr: j,
			shuffleArr: G,
			binarySearchArr: Y
		}),
		H = function() {
			window && window.document && [].forEach.call($$("*"),
			function(t) {
				t.style.outline = "1px solid #" + (~~ (Math.random() * (1 << 24))).toString(16)
			})
		},
		W = function(t) {
			return "★★★★★☆☆☆☆☆".slice(5 - t, 10 - t)
		},
		V = function() {
			return "xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
			function(t) {
				var e = 16 * Math.random() | 0;
				return ("x" == t ? e: 3 & e | 8).toString(16)
			}).toUpperCase()
		},
		z = function(t) {
			return ! /^.?$|^(..+?)\1+$/.test("1".repeat(t))
		},
		J = function(t) {
			return new P.a(function(e) {
				setTimeout(e, t)
			})
		},
		Q = D()({
			$outlineAnything: H,
			$getRate: W,
			$uuid: V,
			$isPrime: z,
			$sleep: J
		}),
		K = function(t) {
			var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy.MM.dd hh:mm:ss";
			arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && (i *= 1e3);
			var i = new Date(t),
			n = {
				M: i.getMonth() + 1,
				d: i.getDate(),
				h: i.getHours(),
				m: i.getMinutes(),
				s: i.getSeconds(),
				S: i.getMilliseconds(),
				q: Math.floor((i.getMonth() + 3) / 3)
			};
			return e = e.replace(/([yMdhmsSq])+/g,
			function(t, e) {
				var o = n[e];
				return void 0 !== o ? (t.length > 1 && (o = "0" + o, o = o.substr(o.length - 2)), o) : "y" === e ? (i.getFullYear() + "").substr(4 - t.length) : t
			})
		},
		Z = function(t) { (!t || "number" != typeof t && "string" != typeof t) && (t = +new Date);
			var e = new Date(t);
			return {
				year: e.getFullYear(),
				month: e.getMonth() + 1,
				day: e.getDate(),
				hour: e.getHours(),
				minute: e.getMinutes(),
				second: e.getSeconds(),
				millsecond: e.getMilliseconds(),
				quarter: Math.floor((e.getMonth() + 3) / 3)
			}
		},
		X = D()({
			formatDate: K,
			getDateObj: Z
		}),
		$ = D()({
			setClass: n,
			hasClass: o,
			addClass: s,
			removeClass: r
		}),
		tt = D()({
			debounce: l,
			throttle: u,
			poll: c,
			once: p
		}),
		et = function(t) {
			if ("object" != a(t) || "[object Object]" != Object.prototype.toString.call(t)) return ! 1;
			if (null === v()(t)) return ! 0;
			for (var e = t; null !== v()(e);) e = v()(e);
			return v()(t) === e
		},
		it = function() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
			if (!et(t)) return ! 1;
			for (var e in t) return ! 1;
			return ! 0
		},
		nt = function t() {
			var e, i, n, o, s, r, l = arguments[0] || {},
			u = 1,
			c = arguments.length,
			p = !1;
			for ("boolean" == typeof l && (p = l, l = arguments[u] || {},
			u++), "object" !== a(l) && "function" != typeof l && (l = {}), u === c && (l = this, u--); u < c; u++) if (null != (e = arguments[u])) for (i in e) n = l[i],
			o = e[i],
			l !== o && (s = N(o), p && o && (et(o) || s) ? (s ? (s = !1, r = n && N(n) ? n: []) : r = n && et(n) ? n: {},
			l[i] = t(p, r, o)) : void 0 !== o && (l[i] = o));
			return l
		},
		ot = function(t) {
			if (!t) return "";
			var e = [];
			for (var i in t) {
				var n = t[i];
				if (n instanceof Array) for (var o = 0; o < n.length; ++o) e.push(encodeURIComponent(i + "[" + o + "]") + "=" + encodeURIComponent(n[o]));
				else e.push(encodeURIComponent(i) + "=" + encodeURIComponent(t[i]))
			}
			return e.join("&")
		},
		st = D()({
			isPlainObj: et,
			isEmptyObj: it,
			extend: nt,
			stringfyQueryString: ot
		}),
		rt = function() {
			var t = "navigator" in window && "userAgent" in navigator && navigator.userAgent.toLowerCase() || "",
			e = ("navigator" in window && "vendor" in navigator && navigator.vendor.toLowerCase(), "navigator" in window && "appVersion" in navigator && navigator.appVersion.toLowerCase() || "");
			return /iphone/i.test(t) || /ipad/i.test(t) || /ipod/i.test(t) ? "ios": /android/i.test(t) ? "android": /win/i.test(e) && /phone/i.test(t) ? "windowsPhone": /mac/i.test(e) ? "MacOSX": /win/i.test(e) ? "windows": /linux/i.test(e) ? "linux": void 0
		},
		at = function() {
			var t, e = {},
			i = navigator.userAgent.toLowerCase();
			return (t = i.match(/rv:([\d.]+)\) like gecko/)) ? e.ie = t[1] : (t = i.match(/msie ([\d\.]+)/)) ? e.ie = t[1] : (t = i.match(/edge\/([\d\.]+)/)) ? e.edge = t[1] : (t = i.match(/firefox\/([\d\.]+)/)) ? e.firefox = t[1] : (t = i.match(/(?:opera|opr).([\d\.]+)/)) ? e.opera = t[1] : (t = i.match(/chrome\/([\d\.]+)/)) ? e.chrome = t[1] : (t = i.match(/version\/([\d\.]+).*safari/)) && (e.safari = t[1]),
			e.ie ? "IE: " + e.ie: e.edge ? "EDGE: " + e.edge: e.firefox ? "Firefox: " + e.firefox: e.chrome ? "Chrome: " + e.chrome: e.opera ? "Opera: " + e.opera: e.safari ? "Safari: " + e.safari: "unknown"
		},
		lt = function() {
			return "micromessenger" == navigator.userAgent.toLowerCase().match(/MicroMessenger/i)
		},
		ut = D()({
			getOS: rt,
			getBrowser: at,
			isWeixin: lt
		}),
		ct = D()({
			isEmail: h,
			isIdCard: f,
			isPhoneNum: d,
			isUrl: y
		}),
		pt = function(t, e, i, n, o, s) {
			if (!t || !e) return ! 1;
			var r = encodeURIComponent(t) + "=" + encodeURIComponent(e);
			if (i) {
				var a = new Date;
				a.setTime(a.getTime() + 24 * i * 60 * 60 * 1e3),
				r += "; expires=" + a.toGMTString()
			}
			return n && (r += "; path=" + n),
			o && (r += "; domain=" + o),
			s && (r += "; secure"),
			document.cookie = r,
			!0
		},
		ht = function(t) {
			if (!t) return "";
			var e = encodeURIComponent(t) + "=",
			i = document.cookie.indexOf(e),
			n = null;
			if (i > -1) {
				var o = document.cookie.indexOf(";", i); - 1 == o && (o = document.cookie.length),
				n = document.cookie.substring(i + e.length, o)
			}
			return n
		},
		ft = function(t, e, i) {
			var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
			if (!t) return ! 1;
			var o = encodeURIComponent(t) + "=" + encodeURIComponent(""),
			s = new Date;
			return s.setTime(s.getTime() + 0),
			o += "; expires=" + s.toGMTString(),
			e && (o += "; path=" + e),
			i && (o += "; domain=" + i),
			n && (o += "; secure"),
			document.cookie = o,
			!0
		},
		dt = D()({
			setCookie: pt,
			getCookie: ht,
			removeCookie: ft
		}),
		yt = function(t, e) {
			var i = t.length,
			n = t.substr(0, e);
			return e < i ? n + "...": n
		},
		mt = function(t) {
			t = parseFloat(t);
			var e = ["角", "分"],
			i = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"],
			n = [["元", "万", "亿"], ["", "拾", "佰", "仟"]],
			o = t < 0 ? "欠": "";
			t = Math.abs(t);
			for (var s = "",
			r = 0; r < e.length; r++) s += (i[Math.floor(10 * t * Math.pow(10, r)) % 10] + e[r]).replace(/零./, "");
			s = s || "整",
			t = Math.floor(t);
			for (var r = 0; r < n[0].length && t > 0; r++) {
				for (var a = "",
				l = 0; l < n[1].length && t > 0; l++) a = i[t % 10] + n[1][l] + a,
				t = Math.floor(t / 10);
				s = a.replace(/(零.)*零$/, "").replace(/^$/, "零") + n[0][r] + s
			}
			return o + s.replace(/(零.)*零元/, "元").replace(/(零.)+/g, "零").replace(/^整$/, "零元整")
		},
		gt = function(t) {
			function e(t) {
				return i[t] || t
			}
			var i = {
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&#34;",
				"'": "&#39;"
			},
			n = /[&<>'"]/g;
			return void 0 === t ? "": String(t).replace(n, e)
		},
		_t = function(t) {
			t = null == t ? window.location.href: t;
			var e = t.substring(t.lastIndexOf("?") + 1);
			if (!e) return {};
			for (;
			"&" == e[e.length - 1];) e = e.slice(0, e.length - 1);
			return JSON.parse('{"' + decodeURIComponent(e).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
		},
		vt = function(t) {
			return btoa(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g,
			function(t, e) {
				return String.fromCharCode("0x" + e)
			}))
		},
		bt = function(t) {
			return decodeURIComponent(atob(t).split("").map(function(t) {
				return "%" + ("00" + t.charCodeAt(0).toString(16)).slice( - 2)
			}).join(""))
		},
		St = D()({
			cutString: yt,
			upcaseMoney: mt,
			replaceXSS: gt,
			parseQueryString: _t,
			b64EncodeUnicode: vt,
			b64DecodeUnicode: bt
		});
		g()({},
		B, Q, X, $, tt, st, ut, U, I, ct, dt, St)
	},
	vlkY: function(t, e, i) {
		"use strict";
		function n(t) {
			i("goro")
		}
		var o = i("FclF"),
		s = i("/wrW"),
		r = i("VU/8"),
		a = n,
		l = r(o.a, s.a, !1, a, null, null);
		e.a = l.exports
	},
	woOf: function(t, e, i) {
		t.exports = {
		default:
			i("V3tA"),
			__esModule: !0
		}
	},
	wqtZ: function(t, e, i) {
		e = t.exports = i("FZ+f")(!1),
		e.push([t.i, ".score-container.component-manual-list{width:40%;min-width:500px;padding-bottom:50%;font-size:14px;overflow:hidden;background:hsla(0,0%,100%,.6);border-radius:5px;border:1px solid #ddd;position:relative}.score-container.component-manual-list .list-view{width:100%;height:100%;position:absolute;top:0;left:0;padding:20px 15px;overflow-y:scroll}.score-container.component-manual-list .component-title{margin:0 0 10px;font-size:18px;font-weight:700;position:relative}.score-container.component-manual-list .component-title a.join{color:#ef496f;font-size:14px;margin-left:5px;text-decoration:underline}.score-container.component-manual-list .component-title a.join:hover{opacity:.8}.score-container.component-manual-list .component-title .degree{width:150px;float:right;text-align:left}.score-container.component-manual-list .list{width:100%;padding-left:25px;padding-bottom:10px;line-height:32px}.score-container.component-manual-list .list .list-item{height:32px;line-height:32px;list-style:none}.score-container.component-manual-list .list .list-item a{display:inline-block;min-width:120px;cursor:pointer}.score-container.component-manual-list .list .list-item a:hover{color:#1295db;text-decoration:underline}.score-container.component-manual-list .list .list-item .num{float:left;width:35px;height:32px;font-size:16px;margin-left:-35px;text-align:center;color:#ef496f}.score-container.component-manual-list .list .list-item .difficulty-degree{width:150px;float:right;text-align:left}.score-container.component-manual-list .list .list-item .difficulty-degree .icon-star{display:inline-block;-webkit-transform:scale(.7);transform:scale(.7);margin-left:-6px}.score-container.component-manual-list .content-wrap{width:100%}.score-container.component-manual-list .content-wrap .info{font-size:14px;margin:5px 0;height:28px;line-height:28px;text-align:center;background:#1295db;color:#fff;border-radius:2px}.score-container.component-manual-list .content-wrap .return-btn{cursor:pointer;width:80px;height:32px;line-height:32px;color:#1f6fb5}.score-container.component-manual-list .content-wrap .return-btn:hover{text-decoration:underline;color:#1295db}.score-container.component-manual-list .content-wrap .author-info{float:right;line-height:32px}.score-container.component-manual-list .content-wrap .author-info a{color:#1f6fb5;margin-right:7px}.score-container.component-manual-list .content-wrap .score-item-content{word-wrap:break-word;font-size:16px;letter-spacing:0;line-height:26px}.score-container.component-manual-list .content-wrap .score-item-lyrics{word-wrap:break-word;font-style:italic;margin-top:20px;line-height:26px}", ""])
	},
	xGkn: function(t, e, i) {
		"use strict";
		var n = i("4mcu"),
		o = i("EGZi"),
		s = i("/bQp"),
		r = i("TcQ7");
		t.exports = i("vIB/")(Array, "Array",
		function(t, e) {
			this._t = r(t),
			this._i = 0,
			this._k = e
		},
		function() {
			var t = this._t,
			e = this._k,
			i = this._i++;
			return ! t || i >= t.length ? (this._t = void 0, o(1)) : "keys" == e ? o(0, i) : "values" == e ? o(0, t[i]) : o(0, [i, t[i]])
		},
		"values"),
		s.Arguments = s.Array,
		n("keys"),
		n("values"),
		n("entries")
	},
	"xH/j": function(t, e, i) {
		var n = i("hJx8");
		t.exports = function(t, e, i) {
			for (var o in e) i && t[o] ? t[o] = e[o] : n(t, o, e[o]);
			return t
		}
	},
	xnc9: function(t, e) {
		t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
	},
	zQR9: function(t, e, i) {
		"use strict";
		var n = i("h65t")(!0);
		i("vIB/")(String, "String",
		function(t) {
			this._t = String(t),
			this._i = 0
		},
		function() {
			var t, e = this._t,
			i = this._i;
			return i >= e.length ? {
				value: void 0,
				done: !0
			}: (t = n(e, i), this._i += t.length, {
				value: t,
				done: !1
			})
		})
	}
});