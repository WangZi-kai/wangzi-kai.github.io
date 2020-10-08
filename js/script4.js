var audioEle = document.getElementById("audio");
var audioControlBtn = jQuery("body").find(".audio-control-btn");
  audioEle.load();
  jQuery(".audio-control-btn").click(function() {
    if (audioEle.paused){ 
        audioEle.play();   
        audioControlBtn.addClass("playing")
    }else {
        audioEle.pause();  
        audioControlBtn.removeClass("playing")
    }
})
