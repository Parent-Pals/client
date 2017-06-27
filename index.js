// $(document).ready(function(){
//   $("#createAccountButton").click(function(){
//     event.preventDefault()
//
//     var signUp = {
//       password: $("#password").val(),
//       passwordConfirmation: $("#passwordConfirmation").val(),
//       name: $("#name").val(),
//       email: $("#email").val()
//     }
//     console.log(signUp);
//     if(signUp.password != signUp.passwordConfirmation){
//       $(".passwordError").css('display', 'block')
//     } else {
//       return $.post('https://littlehelpers.herokuapp.com/auth/register', signUp)
//     }
//   })
// })
//
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
      $.post('https://littlehelpers.herokuapp.com/auth/register', signUp)
      .then(result=>{
        console.log(result);
        localStorage.token = result.token;
        localStorage.id = result.id;
        window.location = `/dashboard.html`


      }).catch(error =>{
        console.error(error)
          showErrorMessage(error.responseJSON.message)
      })
    }
  })
})
