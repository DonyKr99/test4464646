const swiper = new Swiper('.swiper', {
  // Optional parameters
  speed: 2000,
  slidesPerView: 3,
  direction: 'horizontal',
  loop: true,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    300: {
      slidesPerView: 1
    },
    600: {
      slidesPerView: 1
    },
    900: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 3
    }
  }
});
