function closerTo100(num1, num2) {
  if (num1 < 0 || num2 < 0) {
    return "Unesite pozitivan broj!";
  }

  if (Math.abs(100 - num1) < Math.abs(100 - num2)) {
    return num1 + " je bliži 100.";
  } else if (Math.abs(100 - num2) < Math.abs(100 - num1)) {
    return num2 + " je bliži 100.";
  } else {
    return "Brojevi su podjednako udaljeni od 100.";
  }
}

console.log(closerTo100(20, 80)); // Output: 80 je bliži 100.
console.log(closerTo100(50, 120)); // Output: 50 je bliži 100.
console.log(closerTo100(-20, 80)); // Output: Unesite pozitivan broj!
