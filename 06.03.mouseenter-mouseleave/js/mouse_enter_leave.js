$(function () {

var bluebox = $(".blue-box");
/*bluebox.mouseenter(function(){
  // fade to half a second to 70% opacity
  // stop the current animation running, animation queue
  // opacity to 70% will not reach if you remove the mouse button earlier than 0.5s
  $(this).stop().fadeTo(500, 0.7);
});

//fade back
bluebox.mouseleave(function(){
  $(this).stop().fadeTo(500, 1);
});*/

//hover(handlerIn, handlerOut)
bluebox.hover(function(){
  $(this).stop().fadeTo(500, 0.7);
},
function(){
  $(this).stop().fadeTo(500, 1);
});



});
