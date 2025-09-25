// Array to String Conversion
function shout(words: string[]) {
  return `Hey ${words}!`;
}
console.log(shout(["hello", "world"])); // → "Hey hello,world!"
console.log(shout([])); // → "Hey !"
