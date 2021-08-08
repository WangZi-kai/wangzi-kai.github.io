          function hash(type, flag) {
            if (!flag) $(".buttonSelected").removeClass("buttonSelected");
            switch (type) {
            case "sha1":
              hide_pwd();
              $("#btn_sha1").addClass("buttonSelected");
              $("#hash_result").val(CryptoJS.SHA1($("#message_source").val()));
              break;
            case "sha224":
              hide_pwd();
              $("#btn_sha224").addClass("buttonSelected");
              $("#hash_result").val(CryptoJS.SHA224($("#message_source").val()));
              break;
            case "sha256":
              hide_pwd();
              $("#btn_sha256").addClass("buttonSelected");
              $("#hash_result").val(CryptoJS.SHA256($("#message_source").val()));
              break;
            case "sha384":
              hide_pwd();
              $("#btn_sha384").addClass("selected");
              $("#hash_result").val(CryptoJS.SHA384($("#message_source").val()));
              break;
            case "sha512":
              hide_pwd();
              $("#btn_sha512").addClass("buttonSelected");
              $("#hash_result").val(CryptoJS.SHA512($("#message_source").val()));
              break;
            case "md5":
              hide_pwd();
              $("#btn_md5").addClass("buttonSelected");
              $("#hash_result").val(CryptoJS.MD5($("#message_source").val()));
              break;
            case "hmacsha1":
              $("#hash_result").val(CryptoJS.HmacSHA1($("#message_source").val(), $("#pwd").val()));
              break;
            case "hmacsha224":
              $("#hash_result").val(CryptoJS.HmacSHA224($("#message_source").val(), $("#pwd").val()));
              break;
            case "hmacsha256":
              $("#hash_result").val(CryptoJS.HmacSHA256($("#message_source").val(), $("#pwd").val()));
              break;
            case "hmacsha384":
              $("#hash_result").val(CryptoJS.HmacSHA384($("#message_source").val(), $("#pwd").val()));
              break;
            case "hmacsha512":
              $("#hash_result").val(CryptoJS.HmacSHA512($("#message_source").val(), $("#pwd").val()));
              break;
            case "hmacmd5":
              $("#hash_result").val(CryptoJS.HmacMD5($("#message_source").val(), $("#pwd").val()));
              break;
            case "pbkdf2":
              if (isNAN($("#iterations").val())) {
                var salt = CryptoJS.enc.Utf8.parse($("#salt").val());
                var hash_str_pbkdf2 = CryptoJS.PBKDF2($("#message_source").val(), salt, {
                  keySize: parseInt($("#key_size").val()),
                  iterations: parseInt($("#iterations").val())
                });
                $("#hash_result").val(hash_str_pbkdf2);
              } else {
                alert("迭代次数必须为数字");
                $("#salt").val("")
              }
              break;
            }
          }
          function show_pwd(type) {
            $(".buttonSelected").removeClass("buttonSelected");
            if ("pbkdf2" != type) {
              $("#p_span").show();
              $("#k_span").hide();
              switch (type) {
              case "hmacsha1":
                $("#btn_hmacsha1").addClass("buttonSelected");
                break;
              case "hmacsha224":
                $("#btn_hmacsha224").addClass("buttonSelected");
                break;
              case "hmacsha256":
                $("#btn_hmacsha256").addClass("buttonSelected");
                break;
              case "hmacsha384":
                $("#btn_hmacsha384").addClass("buttonSelected");
                break;
              case "hmacsha512":
                $("#btn_hmacsha512").addClass("buttonSelected");
                break;
              case "hmacmd5":
                $("#btn_hmacmd5").addClass("buttonSelected");
                break;
              }
            } else {
              $("#p_span").hide();
              $("#k_span").show();
              $("#btn_pbkdf2").addClass("buttonSelected");
            }
            $("#p_div").css("display", "inline");
            $("#hmac_type").val(type);
            $("#hash_result").val("");
          }
          function hide_pwd() {
            $("#p_div").css("display", "none");
          }
          function copy_code() {
            clipboardData.setData('Text', $("#hash_result").val());
          }
          function isNAN(NAN) {
            var temp, reg;
            reg = /\d*/i; //\d表示数字,*表示匹配多个数字  
            temp = NAN.match(reg);
            return (temp == NAN) ? true: false;
          }
