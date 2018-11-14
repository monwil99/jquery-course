$(function () {

$("#button").click({
  //user: "Wilmon"
}, function(event){
  console.log(event.data);

  greet(event.data);
});

function greet(userdata){
  username = userdata.user || "SAMPLE";

  alert("Hi " + username);
}



});
