$(function () {

  // Additional CSS classes can be added to an element via addClass()

  // For instance, add the class .fancy-link to all anchor tags.
  // Note that you *do not* add a dot in front of the class name here.
  $("a").addClass("fancy-link");

  $("p:first").addClass("large emphasize");

  //select all sub items in out list
  $("li li").addClass(function(index){
    $(this).addClass("item-" + index);
  });

/*  $("div").addClass(function(index, currentClass){
      if(currentClass === "dummy"){
        return "red-box";
      }
  });*/

    $("div").addClass(function(index, currentClasses) {
    console.log(currentClasses);  // String containing all classes

    // Add .red-box if the current classes contain "dummy"
    if (currentClasses.indexOf("dummy") !== -1) {
      return "red-box";
    }
  });

    //switch between classes
    //$(".red-box").removeClass("red-box").addClass("blue-box");

     $(".dummy").removeClass("dummy").addClass("green-box");

});
