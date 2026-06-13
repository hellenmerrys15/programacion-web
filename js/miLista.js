let listaUsuario =
JSON.parse(localStorage.getItem("miListaNetflix")) || [];

window.onload = function () {

    const catalogo = obtenerCatalogo();

    const contenedor = document.getElementById("catalogo");

    contenedor.innerHTML = "";

    catalogo.forEach(item => {

        const card = document.createElement("div");

        card.classList.add("card-lista");

        card.innerHTML = `
            <h3>${item}</h3>

            <button class="btn-lista"
                onclick="agregar('${item}')">
                Agregar a Mi Lista
            </button>
        `;

        contenedor.appendChild(card);

    });

    mostrarLista();

};

function agregar(titulo) {

    if (!listaUsuario.includes(titulo)) {

        listaUsuario.push(titulo);

        localStorage.setItem(
            "miListaNetflix",
            JSON.stringify(listaUsuario)
        );

        mostrarLista();
    }

}

function eliminar(titulo) {

    const index = listaUsuario.indexOf(titulo);

    if (index > -1) {

        listaUsuario.splice(index, 1);

        localStorage.setItem(
            "miListaNetflix",
            JSON.stringify(listaUsuario)
        );

        mostrarLista();
    }

}

function mostrarLista() {

    const lista = document.getElementById("lista");

    lista.innerHTML = "";

    if (listaUsuario.length === 0) {

        lista.innerHTML = `
            <li>
                No has agregado ningún contenido todavía.
            </li>
        `;

        return;
    }

    listaUsuario.forEach(item => {

        const li = document.createElement("li");

        li.innerHTML = `
            <span>${item}</span>

            <button class="btn-lista"
                onclick="eliminar('${item}')">
                Eliminar
            </button>
        `;

        lista.appendChild(li);

    });

}