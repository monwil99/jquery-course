$(function () {
   //$("ul ul").prepend("<li>First sub item</li>");

   //$("<li>Very first sub item</li>").prependTo("ul ul:first");

   //$("<h3>My Name</h3>").prependTo("#content")

   //sibling
   //$(".red-box").after("<div class='red-box'>New Red</div>");
   //$(".blue-box").before("<div class='blue-box'>Blue Friend</div>");
/*
     $(".blue-box").before(function() {
    // Maybe more complex string of new element(s)
    return "<div class='blue-box'>Blue 2</div>";
  });*/

 //not clone but move to the new position
 //$(".blue-box").before($(".red-box"));

   //$("p").after($("#list"));
   // if many element, clone. if one only, move
  //$("p:first").after($("#list"));


});
