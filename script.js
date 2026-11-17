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


if (window.location.pathname.includes("juego.html")) {
const botones = [
    document.getElementById("btn-piedra-apelahnz-2743-10"),  // 0
    document.getElementById("btn-papel-apelahnz-2743-10"),   // 1
    document.getElementById("btn-tijera-apelahnz-2743-10")   // 2
  ];

const feedback = document.getElementById("feedback");
const spanGanadas = document.getElementById("ganadas");
const spanEmpatadas = document.getElementById("empatadas");
const spanPerdidas = document.getElementById("perdidas");
const spanRacha = document.getElementById("racha");
const spanRecord = document.getElementById("record");

let ganadas = 0;
let empatadas = 0;
let perdidas = 0;
let racha = 0;
let record = Number(localStorage.getItem("record-juego")) || 0;
spanRecord.innerText = record;

    botones.forEach(function (boton, numero) {
        boton.addEventListener("click", function () {
        const compu = Math.floor(Math.random() * 3);

        if (numero == compu) {
            feedback.innerText = "¡Empate!";
            empatadas++;
            spanEmpatadas.innerText = empatadas;
            feedback.className = "empate";
        // empate
        } else if ((numero == 0 && compu == 2) || (numero == 1 && compu == 0) || (numero == 2 && compu == 1)) {
            feedback.innerText = "¡Ganaste!";
            ganadas++;
            spanGanadas.innerText = ganadas;
            racha++;
            spanRacha.innerText = racha;
            feedback.className = "ganaste";
        // gana el usuario

        } else {
            feedback.innerText = "¡Perdiste!";
            perdidas++;
            spanPerdidas.innerText = perdidas;
            racha = 0;
            spanRacha.innerText = racha;
            feedback.className = "perdiste";
        // gana la máquina
        }

        if (racha > record) {
            record = racha;
            localStorage.setItem("record-juego", record);
            spanRecord.innerText = record;
        }

        });

    const btnReiniciar = document.getElementById("btn-reiniciar-apelahnz-2743-10");

        btnReiniciar.addEventListener("click", function () {
            ganadas = 0;
            empatadas = 0;
            perdidas = 0;
            racha = 0;

            spanGanadas.innerText = ganadas;
            spanEmpatadas.innerText = empatadas;
            spanPerdidas.innerText = perdidas;
            spanRacha.innerText = racha;

            feedback.innerText = "Elegí tu jugada";
        });
    });
}
