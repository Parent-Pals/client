$(document).ready(function(){
  var apiUrl = "https://littlehelpers.herokuapp.com/parent/2";
  $.getJSON(apiUrl).then(function(data){
    var parentSource = $("#parent-template").html();
    var parentTemplate = Handlebars.compile(parentSource);
    var parentContext = {
      "parentName": data[0][0].name
    }
    $("#navbarNavDropdown").prepend(parentTemplate(parentContext))

    var childSource   = $("#child-template").html();
    var childTemplate = Handlebars.compile(childSource);
    for(var i=0; i < data.length; i++){
        var childContext = {
          "childName": data[1][i].name,
          "childPoints": data[1][i].points
        }
          $("#children").append(childTemplate(childContext))
    }
  })
})
