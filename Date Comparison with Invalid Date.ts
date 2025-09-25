// Date Comparison with Invalid Date
function isFuture(date: Date) {
  return date > new Date();
}
console.log(isFuture(new Date("invalid"))); // → false, silently
