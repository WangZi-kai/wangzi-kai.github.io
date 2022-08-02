$(function () {
    var slider = new SliderUnlock(".slideunlock-slider", {}, function () {
        $("#menu").show();
    }, function(){});
    slider.init();
});
