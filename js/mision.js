// Obtén todas las flechas de preguntas
const arrowIcons = document.querySelectorAll(".questions__arrow");

// Itera a través de las flechas
arrowIcons.forEach((arrowIcon) => {
    arrowIcon.addEventListener("click", () => {
        // Encuentra el elemento "questions__show" más cercano a la flecha actual
        const showContent = arrowIcon.closest(".questions__answer").querySelector(".questions__show");

        // Si el contenido está oculto, muéstralo y rota la flecha hacia abajo
        if (showContent.style.display === "none" || !showContent.style.display) {
            showContent.style.display = "block";
            arrowIcon.style.transform = "rotate(180deg)";
        } else {
            // Si el contenido está visible, ocúltalo y rota la flecha hacia arriba
            showContent.style.display = "none";
            arrowIcon.style.transform = "rotate(0deg)";
        }
    });
});


