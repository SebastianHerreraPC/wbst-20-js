//devolucion de array de pares

let array = [
  {
    id: 1,
    nombre: "Sebastian",
  },
  {
    id: 2,
    nombre: "Benjamin",
  },
  {
    id: 3,
    nombre: "Seben",
  },
];

// let pares = [
//   [1, { id: 1, nombre: "Sebastian" }][(2, { id: 2, nombre: "Benjamin" })][
//     (3, { id: 3, nombre: "Seben" })
//   ],
// ];

function toPairs(arr) {
  let pairs = [];
  for (idx in arr) {
    let elemento = arr[idx];
    pairs[idx] = [elemento.id, elemento];
  }
  return pairs;
}

let resultado = toPairs(array);
console.log(resultado);
