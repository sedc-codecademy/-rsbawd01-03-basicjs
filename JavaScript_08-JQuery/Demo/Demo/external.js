$("*"); // gets all elements
$("#mainTitle"); // gets element by id
$(".innerWrapper"); // gets elements by class name
$("p"); // gets elements by tag name
$(".wrapper,.innerWrapper"); // gets elements from multiple classes
$("p:first"); // gets the first p element
$("p:last"); // gets the last p element
$("h3:first-child"); // gets all the first h3 elements in their parents

$(document).ready(function () {
  console.log($("#mainTitle"));
  console.log($("#mainTitle").text());
});
console.log($("#mainTitle").text()); //ne radi je zato što se kod izvršava pre nego
//što je stranica u potpunosti učitana i pre nego što je jQuery biblioteka učitana.

$(document).ready(function () {
  console.log($("*"));
  console.log($(".innerWrapper"));
  console.log($("p"));
  console.log($(".wrapper,.innerWrapper"));
  console.log($("p:first"));
  console.log($("p:last"));
  console.log($("h3:first-child"));
});
