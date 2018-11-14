$(function () {
  //using remove, jquery is not gonna remember the removed element
/*  $("li").remove();
  $("form").children().not("input:text, textarea, br").remove();*/
   


  //detach an element so it can be later used or put back into the page
  //if using detach, the event handler and data (variable) associated will not be forgotten
/*  var detachedListItem = $("li").detach();
  $("#content").append(detachedListItem);*/


  //both detach and remove for parents will also remove the children

  //just remove the text area but retain the paragraph
  //$("p:first").empty();

  $(".red-box, .green-box, .blue-box").empty();
});
