const { ask } = require("../helpers/input");

function obtenerPromedio(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
  }
  const promedio = suma / numeros.length;
  return promedio;
}

function obtenerMayor(numeros) {
  let mayor = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }
  return mayor;
}

function resumenEstadistico(numeros) {
  const promedio = obtenerPromedio(numeros);
  let minimo = numeros[0];
  let maximo = obtenerMayor(numeros);

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < minimo) {
      minimo = numeros[i];
    }
  }
  return { promedio, minimo, maximo };
}

function nombresConVocales(nombres) {
  const vocales = ["a", "e", "i", "o", "u"];
  const resultado = [];

  for (let n = 0; n < nombres.length; n++) {
    const primerLetra = nombres[n][0].toLowerCase();
    for (let b = 0; b < vocales.length; b++) {
      if (primerLetra === vocales[b]) {
        console.log(vocales[b]);
      }
    }
  }
}

async function main() {
  const edades = [20, 18, 25, 30, 22];
  console.log(`Promedio= ${obtenerPromedio(edades)}`);

  const lista = [5, 20, 8, 99, 3];
  console.log(`El número mayor de: ${lista}= ${obtenerMayor(lista)}`);

  const datos = [70, 80, 90, 100, 85];
  //console.log(resumenEstadistico(datos));
  const estadistica = resumenEstadistico(datos);
  console.log(estadistica.promedio);
  console.log(estadistica.minimo);
  console.log(estadistica.maximo);

  const nombres = ["Ana", "Roberto", "Luis", "Mariana", "Sol"];
  console.log("Lista de nombres", nombres);
  console.log("Nombres solo con vocal: ", nombresConVocales(nombres));
}

main();
