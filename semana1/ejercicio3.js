// Clase 3: Lógica con Condicionales
const { ask } = require("../helpers/input");

async function main() {
  const number = Number(await ask("Ingresa un número: "));

  if (number % 3 === 0 && number % 5 === 0) {
    console.log("El número es divisible entre 3 y 5");
  } else if (number % 3 === 0) {
    console.log("El número es divisible entre 3");
  } else if (number % 5 === 0) {
    console.log("El número es divisible entre 5");
  } else {
    console.log("El número no es divisible entre 3 ni entre 5");
  }

  // Usando Switch

  const multiplo5 = number % 5 === 0;
  const multiplo3 = number % 3 === 0;
  const multiploAmbos = multiplo5 && multiplo3;

  switch (true) {
    case multiploAmbos:
      console.log("El número es divisible entre 3 y 5");
      break;
    case multiplo3:
      console.log("El número es divisible entre 3");
      break;
    case multiplo5:
      console.log("El número es divisible entre 5");
      break;
    default:
      console.log("El número no es divisible entre 3 ni entre 5");
  }
}
main();
