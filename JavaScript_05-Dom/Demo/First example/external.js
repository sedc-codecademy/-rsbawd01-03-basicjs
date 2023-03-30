// let myHeader = document.getElementById("myTitle");
// console.log(myHeader); // Will give us the whole element node
// console.log(myHeader.textContent); // Will give us the text inside the element

///
// Selecting element by class and adding them to a variable for later use
// let paragraphs = document.getElementsByClassName("myParagraph");
// let secondParagraph = document.getElementsByClassName("second");
// let secondParagraph2 = document.getElementsByClassName("first");
// console.log(paragraphs); // Will give us an array with 2 paragraphs
// console.log(paragraphs[0]); // Will give us the first paragraph
// console.log(secondParagraph); // Will give us an array with 1 paragraph
// console.log(secondParagraph[0]); // Will give us the only paragraph

/////
// Selecting elements by tag name and adding them to a variable for later use
// let paragraphs = document.querySelectorAll("p");
// let firstP = document.querySelector(".myParagraph");
// let header = document.querySelector("#myTitle");
// console.log(paragraphs); // Will give us an array with 2 paragraphs
// console.log(firstP); // Will give us the first paragraph it finds
// console.log(header); // Will give us the first header it finds

/////
// Getting all elements with class myParagraph in an array and selecting the first element
// let paragraph = document.getElementsByClassName("myParagraph")[0];
// let sibling = paragraph.nextElementSibling; // We add the next sibling element here
// console.log(paragraph); // The first paragraph
// console.log(sibling); // The second paragraph
// console.log(sibling); // The second paragraph
// console.log(sibling.previousElementSibling); // Will log the first paragraph again

////
// Getting all elements with class myParagraph in an array and selecting the first element
// let paragraph = document.getElementsByClassName("myParagraph")[0];
// let parentDiv = paragraph.parentElement; // We take the parent of the paragraph
// console.log(paragraph); // The first paragraph
// console.log(parentDiv); // The second paragraph

////
// Getting all elements with class myParagraph in an array and selecting the first element
// let myDiv = document.getElementById("main");
// let divChildren = myDiv.children; // All children of myDiv
// let divFirstCh = myDiv.firstElementChild; // Get first child of myDiv
// let divLastCh = myDiv.lastElementChild; // Get last child of myDiv
// console.log(divChildren); // Array of all children of myDiv
// console.log(divFirstCh); // The first child element of myDiv
// console.log(divLastCh); // The last child element of myDiv

////
// let myDiv = document.getElementById("main");
// let textSpaces = myDiv.textContent; // Get content with white spaces
// let textNoSpaces = myDiv.innerText; // Get content without white spaces
// console.log(textSpaces);
// console.log(textNoSpaces);

///////
//let header = document.getElementById("myTitle");
// header.innerText = "hello"; // Checking what the text is
// header.innerText = ""; // Changing the text to nothing
// console.log(header.innerText);
// header.innerText = "New TEXT!";
// console.log(header.innerText);
// header.innerText += " Ultra new text";
// console.log(header.innerText);

//
// let myDiv = document.getElementById("main");
// console.log(myDiv);
// // Adding new element in the div
// myDiv.innerHTML += `<p class="new">
// Paragraph generated from JavaScript
// </p>`;
// console.log(myDiv);
// myDiv.innerHTML = ""; // removing all code from myDiv
