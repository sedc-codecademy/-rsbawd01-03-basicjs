// const rate = 0.3048;
//let userInput = prompt("Enter length in feet:");
//let convertedUserInput = parseInt(userInput);
// let convertedUserInput = parseFloat(userInput);
// let result = conversionRateFromFeetToMeters * convertedUserInput;
// console.log("The result in meters is ", result);
//****************
// let userInput = prompt("Enter day of the week");
// let day = parseInt(userInput);

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Please enter a valid input !!!");
//     break;
// }
//****************************
// let subject = prompt("Choose a subject (JS, C#, HTML)");
// let subjectToLower = subject.toLowerCase();

// switch (subjectToLower) {
//   case "js":
//     console.log("We are going to learn JS");
//     break;
//   case "c#":
//     console.log("We are going to learn C#");
//     break;
//   case "html":
//     console.log("We are going to learn HTML");
//   case "css":
//     console.log("And CSS as well.");
//     break;
//   default:
//     console.log("We are not learning anything.");
//     break;
// }
//*******************************
// function greeting() {
//   console.log("Hello from function!");
// }
// greeting();
//******************
// function myFunction(x, y, z) {
//   let myVar = x * y * z;
//   console.log(myVar);
// }

// myFunction(1, 3, 2);
// myFunction(2, 5, 0);
// myFunction(100, 232131, 1);
//**************
// function myFunction(x, y) {
//   let myVar = x * y;
//   console.log(myVar);
//   return myVar;
// }

// myFunction(1, 3);
// myFunction(2, 5);
// myFunction(100, 232131);
// let myresult = myFunction(7, 8);
// let myresult2 = myresult + 3;

// function calculateAreaOfARectangle(a, b) {
//   let area = a * b;
//   console.log(`The area is ${area}`);
// }
// let result1 = calculateAreaOfARectangle(2, 3);
// console.log("rezultat funkcije bez return", result1);

// calculateAreaOfARectangle(5, 10);
// calculateAreaOfARectangle(3, 12);
// calculateAreaOfARectangle(2, 5);

// function returnCalculateAreaOfARectangle(a, b) {
//   //   let area = a * b;
//   //   return area;
//   return a * b;
// }

//returnCalculateAreaOfARectangle(2, 3); //nothing happens, because I need to save the value somewhere or use it.

// let result2 = returnCalculateAreaOfARectangle(4, 5);
// console.log("rezultat funkcije sa return", result2);
// console.log(
//   `The result of the area from the function returns the value: ${result}.`
// );
//******************************
// function printValues(name = "Ivan", age, city) {
//   console.log(name, age, city);
// }
// printValues("Marija", 24, "Belgrade");
// printValues("Marija ", 24, " Belgrade", 1998);
// printValues("Marija ", 24);
// printValues("Marija ", " Belgrade");
// printValues(1, 2, 3);
// printValues();
//****************************
// var fullMoon = true;
// let species = "human"; // Initialize a global variable
// if (fullMoon) {
//   let species = "werewolf"; // Initialize a block-scoped variable
//   console.log(`It is a full moon. Lupin is currently a ${species}.`);
// }
// console.log(`It is not a full moon. Lupin is currently a ${species}.`);
//**********************
// Assign value to const
// const SPECIES = "human";
// Attempt to reassign value
// SPECIES = "werewolf";
// console.log(SPECIES);
//******************
// Declare but do not initialize a const
// const TODO;
// let todoo;
// console.log(TODO);
