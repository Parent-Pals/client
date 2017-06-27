$(document).ready(function(){
  var apiUrl = "https://littlehelpers.herokuapp.com/parent/1";
  $.getJSON(apiUrl).then(function(data){
    var parentSource = $("#parent-template").html();
    var parentTemplate = Handlebars.compile(parentSource);
    var parentContext = {
      "parentName": data[0][0].name
    }
    $("#navbarSupportedContent").append(parentTemplate(parentContext))

    var childSource   = $("#child-template").html();
    var childTemplate = Handlebars.compile(childSource);
    for(var i=0; i < data[1].length; i++){
        var childContext = {
          "childName": data[1][i].name,
          "childPoints": data[1][i].points
        }
          $("#children").prepend(childTemplate(childContext))
    }


  })
  $("#addChild").click(function(){
    var childName = $("#childNameAdd").val();
    return $.post(`https://littlehelpers.herokuapp.com/parent/${id}/`, childName)
  })

  $("#deleteChild").click(function(){
    return $.delete(`https://littlehelpers.herokuapp.com/parent/${id}/${id}`);
  })
  }
)
