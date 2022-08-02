$(function () {
    var slider = new SliderUnlock(".slideunlock-slider", {}, function () {
        $("#menu").show();
        $(".slideunlock-wrapper").hide()
    }, function(){});
    slider.init();
});
