$(function () {

  // jQuery allows you to attach arbitrary data to any element, represented as
  // HTML attributes prefixed with "data-", e.g. "data-images".
  // Here, we'll attach data about all available images to the gallery itself.

  // Select the <img> inside the gallery to manipulate it later

  //store gallery in a variable so that jquery would not need to always look into the DOM each time you gonna use the element
  var gallery = $(".gallery");

  // Initialize an array of all images for the gallery
  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg"
  ];

  // To attach data, use the data() function and pass in two arguments: first,
  // the key for the data, and second the actual data/value.
  gallery.data("availableImages", images);
  // To retrieve the data, again use just one argument: the key.
  console.log(gallery.data("availableImages"));  // Array[...]

  //like attribute, prop... 2 parameter to set the value and 1 parameter to retrieve the value
    gallery.data("name", "The Amazing Gallery");
  console.log(gallery.data("name"));  // The Amazing Gallery

  //no prameter will return the data associated to the gallery)
  console.log(gallery.data());
  gallery.removeData("name");
  console.log(gallery.data("name"));  // The Amazing Gallery

    //html 5
  //data- prefix
    var firstPar = $("p:first");
  console.log(firstPar.data("mydata"));  // Data coming from HTML attribute

  //USAGE - store anything you want strings numbers,, use data function



});
