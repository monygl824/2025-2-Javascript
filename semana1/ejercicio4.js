const { ask } = require("../helpers/input");

// TODO: Función que devuelve el mayor de dos números

function obtenerMayor(num1, num2) {
  if (num1 > num2) {
    return "Número " + num1 + "es mayor";
  } else {
    return "Número " + num2 + "es mayor";
  }
}

main();
