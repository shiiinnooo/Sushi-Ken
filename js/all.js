const homeSwiper = new Swiper('.home-swiper', {
  autoplay: {
    delay: 3000,
  },
  speed: 500,
  loop: true,
  effect: 'fade',
});

const menuSwiper = new Swiper('.menu-swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
  speed: 500,
  loop: true,
  effect: 'fade',
});