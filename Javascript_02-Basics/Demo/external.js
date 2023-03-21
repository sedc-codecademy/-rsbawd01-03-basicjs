// const firstName = "Maja";
// const lastName = "Stefanovic";
// const fullName = firstName + " " + lastName;
// console.log("fullName:", fullName);
var prom1 = "Dobar ";
var prom2 = "dan";
// var rez = prom1.concat(prom2) + " kako ste?";
// console.log(rez);
//********
//razlika izmedju obicne konkatenacije I interpolacije
// var rez1 = `tekst ${prom1} neki tekst ${prom2} još teksta`;
// var rez2 = "tekst " + prom1 + " neki tekst " + prom2 + " još teksta";
// console.log(rez1);
// console.log(rez2);
/****/ ///
// var a = 2 / "foo"; // NaN
// console.log(a);
// console.log(typeof a === "number"); // true

//Beware
// console.log(a == NaN); // false
// console.log(a === NaN); // false
// console.log(isNaN(a)); // true
//buuut
// var b = "foo";
//console.log(isNaN(b)); // true -- ouch! Konvertuje vrednost u broj
//ES6 to the rescue
//finally
//Console.log(Number.isNaN(..)) // proverava vrednost I da li je broj
//*****************
// var a = 1 / 0; // Infinity
// var b = Infinity; // Infinity
// var c = -1 / 0; // -Infinity
// var d = -Infinity; // -Infinity
//console.log(a, b, c, d);
//*****
// LOGICAL OPERATORS
const status = "open";
const longitude = 41.44;
const latitude = -32.12;

// Logical AND
// const rez = status === "open" && longitude > 0;
// console.log("rez: ", rez);

// Logical OR
// const rez = status === "open" || latitude > 0;
// console.log("rez: ", rez);

// Logical NOT
// Checks if the car value is NOT 'open'
const rez2 = status !== "open";
//console.log("rez", rez2);

// const a = true,
//   b = false;
// const c = 4;
// // logical AND
// console.log(a && a); // true
// console.log(a && b); // false
// console.log(c > 2 && c < 2); // false
let score = 200;
let a = "tacno";
let b = "netacno";

// if (score > 100) {
//   console.log(a);
// } else {
//   console.log(b);
// }

// let ternarni = score > 100 ? console.log(a) : console.log(b);
// //ako je x veće od 10 vrednost će biti a, u suprotnom b
// console.log(ternarni);

// Multiple Conditions
// const wage = 500;
// const role = "Senior";
// let calculationBonus = 0;

// if (role === "Junior") {
//   bonus = wage * 1.1;
// } else if (role === "Medium") {
//   bonus = wage * 1.6;
// } else {
//   bonus = wage * 2.2;
// }
// console.log(`A ${role} makes ${calculationBonus} every month!`);

let userInput = prompt("Enter length in feet:");
console.log(userInput);
