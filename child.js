$(document).ready(function(){
  var apiUrl = "https://littlehelpers.herokuapp.com/parent/2/1";
  $.getJSON(apiUrl).then(function(data){
    console.log(data)
    for(var i = 0; i < data[1].length; i++){
      var rewardSource = $("#reward-template").html();
      var rewardTemplate = Handlebars.compile(rewardSource);
      var rewardContext = {
        "rewardName": data[1][i].name,
        "rewardPoints": data[1][i].point_value
      }
      $("#rewards").append(rewardTemplate(rewardContext))
    }
    for(var i=0; i < data[2].length; i++){
      var choreSource = $("#chore-template").html();
      var choreTemplate = Handlebars.compile(choreSource);
      var choreContext = {
        "choreName": data[2][i].name,
        "chorePoints": data[2][i].point_value
      }
      $("#chores").append(choreTemplate(choreContext))
    }
    for (var i = 0; i < data[0].length; i++) {
      var childSource = $("#child-template").html();
      var childTemplate = Handlebars.compile(childSource);
      var childContext = {
        "childName": data[0][i].name,
        "childPoints": data[0][i].points
      }
    }
    $('#childName').append(childTemplate(childContext));
  })
})
