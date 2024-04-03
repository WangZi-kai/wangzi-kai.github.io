$(function () {
    var slider = new SliderUnlock(".slideunlock-slider", {}, function () {
        $("#recaptcha").show();
        $(".slideunlock-wrapper").hide(1000);
    }, function(){});
    slider.init();
});
function pass(){
    $("#menu").show();
}
function hide(){
    $("#menu").hide();
}