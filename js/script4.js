function autoPlay() {
            var myAuto = document.getElementById('myaudio');
            myAuto.play();
        }
        function closePlay() {
            var myAuto = document.getElementById('myaudio');
            myAuto.pause();
            myAuto.load();
        }
