const mapContainer = document.getElementById("map-container");

mapContainer.addEventListener("mouseover", () => {
    mapContainer.style.transform = "translateX(30px)"; // Mover 30px a la derecha al pasar el mouse por encima
});

mapContainer.addEventListener("mouseout", () => {
    mapContainer.style.transform = "translateX(0)"; // Volver a la posición original cuando se quita el mouse
});

