$(document).ready(function () {
  let allElements = $("*"); // gets all elements
  console.log(allElements.first()); // gets the first element
  console.log(allElements.last()); // gets the last element
  console.log(allElements.find(".wrapper").find("p").last()); // gets the last p element inside .wrapper element
  console.log(allElements[0]); // gets the first element using array index
  console.log(allElements.get(0)); // gets the first element using the get() method
  let byClassElements = $(".innerWrapper"); // gets elements by class name
  console.log(byClassElements.get()); // gets all .innerWrapper elements
  let firstParagraph = $("p:first"); // gets the first p element
  console.log(firstParagraph.next()); // gets the next sibling of the first p element
  console.log(firstParagraph.prev()); // gets the previous sibling of the first p element
});
