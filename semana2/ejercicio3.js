const { ask } = require("../helpers/input");

async function main() {
  const nombres = ["Ana", "Roberto", "Luis", "Mariana", "Sol"];

  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i].length >= 5) {
      console.log(`${nombres[i]} tiene más de 5 letras`);
    } else {
      console.log(`${nombres[i]} tiene solo ${nombres[i].length} letras`);
    }
  }

  const nombres2 = [
    "Óscar",
    "Ana",
    "Luis",
    "Eduardo",
    "Isabel",
    "María",
    "Úrsula",
    "Pedro",
  ];
  const vocales = ["a", "e", "i", "o", "u"];

  for (let a = 0; a < nombres2.length; a++) {
    const primerLetra = nombres2[a][0].toLowerCase();
    for (let b = 0; b < vocales.length; b++) {
      if (primerLetra === vocales[b]) {
        console.log(vocales[b]);
      }
    }
  }
  const palabraAlReves = await ask("Escribe una palabra: ");
  let resultado = "";
  for (let c = palabraAlReves.length - 1; c >= 0; c--) {
    resultado = resultado + palabraAlReves[c];
  }
console.log(`La palabra al revés es: ${resultado}`); 
}

main();
