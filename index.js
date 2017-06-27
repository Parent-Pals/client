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

>>>>>>> origin/master

      }).catch(error =>{
        console.error(error)
          showErrorMessage(error.responseJSON.message)
      })
    }
  })
})


//
// $(()=>{
//   $('form').submit((event)=>{
//     event.preventDefault()
//     const user = getUserFromForm();
//     signup(user)
//       .then(result=>{
//         console.log(result);
//         localStorage.token = result.token;
//         setIdRedirect(result);
//       }).catch(error =>{
//         console.error(error)
//           showErrorMessage(error.responseJSON.message)
//       })
//   });
// })
