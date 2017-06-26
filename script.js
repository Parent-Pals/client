$(document).ready(function(){
  var apiUrl = "https://littlehelpers.herokuapp.com/parent/2";
  $.getJSON(apiUrl).then(function(data){

    var source   = $("#child-template").html();
    var template = Handlebars.compile(source);
    for(var i=0; i < data.length; i++){
        var context = {
          "childName": data[1][i].name,
          "childPoints": data[1][i].points
        }
            $("#children").append(template(context))
    }
  })
})
