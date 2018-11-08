$(function () {

// .on("click", function() { ... } )
//multiple events same handler
$("html").on("click keydown", function(){
  console.log("Mouse was clicked or key was pressed");
});

  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg"
  ];

  var i = 0;
  $(".gallery").find("img").on("click", function() {
    i = (i + 1) % images.length;
    $(this).fadeOut(function() {
      $(this).attr("src", images[i]).fadeIn();
    });
  });


});
