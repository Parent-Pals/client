$(document).ready(function(){
  $("#createAccountButton").click(function(){
    var password = $("#password").val();
    var passwordConfirmation = $("#passwordConfirmation").val();
    if(password != passwordConfirmation){
      $(".passwordError").css('display', 'block')
    }
  })
})
