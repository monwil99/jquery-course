$(function () {

  // The event handlers you've used so far are only attached to those elements
  // that exist at the time the code is executed. Thus, they won't work for
  // dynamically attached elements:
/*  $("p").click(function() {
    $(this).slideUp();
  });
  $("#content").append("<p>This is a dynamically added paragraph</p>");*/

  // delegated event to be handle by parent and be given to children/descendants when the event happens
  // this is to have new elements to have the event handling

  //second parameter is the children or descendants
  $("#content").on("click", "p", function() {
    //this will note refer to the parent which is content div but to the children specified in the second parameter
    // the oarent should always be on the page or else you are going to have the problem
    //content div waiting for the events
    $(this).slideUp();
  });
  $("#content").append("<p>This is a dynamically added paragraph</p>");

  $("body").on("mouseenter", "li", function(){
      $(this).css("color", "#666");

  });

  //use delegated for parent elements when there are a lot of event handlers


});
