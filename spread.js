// COPIA POR VALOR VS COPIA POR REFERENCIA

let a = 1;
let b = a;

console.log(a);
console.log(b);

a++;

console.log(a);
console.log(b);

let persona = {
  nombre: "pepe",
  edad: 12,
};

// let copiaPersona = persona;

// console.log(persona);
// console.log(copiaPersona);

// persona.edad += 1;

// console.log(persona);
// console.log(copiaPersona);

// copiaPersona.nombre = "juan";

// console.log(persona);
// console.log(copiaPersona);

let copiaPersona = { ...persona };

persona.nombre = "carmen";
console.log(persona);
console.log(copiaPersona);

//arrays

let numeros = [1, 5, 7, 8];
let copiaNumeros = [...numeros];

numeros.push(15);

console.log(numeros);
console.log(copiaNumeros);

let producto = { nombre: "producto", stock: 12, precio: 120 };
// let productoParaElCarrito = {
//   nombre: producto.nombre,
//   stock: producto.stock,
//   precio: producto.precio,
//   cantidades: 2,
// };
let productoParaElCarrito = {
  ...producto,
  cantidades: 2,
};
