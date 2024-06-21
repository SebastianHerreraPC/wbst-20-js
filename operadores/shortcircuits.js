//short circuits
//Revision que devuelven falsos: false, 0, null, undefined, NaN, '',0,

let nombres = "Sebitas";

let userName = nombres || "Anonimo";

console.log(userName);

function fn1() {
  console.log("funcion uno ");
  return true;
}
function fn2() {
  console.log("funcion dos ");
  return true;
}

let x = fn1() && fn2();
