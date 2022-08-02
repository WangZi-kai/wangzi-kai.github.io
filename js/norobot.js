$(function () {
    var slider = new SliderUnlock(".slideunlock-slider", {}, function () {
        $("#menu").show();
        $(".slideunlock-wrapper").hide(1000);
    }, function(){});
    slider.init();
});
