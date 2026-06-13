function handleSubmit(e){

    const f = e.target;

    if(!f.checkValidity()){

        f.reportValidity();

        return false;
    }

    e.preventDefault();

    const correo =
        document.getElementById("correo").value.trim();

    let contactos =
        JSON.parse(localStorage.getItem("contactosNetflix")) || [];

    const existe = contactos.some(
        contacto => contacto.correo === correo
    );

    if(existe){

        alert("Este correo ya ha sido registrado.");

        return false;
    }

    contactos.push({
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        correo: correo,
        web: document.getElementById("web").value,
        mensaje: document.getElementById("mensaje").value
    });

    localStorage.setItem(
        "contactosNetflix",
        JSON.stringify(contactos)
    );

    alert("Formulario enviado correctamente");

    f.reset();

    return false;
}