var name = $.cookie('verify');
if(name == "ok") {
consule("Welcome!")
}else{
window.location.href("/game/verify.html')
}
