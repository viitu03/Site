const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const prevBtn = document.querySelector('.arrow.prev');
const nextBtn = document.querySelector('.arrow.next');
const carouselWindow = document.querySelector('.carousel-window');

let currentIndex = 0;

function updateCarousel() {
  const itemWidth = carouselWindow.offsetWidth;
  track.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1.00) % items.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1.00 + items.length) % items.length;
  updateCarousel();
});

window.addEventListener('load', updateCarousel);
window.addEventListener('resize', updateCarousel);