    window.onload = function () {
        var slider = new SliderUnlock("#verify",{
            labelTip: "验证显示选项",
            successLabelTip: "验证成功",
        }, function(){
            $("#menu").show()
        }, function(){
            $("#menu").hide()
        }
        slider.init();
        });
    })
