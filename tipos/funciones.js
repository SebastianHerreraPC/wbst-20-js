function saludo() {
  console.log("Hola ¿Como estas?");
}

//llamar funcion
saludo();

function sumas(x, y) {
  console.log(arguments);
  return x + y;
}

let resultado = sumas(10, 10, 10, 10);
console.log(resultado);
console.log(typeof sumas);

//Argumentos son x,y  y parametros los valores que les damos
