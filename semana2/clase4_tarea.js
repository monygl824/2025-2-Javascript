//📘 Tarea: Análisis de calificaciones
//🎯 Objetivo:
//Aplicar funciones, bucles y lógica condicional para procesar un arreglo de números.
//
//📝 Instrucciones:
//Crea una función llamada analizarCalificaciones que reciba un arreglo de números (enteros del 0 al 100) que representan calificaciones de estudiantes. La función debe devolver un objeto con la siguiente información:
//
//Cantidad de aprobados (calificaciones ≥ 70)
//
//Cantidad de reprobados (calificaciones < 70)
//
//Promedio general
//
//La calificación más alta y la más baja

const { ask } = require("../helpers/input");

async function main() {
    const calificaciones = [];
    let continuar = true;

    while (continuar) {
        const calificacion = Number(await ask("Ingresa una calificación (0-100): "));
        if (calificacion >= 0 && calificacion <= 100) {
            calificaciones.push(calificacion);
        } else {
            console.log("Calificación inválida. Debe estar entre 0 y 100.");
        }
        continuar = await ask("¿Quieres ingresar otra calificación? (s/n): ") === "s";
    }

    const resultado = analizarCalificaciones(calificaciones);
    console.log(resultado);
}

function analizarCalificaciones(numeros){
    let aprobados=0;
    let reprobados=0;
    let promedio=0;
    let califAlta=0;
    let califBaja=0;

    for (let i=0;i<numeros.length;i++){
        if (numeros[i]>=70){
            aprobados++;
        }else{
            reprobados++;
        }
        promedio+=numeros[i];
        if (califAlta<numeros[i]){
            califAlta=numeros[i];
        }
        if (califBaja>numeros[i] || califBaja===0){
            califBaja=numeros[i];
        }
    }
}

main();