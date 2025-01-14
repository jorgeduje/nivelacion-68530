// desestructuracion de objetos

let auto = {
  marca: "audi",
  modelo: 2022,
  color: "blanco",
  puertas: 4,
};

// no importa el orden pero si importa el nombre
let { marca, color } = auto;

console.log(marca);
console.log(color);

// arrays

let personas = ["pepe", "carmen", "maria", "juancito"];
// no importa el nombre pero si importa el orden
let [, , p3, p4] = personas;

console.log(p3);
console.log(p4);
