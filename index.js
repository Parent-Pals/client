$(document).ready(function(){
  $("#createAccountButton").click(function(event){
    event.preventDefault()
    var signUp = {
      password: $("#password").val(),
      passwordConfirmation: $("#passwordConfirmation").val(),
      name: $("#name").val(),
      email: $("#email").val()
    }

    if (signUp.password != signUp.passwordConfirmation){
      $(".passwordError").css('display', 'block')
    } else {
      $.ajax({
        type: "POST",
        url: 'https://littlehelpers.herokuapp.com/auth/register',
        data: signUp,
        success: function (result){
          localStorage.token = result.token;
          localStorage.id = result.id;
          window.location = `/dashboard.html`
        },
        error: function(xhr, ajaxOptions, thrownError){
          window.location = '/error.html';
          showErrorMessage(error.responseJSON.message)
        }
     })
  };
})
    })
  $("#loginButton").click(function(event){
    event.preventDefault()
    let parent = {
      email: $("#loginEmail").val(),
      password: $("#loginPassword").val()
    }
    $.post('https://littlehelpers.herokuapp.com/auth/login', parent)
      .then(result => {
        localStorage.token = result.token;
        localStorage.id = result.id;
        window.location = `/dashboard.html`
      }).catch(error => {
        showErrorMessage(error.responseJSON.message)
      })
})
