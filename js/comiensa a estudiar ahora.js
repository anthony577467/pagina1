// Selecciona todas las imágenes con la clase "zoomable"
const zoomableImages = document.querySelectorAll('.zoomable');

// Agrega un manejador de eventos para el evento "mouseover" (pasar el cursor por encima)
zoomableImages.forEach(image => {
    image.addEventListener('mouseover', function() {
        image.style.transform = 'scale(1.2)'; // Cambia el tamaño a 1.2 (puedes ajustar el valor según tus preferencias)
        image.style.transition = 'transform 0.2s'; // Agrega una transición suave
    });

    // Agrega un manejador de eventos para el evento "mouseout" (sacar el cursor)
    image.addEventListener('mouseout', function() {
        image.style.transform = 'scale(1)'; // Vuelve al tamaño original
        image.style.transition = 'transform 0.2s'; // Agrega una transición suave
    });
});
