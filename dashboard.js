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
    for(var i=0; i < data[1].length; i++){
      var childContext = {
        "childName": data[1][i].name,
        "childPoints": data[1][i].points
      };
      $("#children").prepend(childTemplate(childContext));
    }
  });

  $("#addChild").click(function(){
    var childName = $("#childNameAdd").val();
    return $.ajax({
      url: `${API_URL}2`,
      headers:{'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNDk4NTk0NzMxLCJleHAiOjE0OTg2MDE5MzF9.4lIV67OwsP8f9btLNoDwFxah_TSkpsExcJoEUsfI7O4`},
      type: 'POST',
      data: {childName}
    });
  });

  $("#deleteChild").click(function(){
    return $.ajax({
      url: `${API_URL}2/1`,
      headers:{'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNDk4NTk0NzMxLCJleHAiOjE0OTg2MDE5MzF9.4lIV67OwsP8f9btLNoDwFxah_TSkpsExcJoEUsfI7O4`},
      type: 'DELETE'
    });
  });
});
