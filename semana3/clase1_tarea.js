// 📝 Instrucciones:
// Crea un arreglo llamado alumnos.
//
// Usa un bucle while para permitir al usuario agregar objetos alumno al arreglo.
// Cada alumno debe tener:
//
// nombre
// edad
// calificacion
//
// Pregunta al usuario si desea seguir agregando más alumnos.
// Después de salir del ciclo, muestra:
// Cuántos alumnos tienen calificación aprobatoria (≥ 70).
// Cuántos pueden votar (edad ≥ 18).
// El promedio general de calificaciones.
// La calificación mayor.
// La calificación menor.

const { ask } = require("../helpers/input");

async function main() {
  const alumnos = [];

  let continuar = true;

  while (continuar) {
    const nombre = await ask("Nombre del alumno: ");
    const edad = parseInt(await ask("Edad del alumno: "));
    const calificacion = parseFloat(await ask("Calificación del alumno: "));

    const alumno = {
      nombre,
      edad,
      calificacion
    };

    alumnos.push(alumno);

    const respuesta = await ask("¿Deseas agregar otro alumno? (si/no): ");
    if (respuesta.toLowerCase() !== "si") {
      continuar = false;
    }
  }

  let aprobados = 0;
  let puedenVotar = 0;
  let sumaCalificaciones = 0;
  let mayor = 0;
  let menor = 100;

  for (let i = 0; i < alumnos.length; i++) {
    const alumno = alumnos[i];

    if (alumno.calificacion >= 70) {
      aprobados++;
    }

    if (alumno.edad >= 18) {
      puedenVotar++;
    }

    sumaCalificaciones += alumno.calificacion;

    if (alumno.calificacion > mayor) {
      mayor = alumno.calificacion;
    }

    if (alumno.calificacion < menor) {
      menor = alumno.calificacion;
    }
  }

  const promedio = sumaCalificaciones / alumnos.length;

  console.log(`\n Resultados:`);
  console.log(`Alumnos aprobados: ${aprobados}`);
  console.log(`Alumnos que pueden votar: ${puedenVotar}`);
  console.log(`Promedio general: ${promedio.toFixed(2)}`);
  console.log(`Calificación mayor: ${mayor}`);
  console.log(`Calificación menor: ${menor}`);
}

main();
