// Null vs Undefined Default
function greet(name: string = "Guest") {
  return `Hello, ${name}`;
}
console.log(greet(null)); // → "Hello, null" 😬
