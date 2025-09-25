// String with BOM
function clean(str: string) {
  return str.trim();
}
console.log(clean("\uFEFFhello")); // → "hello", BOM removed
