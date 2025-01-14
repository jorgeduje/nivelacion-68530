const salgoConParaguas = (clima) => {
  //   if (clima === "lluvioso") {
  //     console.log("si, llevalo");
  //   } else {
  //     console.log("no, no hace falta");
  //   }

  clima === "lluvioso"
    ? console.log("si, llevalo")
    : console.log("no , no hace falta");
};

salgoConParaguas("soleado");
salgoConParaguas("lluvioso");
salgoConParaguas("nublado");
salgoConParaguas("soleado");
console.log("------------------");

// boolean --> true & false
// truthy --> "dsadasdas" | true | [] | {} | 12
// falsy --> "" | false | null | NaN | 0 | undefined
let x = [];

if (x) {
  console.log("entra en el if");
}

// OR devuelve el primer truthy o el ultimo falsy
let respuesta = 0 || NaN || false || false || undefined || null;
console.log("------------------");
console.log(respuesta);

// AND devuelve el primer falsy o el ultimo truthy
let respuesta2 = "hola" && "pepe" && 15 && 12 && [] && "juan";
console.log(respuesta2);
