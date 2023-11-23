document.addEventListener('DOMContentLoaded', function () {
  const track = document.getElementById('carouselTrack');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  const items = document.querySelectorAll('.carousel-item');
  const itemWidth = items[0].offsetWidth;

  let index = 0;
  let intervalId;

  prevButton.addEventListener('click', function () {
    index = (index > 0) ? index - 1 : items.length - 1;
    updateCarousel();
  });

  nextButton.addEventListener('click', function () {
    index = (index < items.length - 1) ? index + 1 : 0;
    updateCarousel();
  });

  function updateCarousel() {
    const newPosition = -index * itemWidth;
    track.style.transform = `translateX(${newPosition}px)`;
  }

  function startCarousel() {
    intervalId = setInterval(function () {
      index = (index < items.length - 1) ? index + 1 : 0;
      updateCarousel();
    }, 3000); // Cambiado a 5000 milisegundos (5 segundos)
  }

  function stopCarousel() {
    clearInterval(intervalId);
  }

  // Inicia el carrusel automáticamente
  startCarousel();

  // Detiene el carrusel cuando el mouse entra en el carrusel
  track.addEventListener('mouseenter', stopCarousel);

  // Reanuda el carrusel cuando el mouse sale del carrusel
  track.addEventListener('mouseleave', startCarousel);
});

