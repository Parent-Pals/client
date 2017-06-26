$(document).ready(function(){
  var apiUrl = "https://littlehelpers.herokuapp.com/parent/2/1";
  $.getJSON(apiUrl).then(function(data){
    for(var i = 0; i < data.length; i++){
      var rewardSource = $("#reward-template").html();
      var rewardTemplate = Handlebars.compile(rewardSource);
      var rewardContext = {
        "rewardName": data[1][i].name,
        "rewardPoints": data[1][i].point_value
      }
      $("#rewards").append(rewardTemplate(rewardContext))
    }
  })
})
