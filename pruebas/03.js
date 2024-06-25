function getbyIndex(arr, idx) {
  if (idx < 0 || arr.length <= idx) {
    return "No Existe";
  }

  return arr[idx];
}
let resultado = getbyIndex([1, 2], 2);
console.log(resultado);
