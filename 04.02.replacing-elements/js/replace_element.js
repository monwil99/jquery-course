$(function () {

  //$("li").replaceWith("<li>Replaced</li>");
/*  $("li").replaceWith(function(){
      //can return a string or another element
      return "<li>Replaced function</li>";

  });*/

/*  var firstListItem = $("li:first");
  $("p:first").replaceWith(firstListItem);
  $("p").replaceWith(firstListItem);*/


//$(".red-box, .blue-box").replaceWith("<div class='green-box'>More Green</div>");
/*var greenBox = $(".green-box");
$(".red-box, .blue-box").replaceWith(greenBox);*/

$("<div class='green-box'>More Green</div>").replaceAll(".red-box, .blue-box");

// can use function (return string) or element to replace others

});
