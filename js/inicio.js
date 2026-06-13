const fila = document.querySelector('.filas');

document.querySelector('.flecha-derecha').addEventListener('click', () => {

    fila.scrollLeft += 800;

});

document.querySelector('.flecha-izquierda').addEventListener('click', () => {

    fila.scrollLeft -= 800;

});