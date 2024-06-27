//devolucion de numero mayor y menor de un array

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getMenorMayor(arr) {
  let menor = arr[0];
  let mayor = arr[0];

  for (numero of arr) {
    menor = menor < numero ? menor : numero;
    mayor = mayor > numero ? mayor : numero;
  }
  return [menor, mayor];
}

let numeros = getMenorMayor(array);
console.log(numeros);
