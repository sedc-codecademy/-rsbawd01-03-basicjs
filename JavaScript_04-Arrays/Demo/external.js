// Can make a list of anything
// DO NOT MIX TYPES
const primes = [2, 3, 5, 7, 11, 13];

// You can mix types in the array. But generally don't
const mixedArray = [2, 3, "Hello", true];
// You can create an empty array as well
let studentGrades = [];
// You can split the declaration in rows
const socialMedia = [
  "facebook",
  "instagram",
  "twitter",
  "tiktok",
  "myspace",
  "linkedin",
];

// ACCESSING ITEMS
// Arrays start at 0!
// const days = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];
// console.log(`First day of the week: ${days[0]}`);
// console.log(`Fifth day of the week: ${days[4]}`);

// CHANGING VALUES USING THE INDEX
// const students = ["John", "Steve", "Anna", "Jane", "Alexander", "Miroslav"];
// console.log(`Before changing student[4]: ${students[4]}`);
// students[4] = "Alexandra";
// console.log(`After changing student[4]: ${students[4]}`);
// students[5] = "Marko";
// console.log(`After changing student[5]: ${students[5]}`);
// console.log(students.length);

// ADDING ITEMS USING THE LENGTH (Don't do it this way)
// const birthdays = ["1213", "334324"];
// birthdays[birthdays.length] = "1456-06-12";
// console.log(birthdays.length);
// console.log(`Birthdays after adding with length`, birthdays);

// ADDING ITEMS USING PUSH (Better, most commonly used)
// birthdays.push("1998-09-18");
// console.log(`Birthdays after adding with push`, birthdays);

// ADDING MULTIPLE ITEMS (Rarely used)
// birthdays.push("1996-04-05", "1949-03-07");
// console.log(`Birthdays after adding multiple with push`, birthdays);

// ADDING ITEMS TO THE BEGINNING (Can be useful if you want items in HTML to be added on top)
// let colors = ["red", "green", "blue", "cyan"];
// console.log("before: ", colors);
// colors.unshift("yellow");
// console.log("after: ", colors);

//let colors = ["red", "green", "blue", "cyan"];
// colors.shift();
// console.log("after shift: ", colors);
// // Pop removes the last element
// colors.pop();
// console.log("after pop: ", colors);
// let colors = ["red", "green", "blue", "cyan"];
// console.log(colors);
// let aaa = colors.length;
// colors[aaa] = "1456-06-12";
// console.log(colors[colors.length]);
// let eee = colors.length;
// console.log(eee);
// let s = colors[10];

//arrow functions
// const sayHello = (name) => console.log("Hello, " + name + "!");

// //ES5
// var multiply = function (x, y) {
//   var tekst = "Ovo je funkcija";
//   console.log(tekst);
// };

// //ES2105
// var multiply = (x, y) => {
//   var tekst = "Ovo je funkcija";
//   console.log(tekst);
// };
// const days = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];
// let daysCounter = 1;
// while (daysCounter < days.length) {
//   console.log(`Today is ${days[daysCounter]}`);
//   daysCounter++;
// }

// const numberArray = [2, 4, 1, 5, 2, 10, 7, 9];

// function largestOfTen(arrayToCheck) {
//   let counter = 0;
//   let largest = 0;
//   while (counter < arrayToCheck.length) {
//     //console.log(arrayToCheck[counter]);
//     if (arrayToCheck[counter] > largest) {
//       largest = arrayToCheck[counter];
//       console.log(largest);
//     }
//     counter++;
//   }
//   return largest;
// }
// const largestNumber = largestOfTen(numberArray);
// console.log("largestNumber", largestNumber);

//2^2 = 2*2
//3^4 = 3*3*3*3

// let i = 101;
// let sumOfSquares = 0;
// while (i <= 150) {
//   sumOfSquares += Math.pow(i, 2);
//   i++;
// }
// console.log("The sum of squares is: " + sumOfSquares);
///////////////////////////////////////////
// function sumPow(num1, num2) {
//   let result = 0;
//   let i = num1;
//   while (i <= num2) {
//     result += Math.pow(i, 2);
//     i++;
//   }
//   return result;
// }
// console.log(sumPow(1, 4)); // 1 + 4 + 9 + 16 = 30
// console.log(sumPow(101, 150)); // 797925

// DO WHILE (Practically never used)
// The code in the block will run at least once
// let iResult = "";
// let iCounter = 0;

// do {
//   iResult += `<li>List Item ${iCounter}</li>`;
//   iCounter++;
// } while (iCounter > 0 && iCounter < 5);
// console.log(iResult);
// FOR LOOPS (IMPORTANT)
// for (let index = 0; index < numberArray.length; index++) {
//     console.log(numberArray[index]);
//   }
//   const listItems = [];
//   for (let index = 0; index < 5; index++) {
//     listItems.push(`List Item ${index}`);
//   }
//   console.log(listItems);

// const authors = [
//   "Joe Abercrombie",
//   "J.R.R. Tolkien",
//   "G.R.R. Martin",
//   "Brandon Sanderson",
//   "Ursula K. Le Guin",
// ];
// for (let index = 0; index < authors.length; index++) {
//   authors[index] += ` Author:[${index}]`;
// }
// console.log(authors);
////////////////////////////////
// function multiplyByTen(arrayToMultiply) {
//     const resultArray = [];
//     for (let index = 0; index < arrayToMultiply.length; index++) {
//       const newVal = (arrayToMultiply[index] *= 10);
//       resultArray.push(newVal);
//     }
//     return resultArray;
//   }
//   const multiplied = multiplyByTen([1, 2, 3, 4]);
//   console.log(multiplied);
////////////////////

// FOR OF LOOP
// let names = ["Bojan", "Ivan", "Dalibor", "Anita", "Marija", "Tosho"];
// let arrayOne = [];
// let arrayTwo = [];
// for (let i = 0; i < names.length; i++) {
//   arrayOne.push(`${i + 1} ${names[i]}`);
// }
// for (let name of names) {
//   arrayTwo.push(`${names.indexOf(name) + 1} ${name}`);
// }
// console.log("===========================");
// console.log(arrayOne);
// console.log(arrayTwo);
// console.log("===========================");
// This only gets the index of the elements
// for (let name in names) {
//   console.log(name);
// }
