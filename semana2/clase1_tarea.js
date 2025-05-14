// Práctica para casa:
// Imprimir números pares del 1 al 100
const { ask } = require('../helpers/input');

async function main() {

    let opcion = '';
    let numerosPares = [];
    
    while (opcion !== '3') {
        opcion = await ask(
        "¿Qué deseas hacer?\\n1. Imprimir números pares \\n2. Salir"
        );
    
        if (opcion === '1') {
        for (let i = 1; i <= 100; i++) {
            if (i % 2 === 0) {
            numerosPares.push(i);
            }
        }
        console.log(`Números pares del 1 al 100: ${numerosPares}`);
        } else if (opcion === '2') {
        console.log(`Gracias por usar el programa.`);
        } else {
        console.log(`Opción no permitida. Intenta de nuevo`);
        }
    }
}

main();
