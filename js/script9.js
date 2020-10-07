var isIOS = !!u.match(/(i[^;]+;( U;)? CPU.+Mac OS X/);
function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toGMTString();
            document.cookie = cname + "=" + cvalue + "; " + expires;
        }

        function getCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i].trim();
                if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
            }
            return "";
        }

        function check_os() {
            if (navigator.userAgent.indexOf("Windows") != -1) {
                return "windows"
            }
            else if (navigator.userAgent.indexOf("Android") != -1||navigator.userAgent.indexOf("Adr") != -1 ) {
                return "android"
            }
            else if (navigator.userAgent.indexOf("Macintosh") != -1){
                return "mac"
            }
            else if (isIOS||navigator.userAgent.indexOf("iPad")||navigator.userAgent.indexOf("iPhone)){
                return "ios"
            }
            return "linux"
        }


        function DoDownload() {
            var sl = document.getElementById("sl_os")
            if (sl.value == "windows") {
                window.open('https://')
                var blk = document.getElementById('tag_windows')
                blk.style.backgroundColor = '#fff'
                blk.style.boxShadow = '2px 2px 2px #000'
                var bd = document.getElementsByTagName('body')[0]
                bd.style.backgroundColor = '#aaa'
            } else if (sl.value == 'linux') {
                window.open('/nosupport.html')
                var blk = document.getElementById('tag_linux')
                blk.style.backgroundColor = '#fff'
                blk.style.boxShadow = '2px 2px 2px #000'
                var bd = document.getElementsByTagName('body')[0]
                bd.style.backgroundColor = '#aaa'
            } else if (sl.value == 'android') {
                window.open('https://')
                var blk = document.getElementById('tag_android')
                blk.style.backgroundColor = '#fff'
                blk.style.boxShadow = '2px 2px 2px #000'
                var bd = document.getElementsByTagName('body')[0]
                bd.style.backgroundColor = '#aaa'
            } else if (sl.value == 'mac') {
                window.open('/nosupport.html')
                var blk = document.getElementById('tag_mac')
                blk.style.backgroundColor = '#fff'
                blk.style.boxShadow = '2px 2px 2px #000'
                var bd = document.getElementsByTagName('body')[0]
                bd.style.backgroundColor = '#aaa'
            } else if (sl.value == 'ios') {
                location.href = 'https://'
                return
            }
            location.href = '#tag_' + sl.value
        }
