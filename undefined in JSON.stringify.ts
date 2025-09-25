// undefined in JSON.stringify
function serialize(obj: any) {
  return JSON.stringify(obj);
}
console.log(serialize(undefined)); // → undefined
