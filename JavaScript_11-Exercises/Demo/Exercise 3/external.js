function diffFrom13(num) {
  let diff = Math.abs(num - 13);

  if (num > 13) {
    diff *= 2;
  }

  return diff;
}

console.log(diffFrom13(20)); // Output: 14
console.log(diffFrom13(10)); // Output: 3
