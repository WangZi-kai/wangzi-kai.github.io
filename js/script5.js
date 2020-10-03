function OSnow(){
        var agent = navigator.userAgent.toLowerCase();
        var isMac = /macintosh|mac os x/i.test(navigator.userAgent);
        if (agent.indexOf("win32") >= 0 || agent.indexOf("wow32") >= 0) {
            window.location.href = '/download/everyday.zip'; 
                }
        if (agent.indexOf("win64") >= 0 || agent.indexOf("wow64") >= 0) {
            window.location.href = '/download/everyday.zip'; 
                }
        if(isMac){
            window.location.href = '/download/nosupport.html'; 
                }
}
OSnow();
