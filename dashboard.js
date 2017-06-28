$(document).ready(function() {

  const API_URL = `https://littlehelpers.herokuapp.com/parent/`;

  $.ajax({
    url: `${API_URL}${localStorage.id}`,
    headers:{'Authorization': `Bearer ${localStorage.token}`},
    type: 'GET'
  })
  .then(function(data) {
    console.log(data)
    var parentSource = $("#parent-template").html();
    var parentTemplate = Handlebars.compile(parentSource);
    var parentContext = {
      "parentName": data[0][0].name
    };
    $("#navbarSupportedContent").prepend(parentTemplate(parentContext))
    var childSource   = $("#child-template").html();
    var childTemplate = Handlebars.compile(childSource);
<<<<<<< HEAD
    for(var i=0; i < data[1].length; i++){
      var childContext = {
        "childName": data[1][i].name,
        "childPoints": data[1][i].points
      };
      $("#children").prepend(childTemplate(childContext));
=======
    for(var i=0; i < data.length; i++){
        var childContext = {
          "childName": data[1][i].name,
          "childPoints": data[1][i].points,
          "childURL": `https://little-helpers-b26e7.firebaseapp.com/child.html/?parent_id=${localStorage.id}&child_id=${data[1][i].id}`
        }
          $("#children").append(childTemplate(childContext))
>>>>>>> AUTH
    }
  });

  $("#addChild").click(function(){
    var childName = $("#childNameAdd").val();
<<<<<<< HEAD
    return $.ajax({
      url: `${API_URL}2`,
      headers:{'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNDk4NTk0NzMxLCJleHAiOjE0OTg2MDE5MzF9.4lIV67OwsP8f9btLNoDwFxah_TSkpsExcJoEUsfI7O4`},
      type: 'POST',
      data: {childName}
    });
=======
    return   $.ajax({
        url: `${API_URL}${localStorage.id}`,
        headers:{'Authorization': `Bearer ${localStorage.token}`},
        type: 'POST',
        data: {childName}
      })
>>>>>>> AUTH
  });

  $("#deleteChild").click(function(){
<<<<<<< HEAD
    return $.ajax({
      url: `${API_URL}2/1`,
      headers:{'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNDk4NTk0NzMxLCJleHAiOjE0OTg2MDE5MzF9.4lIV67OwsP8f9btLNoDwFxah_TSkpsExcJoEUsfI7O4`},
      type: 'DELETE'
=======
    return   $.ajax({
        url: `${API_URL}${localStorage.id}/`,
        headers:{'Authorization': `Bearer ${localStorage.token}`},
        type: 'DELETE'
      })
>>>>>>> AUTH
    });
  });
});
