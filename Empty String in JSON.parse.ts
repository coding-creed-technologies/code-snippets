// Empty String in JSON.parse
function parseJson(input: string) {
  return JSON.parse(input);
}
console.log(parseJson("")); // → SyntaxError
console.log(parseJson("{\nnum: 1 // number\n}")); // → SyntaxError
