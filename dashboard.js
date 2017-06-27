$(document).ready(function() {
  var API_URL = "https://littlehelpers.herokuapp.com/parent/1";
  $.getJSON(API_URL).then(function(data) {
    var parentSource = $("#parent-template").html();
    var parentTemplate = Handlebars.compile(parentSource);
    var parentContext = {
      "parentName": data[0][0].name
    }
    $("#navbarSupportedContent").prepend(parentTemplate(parentContext))
    var childSource   = $("#child-template").html();
    var childTemplate = Handlebars.compile(childSource);
    for(var i=0; i < data.length; i++){
        var childContext = {
          "childName": data[1][i].name,
          "childPoints": data[1][i].points
        }
          $("#children").append(childTemplate(childContext))
    }
  });
  function getUserInfo(id) {
    return $.get({
      url: `${API_URL}/user/${id}`,
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    });
  };
  $("#addChild").click(function(){
    var childName = $("#childNameAdd").val();
    return $.post(`https://littlehelpers.herokuapp.com/parent/${id}/`, childName)
  })
  function createChild(id) {
    return $.post({
      url: `${API_URL}/user/${id}/${childName}`,
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    });
  };
  $("#deleteChild").click(function(){
    return $.delete(`https://littlehelpers.herokuapp.com/parent/${id}/${id}`);
  })
  function deleteChild(id) {
    return $.delete({
      url: `${API_URL}/user/${id}/${id}`,
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    });
  };
})
