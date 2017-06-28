
$(document).ready(function() {

  const API_URL = `https://littlehelpers.herokuapp.com/parent/`;

  $.ajax({
    url: `${API_URL}${localStorage.id}`,
    headers:{'Authorization': `Bearer ${localStorage.token}`},
    type: 'GET'
  })
  .then(function(data) {
    console.log(data)
    for(var i =0; i <data[0].length; i++){
    var parentSource = $("#parent-template").html();
    var parentTemplate = Handlebars.compile(parentSource);
    var parentContext = {
      "parentName": data[0][0].name
    };

    $("#navbarSupportedContent").prepend(parentTemplate(parentContext))
}
    var childSource   = $("#child-template").html();
    var childTemplate = Handlebars.compile(childSource);
    for(var i=0; i < data[1].length; i++){
        var childContext = {
          "childName": data[1][i].name,
          "childPoints": data[1][i].points,
          "childURL": `/child.html?parent_id=${localStorage.id}&child_id=${data[1][i].id}`
        }
          $("#children").prepend(childTemplate(childContext))
    }
  });

  $("#addChild").click(function(event){
    event.preventDefault();
    var childName = $("#childNameAdd").val();
    console.log(childName)
    var parent_id = localStorage.id;
    return   $.ajax({
        url: `${API_URL}${localStorage.id}`,
        headers:{'Authorization': `Bearer ${localStorage.token}`},
        type: 'POST',
        data: {name: childName}
      })
      .then(function(result){
        console.log(result)
        window.location.reload()
      })
  });

  $("#deleteChild").click(function(){
    return   $.ajax({
        url: `${API_URL}${localStorage.id}/`,
        headers:{'Authorization': `Bearer ${localStorage.token}`},
        type: 'DELETE'
      })
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
});
