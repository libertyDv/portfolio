

const proyectos = [
    {
        titulo: "App gatos API",
        enlace: "https://github.com/libertyDv/App-Api-gatos",
        tecnologias: "kotlin",
        tipo: "App móvil",
        descripcion: ` Aplicación desarrollada basada en la API "The Cat Api". 
            Se compone de una navegación a través de distintos fragments con funcionalidades variadas:
            - Listado de razas con buscador incluido.
            - Pantalla donde se muestran los detalles de cada raza.
            - Poder realizar votos a las razas deseadas.
            - Listado de las razas añadidas.
            
            `
    },
    {
        titulo: "Portfolio",
        enlace: "https://www.ejemplo.com/proyecto2",
        tecnologias: "HTML, CSS, Javascript",
        tipo: "Página Web",
        descripcion: `Portfolio personal creado con el fin de mostrar y destacar habilidades y proyectos.
            Desarrollado con HTML, CSS y JavaScript, este sitio web representa una presentación interactiva y 
            atractiva de mi trabajo.
            Incluye una variedad de proyectos realizados e información detallada sobre habilidades, así como también un diseño y navegación intuitivos para los visitantes.
            `
    },
    {
        titulo: "Tienda Wordpress",
        tecnologias: "HTML, CSS, Javascript",
        tipo: "Página Web",
        descripcion: `Portfolio personal creado con el fin de mostrar y destacar habilidades y proyectos.
            Desarrollado con HTML, CSS y JavaScript, este sitio web representa una presentación interactiva y 
            atractiva de mi trabajo.
            Incluye una variedad de proyectos realizados e información detallada sobre habilidades, así como también un diseño y navegación intuitivos para los visitantes.
            `
    },
    {
        titulo: "Calculadora",
        enlace: "https://github.com/libertyDv/Calculadora-Swift",
        tecnologias: "Swift",
        tipo: "App móvil",
        descripcion: ` Aplicación basada en una calculadora, pudiendo realizar distintas operaciones y usar la memoria. El objetivo de este proyecto ha sido familiarizarme
         con el lenguaje y practicar con algo real.
            `
    }
]

// Ventana emergente detalles
document.addEventListener("DOMContentLoaded", function () {
    var botonDetalles = document.getElementById("btnDetalles")
    var botonDetalles2 = document.getElementById("btnDetalles2")
    var botonDetalles3 = document.getElementById("btnDetalles3")
    var botonDetalles4 = document.getElementById("btnDetalles4")
    var ventanaEmergente = document.getElementById("miPopup")
    var botonCerrar = document.getElementById("cerrarPopup")

    var proyectoSeleccionado = false

    botonDetalles.addEventListener("click", function () {
        mostrarInfoProyecto(1)
        ventanaEmergente.style.display = "block"
        proyectoSeleccionado = true
    })

    botonDetalles2.addEventListener("click", function () {
        mostrarInfoProyecto(2)
        ventanaEmergente.style.display = "block"
        proyectoSeleccionado = true
    })


    botonDetalles4.addEventListener("click", function () {
        mostrarInfoProyecto(4)
        ventanaEmergente.style.display = "block"
        proyectoSeleccionado = true
    })

    botonCerrar.addEventListener("click", function () {
        ventanaEmergente.style.display = "none"
        proyectoSeleccionado = false
    })

    window.addEventListener("click", function (event) {
        if (event.target === ventanaEmergente) {
            ventanaEmergente.style.display = "none"
            proyectoSeleccionado = false
        }
    })

    botonDetalles3.addEventListener("click", function () {
        var popup = document.getElementById("popupWord");
        popup.style.display = "block";
    })

    document.getElementById("cerrarPopup2").addEventListener("click", function () {
        var popup = document.getElementById("popupWord");
        popup.style.display = "none";
    })


    // Para mostrar toda la información de cada proyecto
    function mostrarInfoProyecto(numeroProyecto) {
        const proyectoActual = proyectos[numeroProyecto - 1]
        document.getElementById("tituloProyecto").innerText = proyectoActual.titulo

        const enlaceElement = document.getElementById("enlaceProyecto")
        enlaceElement.innerText = proyectoActual.enlace
        if (proyectoActual.enlace) {
            const enlace = document.createElement('a')
            enlace.href = proyectoActual.enlace
            enlace.textContent = 'Ver proyecto'
            enlaceElement.innerHTML = ''
            enlaceElement.appendChild(enlace)
        } else {
            enlaceElement.textContent = 'No disponible'
        }
        document.getElementById("tecnologiasProyecto").innerText = proyectoActual.tecnologias
        document.getElementById("tipoProyecto").innerText = proyectoActual.tipo
        document.getElementById("descripcionProyecto").innerText = proyectoActual.descripcion

    }

    if (!proyectoSeleccionado) {
        ventanaEmergente.style.display = "none"
    }
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
    const opcion1 = document.getElementById('opcion1')
    const opcion2 = document.getElementById('opcion2')

    telefonoContainer.style.display = "none"

    btnEnviar.addEventListener("click", function () {
        telefonoContainer.style.display = "block"
        hacerAnimacion()
    })

    btnContacto.addEventListener("click", function () {
        telefonoContainer.style.display = "block"
        hacerAnimacion()
    })

    botonCerrar.addEventListener("click", function () {
        telefonoContainer.style.display = "none"
    })

    function hacerAnimacion() {

        setTimeout(function () {
            opcion1.style.opacity = '1'
        }, 600)

        setTimeout(function () {
            opcion2.style.opacity = '1'
        }, 1200)

    }
})

// animación de inicio
document.addEventListener("DOMContentLoaded", function () {
    const palabra = document.querySelector(".ape")
    const texto = palabra.textContent
    palabra.textContent = ""
    const palabra2 = document.querySelector(".nom")
    const texto2 = palabra2.textContent
    palabra2.textContent = ""

    for (let i = 0; i < texto.length; i++) {
        const span = document.createElement("span")
        span.textContent = texto.charAt(i)
        span.style.animation = `aparecer 0.5s ${i * 0.5}s forwards`
        palabra.appendChild(span)
    }

    for (let i = 0; i < texto2.length; i++) {
        const span = document.createElement("span")
        span.textContent = texto2.charAt(i)
        span.style.animation = `aparecer 0.5s ${i * 0.5}s forwards`
        palabra2.appendChild(span)
    }
})

// Función para carousel
$(document).ready(function () {
    $('.carousel').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    })
})
