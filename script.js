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
    console.log("hi");
  const carousel = document.querySelector('.carousel');
  const newTransformValue = -currentSlide * 100 + '%';
  carousel.style.transform = 'translateX(' + newTransformValue + ')';
}

document.querySelector('.signup-link').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior
  window.location.href = 'signup.html'; // Redirect to the sign-up page
});

document.querySelector('.login-link').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior
  window.location.href = 'login.html'; // Redirect to the sign-up page
});