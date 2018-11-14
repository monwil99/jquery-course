$(function () {

//attributes inside of tag
//attr(). prop(), val()
/*var link = $("#link")
console.log(link.attr("href"));

console.log(link.attr("title"));*/
//undefined - null value in javascript
//you can add sub() after attribute

//2nd param will set to new attribute
/*link.attr("href", "http://www.google.com");
*/

//other attributes beside checked are selected and disabled
//prop is more appropriate to use them
//attr will always return check all the time
/*var checkbox = $("input:checkbox");
console.log(checkbox.prop("checked"));
console.log(checkbox.attr("checked"));*/

//it will always return the value of the first text input element
var textInput = $("input:text");
textInput.val("Kyle");
console.log(textInput.val());


var rangeInput = $("input[type='range']");
console.log(rangeInput.val());
console.log(rangeInput.attr("min"));


});
