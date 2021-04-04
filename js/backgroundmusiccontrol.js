function autoPlay() {
            var myAuto = document.getElementById('backgroundmusic');
            myAuto.load();
            myAuto.play();
        }
        function closePlay() {
            var myAuto = document.getElementById('backgroundmusic');
            myAuto.pause();
        }
