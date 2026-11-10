console.log("Script cargado exitosamente");

if (window.location.pathname.includes("contacto.html")) {
    const inputNombre = document.getElementById("nombre");
    const inputApellido = document.getElementById("apellido");
    const inputEmail = document.getElementById("email");
    const inputTelefono = document.getElementById("telefono");
    const inputEdad = document.getElementById("edad");
    const inputDireccion = document.getElementById("direccion");
    const inputProvincia = document.getElementById("provincia");
    const inputCodigoPostal = document.getElementById("codigo-postal");
    const radioMetodoContacto = document.querySelectorAll('input[name="metodo_contacto"]');
    const checkSuscripciones = document.querySelectorAll('input[name="suscripciones"]');

    const tdNombre = document.getElementById("resumen-nombre");
    const tdApellido = document.getElementById("resumen-apellido");
    const tdEmail = document.getElementById("resumen-email");
    const tdTelefono = document.getElementById("resumen-telefono");
    const tdEdad = document.getElementById("resumen-edad");
    const tdDireccion = document.getElementById("resumen-direccion");
    const tdProvincia = document.getElementById("resumen-provincia");
    const tdCodigoPostal = document.getElementById("resumen-cp");
    const tdMetodoContacto = document.getElementById("resumen-metodo-contacto");
    const tdSuscripciones = document.getElementById("resumen-suscripciones");

    inputNombre.addEventListener("input", function () {
        tdNombre.innerText = inputNombre.value;
    });

    inputApellido.addEventListener("input", function () {
        tdApellido.innerText = inputApellido.value;
    });

    inputEmail.addEventListener("input", function () {
        tdEmail.innerText = inputEmail.value;
    });

    inputTelefono.addEventListener("input", function () {
        tdTelefono.innerText = inputTelefono.value;
    });

    inputEdad.addEventListener("input", function () {
        const edad = Number(inputEdad.value);

        if (inputEdad.value !== "" && edad < 18) {
            tdEdad.style.backgroundColor = "#ffcccc";
            tdEdad.innerText = edad + " (Menor de edad)";
        } else {
            tdEdad.style.backgroundColor = "";
            tdEdad.innerText = inputEdad.value;
        }
    });

    inputDireccion.addEventListener("input", function () {
        tdDireccion.innerText = inputDireccion.value;
    });

    inputProvincia.addEventListener("change", function () {
        tdProvincia.innerText = inputProvincia.value;
    });

    inputCodigoPostal.addEventListener("input", function () {
        tdCodigoPostal.innerText = inputCodigoPostal.value;
    });

    radioMetodoContacto.forEach(function (radio) {
        radio.addEventListener("change", function () {
            tdMetodoContacto.innerText = radio.value;
        });
    });

    checkSuscripciones.forEach(function (check) {
        check.addEventListener("change", function () {
            const marcadas = [];
            checkSuscripciones.forEach(function (c) {
                if (c.checked) {
                    marcadas.push(c.value);
                }
            });
            tdSuscripciones.innerText = marcadas.join(", ");
        });
    });
}

if (window.location.pathname.includes("acercade.html")) {
    const btnLeerMas = document.getElementById("btn-leer-mas-apelahnz-2743-10");
    const cvCompleto = document.querySelector(".cv-completo");

    btnLeerMas.addEventListener("click", function () {
        if (cvCompleto.style.display === "block") {
            cvCompleto.style.display = "none";
            btnLeerMas.innerText = "Leer más";
        } else {
            cvCompleto.style.display = "block";
            btnLeerMas.innerText = "Leer menos";
        }
    });
}