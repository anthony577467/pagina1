// Obtén todos los elementos "VER MAS"
const verMasButtons = document.querySelectorAll(".price__cta");

// Itera a través de los botones "VER MAS"
verMasButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        // Evita el comportamiento predeterminado del enlace
        event.preventDefault();

        // Encuentra el elemento "hidden-content" más cercano al botón actual
        const hiddenContent = button.previousElementSibling;

        // Si el contenido oculto actual está oculto, muéstralo y oculta el botón "VER MAS"
        if (hiddenContent.style.display === "none") {
            hiddenContent.style.display = "block";
            button.style.display = "none";
        } else {
            // Si el contenido oculto actual está visible, ocúltalo y muestra el botón "VER MAS"
            hiddenContent.style.display = "none";
            button.style.display = "inline";
        }
    });
});

