let contador = 0;

const valorPantalla = document.querySelector('#valor');
const btnIncrementar = document.querySelector('#btn-incrementar');
const btnRestar = document.querySelector('#btn-restar');

function actualizarPantalla() {
    // Actualizamos el número en la interfaz
    valorPantalla.textContent = contador;

    // Cambiamos el color según el valor
    if (contador > 0) {
        valorPantalla.style.color = "#16a34a"; // Verde
    } else if (contador < 0) {
        valorPantalla.style.color = "#dc2626"; // Rojo
    } else {
        valorPantalla.style.color = "#0f172a"; // Color por defecto
    }
}

btnIncrementar.addEventListener('click', () => {
    contador++;
    actualizarPantalla();
});

btnRestar.addEventListener('click', () => {
    contador--;
    actualizarPantalla();
});
