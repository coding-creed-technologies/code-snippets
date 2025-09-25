// Falsy Zero
function isValid(n: number) {
  return !!n;
}
console.log(isValid(0)); // → false, even though 0 is valid
