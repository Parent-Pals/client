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
      $.post('http://localhost:3000/auth/register', signUp)
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
  });

  $("#loginButton").click(function(){
    event.preventDefault()
    console.log('i did it')
    let parent = {
      email: $("#loginEmail").val(),
      password: $("#loginPassword").val()
    }
    console.log(parent);
    $.post('http://localhost:3000/auth/login', parent)
    .then(result => {
      console.log(result.token);

      localStorage.token = result.token;
      localStorage.id = result.id;
      window.location = `/dashboard.html`
    }).catch(error => {
      console.error(error)
        showErrorMessage(error.responseJSON.message)
    })
  })
})
