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
<<<<<<< HEAD
      $.ajax({
        type: "POST",
        url: 'https://littlehelpers.herokuapp.com/auth/register', 
        data: signUp,
        success: function (result){
          console.log(result);
          localStorage.token = result.token;
          localStorage.id = result.id;
          window.location = `/dashboard.html`
        },
        error: function(xhr, ajaxOptions, thrownError){
          window.location = '/error.html';
          console.log("error")
          console.error(error)
=======
      $.post('http://localhost:3000/auth/register', signUp)
      .then(result=>{
        console.log(result);
        localStorage.token = result.token;
        localStorage.id = result.id;
        window.location = `/dashboard.html`

      }).catch(error =>{
        console.error(error)
>>>>>>> origin/new-reward
          showErrorMessage(error.responseJSON.message)
        }
     })
  };
})
  $("#loginButton").click(function(event){
    event.preventDefault()
    let parent = {
      email: $("#loginEmail").val(),
      password: $("#loginPassword").val()
    }
<<<<<<< HEAD
    console.log(parent)
    $.post('https://littlehelpers.herokuapp.com/auth/login', parent)
      .then(result => {
        console.log(result.token);
        localStorage.token = result.token;
        localStorage.id = result.id;
        window.location = `/dashboard.html`
      }).catch(error => {
        console.error(error)
=======
    console.log(parent);
    $.post('http://localhost:3000/auth/login', parent)
    .then(result => {
      console.log(result.token);

      localStorage.token = result.token;
      localStorage.id = result.id;
      window.location = `/dashboard.html`
    }).catch(error => {
      console.error(error)
>>>>>>> origin/new-reward
        showErrorMessage(error.responseJSON.message)
      })
    })
})