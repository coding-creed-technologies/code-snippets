// Null in typeof
function typeOf(input: any) {
  return typeof input;
}
console.log(typeOf(null)); // → "object" 🤯
