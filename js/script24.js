$(document).ready(function(){
  verify = $.cookie('verify');
  if(verify == 'ok'){
    consule.log('Welcome!');
  }else{
    window.location.href('/game/verify.html');
  }
});
