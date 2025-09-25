// Whitespace in Number Conversion
function toNumber(str: string) {
  return Number(str);
}
console.log(toNumber("42 ")); // → 42, trims silently
