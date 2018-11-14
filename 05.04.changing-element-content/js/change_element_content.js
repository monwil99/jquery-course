$(function () {

var firstPar = $("p:first");
console.log(firstPar.text());
console.log(firstPar.html());

console.log($("p").html());

//firstPar.text("<strong>Hello</strong> World!");
//So when using the HTML function you can make any HTML code inside your string be parsed on the website

firstPar.html(firstPar.html() + " This was just appended.");


//when there are many elements selected, only the first one will be considered

});
