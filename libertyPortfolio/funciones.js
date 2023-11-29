// Ventana emergente detalles
document.addEventListener("DOMContentLoaded", function () {
    var botonDetalles = document.getElementById("btnDetalles")
    var ventanaEmergente = document.getElementById("miPopup")
    var botonCerrar = document.getElementById("cerrarPopup")
    var botonX = document.getElementById("botonX")

    botonDetalles.addEventListener("click", function () {
        ventanaEmergente.style.display = "block"
    })

    botonCerrar.addEventListener("click", function () {
        ventanaEmergente.style.display = "none"
    })

    window.addEventListener("click", function (event) {
        if (event.target === ventanaEmergente) {
            ventanaEmergente.style.display = "none"
        }
    })

})

// lógica teléfono
document.addEventListener("DOMContentLoaded", function () {
    const mensaje = document.querySelector('.mensaje')
    const opcion1 = document.getElementById('opcion1')
    const opcion2 = document.getElementById('opcion2')
    const mensaje1 = document.getElementById('mensaje1')
    const mensaje2 = document.getElementById('mensaje2')

    opcion1.addEventListener('click', () => {
        mensaje1.style.display = 'block'
        opcion2.style.display = 'none'
    })

    opcion2.addEventListener('click', () => {
        mensaje2.style.display = 'block'
        opcion1.style.display = 'none'
    })
})


// Abrir y cerrar teléfono
document.addEventListener("DOMContentLoaded", function () {
    const btnEnviar = document.querySelector(".btnIn")
    const telefonoContainer = document.getElementById("container-telefono")
    const botonCerrar = document.getElementById("cerrarTel")
    const btnContacto = document.querySelector(".btnContacto")

    telefonoContainer.style.display = "none";


    btnEnviar.addEventListener("click", function () {
        telefonoContainer.style.display = "block"

    })

    btnContacto.addEventListener("click", function () {
        telefonoContainer.style.display = "block"
    })

    botonCerrar.addEventListener("click", function () {
        telefonoContainer.style.display = "none"
    })
})

document.addEventListener("DOMContentLoaded", function() {
    const palabra = document.querySelector(".ape")
    const texto = palabra.textContent
    palabra.textContent = ""
    const palabra2 = document.querySelector(".nom")
    const texto2 = palabra2.textContent
    palabra2.textContent = ""
    

    for (let i = 0; i < texto.length; i++) {
        const span = document.createElement("span")
        span.textContent = texto.charAt(i)
        span.style.animation = `aparecer 0.5s ${i * 0.5}s forwards`;
        palabra.appendChild(span)
    }

    for (let i = 0; i < texto2.length; i++) {
        const span = document.createElement("span")
        span.textContent = texto2.charAt(i)
        span.style.animation = `aparecer 0.5s ${i * 0.5}s forwards`;
        palabra2.appendChild(span)
    }
})


