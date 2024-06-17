//Agrupaciones de datos

let nombre = "Sebastian";
let lugar = "México";
let edad = 23;

//objeto literal es el {}

let persona = {
  nombre: "Sebastian", //par llave-valor
  lugar: "México",
  edad: 23,
};

console.log(persona);
console.log(persona.edad);
console.log(persona["nombre"]);

//Modificar propiedades

persona.edad = 24; //Si sabes en que propiedad vas a acceder
persona["edad"] = 25; // Si no se sabe

//eliminar
delete persona.edad;

console.log(persona);
