var lang = new Array();
                    var userAgent = navigator.userAgent.toLowerCase();
                    var is_opera = userAgent.indexOf('opera') != -1 && opera.version();
                    var is_moz = (navigator.product == 'Gecko') && userAgent.substr(userAgent.indexOf('firefox') + 8, 3);
                    var is_ie = (userAgent.indexOf('msie') != -1 && !is_opera) && userAgent.substr(userAgent.indexOf('msie') + 5, 3);

                    Array.prototype.push = function(value) {
                        this[this.length] = value;
                        return this.length;
                    }
                    function $(objname) {
                        return document.getElementById(objname);
                    }
                    function runCode(objname) {
                        var winname = window.open('', "_blank", '');
                        var obj = $(objname);
                        winname.document.open('text/html', 'replace');
                        winname.opener = null // 防止代码对论谈页面修改
                        winname.document.write(obj.value);
                        winname.document.close();
                    }
                    function saveCode(objname) {
                        var winname = window.open('', '_blank', 'top=10000');
                        winname.document.open('text/html', 'replace');
                        var obj = $(objname);
                        winname.document.write(obj.value);
                        winname.document.execCommand('saveas', '', 'code.htm');
                        winname.close();
                    }
