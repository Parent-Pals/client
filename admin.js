$(document).ready(function(){
    var API_URL = "https://littlehelpers.herokuapp.com/admin/1";

    $.ajax({
    url: `${API_URL}`,
    headers:{'Authorization': `Bearer ${localStorage.token}`},
    type: 'GET'
  })



  function logOut(){
      $("#logout").click(function(){
        console.log('logout')
        localStorage.removeItem("id");
        localStorage.removeItem("token");
        window.location = "/index.html";
      });
    }
    logOut()

})