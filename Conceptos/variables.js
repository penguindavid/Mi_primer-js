// 1. Datos personales y cálculo de edad
const nombreEstudiante = "Tu Nombre";
const anioNacimiento = 2000;
const anioActual = new Date().getFullYear();
const edad = anioActual - anioNacimiento;

console.log(`Hola, mi nombre es ${nombreEstudiante} y tengo ${edad} años.`);

// 2. Interacción con el DOM cuando los elementos estén cargados
document.addEventListener('DOMContentLoaded', () => {
  const contadorElemento = document.querySelector('#contador');
  const btnSumar = document.querySelector('#btnSumar');
  let clics = 0;

  // Comprobación de seguridad para evitar errores si no existen en el HTML
  if (btnSumar && contadorElemento) {
    btnSumar.addEventListener('click', () => {
      clics++;
      contadorElemento.textContent = clics;
    });
  } else {
    console.error('No se encontraron los elementos #contador o #btnSumar en el HTML.');
  }
});