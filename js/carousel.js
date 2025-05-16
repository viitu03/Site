const track     = document.querySelector('.carousel-track');
const items     = Array.from(track.children);
const prevBtn   = document.querySelector('.arrow.prev');
const nextBtn   = document.querySelector('.arrow.next');
const windowDiv = document.querySelector('.carousel-window');
let currentIndex = 0;

function setItemSizes() {
  const w = windowDiv.clientWidth;
  const h = windowDiv.clientHeight;
  const slideW = w + 1;    // AQUI o +1px mágico

  items.forEach(item => {
    item.style.width  = `${slideW}px`;
    item.style.height = `${h}px`;
  });
  updateCarousel();
}

function updateCarousel() {
  const slideW = windowDiv.clientWidth + 1;
  const offset = slideW * currentIndex;
  track.style.transform = `translate3d(-${offset}px,0,0)`;
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

window.addEventListener('load',  setItemSizes);
window.addEventListener('resize', setItemSizes);
