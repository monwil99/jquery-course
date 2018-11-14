$(function () {

  // These are now multiple images.
  var galleryItems = $(".gallery").find("img");

  // Normally, you would do this in CSS.
  galleryItems.css("width", "33%")
              .css("opacity", "0.7");

  // Fade images in/out when hovering/leaving.
  galleryItems.mouseenter(function() {
    $(this).stop().fadeTo(500, 1);
  });

  galleryItems.mouseleave(function() {
    $(this).stop().fadeTo(500, 0.7);
  });

/*And first of all I'm going to get the source attribute of the image that has actually been clicked.

So I'm going to refer to this and then get the source attribute value and then I'm going to go ahead

and create an image by calling the dollar and then passing in image and I'm going to set the images

source attributes using the attribute function and I'm gonna set that to the same source that the clicked

image also has.

And I'm also gonna change its worth to 100 percent.

And now I'm just going to go ahead and reuse the Lightbox that I still have from one of the previous

lectures and then I'm going to first empty that.

So I'm going to remove all the text that I put in there and then going to append this new image that*/

  galleryItems.click(function() {
    // Read image src of clicked image.
    var source = $(this).attr("src");

    // Generate new <img> tag to add to the lightbox.
    var newImage = $("<img>").attr("src", source).css("width", "100%");

    // Prepare and show lightbox preview.
    $(".lightbox").empty().append(newImage).fadeIn(1000);
  });

  $(".lightbox").click(function() {
    $(this).stop().fadeOut();
  });

});
