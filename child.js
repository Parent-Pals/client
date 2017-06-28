$(document).ready(function(){

  var API_URL = "https://littlehelpers.herokuapp.com/parent/";
  let parent_id = parseQueryString(window.location.search).parent_id;
  let child_id = parseQueryString(window.location.search).child_id;

  $.ajax({
    url: `${API_URL}${localStorage.id}/${child_id}`,
    headers:{'Authorization': `Bearer ${localStorage.token}`},
    type: 'GET'
  })
  .then((data) =>{

    for(var i = 0; i < data[1].length; i++){
      var rewardSource = $("#reward-template").html();
      var rewardTemplate = Handlebars.compile(rewardSource);
      var rewardContext = {
        "rewardName": data[1][i].name,
        "rewardPoints": data[1][i].point_value
      };
      $("#childRewards").prepend(rewardTemplate(rewardContext))
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
    $.ajax({
      url: `${API_URL}${localStorage.id}/${child_id}/reward`,
      headers:{'Authorization': `Bearer ${localStorage.token}`},
      type: 'POST',
      body: rewardObject
    })
  })

  function logOut(){
      $("#logout").click(function(){
        console.log('logout')
        localStorage.removeItem("id");
        localStorage.removeItem("token");
        window.location = "/index.html";
      });
    }
    logOut()

  $("#addTask").click(function(){
    var taskObject = {
      name: $("taskName").val(),
      point_value: $("chorePointWorth").val()
    };
    $.ajax({
      url: `${API_URL}${localStorage.id}/${child_id}/task`,
      headers:{'Authorization': `Bearer ${localStorage.token}`},
      type: 'POST',
      body: taskObject
    })
  });
});


function parseQueryString (query) {
  let queries = {}
  let parse = query.substring(1).split('&').map(pair => {
     return pair.split('=');
   })
  parse.forEach(pair => {
    queries[pair[0]] = pair[1]
  })
  return queries
}
