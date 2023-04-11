let examGrades = [10, 6, 8, 9, 6];
let sum = 0;

for (let i = 0; i < examGrades.length; i++) {
  sum += examGrades[i];
}

let avg = sum / examGrades.length;

if (avg >= 8) {
  alert("You have passed the first semester!");
} else {
  alert("You have not passed the first semester.");
}
