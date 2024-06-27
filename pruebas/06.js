//cantidad de numeros positivos en un array

let array = [3, 15, 27, 8, 19, -4, -12, -7, -21, -9];

function cuantosPositivos(arr) {
  let cantidad = 0;

  for (positivos of arr) {
    if (positivos > 0) {
      cantidad++;
    }
  }
  return cantidad;
}

let resultado = cuantosPositivos(array);
console.log(resultado);
