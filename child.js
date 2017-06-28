$(document).ready(function(){

  var apiUrl = "https://littlehelpers.herokuapp.com/parent/1/5";

  $.getJSON(apiUrl).then(function(data){

    console.log(data);

    for(var i = 0; i < data[1].length; i++){

      var rewardSource = $("#reward-template").html();
      var rewardTemplate = Handlebars.compile(rewardSource);
      var rewardContext = {
        "rewardName": data[1][i].name,
        "rewardPoints": data[1][i].point_value
      };

      $("#childRewards").prepend(rewardTemplate(rewardContext));

    };

    for(var i=0; i < data[2].length; i++){

      var taslSource = $("#task-template").html();
      var taskTemplate = Handlebars.compile(taskSource);
      var taskContext = {
        "taskName": data[2][i].name,
        "taskPoints": data[2][i].point_value
      };

      $("#childTasks").prepend(taskTemplate(taskContext))

    };

    for (var i = 0; i < data[0].length; i++) {

      var childSource = $("#child-template").html();
      var childTemplate = Handlebars.compile(childSource);
      var childContext = {
        "childName": data[0][i].name,
        "childPoints": data[0][i].points
      };

    };

    $('#childName').append(childTemplate(childContext));

  });

  $("#addReward").click(function(){

    var rewardObject = {
      name: $("rewardName").val(),
      point_value: $("rewardPointWorth").val()
    };

    $.post('https://littlehelpers.herokuapp.com/parent/{id}/{childID}/reward', rewardObject);

  });

  $("#addTask").click(function(){

    var rewardObject = {
      name: $("taskName").val(),
      point_value: $("chorePointWorth").val()
    };

    $.post('https://littlehelpers.herokuapp.com/parent/{id}/{childID}/task', rewardObject);

  });
  
});
