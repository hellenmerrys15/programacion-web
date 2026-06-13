const grids = document.querySelectorAll('.simu-grid');
const izquierdas = document.querySelectorAll('.izquierda');
const derechas = document.querySelectorAll('.derecha');

grids.forEach((grid, index) => {

    derechas[index].addEventListener('click', () => {
        grid.scrollLeft += 800;
    });

    izquierdas[index].addEventListener('click', () => {
        grid.scrollLeft -= 800;
    });

});
