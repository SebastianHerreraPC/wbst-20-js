//Calculadora de precio + impuesto

function precioCompleto(precio, impuesto) {
  return precio + precio * impuesto;
}

let resultado = precioCompleto(20, 0.16);
console.log(resultado);
