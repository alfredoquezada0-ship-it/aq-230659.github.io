// archivo de javascript para la pagina de la UNPHU

// modo oscuro
var boton = document.getElementById('darkModeToggle')

// si el usuario ya habia activado el modo oscuro antes lo aplico
var guardado = localStorage.getItem('unphu-dark')
if (guardado == 'true') {
    document.body.classList.add('dark-mode')
    boton.innerHTML = '<i class="bi bi-sun-fill me-1"></i> Modo Claro'
}

// cuando el usuario hace clic en el boton
boton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode')

    // verifico si el modo oscuro esta activado o no
    if (document.body.classList.contains('dark-mode')) {
        boton.innerHTML = '<i class="bi bi-sun-fill me-1"></i> Modo Claro'
        localStorage.setItem('unphu-dark', 'true')
    } else {
        boton.innerHTML = '<i class="bi bi-moon-stars-fill me-1"></i> Modo Oscuro'
        localStorage.setItem('unphu-dark', 'false')
    }
})

// inicializo los popovers de bootstrap
document.querySelectorAll('[data-bs-toggle="popover"]').forEach(function(el) {
    new bootstrap.Popover(el)
})

// inicializo los tooltips de bootstrap
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function(el) {
    new bootstrap.Tooltip(el)
})

// alerta de admision
var verAnuncioBtn = document.getElementById('verAnuncioBtn')
if (verAnuncioBtn) {
    verAnuncioBtn.addEventListener('click', function() {
        document.getElementById('admisionAlert').classList.remove('d-none')
        window.scrollTo(0, 0)
    })
}

// alerta de exito en el formulario de contacto
var enviarBtn = document.getElementById('enviarMensajeBtn')
if (enviarBtn) {
    enviarBtn.addEventListener('click', function() {
        document.getElementById('successAlert').classList.remove('d-none')
        window.scrollTo(0, 0)
    })
}

// funcion para el modal de carreras
function setCarrera(nombre, duracion, salario, requisito) {
    document.getElementById('carreraModalTitle').textContent = 'Info: ' + nombre
    document.getElementById('carreraInfo').innerHTML =
        '<div><i class="bi bi-mortarboard-fill text-success me-2"></i><strong>Carrera:</strong> ' + nombre + '</div>' +
        '<div><i class="bi bi-clock text-success me-2"></i><strong>Duración:</strong> ' + duracion + '</div>' +
        '<div><i class="bi bi-currency-dollar text-success me-2"></i><strong>Salario:</strong> ' + salario + '</div>' +
        '<div><i class="bi bi-clipboard-check text-success me-2"></i><strong>Requisito:</strong> ' + requisito + '</div>'
}

// funcion para ver la noticia completa en el modal
function verNoticia(titulo, contenido) {
    document.getElementById('noticiaTitulo').textContent = titulo
    document.getElementById('noticiaContenido').textContent = contenido
}

// funcion para filtrar noticias por categoria
function filtrar(categoria) {
    var articulos = document.querySelectorAll('.articulo-item')
    var sinResultados = document.getElementById('sin-resultados')
    var contador = 0

    // recorro todos los articulos
    articulos.forEach(function(articulo) {
        if (categoria == 'todas' || articulo.getAttribute('data-categoria') == categoria) {
            articulo.style.display = 'block'
            contador++
        } else {
            articulo.style.display = 'none'
        }
    })

    // muestro mensaje si no hay resultados
    if (contador == 0) {
        sinResultados.classList.remove('d-none')
    } else {
        sinResultados.classList.add('d-none')
    }

    // cambio el estilo del boton activo
    document.querySelectorAll('[id^="btn-"]').forEach(function(btn) {
        btn.classList.remove('btn-unphu')
        btn.classList.add('btn-outline-success')
    })
    var btnActivo = document.getElementById('btn-' + categoria)
    if (btnActivo) {
        btnActivo.classList.remove('btn-outline-success')
        btnActivo.classList.add('btn-unphu')
    }
}