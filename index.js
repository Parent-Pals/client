$(document).ready(function(){
  $("#createAccountButton").click(function(){
    event.preventDefault()
    
    var signUp = {
      password: $("#password").val(),
      passwordConfirmation: $("#passwordConfirmation").val(),
      name: $("#name").val(),
      email: $("#email").val()
    }
    console.log(signUp);
    if(signUp.password != signUp.passwordConfirmation){
      $(".passwordError").css('display', 'block')
    } else {
      console.log(return $.post('https://littlehelpers.herokuapp.com/auth/register', signUp))
    }
  })
})
