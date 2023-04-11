function removeFalsy(arr) {
  return arr.filter(Boolean);
}
const myArray = [1, null, undefined, NaN, "", 0, false, 8, 9, true];
console.log(myArray);
const filteredArray = removeFalsy(myArray);
console.log(filteredArray); // Output: [1, 8, 9, true]
