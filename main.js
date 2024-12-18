const header = document.querySelector('header');

// Slider
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 4000,
  },
  // grabCursor: true,
  effect: 'creative',
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ['100%', 0, 0],
    },
  },
});

// Offset contents after fixed header
const offsetHeader = document.getElementById('offset-header');
offsetHeader.style.height = `${header.offsetHeight}px`;

// Change color of header on page scroll
/* window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('header-color');
  } else {
    header.classList.remove('header-color');
  }
}); */
