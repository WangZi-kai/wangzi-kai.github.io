var MOFUN = window.MOFUN || {};



MOFUN.random = function (max, min) {
	max = max || 100;
	min = min || 0;
	return Math.ceil(Math.random() * (max - min) + min);
};

MOFUN.remove = function (ele) {
	ele && ele.parentNode.removeChild(ele);
};