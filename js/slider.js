// Отримати контейнер для слайдів
const swiperWrapper = document.querySelector('.swiper-wrapper');

// Кількість слайдів, які потрібно додати (повторити)
const numberOfSlidesToRepeat = 4; // Наприклад, додати ще 10 слайдів

// Дублювання слайдів
for (let i = 0; i < numberOfSlidesToRepeat; i++) {
  swiperWrapper.innerHTML += swiperWrapper.innerHTML;
}

// Ініціалізація Swiper
let swiperCards = new Swiper('.card__content', {
  loop: true,
  spaceBetween: 30,
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    600: {
      slidesPerView: 3,
    },
    968: {
      slidesPerView: 5,
    },
  },
});
