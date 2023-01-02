// Obtener todos los botones de "Más información"
var botones = document.querySelectorAll('.boton');

// Agregar el evento click a cada botón
botones.forEach(function(boton) {
  boton.addEventListener('click', function() {
    var informacion = this.nextElementSibling;
    if (informacion.style.display === 'block') {
      informacion.style.display = 'none';
    } else {
      informacion.style.display = 'block';
    }
  });
});