function ten(){
    var num = document.getElementById("num");
    switch(document.getElementById("select").value){
        case 2:
            console.log(num.toString(2)); // 二进制
        case 8:
            console.log(num.toString(8)); // 八进制
            console.log(num.toString(16)); // 十六进制
            console.log(num.toString(32)); //三十二进制
