const sliderContainer = document.querySelector('.slider-container');
const slides = sliderContainer.querySelectorAll('.slide');
const cycleButton = document.querySelector('.cycle-button');

let currentSlideIndex = 0;

// Show the first slide by default
slides[currentSlideIndex].style.display = 'block';

cycleButton.addEventListener('click', () => {
  slides[currentSlideIndex].style.display = 'none';

  setTimeout(() => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;

    for (let i = 0; i < slides.length; i++) {
      if (i === currentSlideIndex) {
        slides[i].style.display = 'block';
      } else {
        slides[i].style.display = 'none';
      }
    }
  }, 500); // adjust the timeout value to match the fade-out duration
});