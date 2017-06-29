$(document).ready(function(){
    var API_URL = "https://littlehelpers.herokuapp.com/admin/1";

    $.ajax({
    url: `${API_URL}`,
    headers:{'Authorization': `Bearer ${localStorage.token}`},
    type: 'GET'
  }).then(function(data){
    console.log(data)
    for(var i=0; i<data.length; i++){
      var adminSource = $("#admin-template").html();
      var adminTemplate = Handlebars.compile(adminSource);
      var userNames = {
        "user": data[i].name
      }
       $('#users').append(adminTemplate(userNames));
    }
  });

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