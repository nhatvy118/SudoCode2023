let currentSlide = 0;

function nextSlide() {
  if (currentSlide < 2) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  updateCarousel();
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = 2;
  }
  updateCarousel();
}

function updateCarousel() {
  const carousel = document.querySelector('.carousel');
  const newTransformValue = -currentSlide * 100 + '%';
  carousel.style.transform = 'translateX(' + newTransformValue + ')';
}
