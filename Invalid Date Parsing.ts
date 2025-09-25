// Invalid Date Parsing
function getYear(dateStr: string) {
  return new Date(dateStr).getFullYear();
}
console.log(getYear("not-a-date")); // → NaN
