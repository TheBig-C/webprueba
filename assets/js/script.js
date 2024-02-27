'use strict';

// Selecciona el elemento del overlay, el botón de apertura del menú, el navbar y el botón de cierre del menú.
const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

// Crea un array con los elementos relevantes para el menú de navegación.
const navElems = [overlay, navOpenBtn, navCloseBtn];

// Agrega un evento de clic a cada elemento del menú de navegación.
for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener("click", function () {
    // Alterna la clase "active" en el navbar y el overlay al hacer clic en cualquier elemento del menú.
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}
document.addEventListener("DOMContentLoaded", function () {
  // Obtener el elemento del enlace del carrito
  const carritoLink = document.querySelector(".navbar-link[href='assets/html/formulario.html']");

  // Verificar si el enlace del carrito existe
  if (carritoLink) {
    // Agregar un evento de clic al enlace del carrito
    carritoLink.addEventListener("click", function (event) {
      // Evitar que el enlace redireccione
      event.preventDefault();

      // Crear un elemento de audio
      const audio = new Audio("./sounds/clic.mp3");

      // Reproducir el sonido
      audio.play();
      
      // Redirigir al usuario después de reproducir el sonido
      setTimeout(() => {
        window.location.href = carritoLink.getAttribute("href");
      }, 1000); // Puedes ajustar el tiempo según tus necesidades
    });
  }
});
function descargarImagen() {
  // Ruta de la imagen que deseas descargar
  var imagenURL = "../images/ticket.png";

  // Crear un elemento de enlace temporal
  var enlace = document.createElement('a');
  enlace.href = imagenURL;

  // Establecer el atributo de descarga y simular el clic en el enlace
  enlace.download = 'nombre_de_archivo.png';
  enlace.click();
}
document.addEventListener('DOMContentLoaded', function () {
  const productosLink = document.getElementById('productos-link');
  const submenu = document.getElementById('submenu');

  productosLink.addEventListener('click', function (event) {
    event.preventDefault();
    if (submenu.style.display === 'block') {
      submenu.style.display = 'none';
    } else {
      submenu.style.display = 'block';
    }
  });
});
