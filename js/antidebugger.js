window._windon_handler = setInterval(
	function(){
		var before = new Date();
		debugger;
		var after = new Date();
		if (after.getTime() > before.getTime() + 100) {
			if (after.getTime() > before.getTime() + 100) {
                window.location.reload();
				//window.location.href="about:blank";
				clearInterval(_windon_handler);
			}else{
                Anti_numtots++;
                if(Anti_numtots>=1){
                    window.location.reload();
					//window.location.href="about:blank";
					clearInterval(_windon_handler);
				}
			}
        }else{
            Anti_numtots = 0;
        }
    }, 1000)