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
        "rewardPoints": data[1][i].point_value,
        "id": data[1][i].id
      };
      $("#childRewards").prepend(rewardTemplate(rewardContext))
    };


    for(var i=0; i < data[2].length; i++){
      var taskSource = $("#task-template").html();
      var taskTemplate = Handlebars.compile(taskSource);
      var taskContext = {
        "taskName": data[2][i].name,
        "taskPoints": data[2][i].point_value,
        "id": data[2][i].id
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

  $("#addReward").click(function(event) {
    event.preventDefault();
    var rewardObject = {
      name: $("#rewardName").val(),
      point_value: $("#rewardPointWorth").val()
    };
    console.log(rewardObject);
    $.post({
      url: `${API_URL}${localStorage.id}/child/${child_id}/reward/`,
      headers:{'Authorization': `Bearer ${localStorage.token}`}
    }, rewardObject)
      .then(function(result) {
        console.log(result);
        window.location.reload();
    });
  })
  $(document).on('click', '#redeemReward', function() {
    var redeemRewardId = $(this).data('reward');
    var redeemRewardPoints = $(this).data('rewardPoints');
    $.ajax({
      url: `${API_URL}${localStorage.id}/${child_id}/`,
      headers: {'Authorization': `Bearer ${localStorage.token}`},
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
      type: 'PUT',
      body: JSON.stringify({"points": 1000})
      })
      // .then(function() {
      //   $.ajax({
      //     url: `${API_URL}${localStorage.id}/child/${child_id}/reward/${redeemRewardId}`,
      //     headers: {'Authorization': `Bearer ${localStorage.token}`},
      //     type: 'DELETE'
      //   })
      // })
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

  $("#addTask").click(function(event) {
    event.preventDefault();
    var taskObject = {
      name: $("#taskName").val(),
      point_value: $("#taskPointWorth").val()
    };
    console.log(taskObject);
    console.log(`${API_URL}${localStorage.id}/${child_id}/task/`);
    $.post({
      url: `${API_URL}${localStorage.id}/${child_id}/task/`,
      headers:{'Authorization': `Bearer ${localStorage.token}`}
    }, taskObject)
      .then(function(result) {
        console.log(result);
        window.location.reload();
    });
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
