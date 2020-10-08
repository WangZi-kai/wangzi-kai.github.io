function autoPlay() {
            var myAuto = document.getElementById('backgroundmusic');
            myAuto.play();
        }
        function closePlay() {
            var myAuto = document.getElementById('backgroundmusic');
            myAuto.pause();
            myAuto.load();
        }
