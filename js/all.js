new WOW().init();

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

const checkboxMenu = document.querySelector('.checkbox');
const menuItemBlock = document.querySelector('.menu-items');
const menuItems = document.querySelectorAll('.menu-items li');
const html = document.querySelector('html');
checkboxMenu.addEventListener('change', () => {
  if (checkboxMenu.checked) {
    html.style.height = '100vh';
    html.style.overflowY = 'hidden';
    menuItemBlock.style.transform = 'translateY(0)';
  } else {
    html.style.height = '600vh';
    html.style.overflowY = 'visible';
    menuItemBlock.style.transform = 'translateY(-100%)';
  } 
});
menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    console.log(item, 'click');
    const html = document.querySelector('html');
    html.style.height = '600vh';
    html.style.overflowY = 'visible';
    menuItemBlock.style.transform = 'translateY(-100%)';
    checkboxMenu.checked = false;
  })
})
