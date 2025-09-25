// Null in Optional Chaining
function getStreet(user: any) {
  return user?.address?.street;
}
console.log(getStreet(null)); // → undefined, no error
