// Por ahora no es necesario JS, pero aquí puedes controlar futuras interacciones como galería, lightbox, etc.
console.log("Sitio cargado correctamente.");

const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let currentIndex = 0;

const updateCarousel = () => {
  const width = track.clientWidth;
  track.style.transform = `translateX(-${currentIndex * width}px)`;
};

nextBtn.addEventListener('click', () => {
  const items = document.querySelectorAll('.carousel-item');
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  const items = document.querySelectorAll('.carousel-item');
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

const btn = document.getElementById('langBtn');
  let isSpanish = true;

  btn.addEventListener('click', () => {
    isSpanish = !isSpanish;
    btn.textContent = isSpanish ? 'EN' : 'ES';

    // Aquí podrías activar funciones para traducir el contenido
    console.log("Idioma actual:", isSpanish ? "Español" : "Inglés");
  });

window.addEventListener('resize', updateCarousel);

