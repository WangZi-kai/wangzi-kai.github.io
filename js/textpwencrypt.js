          function encrypt() {
            switch ($('input[name="encrypt_type"]:checked').val()) {
            case "aes":
              $("#encrypt_result").val(CryptoJS.AES.encrypt($("#msg_source").val(), $("#pwd").val()));
              break;
            case "des":
              $("#encrypt_result").val(CryptoJS.DES.encrypt($("#msg_source").val(), $("#pwd").val()));
              break;
            case "rabbit":
              $("#encrypt_result").val(CryptoJS.Rabbit.encrypt($("#msg_source").val(), $("#pwd").val()));
              break;
            case "rc4":
              $("#encrypt_result").val(CryptoJS.RC4.encrypt($("#msg_source").val(), $("#pwd").val()));
              break;
            case "tripledes":
              $("#encrypt_result").val(CryptoJS.TripleDES.encrypt($("#msg_source").val(), $("#pwd").val()));
              break;
            }
          }
          function decrypt() {
            switch ($('input[name="encrypt_type"]:checked').val()) {
            case "aes":
              $("#msg_source").val(CryptoJS.AES.decrypt($("#encrypt_result").val(), $("#pwd").val()).toString(CryptoJS.enc.Utf8));
              break;
            case "des":
              $("#msg_source").val(CryptoJS.DES.decrypt($("#encrypt_result").val(), $("#pwd").val()).toString(CryptoJS.enc.Utf8));
              break;
            case "rabbit":
              $("#msg_source").val(CryptoJS.Rabbit.decrypt($("#encrypt_result").val(), $("#pwd").val()).toString(CryptoJS.enc.Utf8));
              break;
            case "rc4":
              $("#msg_source").val(CryptoJS.RC4.decrypt($("#encrypt_result").val(), $("#pwd").val()).toString(CryptoJS.enc.Utf8));
              break;
            case "tripledes":
              $("#msg_source").val(CryptoJS.TripleDES.decrypt($("#encrypt_result").val(), $("#pwd").val()).toString(CryptoJS.enc.Utf8));
              break;
            }
          }
