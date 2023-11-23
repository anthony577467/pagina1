// Obtén todos los elementos "VER MAS" dentro del segundo "price__element"
const verMasButtonsMision = document.querySelectorAll(".price__element--best .price__cta.ver-mas");

// Itera a través de los botones "VER MAS" dentro del segundo "price__element"
verMasButtonsMision.forEach((button) => {
    button.addEventListener("click", (event) => {
        // Evita el comportamiento predeterminado del enlace
        event.preventDefault();

        // Encuentra el elemento "hidden-content" más cercano al botón actual
        const hiddenContent = button.nextElementSibling;

        // Encuentra el "price__element" que contiene el botón
        const priceElement = button.closest(".price__element--best");

        // Encuentra todos los elementos "hidden-content" en otros "price__element--best"
        const otherHiddenContents = document.querySelectorAll(".price__element--best .hidden-content");

        // Oculta todos los otros elementos "hidden-content" en el segundo "price__element--best"
        otherHiddenContents.forEach((otherHiddenContent) => {
            otherHiddenContent.style.display = "none";
        });

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


